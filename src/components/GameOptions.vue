<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <h2>Options</h2>
    </v-col>
  </v-row>

  <v-row class="d-flex justify-center game-options">
    <v-btn color="primary" @click="$emit('offer-draw')" :disabled="offeredDraw">
      Offer Draw
    </v-btn>
    <v-btn color="error" @click="$emit('resign')">
      Resign
    </v-btn>
  </v-row>
</template>

<script>

export default {
  name: "GameOptions",
  emits: ["offer-draw", "resign"],
  data() {
    return {};
  },
  props: {
    offeredDraw: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    offerDraw() {
      this.$emit("offer-draw");
    },
    resign() {
      this.$emit("resign");
    },
  },
};
</script>

<style scoped>

.game-options {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}


</style>