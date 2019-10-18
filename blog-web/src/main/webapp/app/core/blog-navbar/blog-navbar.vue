<template>
  <nav class="horisontal">
    <ul>
      <b-nav-item to="/" exact>
        <span>Home</span>
      </b-nav-item>
      <b-nav-item to="/about" exact>
        <span>About</span>
      </b-nav-item>
      <b-nav-item v-if="authenticated" to="/account/settings" exact>
        <span slot="button-content" class="navbar-dropdown-menu">
          <span>Account</span>
        </span>
      </b-nav-item>
      <b-nav-item v-if="authenticated" v-on:click="logout()" id="logout">
        <span>Sign out</span>
      </b-nav-item>
      <b-nav-item v-if="!authenticated" v-on:click="openLogin()" id="login">
        <span>Login</span>
      </b-nav-item>
    </ul>
  </nav>
</template>
<script lang="ts" src="./blog-navbar.component.ts">
</script>
<style scoped>
nav.horisontal {
  top: 0px;
  width: 100%;
  position: sticky;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

nav.horisontal ul {
  list-style: none;
  text-align: center;
  padding: 0 auto;
  margin: 0px;
}

nav.horisontal li {
  display: inline-block;
}

nav.horisontal a {
  margin-right: 10px;
  margin-left: 10px;
  letter-spacing: 0.2rem;
  line-height: 4rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
}

nav.horisontal a.active {
  color: #03a87c;
  border-bottom: 1px solid #03a87c;
}

@media screen and (max-width: 640px) {
  nav.horisontal a {
    line-height: 3rem;
    font-size: 80%;
  }
}
</style>