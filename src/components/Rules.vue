<template>
  <v-dialog v-model="showRulesLocal" max-width="800">
    <v-card class="rules-card">
      <v-card-title class="text-h5 font-weight-bold text-center pb-0">
        Game Rules
      </v-card-title>

      <v-card-text>
        <div class="rules-content">
          <p class="intro">
            <strong>Card Chess</strong> is classic chess with a strategic twist!
          </p>

          <v-divider class="my-4" />
          <h3 class="section-header">Cards &amp; Player Hand</h3>
          <p>
            On your turn, you can only move pieces using the cards in your hand.<br />
            Each player has a hand of 6 cards, and you can draw new cards as you play. <br />
            Each chess piece has a matching card that allows you to move that piece.<br />

          </p>
          <p>
            Special <strong>wild cards</strong> grant unique abilities or moves.<br />
            The wild cards are:<br />
          </p>
          <ul>
            <li>Star: Move any piece</li>
            <!-- <li>Swap two of your own pieces</li>
              <li>Swap a card with your opponent</li>
              <li>Move any piece twice</li> -->
          </ul>

          <v-divider class="my-4" />
          <h3 class="section-header">A Typical Turn</h3>
          <p>On your turn there are three main actions you can take:</p>
          <ol>
            <li>Play a card from your hand to move a piece.</li>
            <li>Discard a card and draw a new one.</li>
            <li>Pass your turn without making a move.</li>
          </ol>

          <p>
            If you can not make a legal move, you must pass your turn or swap a card.
          </p>

          <v-divider class="my-4" />
          <h3 class="section-header">Winning the Game</h3>
          <p>
            The game ends when one player captures the other player's king.
          </p>
          <p>
            If the kings are the only pieces left on the board, the game is a draw.<br />
            Otherwise, stalemate or insufficient material is not a possibility.
          </p>

          <v-divider class="my-4" />
        </div>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn variant="tonal" color="error" @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Rules',
  props: {
    showRules: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showRulesLocal() {
      return this.showRules;
    }
  },
}
</script>

<style scoped>
.rules-card {
  max-width: 800px;
  margin: auto;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.rules-content {
  text-align: left;
  font-size: 16px;
  line-height: 1.6;
}

.rules-content .intro {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.section-header {
  font-size: 18px;
  font-weight: 600;
  color: cornflowerblue;
  margin-bottom: 6px;
}

.rules-content p {
  margin: 12px 0;
}

.rules-content ol {
  padding-left: 1.5rem;
  margin: 10px 0 16px 0;
}

.rules-content li {
  margin-bottom: 8px;
}

.rules-content ul {
  margin: 10px 0 16px 0;
  padding-left: 1.5rem;
}
</style>
