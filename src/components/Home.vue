<template>
  <v-container class="max-height" fluid>
    <v-row justify="center">
      <v-col md="6" class="text-center">
        <v-row justify="center">
          <h2 class="text-h4 font-weight-bold">
            Singleplayer
          </h2>
        </v-row>
        <v-row justify="center" class="singleplayer-section">
          <v-btn color="primary" large rounded @click="router.push('/game/singleplayer')">
            Play Against Random AI
          </v-btn>
          <v-btn color="warning" large rounded>
            Play Against Easy AI
            <v-tooltip activator="parent" location="end">Coming soon...</v-tooltip>
          </v-btn>
          <v-btn color="success" large rounded>
            Play Against Medium AI
            <v-tooltip activator="parent" location="end">Coming soon...</v-tooltip>
          </v-btn>
          <v-btn color="error" large rounded>
            Play Against Hard AI
            <v-tooltip activator="parent" location="end">Coming soon...</v-tooltip>
          </v-btn>
        </v-row>
      </v-col>

      <v-col md="6" class="text-center">
        <v-row justify="center">
          <h2 class="text-h4 font-weight-bold">
            Multiplayer
          </h2>
        </v-row>
        <v-row justify="center" class="multiplayer-section">
          <div class="mb-4" justify="center">
            <span v-if="joinedQueue" class="text-h6 font-weight-bold">You have joined the queue! Waiting for another
              player</span>
            <span v-else class="text-h6 font-weight-bold">Join the queue to play with other players!</span>
          </div>

          <v-text-field v-if="!joinedQueue" v-model="username" label="Enter your username" outlined class="mb-6" />

          <v-btn v-if="joinedQueue" color="error" large rounded @click="leaveQueue">
            Leave Queue
          </v-btn>
          <v-btn v-else color="primary" large rounded @click="joinQueue" :disabled="true">
            Join Queue
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../js/firebaseConfig';
import { ref as dbRef, push, remove, onDisconnect, get, set, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { useRouter } from 'vue-router'; // Important to handle navigation

export default {
  name: 'MoveCardChess',

  data() {
    return {
      username: '',
      joinedQueue: false,
      userKey: null,
      userId: this.generateRandomId(),
      router: null,
    };
  },

  created() {
    this.router = useRouter(); // Setup router
  },

  methods: {
    async joinQueue() {
      this.joinedQueue = true;
      if (!this.username.trim()) {
        console.error('Username is required');
        alert('Please enter a username.');
        return;
      }

      try {
        const queueRef = dbRef(db, 'queue/');
        const newUserRef = await push(queueRef, {
          userId: this.userId,
          username: this.username.trim(),
          avatar: null,
          joinedAt: Date.now(),
        });

        this.userKey = newUserRef.key;
        this.joinedQueue = true;

        // Store the user ID and username in the local state
        localStorage.setItem('username', this.username.trim());
        localStorage.setItem('userId', this.userId);


        // Set up onDisconnect to auto-remove
        const userRef = dbRef(db, `queue/${this.userKey}`);
        onDisconnect(userRef).remove();

        // Listen for game creation
        this.listenForGame();


        // After joining, try to match players
        this.tryMatchPlayers();

      } catch (error) {
        console.error("Error joining queue:", error);
        alert("Failed to join the queue. Please try again.");
        this.joinedQueue = false;
      }
    },
    generateRandomId() {
      return 'user_' + Math.random().toString(36).substr(2, 9);
    },
    async leaveQueue() {
      if (this.userKey) {
        const userRef = dbRef(db, `queue/${this.userKey}`);
        try {
          await remove(userRef);
          this.joinedQueue = false;
        } catch (error) {
          console.error("Error manually removing user from queue:", error);
        }
      }
    },
    async tryMatchPlayers() {
      const queueRef = dbRef(db, 'queue/');
      const snapshot = await get(queueRef);

      if (snapshot.exists()) {
        const players = Object.entries(snapshot.val());

        if (players.length >= 2) {
          const [player1, player2] = players;

          // Add a color to each player
          player1[1].color = 'white';
          player2[1].color = 'black';

          const gameId = `${Math.random().toString(36).substr(2, 9)}`;
          const gameRef = dbRef(db, `games/${gameId}`);

          await set(gameRef, {
            player1: player1[1],
            player2: player2[1],
            currentTurn: "player1",
            createdAt: Date.now(),
          });

          // Remove both players from queue
          await remove(dbRef(db, `queue/${player1[0]}`));
          await remove(dbRef(db, `queue/${player2[0]}`));

          // console.log(`Created game ${gameId} with ${player1[1].username} and ${player2[1].username}`);

          // If THIS user is one of the two matched players, redirect them to game
          if (player1[0] === this.userKey || player2[0] === this.userKey) {
            this.router.push(`/game/${gameId}`);
          }
        }
      }
    },
    listenForGame() {
      const gamesRef = dbRef(db, 'games/');

      this.listenerOff = onValue(gamesRef, (snapshot) => {
        if (snapshot.exists()) {
          const games = snapshot.val();
          for (const gameId in games) {
            const game = games[gameId];

            if (game.player1?.userId === this.userId || game.player2?.userId === this.userId) {
              this.router.push(`/game/${gameId}`);
              return;
            }
          }
        }
      });
    },
  },

  beforeUnmount() {
    this.leaveQueue();
  },
};
</script>

<style scoped>
.singleplayer-section {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.singleplayer-section .v-btn {
  margin: 5px 0;
  width: 40%;
}

.multiplayer-section {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.multiplayer-section .v-btn {
  margin: 5px 0;
  width: 40%;
}

.multiplayer-section .v-text-field {
  width: 50%;
}

.max-height {
  height: 90vh !important;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
