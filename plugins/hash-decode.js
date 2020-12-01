import Vue from "vue";
import jwtDecode from "jwt-decode";
import md5 from "blueimp-md5";
import sha1 from "js-sha1";

Vue.prototype.$jwtDec = token => {
  return jwtDecode(token);
};

Vue.prototype.$md5 = val => {
  return md5(val);
};

Vue.prototype.$sha1 = val => {
  return sha1(val);
};
