<template>
  <div class="container-fluid">
    <h1 class="mt-4 mb-4">{{ $t("auth.changePassword") }}</h1>
    <div class="card mb-4">
      <div class="card-body">
        <form @submit.prevent="editPassword">
          <div class="form-group">
            <label for="last-password">{{ $t("auth.password") }}</label>
            <input
              v-model="lastPassword"
              type="password"
              class="form-control"
              id="last-password"
              :placeholder="$t('auth.lastPasswordPlaceholder')"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">{{ $t("auth.newPassword") }}</label>
            <input
              v-model="data.password"
              type="password"
              class="form-control"
              id="password"
              :placeholder="$t('auth.newPasswordPlaceholder')"
              required
            />
          </div>
          <div class="form-group">
            <label for="re-password">{{ $t("auth.repeatPassword") }}</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="re-password"
              :placeholder="$t('auth.repeatPasswordPlaceholder')"
              required
            />
          </div>

          <button class="btn btn-primary">
            {{ $t("update") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPassword",
  data() {
    return {
      data: {
        password: ""
      },
      password: "",
      lastPassword: ""
    };
  },
  created() {},
  methods: {
    async editPassword() {
    }
  }
};
</script>

<style scoped></style>
