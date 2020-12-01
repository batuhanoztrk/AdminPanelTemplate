<template>
  <div class="form-group">
    <label :class="required ? 'required' : null" :for="id">{{
      htmlLabel
    }}</label>
    <v-select
      :reduce="reduce"
      :label="label"
      v-model="selected"
      :id="id"
      :options="options"
    >
      <div slot="no-options">{{ $t("selectBox.sorry") }}</div>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  data() {
    return {
      id: this.$uuid(),
      selected: null
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: []
    },
    label: String,
    htmlLabel: String,
    value: [Object, String, Number],
    reduce: {
      type: Function
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selected(newVal, oldVal) {
      this.$emit("input", newVal);
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selected = newVal;
      }
    }
  },
  created() {
    this.selected = this.value;
  }
};
</script>

<style scoped></style>
