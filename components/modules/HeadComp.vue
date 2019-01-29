<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/works">Works</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'headComp'
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.nav > li + li {
  margin-left: 24px;
}

ul {
  padding: 0;
  list-style: none;
}

.nav a {
  text-decoration: none;
  color: black;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
