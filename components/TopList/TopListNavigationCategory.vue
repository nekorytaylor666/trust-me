<template>
  <li
    :class="`flex justify-center text-center p-6 flex-1 cursor-pointer ${
      active ? 'active-category' : 'default-category'
    }`"
  >
    <p>{{ title }}</p>
  </li>
</template>

<script>
export default {
  props: {
    title: String(''),
    active: Boolean(false),
  },
};
</script>

<style lang="scss" scoped>
.active-category {
  @apply border-b-2 border-skyblue;
}

.default-category {
  @apply border-b-2 border-lightgray;
}
</style>
