<template>
  <div class="form-group">
    <label
      :class="required || htmlRequired ? 'required' : null"
      v-if="label"
      :for="idName"
      >{{ label }}</label
    >
    <multiselect
      v-model="selectedValue"
      :multiple="multiple"
      :id="idName"
      :data-isvalid="isValid"
      :close-on-select="close"
      :clear-on-select="clear"
      :options="options"
      :track-by="trackBy"
      :label="optionKey"
      :placeholder="placeholder"
      :class="className"
      :select-label="_selectLabel"
      :deselect-label="_deselectLabel"
      :selected-label="_selectedLabel"
    >
      <div slot="noResult">{{ $t("multiSelect.noMatch") }}</div>
      <div slot="noOptions">{{ $t("multiSelect.noOptions") }}</div>
    </multiselect>
  </div>
</template>

<script>
export default {
  name: "MultiSelectBox",
  data() {
    return {
      selectedValue: null,
      idName: "",
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
    className: { type: String, default: "multiselect1" },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    trackBy: { type: String, default: "id" },
    required: { type: Boolean, default: false },
    control: { type: Boolean, default: true },
    optionKey: String,
    returnedOptionKey: { type: String, required: false, default: "id" },
    value: [String, Number, Array],
    id: String,
    multiple: { type: Boolean, default: false },
    clearOnSelect: { type: Boolean, default: undefined },
    closeOnSelect: { type: Boolean, default: undefined },
    selectLabel: String,
    deselectLabel: String,
    selectedLabel: String,
    minimize: { type: Boolean, default: false },
    htmlRequired: { type: Boolean, default: false },
  },
  methods: {
    setSelected(val, oldVal) {
      if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
        if (this.value) {
          if (typeof val[0] === "object" && val[0] !== null) {
            if (this.multiple) {
              const selecteds = [];

              if (Array.isArray(this.value)) {
                this.value.forEach((e) => {
                  const index = val.findIndex(
                    (c) => c[this.returnedOptionKey] === e
                  );

                  if (index !== -1) {
                    selecteds.push(val[index]);
                  }
                });
              }

              this.selectedValue = selecteds;
            } else {
              const index = val.findIndex(
                (e) => e[this.returnedOptionKey] === this.value
              );

              if (index !== -1) {
                this.selectedValue = val[index];
              } else {
                this.selectedValue = null;
              }
            }
          }
        } else {
          this.selectedValue = this.value;
        }
      }
    },
  },
  watch: {
    selectedValue(val, oldVal) {
      if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
        let returnedValue;

        returnedValue = val;
        if (this.multiple) {
          if (typeof val === "object" && val !== null) {
            returnedValue = [];
            val.forEach((e) => {
              returnedValue.push(e[this.returnedOptionKey]);
            });
          }
        } else {
          if (typeof val === "object" && val !== null) {
            returnedValue = val[this.returnedOptionKey];
          }
        }

        this.$emit("input", returnedValue);
      }
    },
    options(val, oldVal) {
      this.setSelected(val, oldVal);
    },
    value() {
      this.setSelected(this.options, null);
    },
  },
  computed: {
    isValid() {
      if (this.required) {
        if (Array.isArray(this.selectedValue)) {
          if (this.selectedValue.length > 0) {
            return "true";
          } else {
            return "false";
          }
        } else {
          if (this.selectedValue) {
            return "true";
          } else {
            return "false";
          }
        }
      } else {
        if (this.control) {
          if (Array.isArray(this.selectedValue)) {
            if (this.selectedValue.length > 0) {
              return "true";
            } else {
              return null;
            }
          } else {
            if (this.selectedValue) {
              return "true";
            } else {
              return null;
            }
          }
        } else {
          return null;
        }
      }
    },
    close() {
      return typeof this.closeOnSelect === "boolean"
        ? this.closeOnSelect
        : !this.multiple;
    },
    clear() {
      return typeof this.clearOnSelect === "boolean"
        ? this.clearOnSelect
        : !this.multiple;
    },
    _selectLabel() {
      return this.minimize
        ? ""
        : this.selectLabel
        ? this.selectLabel
        : this.$i18n.t("multiSelect.select");
    },
    _deselectLabel() {
      return this.minimize
        ? ""
        : this.deselectLabel
        ? this.deselectLabel
        : this.$i18n.t("multiSelect.remove");
    },
    _selectedLabel() {
      return this.minimize
        ? ""
        : this.selectedLabel
        ? this.selectedLabel
        : this.$i18n.t("multiSelect.selected");
    },
  },
  created() {
    this.setSelected(this.options, null);

    if (this.id) {
      this.idName = this.id;
    } else {
      this.idName = this.$uuid();
    }
  },
};
</script>

<style>
.multiselect1 .multiselect__tags {
  background: #fff;
  border: 1px solid #ced4da;
  -webkit-border-radius: 0.25rem;
  -moz-border-radius: 0.25rem;
  border-radius: 0.25rem;
  line-height: 1.3;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  padding: 0 0.75rem;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  min-height: calc(1.5em + 0.75rem + 2px);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.multiselect1[data-isvalid="true"] .multiselect__tags {
  border-color: #28a745;
}

.multiselect1[data-isvalid="false"] .multiselect__tags {
  border-color: #dc3545;
}

.multiselect1 .multiselect__placeholder {
  color: #6E757C;
  padding-top: 10px;
}

.multiselect1 .multiselect__tag {
  margin-top: 10px;
}

.multiselect1 .multiselect__input {
  margin-top: 7px;
}

.multiselect1 .multiselect__single,
.multiselect1 .multiselect__input {
  line-height: 1.7;
  margin: 0;
  padding: 0;
  color: #54667a;
  position: initial;
}
</style>
