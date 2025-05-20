<template>
  <v-app-bar dark app>
    <div class="logo-title">
      <v-img class="logo" src="@/assets/logo.png"></v-img>
      <span class="title">Card Chess</span>
    </div>
    <div class="actions">
      <v-btn text @click="toggleRules">Rules</v-btn>
    </div>
  </v-app-bar>

  <Rules v-model="showRules" @close="toggleRules" />
</template>

<script>
import logo from "../assets/logo.png";

export default {
  name: "AppBar",
  components: {
    logo,
  },
  data() {
    return {
      showRules: false,
    };
  },
  methods: {
    toggleRules() {
      this.showRules = !this.showRules;
    },
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #333;
  color: #fff;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 1rem;;
}

.logo-title {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo{
  width: auto;
  height: 90% !important;
  aspect-ratio: 1;
  margin: 0 10px;
}

.title{
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 20px;
}
</style>