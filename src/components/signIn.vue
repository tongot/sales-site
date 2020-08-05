<template>
  <div>
    <div class="row col-12 mt-5 offset-md-4">
      <div class="card p-2 col-md-4">
        <transition name="fade">
          <div class="alert alert-warning" v-if="get_error != ''">{{ get_error }}</div>
        </transition>
        <label class="label" for="email">Email</label>
        <input type="text" class="form-control" id="email" v-model="user.email" />
        <label class="label" for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="user.password" />
        <div class="mt-4">
          <button
            class="btn btn-primary float-right"
            type="button"
            @click="submitUser()"
            v-loading:[label]="this.$store.state.loading"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    label: "Sign in",
    errors: "",
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(["signIn"]),
    submitUser() {
      if (this.user.password == null || this.user.password == "") {
        this.errors = "Please provide password";
        return;
      } else if (this.user.email == null || this.user.email == "") {
        this.errors = "Please provide email or username";
        return;
      } else {
        this.signIn(this.user);
      }
    },
  },
  computed: mapGetters(["get_error"]),
};
</script>
<style>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
