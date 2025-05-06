<template>
  <div>
    <h1>Game: {{ gameId }}</h1>
    <div v-if="gameData">
      <p><strong>Player 1:</strong> {{ gameData.player1.username }}</p>
      <p><strong>Player 2:</strong> {{ gameData.player2.username }}</p>
      <p><strong>Current Turn:</strong> {{ gameData.currentTurn }}</p>

      <!-- Chess Board -->
      <ChessBoard :gameData="gameData" :gameId="gameId" />
    </div>

    <div v-else>
      <p>Loading game...</p>
    </div>
  </div>
</template>

<script>
import { db } from '../../js/firebaseConfig';
import { ref as dbRef, set, get, onValue, child, update } from 'firebase/database';
import ChessBoard from '../../components/ChessBoard.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'GamePage',
  components: { ChessBoard },

  data() {
    return {
      gameId: '',
      gameData: null,
      handSize: 5
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
        return;
      }

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
      });

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
};
</script>
