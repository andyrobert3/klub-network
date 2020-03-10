<template>
  <div>
    <div class="Left MainPage">
      <div id="circle_1" class="BlueCircle Small"></div>
      <div id="circle_2" class="RedCircle Medium"></div>
      <div id="circle_3" class="BlueCircle Large"></div>
      <Navbar id="Navbar" v-bind:NavbarList="NavbarList"></Navbar>
      <div id="MainPageSlogan">
        <p id="Slogan_1">
          Meet people, Build
          <br />connections, and Repeat
        </p>
        <p id="Slogan_2">
          The first indonesian networking platform to meet
          <br />like-minded professionals
        </p>
        <button id="JoinUsButton">Join Us</button>
        <p id="SignIn">Already registered? sign in</p>
      </div>
    </div>
    <div class="Right MainPage">
      <div id="person_1"></div>
      <div id="person_2"></div>
      <div id="person_3"></div>
      <div id="person_4"></div>
      <div id="person_5"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/MainPage/Navbar";

export default {
  name: "MainPage",
  components: {
    Navbar
  },
  props: ["NavbarList"]
};
</script>

<style lang="scss">
.MainPage {
  position: relative;
}

#circle_1 {
  right: calc(100vw * (1 / 16));
  top: calc(100vw * (1 / 17));
}

#circle_2 {
  left: calc(100vw * (1 / 16));
  top: calc(100vw * (3 / 17));
}

#circle_3 {
  right: calc(100vw * (1 / 16) * -1);
  bottom: calc(100vw * (1 / 16) * -1);
}

#JoinUsButton {
  width: 150px;
  height: 41px;
  font-size: 25px;
  color: $WhiteColor;
  background-color: $PurpleColor;
  border-radius: 5px;
  border: none;
  font-weight: 600;
}

#Slogan_1 {
  font-family: "AvenirMedium";
  font-size: 36px;
  margin: 0;
  font-weight: bold;
}

#Slogan_2 {
  font-size: 16px;
}

#MainPageSlogan {
  margin-top: calc(100vh * (1 / 4));
  text-align: center;
}

.Left {
  background-color: #000;
  height: 100%;
  width: calc(100vw - 375px);
  float: left;
  z-index: -1;
}

.Right {
  background-color: salmon;
  height: 100%;
  width: 375px;
  right: 0px;
  position: absolute;
}

#MainPageSlogan {
  color: $WhiteColor;
  /* top:25%;
  left:20%;
  position: absolute; */
  /* position: absolute; */
  text-align: center;
}

#Navbar {
  margin-left: 80px;
}

#person_1 {
  content: url("../../assets/person/person_1.jpg");
  /* height: 241px; */
  height: 33.33%;
  width: 45%;
  object-fit: cover;
  float: left;
}

#person_2 {
  content: url("../../assets/person/person_2.jpg");
  /* height: 241px; */
  height: 33.33%;
  /* width: 214px; */
  width: 55%;
  object-fit: cover;
  float: left;
  /* background-position-x: 300;   */
}

#person_3 {
  content: url("../../assets/person/person_3.jpg");
  /* height: 261px; */
  height: 33.33%;
  width: 50%;
  object-fit: cover;
  float: left;
}

#person_4 {
  content: url("../../assets/person/person_4.jpg");
  /* height: 261px; */
  height: 33.33%;
  width: 50%;
  object-fit: cover;
  float: left;
}

#person_5 {
  content: url("../../assets/person/person_5.jpg");
  /* height: calc(100vh - 502px); */
  height: 33.33%;
  width: 100%;
  object-fit: cover;
  float: left;
}
</style>