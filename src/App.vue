<template>
  <div id="app">
    <div id="main-bar">
      <div id="nav">
        <router-link to="/contact_us">Contact Us</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <router-view />
    <div id="blocks">
      <div id="frame_1" />
      <div id="frame_2" />
      <div id="frame_3" />
      <div id="frame_4" />
    </div>
  </div>
</template>

<style>
#main-bar {
  position: absolute;
  width: 922px;
  height: 1024px;
  left: 0px;
  top: 0px;
  font-family: Avenir;
  background: #000000;
}

#frame_1 {
  /* Frame 1 */

  position: absolute;
  width: 49px;
  height: 143px;
  left: 922px;
  top: 1px;

  background: #a9f7fb;
}

#frame_2 {
  /* Rectangle 17 */

  position: absolute;
  width: 164px;
  height: 202px;
  left: 971px;
  top: 0px;

  background: #0529c8;
}

#frame_3 {
  /* Rectangle 18 */

  position: absolute;
  width: 72px;
  height: 241px;
  left: 1135px;
  top: 1px;

  background: #ffffff;
}

#frame_4 {
  /* Frame 2 */

  position: absolute;
  width: 234px;
  height: 121px;
  left: 1207px;
  top: 0px;

  background: #6e12e2;
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
