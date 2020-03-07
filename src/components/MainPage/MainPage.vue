<template>
  <div>
    <div class="Left MainPage">
      <Navbar id="Navbar" v-bind:NavbarList="NavbarList"></Navbar>
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

<style scoped>
.Left {
  background-color: #000;
  height: 100%;
  width: 100%;
  float: left;
}

.Right {
  background-color: salmon;
  height: 100%;
  width: 375px;
  right: 0px;
  position: absolute;
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
  width:55%;
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