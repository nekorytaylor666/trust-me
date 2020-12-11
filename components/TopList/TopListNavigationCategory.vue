<template>
  <li :class="`flex justify-center text-center  p-6 flex-1  `">
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

<style lang="scss" scoped></style>
