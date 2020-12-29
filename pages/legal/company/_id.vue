<template>
  <div class="mt-4">
    <company-header :company="companyInfo" />
    <Pane class="mt-4">
      <div class="flex justify-between items-center p-6 px-8">
        <div class="flex space-x-4 items-center">
          <p class="text-xl">Роль:</p>
          <input
            id="employer"
            v-model="currentRole"
            class="hidden"
            type="radio"
            name="role"
            value="employer"
            checked
          />
          <label for="employer">
            <div class="role-button">Работодатель</div>
          </label>
          <input
            id="executer"
            v-model="currentRole"
            class="hidden"
            type="radio"
            name="role"
            value="executer"
          />
          <label for="executer">
            <div class="role-button">Исполнитель</div>
          </label>
          <input
            id="client"
            v-model="currentRole"
            class="hidden"
            type="radio"
            name="role"
            value="client"
          />
          <label for="client">
            <div class="role-button">Заказчик</div>
          </label>
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
      <review-list-filter v-if="!addReviewMode" :reviews="companyReviews" />
      <add-review-employer v-if="addReviewMode" @on-review="sendReview" />
      <div class="space-y-6">
        <confirm-representation-pane v-if="!addReviewMode" />
        <last-reviews-sidebar :reviews="lastReviews" title="Последние отзывы" />
        <last-reviews-sidebar :reviews="lastReviews" title="Лучшие отзывы" />
      </div>
    </div>
  </div>
</template>

<script>
import AddReviewEmployer from '../../../components/AddReview/AddReviewEmployer.vue';
import CompanyHeader from '../../../components/Company/CompanyHeader.vue';
import ConfirmRepresentationPane from '../../../components/Company/ConfirmRepresentationPane.vue';
import ReviewListFilter from '../../../components/ReviewListFilter/ReviewListFilter.vue';
export default {
  components: {
    CompanyHeader,
    ReviewListFilter,
    ConfirmRepresentationPane,
    AddReviewEmployer,
  },
  async fetch() {
    const companyId = this.$route.params.id;
    this.companyInfo = await this.$axios.$get(
      `/Company/GetInfoCompany?id=${companyId}`
    );
    this.companyReviews = await this.$axios.$get(
      `/Reviews/GetReviewsByCompany?id=${companyId}`
    );
    console.log(
      'companyinfo',
      companyId,
      this.companyInfo,
      this.companyReviews
    );
  },
  data() {
    return {
      addReviewMode: false,
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
      currentRole: 'employer',
      companyReviews: [],
    };
  },
  methods: {
    changeReviewMode(value) {
      this.addReviewMode = value;
    },
    async sendReview(review) {
      try {
        const res = await this.$axios.$post('/Reviews/AddReview', {
          id: this.companyInfo.id,
          description: review.reviewText,
          plus: review.pluses,
          minus: review.minuses,
          evaulation: review.evaulation,
          type: 0,
        });
        console.log('review:', review, this.companyInfo, res);
      } catch (error) {
        console.log(error.response);
      }
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

.role-button {
  @apply px-6 py-2 bg-none border-2 border-deepPurple text-deepPurple rounded-lg;
}
/* px-6 py-2 bg-lightgray border-2 border-ligbg-lightgray text-white rounded-lg; */
input[type='radio']:checked + label {
  .role-button {
    @apply bg-deepPurple text-white;
  }
}
</style>
