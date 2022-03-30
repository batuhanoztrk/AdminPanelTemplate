<template>
  <ValidationProvider
    :rules="rules"
    :name="field ? field : label"
    v-slot="{ errors }"
  >
    <div class="form-group">
      <label :class="required || labelRequired ? 'required' : ''" :for="id">{{
        label
      }}</label>
      <textarea
        v-if="type == 'textarea'"
        v-model="val"
        :type="type"
        class="form-control"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :readonly="readonly"
        :class="{ 'is-invalid': errors.length }"
        v-mask="mask"
        :rows="rows"
      ></textarea>
      <input
        v-else
        v-model="val"
        :type="type"
        class="form-control"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :readonly="readonly"
        :class="{ 'is-invalid': errors.length }"
        v-mask="mask"
      />
      <small v-if="errors.length" class="invalid-feedback">
        {{ errors[0] }}</small
      >
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

import { nanoid } from 'nanoid'
export default {
  name: 'Input',
  components: { ValidationProvider },
  data() {
    return {
      id: nanoid(),
      val: null,
    }
  },
  props: {
    label: String,
    field: String,
    rows: Number | String,
    rules: {
      type: String,
      default: '',
    },
    value: [Object, String, Number],
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    labelRequired: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
      default: '',
    },
  },
  watch: {
    val(newVal, oldVal) {
      this.$emit('input', newVal)
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.val = newVal
      }
    },
  },
  created() {
    this.val = this.value
  },
}
</script>
