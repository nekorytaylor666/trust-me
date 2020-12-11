<template>
  <ul class="flex justify-evenly">
    <div
      v-for="(category, index) in categories"
      :key="category.name + index"
      class="flex justify-center text-center flex-1"
    >
      <label
        :for="category.name + index"
        :class="` transition ease-in-out duration-200 ${
          category.name === currentCategory
            ? 'border-b-2 border-skyblue'
            : 'border-b-2 border-lightgray'
        } `"
      >
        <top-list-navigation-category :title="category.title" />
      </label>
      <input
        :id="category.name + index"
        v-model="currentCategory"
        type="radio"
        :value="category.name"
        name="list-navigation-category"
        class="hidden"
        @change="onChangeCategory"
      />
    </div>
  </ul>
</template>

<script>
import TopListNavigationCategory from './TopListNavigationCategory.vue';
export default {
  components: { TopListNavigationCategory },
  data() {
    return {
      categories: [
        {
          title: 'Топ лучших работодателей',
          name: 'bestWorkProviders',
        },
        {
          title: 'Топ худших работодателей',
          name: 'worstWorkProviders',
        },
        {
          title: 'Топ лучших исполнителей',
          name: 'bestExecutives',
        },
        {
          title: 'Топ худших исполнителей',
          name: 'worstExecutives',
        },
        {
          title: 'Топ лучших заказчиков',
          name: 'bestClients',
        },
        {
          title: 'Топ худших заказчиков',
          name: 'worstClients',
        },
      ],
      currentCategory: '',
    };
  },
  created() {
    this.currentCategory = this.categories[0].name;
    this.onChangeCategory();
  },
  methods: {
    onChangeCategory() {
      const currentCategoryIndex = this.categories.findIndex(
        (value) => value.name === this.currentCategory
      );
      this.$emit('categoryChange', this.categories[currentCategoryIndex]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
