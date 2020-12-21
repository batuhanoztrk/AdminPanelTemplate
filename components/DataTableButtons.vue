<template>
  <div>
    <DataTableButtons
      v-if="showButtons"
      @create-click="$emit('create-click')"
      @delete-click="$emit('delete-click')"
      :create-text="createText"
      :delete-text="deleteText"
      :delete-disabled="deleteDisabled"
      :create-disabled="createDisabled"
      :delete-button="deleteButton"
      :create-button="createButton"
      :class-name="buttonsClassName"
      :create-icon="createIcon"
      :delete-icon="deleteIcon"
      :delete-message="deleteMessage"
      :download-button="downloadButton"
      :download-text="downloadText"
      :file-name="fileName"
    />
    <vue-good-table
      ref="table"
      @on-selected-rows-change="$emit('on-selected-rows-change', $event)"
      @on-cell-click="$emit('on-cell-click', $event)"
      :select-options="_selectOptions"
      :search-options="_searchOptions"
      :sort-options="_sortOptions"
      :pagination-options="_paginationOptions"
      @on-row-dblclick="$emit('on-row-dblclick', $event)"
      @on-row-click="$emit('on-row-click', $event)"
      :columns="columns"
      :rows="rows"
    >
      <div slot="emptystate" class="vgt-center-align vgt-text-disabled">
        {{ noDataText ? noDataText : $t("datatable.noData") }}
      </div>

      <template slot="table-row" slot-scope="props">
        <slot name="table-row" :props="props"></slot>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import DataTableButtons from "@/components/DataTableButtons";

export default {
  name: "DataTable",
  components: { DataTableButtons },
  props: {
    selectOptions: Object,
    searchOptions: Object,
    sortOptions: Object,
    paginationOptions: Object,
    columns: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
    rows: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
    noDataText: String,
    showButtons: { type: Boolean, default: true },
    buttonsClassName: String,
    createText: String,
    deleteText: String,
    deleteDisabled: Boolean,
    createDisabled: { type: Boolean, default: false },
    deleteButton: { type: Boolean, default: true },
    createButton: { type: Boolean, default: true },
    downloadButton: Boolean,
    downloadText: String,
    fileName: String,
    createIcon: String,
    deleteIcon: String,
    deleteMessage: String,
    clear: Boolean,
  },
  watch: {
    clear() {
      this.$refs["table"].unselectAllInternal();
    },
  },
  data() {
    return {
      dataTable: {
        searchOptions: {
          enabled: true,
          skipDiacritics: true,
          placeholder: this.$i18n.t("datatable.search"),
        },
        paginationOptions: {
          enabled: true,
          mode: "pages",
          nextLabel: this.$i18n.t("datatable.pagination.next"),
          prevLabel: this.$i18n.t("datatable.pagination.prev"),
          rowsPerPageLabel: this.$i18n.t("datatable.pagination.rowsPerPage"),
          ofLabel: this.$i18n.t("datatable.pagination.of"),
          pageLabel: this.$i18n.t("datatable.pagination.page"),
          allLabel: this.$i18n.t("datatable.pagination.all"),
        },
        selectOptions: {
          enabled: true,
          selectionText: this.$i18n.t("datatable.selectionText"),
          clearSelectionText: this.$i18n.t("datatable.clear"),
          selectOnCheckboxOnly: true,
        },
        sortOptions: {
          enabled: true,
        },
      },
    };
  },
  computed: {
    _selectOptions() {
      return this.selectOptions
        ? this.selectOptions
        : this.dataTable.selectOptions;
    },
    _searchOptions() {
      return this.searchOptions
        ? this.searchOptions
        : this.dataTable.searchOptions;
    },
    _sortOptions() {
      return this.sortOptions ? this.sortOptions : this.dataTable.sortOptions;
    },
    _paginationOptions() {
      return this.paginationOptions
        ? this.paginationOptions
        : this.dataTable.paginationOptions;
    },
  },
};
</script>

<style scoped></style>