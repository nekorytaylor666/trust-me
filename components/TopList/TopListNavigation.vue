<template>
  <ul class="flex justify-evenly">
    <top-list-navigation-category
      title="Топ лучших работодателей"
      :active="true"
    />
    <top-list-navigation-category title="Топ худших работодателей" />
    <top-list-navigation-category title="Топ лучших исполнителей" />
    <top-list-navigation-category title="Топ худших исполнителей" />
    <top-list-navigation-category title="Топ лучших заказчиков" />
    <top-list-navigation-category title="Топ худших заказчиков" />
  </ul>
</template>

<script>
import TopListNavigationCategory from './TopListNavigationCategory.vue';
export default {
  components: { TopListNavigationCategory },
};
</script>

<style lang="scss" scoped></style>
