<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">
        <v-card class="pa-8" elevation="10">
          <v-card-title class="text-h4 font-weight-bold justify-center mb-6">
            Move Card Chess
          </v-card-title>

          <div class="mb-4">
            <span v-if="joinedQueue" class="text-h6 font-weight-bold">You have joined the queue!</span>
            <span v-else class="text-h6 font-weight-bold">Join the queue to play!</span>
          </div>

          <v-text-field v-if="!joinedQueue" v-model="username" label="Enter your username" outlined class="mb-6" />

          <v-card-actions class="justify-center">
            <v-btn :loading="joinedQueue" color="primary" large rounded @click="joinQueue">
              Join Queue
            </v-btn>
          </v-card-actions>
        </v-card>
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

        console.log(`User ${this.username} joined queue with key: ${newUserRef.key}`);

        // Listen for game creation
        this.listenForGame();


        // After joining, try to match players
        this.tryMatchPlayers();

      } catch (error) {
        console.error("Error joining queue:", error);
        alert("Failed to join the queue. Please try again.");
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
          console.log(`User ${this.username} manually removed from queue`);
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
            currentTurn: "player2",
            createdAt: Date.now(),
          });

          // Remove both players from queue
          await remove(dbRef(db, `queue/${player1[0]}`));
          await remove(dbRef(db, `queue/${player2[0]}`));

          console.log(`Created game ${gameId} with ${player1[1].username} and ${player2[1].username}`);

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
            console.log(`Checking game: ${gameId}`);
            const game = games[gameId];

            console.log(`Game details:`, game);
            console.log(`User ID:`, this.userId);
            console.log(`Player 1 ID:`, game.player1?.userId);
            console.log(`Player 2 ID:`, game.player2?.userId);

            if (game.player1?.userId === this.userId || game.player2?.userId === this.userId) {
              console.log(`Found my game: ${gameId}`);
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
