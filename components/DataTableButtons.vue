<template>
  <div :id="_id" :class="className" class="button-group d-flex">
    <div>
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
        @click="deleteClick"
        class="btn waves-effect waves-light btn-danger mb-1"
      >
        <i :class="deleteIcon" class="mr-1"></i>
        {{ _deleteText }}
      </button>
    </div>
    <button
      type="button"
      @click="download"
      v-if="downloadButton"
      class="btn waves-effect waves-light btn-info mb-1 ml-auto"
    >
      <i class="fas fa-cloud-download-alt mr-1"></i>
      {{ _downloadText }}
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
    downloadText: String,
    deleteDisabled: Boolean,
    createDisabled: Boolean,
    deleteButton: { type: Boolean, default: true },
    createButton: { type: Boolean, default: true },
    downloadButton: { type: Boolean, default: false },
    fileName: { type: String, default: "Veriler" },
    createIcon: { type: String, default: "fas fa-plus" },
    deleteIcon: { type: String, default: "fas fa-trash-alt" },
    deleteMessage: {
      type: String,
      default: function () {
        return this.$t("deleteMessage");
      },
    },
  },
  methods: {
    deleteClick() {
      this.$confirm({
        message: this.deleteMessage,
        button: {
          no: this.$t("dialog.cancel"),
          yes: this.$t("dialog.ok"),
        },
        callback: (confirm) => {
          if (confirm) {
            this.$emit("delete-click");
          }
        },
      });
    },
    download() {
      let ignoreColumn = [];
      let ignoreRow = [];
      const bannedLabels = ["img", "button", "input"];

      const firstRow = $(
        `#${this._id} + .vgt-wrap .vgt-table tbody tr:first-child >`
      );

      for (let i = 0; i < firstRow.length; i++) {
        const isBannedLabel = bannedLabels.some((e) =>
          firstRow[i].innerHTML.includes(e)
        );

        if (isBannedLabel) ignoreColumn.push(i);
      }

      if ($(`#${this._id} + .vgt-wrap .vgt-table thead tr`).length > 1)
        ignoreRow.push(1);

      $(`#${this._id} + .vgt-wrap .vgt-table`).tableExport({
        type: "csv",
        fileName: this.fileName,
        ignoreColumn: ignoreColumn,
        ignoreRow: ignoreRow,
      });
    },
  },
  computed: {
    _createText() {
      return this.createText ? this.createText : this.$i18n.t("create");
    },
    _deleteText() {
      return this.deleteText ? this.deleteText : this.$i18n.t("deleteSelected");
    },
    _downloadText() {
      return this.downloadText ? this.downloadText : this.$i18n.t("download");
    },
    _id() {
      return this.$uuid();
    },
  },
};
</script>

<style scoped></style>
