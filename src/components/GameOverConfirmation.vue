<template>
  <v-dialog v-model="isGameOver" max-width="400">
    <v-card class="game-over-card">
      <v-card-title class="text-h5 font-weight-bold text-center">
        {{ winnerString }}
      </v-card-title>

      <v-card-text class="text-center">
        <v-row>
          <v-col class="text-center">
            <v-img v-if="player1.avatar !== null" :src="player1?.avatar" :alt="player1?.username || 'Player 1'" />
            <v-img v-else :src="blank_avatar" :alt="player1?.username || 'Player 1'" />
            <p>{{ player1?.username || 'Player 1' }}</p>
          </v-col>
          <v-col class="text-center">
            <v-img v-if="player2.avatar !== null" :src="player2?.avatar" :alt="player2?.username || 'Player 2'" />
            <v-img v-else :src="blank_avatar" :alt="player2?.username || 'Player 2'" />
            <p>{{ player2?.username || 'Player 2' }}</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="leaveGame">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>



<script>

import blank_avatar from '../assets/images/blank_user.png';

export default {
  name: 'GameOverConfirmation',
  props: {
    gameWinner: {
      type: String,
      default: null
    },
    player1: {
      type: Object,
      required: true
    },
    player2: {
      type: Object,
      required: true
    }
  },
  computed: {
    isGameOver() {
      return this.gameWinner !== null;
    },
    winnerString() {
      switch (this.gameWinner) {
        case "white": return "White Wins!";
        case "black": return "Black Wins!";
        case "draw": return "It's a Draw!";
        default: return "";
      }
    }
  },
  methods: {
    leaveGame() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.game-over-card {
  padding: 24px;
}
</style>
