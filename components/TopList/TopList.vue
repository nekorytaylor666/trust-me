<template>
  <div class="py-4">
    <Pane>
      <top-list-navigation />
      <div class="flex justify-between p-6 border-b-2 border-lightgray">
        <div class="text-skyblue">
          <NuxtLink to="/"> Смотреть весь список</NuxtLink>
        </div>
        <h3 class="text-xl font-semibold">Топ лучших компаний</h3>
        <div class="flex items-center space-x-2 text-skyblue">
          <p>За последнюю неделю</p>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
      </div>
      <top-list-table />
    </Pane>
  </div>
</template>

<script>
import TopListNavigation from './TopListNavigation.vue';
import TopListTable from './TopListTable.vue';
export default {
  components: { TopListNavigation, TopListTable },
};
</script>

<style lang="scss" scoped></style>
