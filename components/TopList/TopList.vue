<template>
  <div>
    <Pane>
      <top-list-navigation @categoryChange="onCategoryChange" />
      <div class="flex justify-between p-6 border-b-2 border-lightgray">
        <div class="text-skyblue">
          <NuxtLink to="/"> Смотреть весь список</NuxtLink>
        </div>
        <h3 class="text-xl font-semibold">
          {{ currentCategory.title }}
        </h3>
        <div class="flex items-center space-x-2 text-skyblue">
          <p>За последнюю неделю</p>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
      </div>
      <top-list-table :table="topList" />
    </Pane>
  </div>
</template>

<script>
import TopListNavigation from './TopListNavigation.vue';
import TopListTable from './TopListTable.vue';
export default {
  components: { TopListNavigation, TopListTable },
  data() {
    return {
      currentCategory: {},
      topLists: {
        bestWorkProviders: [
          {
            companyName: 'Apple inc',
            companyType: 'Сельское хозяйство и рыба',
            rating: '5',
            reviewsAmount: '27',
            highlightedIndex: 'true',
          },
          {
            companyName: 'Apple inc',
            companyType: 'Сельское хозяйство и рыба',
            rating: '5',
            reviewsAmount: '27',
            highlightedIndex: 'true',
          },
          {
            companyName: 'Apple inc',
            companyType: 'Сельское хозяйство и рыба',
            rating: '5',
            reviewsAmount: '27',
            highlightedIndex: 'true',
          },
          {
            companyName: 'Apple inc',
            companyType: 'Сельское хозяйство и рыба',
            rating: '5',
            reviewsAmount: '27',
            highlightedIndex: 'true',
          },
          {
            companyName: 'Apple inc',
            companyType: 'Сельское хозяйство и рыба',
            rating: '5',
            reviewsAmount: '27',
            highlightedIndex: 'true',
          },
        ],
      },
    };
  },
  computed: {
    topList() {
      const topLists = this.topLists[this.currentCategory.name];
      return topLists;
    },
  },
  methods: {
    onCategoryChange(e) {
      this.currentCategory = e;
    },
  },
};
</script>

<style lang="scss" scoped></style>
