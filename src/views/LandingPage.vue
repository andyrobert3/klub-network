<template>
  <div id="LandingPage">
    <MainPage id="MainPage" v-bind:NavbarList="NavbarList"></MainPage>
    <LoginModal />
    <AboutMePage id="AboutMePage"></AboutMePage>
  </div>
</template>

<script>
import MainPage from "../components/MainPage/MainPage";
import AboutMePage from "../components/AboutMePage/AboutMePage";
import LoginModal from "../components/LoginModal/LoginModal";

export default {
  name: "LandingPage",
  components: {
    MainPage,
    AboutMePage,
    LoginModal
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
  height: 100vh;
}
#AboutMePage {
  background-color: red;
  height: 100vh;
}
</style>