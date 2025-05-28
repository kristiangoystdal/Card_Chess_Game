<template>
  <v-row>
    <!-- Player Hand -->
    <v-col v-if="gameData" cols="3" class="card-mangement">
      <CardMangement :myCardHand="myCardHand" :myColor="myColor" :cardTypes="cardTypes" @redraw-card="redrawCard"
        @pass-turn="passTurn" />
    </v-col>

    <!-- Chess Board -->
    <v-col class="game-board">
      <v-row class="chess-board-container">
        <ChessBoard :gameData="gameData" :gameId="gameId" @gameUpdated="endPlayerTurn" />
      </v-row>
    </v-col>

    <!-- Options and chat -->
    <v-col v-if="gameData" cols="3" class="game-mangement">
      <GameOptions :offeredDraw="this.gameData.offeredDraw" @offer-draw="offerDraw" @resign="resign" />
      <br><br>
      <ChatBox />
    </v-col>
  </v-row>

  <GameOverConfirmation v-if="gameWinner" :gameWinner="gameWinner" :player1="this.gameData.player1"
    :player2="this.gameData.player2" @close="leaveGame" />

</template>

<script>
import { useRoute } from 'vue-router';
import { Game as JSChessGame } from "js-chess-engine";

import card_pawn_black from '../../assets/images/cards/card_p_b.png';
import card_pawn_white from '../../assets/images/cards/card_p_w.png';
import card_knight_black from '../../assets/images/cards/card_kn_b.png';
import card_knight_white from '../../assets/images/cards/card_kn_w.png';
import card_bishop_black from '../../assets/images/cards/card_b_b.png';
import card_bishop_white from '../../assets/images/cards/card_b_w.png';
import card_rook_black from '../../assets/images/cards/card_r_b.png';
import card_rook_white from '../../assets/images/cards/card_r_w.png';
import card_queen_black from '../../assets/images/cards/card_q_b.png';
import card_queen_white from '../../assets/images/cards/card_q_w.png';
import card_king_black from '../../assets/images/cards/card_k_b.png';
import card_king_white from '../../assets/images/cards/card_k_w.png';
import card_wild_black from '../../assets/images/cards/card_wild_b.png';
import card_wild_white from '../../assets/images/cards/card_wild_w.png';

export default {
  name: 'GamePage',
  data() {
    return {
      gameId: '',
      gameData: null,
      handSize: 6,
      cardTypes: [
        { type: 'p', color: 'black', image: card_pawn_black },
        { type: 'p', color: 'white', image: card_pawn_white },
        { type: 'n', color: 'black', image: card_knight_black },
        { type: 'n', color: 'white', image: card_knight_white },
        { type: 'b', color: 'black', image: card_bishop_black },
        { type: 'b', color: 'white', image: card_bishop_white },
        { type: 'r', color: 'black', image: card_rook_black },
        { type: 'r', color: 'white', image: card_rook_white },
        { type: 'q', color: 'black', image: card_queen_black },
        { type: 'q', color: 'white', image: card_queen_white },
        { type: 'k', color: 'black', image: card_king_black },
        { type: 'k', color: 'white', image: card_king_white },
        { type: 'w', color: 'black', image: card_wild_black },
        { type: 'w', color: 'white', image: card_wild_white },
      ],
      cardProbabilities: {
        p: 27,  // Pawn
        n: 17,  // Knight
        b: 17,  // Bishop
        r: 13,  // Rook
        q: 10,  // Queen
        k: 10,  // King
        w: 6    // Wild
      },
      selectedCardIndex: null,
    };
  },
  async created() {
    const route = useRoute();
    this.gameId = route.params.gameId;

    await this.createGame();
  },
  methods: {
    async createGame() {

      // Randomly assign colors to players
      const colors = ['white', 'black'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const player1Color = colors[randomIndex];
      const player2Color = colors[(randomIndex + 1) % colors.length];

      // Generate the players
      const player1 = {
        userId: localStorage.getItem('userId') || "player1",
        username: localStorage.getItem('username') || 'Player 1',
        color: player1Color,
        hand: [],
        avatar: null,
      };
      const player2 = {
        userId: "opponent",
        username: 'Opponent',
        color: player2Color,
        hand: [],
        avatar: null,
      };

      // Generate the player hands
      for (let i = 0; i < this.handSize; i++) {
        player1.hand.push(this.drawCard());
        player2.hand.push(this.drawCard());
      }

      // Generate the initial game
      const game = new JSChessGame();

      this.gameData = {
        player1: player1,
        player2: player2,
        game: game,
        createdAt: Date.now(),
        mode: 'singleplayer',
        offeredDraw: false,
      };
      this.gameId = "gameId"

      if (player1.color === "black") {
        this.makeAIMove();
      }
    },
    drawCard() {
      const sumOfProbabilities = Object.values(this.cardProbabilities).reduce((a, b) => a + b, 0);

      const randomValue = Math.floor(Math.random() * sumOfProbabilities);
      let cumulativeProbability = 0;
      let cardType = null;
      for (const [type, probability] of Object.entries(this.cardProbabilities)) {
        cumulativeProbability += probability;
        if (randomValue < cumulativeProbability) {
          cardType = type;
          break;
        }
      }
      if (!cardType) {
        console.error("No card type found for random value:", randomValue);
        return;
      }

      return cardType;
    },
    updatePlayerHand(player) {
      if (this.gameData) {
        const playerData = this.gameData[player];
        // If the player has less than the hand size, draw a new card
        if (playerData && playerData.hand.length < this.handSize) {
          const newCard = this.drawCard();
          playerData.hand.push(newCard);
          this.gameData = { ...this.gameData, [player]: playerData };
        }
      }
    },
    makeAIMove() {
      const aiPlayer = this.gameData.player2;
      const hand = aiPlayer.hand;
      const game = this.gameData.game;

      const allMoves = game.moves();
      const legalMoves = [];

      // Collect legal moves that match AI's hand
      for (const from in allMoves) {
        for (const to of allMoves[from]) {
          const piece = game.board.configuration.pieces[from];

          if (!piece) continue;

          const pieceType = piece.toLowerCase(); // 'r', 'p', etc.
          if (hand.includes(pieceType) || hand.includes('w')) {
            legalMoves.push({ from, to, piece });
          }
        }
      }

      if (legalMoves.length === 0) {
        console.warn("AI has no legal moves it can make with its current hand.");

        // Remove a random card from AI's hand and redraw
        const randomCardIndex = Math.floor(Math.random() * hand.length);
        hand.splice(randomCardIndex, 1);
        this.gameData.player2.hand = hand;

        this.updatePlayerHand('player2');

        console.warn("Passing turn to player 1.");
        this.passTurn();

        return;
      }

      // Choose randomly
      const moveChoice = legalMoves[Math.floor(Math.random() * legalMoves.length)];

      // Make the move
      game.move(moveChoice.from, moveChoice.to);

      // Update AI hand
      let usedIndex = hand.indexOf(moveChoice.piece.toLowerCase());
      if (usedIndex !== -1) {
        hand.splice(usedIndex, 1);
      } else {
        usedIndex = hand.indexOf('w');
        if (usedIndex !== -1) {
          hand.splice(usedIndex, 1);
        }
      }

      this.updatePlayerHand('player2');

      this.gameData.player2.hand = hand;
      this.gameData.currentTurn = 'player1';
      this.gameData.game = game;
    },
    getLegalMoves(piece, row, col, board) {
      const moves = [];

      const isEnemy = (r, c) => board[r][c].color !== piece.color && board[r][c].type !== "blank";
      const isBlank = (r, c) => board[r][c].type === "blank";

      const inBounds = (r, c) => r >= 0 && r <= 7 && c >= 0 && c <= 7;

      if (piece.type === "pawn") {
        const dir = piece.color === "white" ? 1 : -1;
        if (inBounds(row + dir, col) && isBlank(row + dir, col)) {
          moves.push({ row: row + dir, col });
        }
        if (inBounds(row + dir, col - 1) && isEnemy(row + dir, col - 1)) {
          moves.push({ row: row + dir, col: col - 1 });
        }
        if (inBounds(row + dir, col + 1) && isEnemy(row + dir, col + 1)) {
          moves.push({ row: row + dir, col: col + 1 });
        }
      }

      if (piece.type === "king") {
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1], [0, 1],
          [1, -1], [1, 0], [1, 1],
        ];
        for (const [dr, dc] of directions) {
          const nr = row + dr, nc = col + dc;
          if (inBounds(nr, nc) && (isBlank(nr, nc) || isEnemy(nr, nc))) {
            moves.push({ row: nr, col: nc });
          }
        }
      }

      if (piece.type === "knight") {
        const knightMoves = [
          [-2, -1], [-1, -2], [1, -2], [2, -1],
          [2, 1], [1, 2], [-1, 2], [-2, 1],
        ];
        for (const [dr, dc] of knightMoves) {
          const nr = row + dr, nc = col + dc;
          if (inBounds(nr, nc) && (isBlank(nr, nc) || isEnemy(nr, nc))) {
            moves.push({ row: nr, col: nc });
          }
        }
      }

      if (piece.type === "bishop" || piece.type === "rook" || piece.type === "queen") {
        const directions = piece.type === "bishop" ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] :
          piece.type === "rook" ? [[-1, 0], [0, -1], [0, 1], [1, 0]] :
            [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

        for (const [dr, dc] of directions) {
          let nr = row + dr;
          let nc = col + dc;
          while (inBounds(nr, nc)) {
            if (isBlank(nr, nc)) {
              moves.push({ row: nr, col: nc });
            } else if (isEnemy(nr, nc)) {
              moves.push({ row: nr, col: nc });
              break;
            } else {
              break;
            }
            nr += dr;
            nc += dc;
          }
        }
      }

      return moves;
    },
    endPlayerTurn(value) {
      this.gameData.game = value.game;
      this.gameData.player1 = value.player1;
      this.gameData.player2 = value.player2;

      this.updatePlayerHand('player1');

      this.victoryState();
      if (this.gameData.winner) {
        return;
      }

      this.makeAIMove();
      this.victoryState();
    },
    passTurn() {
      this.gameData.game.board.configuration.turn = this.gameData.game.board.configuration.turn === "white" ? "black" : "white";
      if (this.gameData.game.board.configuration.turn !== this.myColor) {
        this.makeAIMove();
        this.victoryState();
      }
    },
    redrawCard(player, index) {
      const hand = this.gameData[player].hand;
      hand.splice(index, 1);
      this.gameData[player].hand = hand;
      this.updatePlayerHand(player);
      this.passTurn();
      this.selectedCardIndex = null;
    },
    selectCard(index) {
      if (this.selectedCardIndex === index) {
        this.selectedCardIndex = null;
      } else {
        this.selectedCardIndex = index;
      }
    },
    offerDraw() {
      this.gameData.offeredDraw = true;
      console.log("Draw offered.");
    },
    appectDraw() {
      this.gameData.winner = "draw";
      console.log("Draw accepted.");
    },
    resign() {
      console.log("Player resigned.");
      this.gameData.winner = this.gameData.game.board.configuration.turn === "white" ? "black" : "white";
    },
    leaveGame() {
      this.$router.push('/');
    },
    victoryState() {
      if (!this.hasBlackKing) {
        this.gameData.winner = "white";
      } else if (!this.hasWhiteKing) {
        this.gameData.winner = "black";
      } else if (this.isDraw) {
        this.gameData.winner = "draw";
      } else {
        this.gameData.winner = null;
      }
    },
  },
  computed: {
    player1Hand() {
      return this.gameData ? this.gameData.player1.hand : [];
    },
    player2Hand() {
      return this.gameData ? this.gameData.player2.hand : [];
    },
    myPlayer() {
      const userId = localStorage.getItem('userId');
      if (userId === this.gameData.player1.userId) {
        return this.gameData.player1;
      } else if (userId === this.gameData.player2.userId) {
        return this.gameData.player2;
      }
      return null;
    },
    myCardHand() {
      return this.myPlayer ? this.myPlayer.hand : null;
    },
    myColor() {
      return this.myPlayer ? this.myPlayer.color : null;
    },
    hasBlackKing() {
      return this.gameData && Object.values(this.gameData.game.board.configuration.pieces).includes('k');
    },
    hasWhiteKing() {
      return this.gameData && Object.values(this.gameData.game.board.configuration.pieces).includes('K');
    },
    onlyKingsLeft() {
      if (this.gameData) {
        const pieces = this.gameData.game.board.configuration.pieces;
        return Object.values(pieces).filter(piece => piece !== 'k' && piece !== 'K').length === 0;
      }
      return false;
    },
    isDraw() {
      if (this.gameData && (
        this.onlyKingsLeft || // Only kings left
        this.gameData.game.board.configuration.halfmove >= 50 || // 50-move rule
        this.gameData.drawAccepted // Draw accepted
      )) {
        return true;
      }
      return false;
    },
    gameWinner() {
      if (this.gameData && this.gameData.winner) {
        return this.gameData.winner;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.chess-board-container {
  width: auto;
  height: 100%;
  /* max-width: 600px;
  min-width: 300px; */
  aspect-ratio: 1;
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}


.border {
  border: 10px solid #ccc;
}

.game-board {
  height: 90vh;
}

.game-mangement {
  margin-right: 30px;
  padding-top: 40px;
}

.card-mangement {
  margin-left: 30px;
  padding-top: 40px;
}

.card-mangement .v-img {
  width: 100%;
  height: auto;
}

.card-mangement .v-col {
  padding: 10px;
}
</style>