<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <nuxt-link class="navbar-brand" to="/">Admin Panel Template</nuxt-link>
    <button
      class="btn btn-link btn-sm order-1 order-lg-0"
      @click.prevent="toggleSideBar"
      id="sidebarToggle"
      href="#"
    >
      <i class="fas fa-bars"></i>
    </button>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="userDropdown"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          ><i class="fas fa-user fa-fw"></i
        ></a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="userDropdown"
        >
          <a
            class="dropdown-item"
            href="#"
            @click.prevent="$router.push(localePath('/edit/password'))"
            >{{ $t("auth.changePassword") }}</a
          >
          <a class="dropdown-item" href="#" @click.prevent="logout">{{
            $t("auth.logout")
          }}</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toggleSideBar() {
      $("body").toggleClass("sb-sidenav-toggled");
    },
    logout() {
      this.$storage.removeCookie("token");
      this.$store.commit("setToken", null);
      this.$router.push(this.localePath("/login"));
    }
  }
};
</script>

<style scoped></style>
