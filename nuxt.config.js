export default {
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "AdminPanelTemplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-3.4.1.min.js"
      },
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"
      },
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/tableexport.jquery.plugin@1.10.21/tableExport.min.js"
      },
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js"
      },
      {
        type: "text/javascript",
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/static/css/style.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/axios",
    "~/plugins/vue-good-table",
    "~/plugins/vue-tel-input",
    "~/plugins/countries",
    "~/plugins/vue-multiselect",
    "~/plugins/vue-select",
    "~/plugins/helpers",
    "~/plugins/vuejs-dialog",
    "~/plugins/tinymce-editor",
    "~/plugins/vue-google-maps",
    "~/plugins/vue-emoji-picker",
    "~/plugins/vue-confirm-dialog",
    "~/plugins/vue-number-input",
    "~/plugins/vue-currency-input",
    "~/plugins/vue2-daterange-picker",
    "~/plugins/uuid",
    '~/plugins/v-mask',
    '~/plugins/vee-validate',
    '~/plugins/vue-slick',
    '~/plugins/vue-inner-image-zoom',
    '~/plugins/vue-infinite-loading',
    '~/plugins/vue-lodash',
    '~/plugins/vue-countdown',
    '~plugins/vue-js-modal',
    '~plugins/vue-window-size'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxt/components", "@nuxtjs/vuetify"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/universal-storage",
    "@nuxtjs/moment",
    "nuxt-i18n",
    'nuxt-socket-io'
  ],

  i18n: {
    locales: [
      {
        code: "tr",
        iso: "tr-TR",
        file: "tr.json",
        moment: "tr"
      }
    ],
    defaultLocale: "tr",
    lazy: true,
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "tr"
    }
  },

  moment: {
    locales: ["tr"],
    defaultLocale: "tr"
  },

  toast: {
    position: "bottom-right",
    keepOnHover: true,
    duration: 2000
  },

  axios: {
    host: "127.0.0.1",
    port: 5000,
    https: false
  },
  router: {
    linkActiveClass: "active"
    //base: "/project/panel/"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
