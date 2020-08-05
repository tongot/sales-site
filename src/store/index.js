import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: '',
  },
  getters: {
    get_error: (state) => state.error,
  },
  actions: {
    signIn({ commit }, user) {
      this.state.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(
          (data) => {
            const loggedUser = {
              id: data.user.uid,
              email: data.user.email,
            };
            commit('set_user', loggedUser);
            this.state.loading = false;
            router.push('/');
          },
          (error) => {
            console.log(error.code);
            if (error.code == 'auth/user-not-found') {
              commit('set_error_login', 'Incorrect username or password');
            }
            this.state.loading = false;
          }
        );
    },
  },

  mutations: {
    set_user: (state, user) => (state.user = user),
    set_error_login: (state, error) => (state.error = error),
  },
  modules: {},
});
