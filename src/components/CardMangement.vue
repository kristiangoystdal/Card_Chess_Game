<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <h2>My Hand</h2>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="4" v-for="(card, index) in myCardHand" :key="index">
      <v-img :src="cardTypes.find(c => c.type === card && c.color === (myColor || 'white')).image"
        @click="selectCard(index)" :style="{
          border: index === this.selectedCardIndex ? '2px solid red' : 'none',
          borderRadius: '20px',
        }">
      </v-img>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center card-actions flex-column">
    <v-btn color="warning" @click="redrawCard" :disabled="selectedCardIndex === null">
      Redraw Card
    </v-btn>
    <v-btn color="error" @click="passTurn()">
      Pass Turn
    </v-btn>
  </v-row>
</template>

<script>

export default {
  name: "CardManagement",
  emits: ['redrawCard', 'passTurn'],
  props: {
    myCardHand: {
      type: Array,
      required: true,
    },
    myColor: {
      type: String,
      required: true,
    },
    cardTypes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCardIndex: null,
    };
  },
  methods: {
    selectCard(index) {
      if (this.selectedCardIndex === index) {
        this.selectedCardIndex = null;
      } else {
        this.selectedCardIndex = index;
      }
    },
    redrawCard() {
      this.$emit("redraw-card", this.selectedCardIndex);
      this.selectedCardIndex = null;
    },
    passTurn() {
      this.$emit("pass-turn");
    },
  },
};

</script>

<style scoped>
.card-mangement {
  margin-left: 40px;
}

.card-mangement .v-img {
  width: 100%;
  height: auto;
}

.card-mangement .v-col {
  padding: 10px;
}

.card-actions {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-actions .v-btn {
  margin: 5px 0;
  width: 50%;
}
</style>