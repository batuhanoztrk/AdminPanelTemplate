<template>
  <div class="form-group">
    <label :class="required ? 'required': null">{{ label }}</label>
    <tinymce
      :plugins="['emoticons', 'lists', 'link']"
      :init="{
        height: 350,
        menubar: false,
        language: $i18n.locale === 'tr' ? 'tr' : 'en_US'
      }"
      v-model="val"
      apiKey="v8hkiaj7g7zgydy4an0b6q8ivesxuwsd0kconvll9gr28619"
      toolbar="undo redo | styleselect | fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link | emoticons"
    />
    <!--<vue-editor
      useCustomImageHandler
      :editorOptions="{
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [
                { align: '' },
                { align: 'center' },
                { align: 'right' },
                { align: 'justify' }
              ],
              ['blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              ['link'],
              ['emoji']
            ],
            handlers: {
              emoji: function() {}
            }
          },
          short_name_emoji: true,
          toolbar_emoji: true
        }
      }"
      @image-added="handleImageAdded"
      v-model="val"
    ></vue-editor>-->
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      val: ""
    };
  },
  props: {
    value: String,
    label: String,
    required: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    val(newVal, oldVal) {
      const regEx = /<div(\w|[=":;-]|\s?)*>|<\/div>/g;
      const value = newVal?.replace(regEx, "");
      this.$emit("input", value);
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.val = newVal;
      }
    }
  },
  created() {
    /*const regEx = /<div(\w|[=":;-]|\s?)*>|<\/div>/g;
    const value = this.value.replace(regEx, "");*/
    this.val = this.value;
  },
  methods: {
    /*async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);

      const data = await this.$axios.$post("/imageUpload", formData);

      if (data.error === 0) {
        Editor.insertEmbed(cursorLocation, "image", data.url);
        resetUploader();
      } else {
        this.$toast.error(this.$t("error"));
      }
    }*/
  }
};
</script>

<style scoped></style>
