<template>
  <div :class="className" class="button-group">
    <button
      type="button"
      v-if="createButton"
      :disabled="createDisabled"
      @click="$emit('create-click')"
      class="btn waves-effect waves-light btn-success mb-1"
    >
      <i :class="createIcon" class="mr-1"></i>
      {{ _createText }}
    </button>
    <button
      type="button"
      v-if="deleteButton"
      :disabled="deleteDisabled"
      v-confirm="{
        ok: emitClick,
        message: deleteMessage,
        cancelText: $t('dialog.cancel'),
        okText: $t('dialog.ok')
      }"
      class="btn waves-effect waves-light btn-danger mb-1"
    >
      <i :class="deleteIcon" class="mr-1"></i>
      {{ _deleteText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DataTableButtons",
  props: {
    className: { type: String, default: "m-2" },
    createText: String,
    deleteText: String,
    deleteDisabled: Boolean,
    createDisabled: Boolean,
    deleteButton: { type: Boolean, default: true },
    createButton: { type: Boolean, default: true },
    createIcon: { type: String, default: "fas fa-plus" },
    deleteIcon: { type: String, default: "fas fa-trash-alt" },
    deleteMessage: {
      type: String,
      default: function() {
        return this.$t("deleteMessage");
      }
    }
  },
  methods: {
    emitClick(dialog) {
      this.$emit("delete-click");
    }
  },
  computed: {
    _createText() {
      return this.createText ? this.createText : this.$i18n.t("create");
    },
    _deleteText() {
      return this.deleteText ? this.deleteText : this.$i18n.t("deleteSelected");
    }
  }
};
</script>

<style scoped>
/style>
