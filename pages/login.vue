<template>
  <div class="card shadow-lg border-0 rounded-lg mt-5">
    <div class="card-header">
      <h3 class="text-center font-weight-light my-4">{{ $t("auth.login") }}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="login">
        <div class="form-group">
          <label class="small mb-1" for="inputEmailAddress">{{
            $t("auth.username")
          }}</label>
          <input
            class="form-control py-4"
            id="inputEmailAddress"
            type="text"
            required
            v-model="username"
            :placeholder="$t('auth.usernamePlaceholder')"
          />
        </div>
        <div class="form-group">
          <label class="small mb-1" for="inputPassword">{{
            $t("auth.password")
          }}</label>
          <input
            class="form-control py-4"
            id="inputPassword"
            type="password"
            :placeholder="$t('auth.passwordPlaceholder')"
            v-model="password"
            required
          />
        </div>
        <div
          class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
        >
          <button
            class="small forget-pass"
            type="button"
            @click="$router.push(localePath('/forget-password'))"
          >
            {{ $t("auth.forgetPassword") }}
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            style="margin: 0 0 0 auto"
          >
            {{ $t("auth.login") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "authentication",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    const token = this.$storage.getCookie("token");

    if (token !== "" && token) {
      this.$store.commit("setToken", token);
      this.$router.push("/");
    }
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        const data = await this.$axios.$post("/auth/login", {
          username: this.username,
          password: this.password
        });

        if (data.error === 0) {
          this.$storage.setCookie("token", data.token);
          this.$store.commit("setToken", data.token);

          this.$router.push(this.localePath("/"));
        } else {
          this.$toast.error(this.$t("auth.error"));
        }
      } else this.$toast.error(this.$t("warning"));
    }
  }
};
</script>

<style scoped>
.forget-pass {
  background: transparent;
  border: none;
}
.forget-pass:focus {
  outline: none;
}
</style>
