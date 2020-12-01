<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">

          <div class="sb-sidenav-menu-heading">{{ $t("sidebar.core") }}</div>

          <nuxt-link exact class="nav-link" :to="localePath('/')">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            {{ $t("sidebar.dashboard") }}
          </nuxt-link>


          <div class="sb-sidenav-menu-heading">
            {{ $t("sidebar.interface") }}
          </div>

          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#user"
            aria-expanded="false"
            aria-controls="user"
          >
            {{ $t("sidebar.users") }}
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div class="collapse" id="user">
            <nav class="sb-sidenav-menu-nested nav">
              <nuxt-link class="nav-link" :to="localePath('/users')">{{
                  $t("sidebar.users")
                }}
              </nuxt-link>
            </nav>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>
