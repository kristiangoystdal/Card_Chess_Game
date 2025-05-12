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
        <ChessBoard v-if="gameData" :gameData="gameData" :gameId="gameId" />
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
import { db } from '../../js/firebaseConfig';
import { ref as dbRef, set, get, onValue, child, update } from 'firebase/database';
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

export default {
  name: 'GamePage',
  components: { ChessBoard },

  data() {
    return {
      gameId: '',
      gameData: null,
      handSize: 5,
      cardTypes: [
        { type: 'pawn', color: 'black', image: card_pawn_black },
        { type: 'pawn', color: 'white', image: card_pawn_white },
        { type: 'knight', color: 'black', image: card_knight_black },
        { type: 'knight', color: 'white', image: card_knight_white },
        { type: 'bishop', color: 'black', image: card_bishop_black },
        { type: 'bishop', color: 'white', image: card_bishop_white },
        { type: 'rook', color: 'black', image: card_rook_black },
        { type: 'rook', color: 'white', image: card_rook_white },
        { type: 'queen', color: 'black', image: card_queen_black },
        { type: 'queen', color: 'white', image: card_queen_white },
        { type: 'king', color: 'black', image: card_king_black },
        { type: 'king', color: 'white', image: card_king_white },
        { type: 'wild', color: 'black', image: card_wild_black },
        { type: 'wild', color: 'white', image: card_wild_white },
      ],
    };
  },
  async created() {
    const route = useRoute();
    this.gameId = route.params.gameId;

    await this.checkOrCreateGame(); // ✅ NEW
    this.listenToGame();
  },
  methods: {
    async checkOrCreateGame() {
      const dbRootRef = dbRef(db);
      const gameSnapshot = await get(child(dbRootRef, `games/${this.gameId}`));
      const gameData = gameSnapshot.val();

      if (gameData.board) {
        this.gameData = gameData;
        console.log('Game already exists, loading existing game...');
        return;
      }
      console.log('Game does not exist, creating a new one...');

      const player1Snapshot = await get(child(dbRootRef, `games/${this.gameId}/player1`));
      const player1 = player1Snapshot.val() || null;

      const player2Snapshot = await get(child(dbRootRef, `games/${this.gameId}/player2`));
      const player2 = player2Snapshot.val() || null;

      let startingTurn = "player1"; // default
      if (player1 && player1.color) {
        startingTurn = (player1.color === "white") ? "player1" : "player2";
      }

      const initialBoard = this.generateStartingBoard(); // You can improve this later

      const initialDeck = this.generateStartingDeck(); // You can improve this later

      const player1Hand = [];
      const player2Hand = [];
      for (let i = 0; i < this.handSize; i++) {
        player1Hand.push(initialDeck.pop());
        player2Hand.push(initialDeck.pop());
      }
      player1.hand = player1Hand;
      player2.hand = player2Hand;

      const gameRef = dbRef(db, `games/${this.gameId}`);
      await update(gameRef, {
        deck: initialDeck,
        board: initialBoard,
        currentTurn: startingTurn,
        turnNumber: 0,
        player1: player1,
        player2: player2,
        mode: 'multiplayer',
      });

      this.gameData = {
        player1: player1,
        player2: player2,
        currentTurn: startingTurn,
        board: initialBoard,
        deck: initialDeck,
        turnNumber: 0,
        mode: 'multiplayer',
      };

      this.gameId = this.gameId;

      console.log('Game created successfully with white to start.');

    },

    listenToGame() {
      const gameRef = dbRef(db, `games/${this.gameId}`);

      onValue(gameRef, (snapshot) => {
        if (snapshot.exists()) {
          this.gameData = snapshot.val();

          // Check if the game has a deck and if it's empty
          // If the deck is empty, generate a new one
          if (this.gameData.deck && this.gameData.deck.length < 1) {
            this.gameData.deck = this.generateStartingDeck(); // Refill the deck if empty
            const gameRef = dbRef(db, `games/${this.gameId}`);
            update(gameRef, {
              deck: this.gameData.deck,
            });
          }

          // Check the player hands and refill if necessary
          const updates = {};

          if (this.gameData.player1.hand.length < this.handSize) {
            const newCards = this.gameData.deck.splice(-1 * (this.handSize - this.gameData.player1.hand.length));
            this.gameData.player1.hand.push(...newCards);
            updates[`player1/hand`] = this.gameData.player1.hand;
          }

          if (this.gameData.player2.hand.length < this.handSize) {
            const newCards = this.gameData.deck.splice(-1 * (this.handSize - this.gameData.player2.hand.length));
            this.gameData.player2.hand.push(...newCards);
            updates[`player2/hand`] = this.gameData.player2.hand;
          }

          if (Object.keys(updates).length > 0) {
            updates.deck = this.gameData.deck;
            update(gameRef, updates);
          }
        } else {
          console.error('Game does not exist.');
        }
      });
    },
    generateStartingBoard() {
      const board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ({ color: 'blank', type: 'blank' })));

      const pieces = [
        { type: "rook", col: 0 },
        { type: "knight", col: 1 },
        { type: "bishop", col: 2 },
        { type: "queen", col: 3 },
        { type: "king", col: 4 },
        { type: "bishop", col: 5 },
        { type: "knight", col: 6 },
        { type: "rook", col: 7 },
      ];

      // White pieces
      pieces.forEach((piece) => {
        board[0][piece.col] = { color: 'white', type: piece.type };
        board[1][piece.col] = { color: 'white', type: 'pawn' };
      });

      // Black pieces
      pieces.forEach((piece) => {
        board[7][piece.col] = { color: 'black', type: piece.type };
        board[6][piece.col] = { color: 'black', type: 'pawn' };
      });

      return board;
    },
    generateStartingDeck() {
      const deck = [];

      const cards = [
        { type: "pawn", numberOfCards: 16 },
        { type: "knight", numberOfCards: 10 },
        { type: "bishop", numberOfCards: 10 },
        { type: "rook", numberOfCards: 8 },
        { type: "queen", numberOfCards: 6 },
        { type: "king", numberOfCards: 6 },
        { type: "wild", numberOfCards: 4 }
      ];

      cards.forEach((card) => {
        for (let i = 0; i < card.numberOfCards; i++) {
          deck.push(card.type);
        }
      });

      // Shuffle the deck
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }

      return deck;
    }
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