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
      :placeholder="placeholder"
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
      selected: null,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    label: String,
    htmlLabel: String,
    value: [Object, String, Number],
    reduce: {
      type: Function,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    selected(newVal, oldVal) {
      this.$emit("input", newVal);
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selected = newVal;
      }
    },
  },
  created() {
    this.selected = this.value;
  },
};
</script>

<style >
.vs__search {
  min-height: 28px;
}

.vs__search::placeholder {
  color: #6E757C;
}

.vs__search::-moz-placeholder {
  color: #6E757C;
  opacity: 1;
}

.vs__search:-ms-input-placeholder {
  color: #6E757C;
}

.vs__search::-webkit-input-placeholder {
  color: #6E757C;
}
</style>
