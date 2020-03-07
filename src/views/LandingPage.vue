<template>
  <div id="LandingPage">
    <div id="MainPage">
      <Navbar id="Navbar" v-bind:NavbarList="NavbarList"></Navbar>
    </div>
    <div id="AboutMePage"></div>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";

export default {
  name: "LandingPage",
  components: {
    Navbar
  },
  data() {
    return {
      NavbarList: [
        {
          id: 1,
          title: "Home"
        },
        {
          id: 2,
          title: "About us"
        }
      ]
    };
  }
};
</script>

<style scoped>
#MainPage {
  background-color: #000;
  height: 100vh;
}
#AboutMePage {
  background-color: red;
  height: 100vh;
}
#Navbar {
  margin-left: 80px;
}
</style>