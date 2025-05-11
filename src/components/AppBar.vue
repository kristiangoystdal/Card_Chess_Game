<template>
  <header class="app-bar">
    <nav class="app-bar__nav">
      <div class="app-bar__logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <h1 class="app-bar__title">Card Chess</h1>
      <ul class="app-bar__menu">
        <!-- <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.app-bar {
  background-color: #333;
  color: #fff;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.app-bar__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.app-bar__logo img {
  height: 100%;
  max-height: 8vh;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.app-bar__title {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.app-bar__menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.app-bar__menu a {
  color: #fff;
  text-decoration: none;
}

.app-bar__menu a:hover {
  text-decoration: underline;
}
</style>