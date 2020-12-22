<template>
  <div class="mt-4">
    <company-header :company="companyInfo" />
    <Pane class="mt-4">
      <div class="flex justify-between items-center p-6 px-8">
        <div class="flex space-x-4 items-center">
          <p class="text-xl">Отзывы:</p>
          <button
            class="px-6 py-2 bg-deepPurple border-2 border-deepPurple text-white rounded-lg"
          >
            Работодатель (152)
          </button>
          <button
            class="px-6 py-2 bg-white border-2 border-deepPurple text-deepPurple rounded-lg"
          >
            Исполнитель (23)
          </button>
          <button
            class="px-6 py-2 bg-white border-2 border-deepPurple text-deepPurple rounded-lg"
          >
            Заказчик (14)
          </button>
        </div>
        <div>
          <div class="flex items-center space-x-4">
            <button
              class="px-6 py-2 border-2 border-lightgray bg-lightgray text-darkgray rounded-lg flex items-center space-x-2"
            >
              <font-awesome-icon class="text-lg" :icon="['fas', 'bookmark']" />
              <p>Подписаться</p>
            </button>
            <button
              v-if="!addReviewMode"
              class="px-6 py-2 border-2 border-deepPurple bg-deepPurple text-white rounded-lg flex items-center space-x-2"
              @click="changeReviewMode(true)"
            >
              <font-awesome-icon class="text-lg" :icon="['fas', 'edit']" />
              <p>Оставить отзыв</p>
            </button>
            <button
              v-if="addReviewMode"
              class="px-12 py-2 border-2 border-lightgray bg-lightgray text-black rounded-lg flex items-center space-x-2"
              @click="changeReviewMode(false)"
            >
              <p>Отмена</p>
            </button>
          </div>
        </div>
      </div>
    </Pane>
    <div class="py-4 grid-with-sidebar">
      <review-list-filter v-if="!addReviewMode" />
      <add-review v-if="addReviewMode" />
      <div class="space-y-6">
        <confirm-representation-pane v-if="!addReviewMode" />
        <last-reviews-sidebar :reviews="lastReviews" title="Последние отзывы" />
        <last-reviews-sidebar :reviews="lastReviews" title="Лучшие отзывы" />
      </div>
    </div>
  </div>
</template>

<script>
import AddReview from '../../../components/AddReview/AddReview.vue';
import CompanyHeader from '../../../components/Company/CompanyHeader.vue';
import ConfirmRepresentationPane from '../../../components/Company/ConfirmRepresentationPane.vue';
import ReviewListFilter from '../../../components/ReviewListFilter/ReviewListFilter.vue';
export default {
  components: {
    CompanyHeader,
    ReviewListFilter,
    ConfirmRepresentationPane,
    AddReview,
  },
  async fetch() {
    const companyId = this.$route.params.id;
    this.companyInfo = await this.$axios.$get(
      `/Company/GetInfoCompany?id=${companyId}`
    );
    console.log(this.companyInfo);
  },
  data() {
    return {
      addReviewMode: true,
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
      companyInfo: null,
    };
  },
  methods: {
    changeReviewMode(value) {
      this.addReviewMode = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-with-sidebar {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
}
</style>
