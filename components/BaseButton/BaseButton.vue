<template>
  <button
    :disabled="disabled"
    :class="`text-white p-4 w-full rounded-lg font-light ${
      disabled ? 'bg-accentGray' : 'bg-deepPurple'
    }`"
    @click.prevent="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped></style>
