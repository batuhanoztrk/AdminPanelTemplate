export default function({ $axios, app, store, redirect, $storage }) {
  $axios.onRequest(config => {
    if (store.getters.getToken) {
      config.headers.common["Authorization"] =
        "Bearer " + store.getters.getToken;
    }
  });

  $axios.onError(error => {
    try {
      if (error.response.status === 401) {
        store.commit("setToken", "");
        $storage.setCookie("token", "");
        redirect(app.localePath("/login"));
      }
    } catch (e) {
      console.error(e);
    }
  });
}
