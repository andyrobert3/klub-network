<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/AvenirLTStd-Roman.otf");
}

@font-face {
  font-family: "AvenirMedium";
  src: url("./assets/fonts/AvenirLTStd-Medium.otf");
}
.BlueCircle{
  background-color: #0500FF;
  opacity: 20%;
  border-radius: 50%;
  position:absolute;
  z-index: -1;
}

.RedCircle{
  background-color: #ff008b;
  opacity: 20%;
  border-radius: 50%;
  position:absolute;
  z-index: -1;
}

.Small{
  width: calc(100vw *(1/8));
  height: calc(100vw *(1/8));
}

.Medium{
  width: calc(100vw *(3/15));
  height: calc(100vw *(3/15));
}

.Large{
  width: calc(100vw *(3/12));
  height: calc(100vw *(3/12));
}

body{
  font-family: "Avenir";
  margin:0px;
}
</style>
