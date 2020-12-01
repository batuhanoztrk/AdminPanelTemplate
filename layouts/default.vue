<template>
  <div>
    <NavBar />
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <main>
          <nuxt />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",
  middleware: ["auth"]
};
</script>
