import Vue from "vue";
const { v4: uuidv4 } = require("uuid");

Vue.prototype.$uuid = () => {
  return uuidv4();
};
