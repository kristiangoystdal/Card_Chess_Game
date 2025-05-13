<template>
  <v-row>
    <v-col v-if="gameData" cols="3">
      <br>
      <v-row>
        <v-col class="d-flex justify-center">
          <h2>My Hand</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row v-for="(card, index) in myCardHand" :key="index">
            <v-img :src="cardTypes.find(c => c.type === card && c.color === (myColor || 'white')).image" height="100"
              width="100"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <!-- Chess Board -->
    <v-col class="game-board">
      <v-row class="chess-board-container">
        <ChessBoard :gameData="gameData" :gameId="gameId" @gameUpdated="endPlayerTurn" />
      </v-row>
    </v-col>

    <!-- Options and chat -->
    <v-col v-if="gameData" cols="3" class="game-mangement">
      <br>
      <v-row>
        <v-col class="d-flex justify-center">
          <h2>Options</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <h4>(Placeholders for now)</h4>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-btn>
          Offer Draw
        </v-btn>
        <v-btn>
          Resign
        </v-btn>
        <v-btn>
          Surrender
        </v-btn>
      </v-row>
      <br><br>
      <v-row>
        Chat messages will be displayed here.
        <v-col cols="12">
          <v-text-field label="Chat is currently disabled... Stay tuned" outlined></v-text-field>
          <v-btn color="primary" :disabled="true">Send</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p><strong>Player 1:</strong> Hello!</p>
          <p><strong>Player 2:</strong> Hi there!</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>

<script>
import ChessBoard from '../../components/ChessBoard.vue';
import { useRoute } from 'vue-router';

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

import { Game as JSChessGame } from "js-chess-engine";


export default {
  name: 'GamePage',
  components: { ChessBoard },

  data() {
    return {
      gameId: '',
      gameData: null,
      handSize: 5,
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
      }
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
      };
      const player2 = {
        userId: "opponent",
        username: 'Opponent',
        color: player2Color,
        hand: [],
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
        if (playerData && playerData.hand.length < this.handSize) {
          const newCard = this.drawCard();
          playerData.hand.push(newCard);
        }
        this.gameData[player] = playerData;
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
        return;
      }

      // Choose randomly
      const moveChoice = legalMoves[Math.floor(Math.random() * legalMoves.length)];

      // Make the move
      game.move(moveChoice.from, moveChoice.to);

      // Update AI hand
      const usedIndex = hand.indexOf(moveChoice.piece.toLowerCase());
      if (usedIndex !== -1) {
        hand.splice(usedIndex, 1);
      } else {
        const wildIndex = hand.indexOf('w');
        if (wildIndex !== -1) {
          hand.splice(wildIndex, 1);
        }
      }

      this.updatePlayerHand('player2');

      this.gameData.player2.hand = hand;
      this.gameData.currentTurn = 'player1';
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

      this.makeAIMove();
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
  margin-right: 20px;
}
</style>