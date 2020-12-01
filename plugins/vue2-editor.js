import Vue from "vue";

import { VueEditor, Quill } from "vue2-editor";

import Emoji from "quill-emoji";
import "quill-emoji/dist/quill-emoji.css";

Quill.register(
  {
    "formats/emoji": Emoji.EmojiBlot,
    "modules/short_name_emoji": Emoji.ShortNameEmoji,
    "modules/toolbar_emoji": Emoji.ToolbarEmoji,
    "modules/textarea_emoji": Emoji.TextAreaEmoji
  },
  true
);

Vue.component("vue-editor", VueEditor);
