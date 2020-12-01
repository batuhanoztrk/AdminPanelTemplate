export default function({ $axios, app, store, redirect, $storage }) {
  $axios.onRequest(config => {
    if (store.getters.getToken) {
      config.headers.common["Authorization"] =
        "Bearer " + store.getters.getToken;
    }
    config.headers.common["x-api-key"] = "6b21bc0c-1cac-445b-9805-4805bbc1da56";
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
