<template>
  <div>
    <h1>Game: {{ gameId }}</h1>
    <div v-if="gameData">
      <p><strong>Player 1:</strong> {{ gameData.player1.username }}</p>
      <p><strong>Player 2:</strong> {{ gameData.player2.username }}</p>
      <p><strong>Current Turn:</strong> {{ gameData.currentTurn }}</p>

      <!-- Your chess board -->
      <ChessBoard :gameData="gameData" :gameId="gameId" />
    </div>

    <div v-else>
      <p>Loading game...</p>
    </div>
  </div>
</template>

<script>
import { db } from '../../js/firebaseConfig';
import { ref as dbRef, onValue } from 'firebase/database';
import ChessBoard from '../../components/ChessBoard.vue'; // Import your ChessBoard
import { useRoute } from 'vue-router';

export default {
  name: 'GamePage',
  components: { ChessBoard },

  data() {
    return {
      gameId: '',
      gameData: null,
    };
  },

  created() {
    const route = useRoute();
    this.gameId = route.params.gameId; // Capture :gameId from URL

    this.listenToGame();
  },

  methods: {
    listenToGame() {
      const gameRef = dbRef(db, `games/${this.gameId}`);

      onValue(gameRef, (snapshot) => {
        if (snapshot.exists()) {
          this.gameData = snapshot.val();
        } else {
          console.error('Game does not exist.');
        }
      });
    },
  },
};
</script>
