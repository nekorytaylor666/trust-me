<template>
  <button
    class="flex items-center justify-center space-x-2 bg-lightgray w-full rounded-lg p-4"
    @click.prevent="onClick"
  >
    <img
      class="w-4 h-4 object-contain mb-1"
      src="~assets/icons/facebook.svg"
      alt="facebookIcon"
    />
    <p>Войти с помощью Facebook</p>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped></style>
