<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ title }}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="showModal = false"
                  >&times;</span
                >
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false
    };
  },
  watch: {
    showModal(newVal) {
      this.$emit("input", newVal);
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.showModal = newVal;
      }
    }
  },
  props: {
    title: String,
    value: { type: Boolean, default: false }
  },
  created() {
    this.showModal = this.value || false;
  },
  methods: {}
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  transition: opacity 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
