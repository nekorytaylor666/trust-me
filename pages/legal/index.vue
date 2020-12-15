<template>
  <div class="py-4 grid-with-sidebar">
    <div>
      <top-list />
      <div class="mt-6 space-y-10">
        <review-card />
        <review-card />
        <review-card />
        <review-card />
        <review-card />
      </div>
    </div>
    <div class="space-y-6">
      <last-reviews-sidebar :reviews="lastReviews" title="Последние отзывы" />
      <last-reviews-sidebar :reviews="lastReviews" title="Лучшие отзывы" />
    </div>
  </div>
</template>

<script>
import LastReviewsSidebar from '../../components/LastReviewsSidebar/LastReviewsSidebar.vue';
import ReviewCard from '../../components/ReviewCard/ReviewCard.vue';
import TopList from '../../components/TopList/TopList.vue';

export default {
  components: { TopList, LastReviewsSidebar, ReviewCard },
  data() {
    return {
      lastReviews: [
        {
          author: { fullName: 'Джон' },
          company: { name: 'Apple Inc.' },
          relation: { type: 'WORKER' },
        },
        {
          author: { fullName: 'Джон' },
          company: { name: 'Apple Inc.' },
          relation: { type: 'WORKER' },
        },
        {
          author: { fullName: 'Джон' },
          company: { name: 'Apple Inc.' },
          relation: { type: 'WORKER' },
        },
        {
          author: { fullName: 'Джон' },
          company: { name: 'Apple Inc.' },
          relation: { type: 'WORKER' },
        },
        {
          author: { fullName: 'Джон' },
          company: { name: 'Apple Inc.' },
          relation: { type: 'WORKER' },
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.grid-with-sidebar {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
}
</style>
