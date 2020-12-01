import Vue from "vue";
import Countries from "country-region-data/data";

Countries.push({
  countryName: "Northern Cyprus",
  regions: [
    {
      name: "Gazimağusa",
      shortCode: "KKTTC-GM"
    }, {
      name: "Girne",
      shortCode: "KKTTC-G"
    }, {
      name: "İskele",
      shortCode: "KKTTC-I"
    }, {
      name: "Lefke",
      shortCode: "KKTTC-L"
    }, {
      name: "Lefkoşa",
      shortCode: "KKTTC-LK"
    }
  ],
  countryShortCode: "KKTC"
});

Vue.prototype.$countries = Countries;
