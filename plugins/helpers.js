import Vue from 'vue'
import { slugify } from 'slugify'
import ucwords from 'ucwords'

String.prototype.ucwords = function () {
  return ucwords(this)
}

Vue.prototype.$isNumber = function (evt) {
  evt = evt ? evt : window.event
  const charCode = evt.which ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    evt.preventDefault()
  } else {
    return true
  }
}

Vue.prototype.$isEmail = function (email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

Vue.prototype.$isURL = function (url) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(url)
}

Vue.prototype.$slugify = slugify

String.prototype.strimwidth = function (len = 250) {
  if (this.length > len) {
    return this.slice(0, len) + '...'
  }
  return this
}

Vue.prototype.$pickTextColorBasedOnBgColorAdvanced = function (
  bgColor,
  lightColor = '#fff',
  darkColor = '#000'
) {
  var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
  var r = parseInt(color.substring(0, 2), 16) // hexToR
  var g = parseInt(color.substring(2, 4), 16) // hexToG
  var b = parseInt(color.substring(4, 6), 16) // hexToB
  var uicolors = [r / 255, g / 255, b / 255]
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92
    }
    return Math.pow((col + 0.055) / 1.055, 2.4)
  })
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
  return L > 0.179 ? darkColor : lightColor
}
