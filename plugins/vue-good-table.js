import Vue from "vue";
import VueGoodTablePlugin from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

Vue.prototype.$dateFilter = (_data, filter) => {
  if (!_data) return false;

  const d = new Date(_data),
    month = new Intl.DateTimeFormat("tr", { month: "2-digit" }).format(d),
    year = new Intl.DateTimeFormat("tr", { year: "numeric" }).format(d),
    day = new Intl.DateTimeFormat("tr", { day: "2-digit" }).format(d);

  filter = filter.split("/");

  switch (filter.length) {
    case 1:
      if (day.includes(filter[0])) return true;
      break;
    case 2:
      if (day.includes(filter[0]) && month.includes(filter[1])) return true;
    case 3:
      if (
        day.includes(filter[0]) &&
        month.includes(filter[1]) &&
        year.includes(filter[2])
      )
        return true;
    default:
      return false;
  }
};

Vue.use(VueGoodTablePlugin);
