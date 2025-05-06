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
      currentBoard: null,
      previousBoard: null,
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
        this.currentBoard = gameData.board;
        return;
      }

      const player1Snapshot = await get(child(dbRootRef, `games/${this.gameId}/player1`));
      const player1 = player1Snapshot.val() || null;

      let startingTurn = "player1"; // default
      if (player1 && player1.color) {
        startingTurn = (player1.color === "white") ? "player1" : "player2";
      }

      const initialBoard = this.generateStartingBoard(); // You can improve this later

      const gameRef = dbRef(db, `games/${this.gameId}`);
      await update(gameRef, {
        board: initialBoard,
        currentTurn: startingTurn,
        turnNumber: 0,
      });

      console.log('Game created successfully with white to start.');

    },

    listenToGame() {
      const gameRef = dbRef(db, `games/${this.gameId}`);

      onValue(gameRef, (snapshot) => {
        if (snapshot.exists()) {
          this.gameData = snapshot.val();
          this.currentBoard = snapshot.val().board;

          this.currentTurn = this.gameData.currentTurn;

          if (this.currentBoard !== this.previousBoard) {
            this.previousBoard = this.currentBoard;
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
  },
};
</script>
