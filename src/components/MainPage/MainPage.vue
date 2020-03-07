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
  width: 100%;
  float:left;
}

.Right{
  background-color: salmon;
  height: 100%;
  width: 320px;
  right:0px;
  z-index: 100;
  position: absolute;
}

#Navbar {
  margin-left: 80px;
}

#person_1{
  content:url('../../assets/person/person_1.jpg');
  height:250px;
  float:left;
}

#person_2{
  content:url('../../assets/person/person_2.jpg');
  height:100px;
  /* float:left; */
}

/* #person_3{
  content:url('../../assets/person/person_3.jpg');
  width:201px;
  position: absolute;
  right:0;
} */

</style>