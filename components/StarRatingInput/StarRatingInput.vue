<template>
  <div class="text-2xl flex items-center">
    <p class="font-semibold text-accentYellow text-3xl mr-4">{{ rating }}</p>
    <ul class="flex items-center">
      <li
        v-for="star in maxRating"
        :key="star"
        class="star"
        @click.prevent="setStar(star)"
      >
        <font-awesome-icon
          :class="`${rating >= star ? 'active' : ''}`"
          :icon="['fas', 'star']"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxRating: {
      type: Number,
      default: 5,
    },
    minRating: {
      type: Number,
      default: 0,
    },
    grade: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  data() {
    return {
      rating: this.grade,
    };
  },
  methods: {
    setStar(star) {
      this.rating = star;
      this.$emit('change', this.rating);
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  @apply text-accentYellow;
}
.star {
  @apply text-gray-400;
  margin-right: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    @apply text-accentYellow;
  }
}
</style>
