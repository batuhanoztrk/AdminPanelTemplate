export default function({ store, $storage, redirect, app }) {
  const token = $storage.getCookie("token");

  if (token !== "" && token) {
    store.commit("setToken", token);
  }

  if (!store.getters.getToken) {
    redirect(app.localePath("/login"));
  }
}
