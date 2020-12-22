<template>
  <div class="text-2xl flex items-center">
    <p class="font-semibold text-accentYellow text-3xl mr-4">{{ rating }}</p>
    <div class="space-x-2">
      <font-awesome-icon
        :class="`${rating >= 1 ? 'text-accentYellow' : 'text-gray-400'}`"
        :icon="['fas', 'star']"
      />
      <font-awesome-icon
        :class="`${rating >= 2 ? 'text-accentYellow' : 'text-gray-400'}`"
        :icon="['fas', 'star']"
      />
      <font-awesome-icon
        :class="`${rating >= 3 ? 'text-accentYellow' : 'text-gray-400'}`"
        :icon="['fas', 'star']"
      />
      <font-awesome-icon
        :class="`${rating >= 4 ? 'text-accentYellow' : 'text-gray-400'}`"
        :icon="['fas', 'star']"
      />
      <font-awesome-icon
        :class="`${rating >= 5 ? 'text-accentYellow' : 'text-gray-400'}`"
        :icon="['fas', 'star']"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
