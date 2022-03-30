import Vue from 'vue'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import tr from 'vee-validate/dist/locale/tr'

export default ({ app }) => {
  let i18n = app.i18n
  Vue.use(VeeValidate, {
    i18n,
    dictionary: {
      tr: {
        messages: tr.messages,
      },
      en: {
        messages: en.messages,
      },
    },
  })
}
