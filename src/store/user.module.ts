import firebase from "../firebase/firebase";
import {
  FETCH_USER_PROFILE,
  FETCHED_USER_FAILED,
  FETCH_CURRENT_USER,
  SET_USER_PROFILE
} from "./actions.type";

const user = {
  state: {
    currentUser: null,
    userProfile: {}
  },
  actions: {
    async [FETCH_USER_PROFILE]({ commit, state }: any) {
      try {
        const result = await firebase.usersCollection
          .doc(state.currentUser.uid)
          .get();
        commit(SET_USER_PROFILE, result.data);
      } catch (err) {
        console.error(err);
        commit(FETCHED_USER_FAILED);
      }
    }
  },
  mutations: {
    [FETCH_CURRENT_USER](state: any, val: any) {
      state.currentUser = val;
    },

    [FETCH_USER_PROFILE](state: any, val: any) {
      state.userProfile = val;
    }
  }
};

export default user;
