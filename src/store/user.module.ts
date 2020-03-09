/* eslint-disable no-unused-vars */
import firebaseConfig from "../firebase/firebase";
import firebase from "firebase";

import { FETCH_USER_PROFILE, SET_FIREBASE_USER } from "./actions.type";
import { User } from "../common/types";

const user = {
  state: {
    currentUser: null
  },
  actions: {
    async [FETCH_USER_PROFILE]({ commit }: any, payload: firebase.User) {
      try {
        const userRef = firebaseConfig.usersCollection.doc(payload?.uid);
        const user: User = (await userRef.get()).data() as User;
        if (user) {
          commit(SET_FIREBASE_USER, user);
        } else {
          const newUser = {
            email: payload?.email,
            name: payload?.displayName,
            photoURL: payload?.photoURL
          } as User;

          firebaseConfig.usersCollection.doc(payload?.uid).set(newUser);
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
  mutations: {
    [SET_FIREBASE_USER](state: any, firebaseUser: firebase.User) {
      state.currentUser = firebaseUser;
    }
  }
};

export default user;
