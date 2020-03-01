<template>
  <div id="app">
    <div id="nav">
      <router-link to="/contact_us">Contact Us</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: linear-gradient(270deg, #03001e, #7303c0,#ec38bc);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 15s ease infinite;
  -moz-animation: AnimationName 15s ease infinite;
  animation: AnimationName 15s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: aqua;
  padding: 0.5em;
  float: right;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
