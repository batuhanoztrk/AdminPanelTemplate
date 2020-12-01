<template>
  <div class="form-group">
    <label :class="required ? 'required' : null" for="file">{{ label }}</label>
    <div class="custom-file">
      <input
        type="file"
        ref="file"
        @change="handleFile"
        class="custom-file-input"
        :id="id"
        :multiple="multiple"
        :accept="accept"
        :required="required"
      />
      <label class="custom-file-label" :for="id">{{ _getFileName }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  data() {
    return {
      file: null,
      id: this.$uuid()
    };
  },
  props: {
    label: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: "*"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [File, FileList, Array],
    required: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.file = this.value;
  },
  methods: {
    handleFile() {
      this.file = this.multiple
        ? this.$refs.file.files
        : this.$refs.file.files[0];
    }
  },
  watch: {
    file(newFile, oldFile) {
      this.$emit("input", newFile);
    },
    value(newFile, oldFile) {
      if (this.multiple) {
        if (!Array.isArray(newFile)) {
          if (
            newFile[0]?.name !== undefined &&
            oldFile[0]?.name !== undefined
          ) {
            this.file = newFile;
          } else {
            if (newFile[0]?.name === undefined) {
              this.file = [];
            } else {
              this.file = newFile;
            }
          }
        } else {
          if (newFile !== oldFile) {
            this.file = newFile;
          }
        }
      } else {
        if (newFile !== null) {
          if (newFile?.name !== undefined && oldFile?.name !== undefined) {
            if (newFile?.name !== oldFile?.name) {
              this.file = newFile;
            }
          } else {
            if (newFile?.name === undefined) {
              this.file = null;
            } else {
              this.file = newFile;
            }
          }
        } else {
          if (newFile !== oldFile) {
            this.file = newFile;
          }
        }
      }
    }
  },
  computed: {
    _getFileName() {
      if (this.file) {
        if (this.$props.multiple) {
          if (Array.isArray(this.file)) {
            return this.$t("chooseFile");
          } else {
            let filename = "";

            Array.from(this.file).forEach(file => {
              filename += file.name + ", ";
            });

            filename = filename.substr(0, filename.length - 2);

            return filename;
          }
        } else {
          return this.file.name;
        }
      } else {
        return this.$t("chooseFile");
      }
    }
  }
};
</script>

<style scoped></style>
