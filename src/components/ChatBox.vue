<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <h2>Chat</h2>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field label="Chat is currently disabled... Stay tuned" outlined></v-text-field>
    <!-- <v-btn color="primary" :disabled="true">Send</v-btn> -->
    </v-col>
  </v-row>
  <!-- <v-row>
    <v-col cols="12">
      <p><strong>Player 1:</strong> Hello!</p>
      <p><strong>Player 2:</strong> Hi there!</p>
    </v-col> -->
  <!-- </v-row> -->
</template>

<script>
export default {
  name: "ChatBox",
  data() {
    return {};
  },
  methods: {},
};

</script>

<style scoped>


</style>