<template>
  <header class="app-bar">
    <nav class="app-bar__nav">
      <h1 class="app-bar__title">Card Chess</h1>
      <ul class="app-bar__menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
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
  padding: 1rem;
}

.app-bar__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-bar__title {
  font-size: 1.5rem;
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