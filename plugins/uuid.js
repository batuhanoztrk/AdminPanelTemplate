import Vue from "vue";
import {nanoid} from "nanoid";

Vue.prototype.$uuid = () => {
  return nanoid()
};
