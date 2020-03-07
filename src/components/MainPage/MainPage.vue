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
.Left{
  background-color: #000;
  height: 100%;
  width: 69%;
  float:left;
}

.Right{
  background-color: salmon;
  height: 100%;
  width: 31%;
  float:left;
  position: relative;
}

#Navbar {
  margin-left: 80px;
}

#person_1{
  content:url('../../assets/person/person_1.jpg');
  width:54%;
  height:36.7%;
  position: absolute;
}

#person_2{
  content:url('../../assets/person/person_2.jpg');
  width:46%;
  height:36.7%;
  position: absolute;
  right:0;
}
</style>