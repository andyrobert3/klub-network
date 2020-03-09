<template>
  <div class="login-modal">
    <div>
      <h1>Login via these platforms</h1>
    </div>
    <div>
      <h2>Your First Step to your network</h2>
    </div>
    <div class="button-container">
      <button class="twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <span class="text">TWITTER</span>
      </button>
    </div>
    <div class="button-container">
      <button class="google" v-on:click="loginViaGoogle">
        <font-awesome-icon :icon="['fab', 'google']" />
        <span class="text">GOOGLE</span>
      </button>
    </div>
    <div class="button-container">
      <button class="facebook">
        <font-awesome-icon :icon="['fab', 'facebook']" />
        <span class="text">FACEBOOK</span>
      </button>
    </div>
  </div>
</template>

<script>
import firebaseConfig from "../../firebase/firebase";
import firebase from "firebase/app";
import { FETCH_USER_PROFILE, SET_USER_PROFILE } from "../../store/actions.type";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faGoogle);

const methods = {
  async loginViaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseConfig.auth.useDeviceLanguage();
    await firebaseConfig.auth.signInWithRedirect(provider);
  }
};

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods,
  async created() {
    try {
      const { user } = await firebaseConfig.auth.getRedirectResult();
      if (user) {
        this.$store.commit(SET_USER_PROFILE, user);
        this.$store.dispatch(FETCH_USER_PROFILE);
        console.log("user credentials", user);
      }
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>
$gray-shade: #c4c4c4;
$twitter-color: #00acee;

.login-modal {
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
}

.text {
  display: inline-block;
  margin-left: 12px;
}

.button-container {
  margin: 16px auto;
}

button {
  width: 250px;
  border-radius: 16px;
  font-weight: bold;
}

.twitter {
  background-color: $twitter-color;
}

.google {
  color: black;
  border: 2px solid $gray-shade;
  background-color: white;
}

.facebook {
  background-color: #3b5998;
}

h1 {
  color: #5433fd;
}

h2 {
  color: #ff008b;
}
</style>
