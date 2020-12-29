import { required } from 'vuelidate/lib/validators';
<template>
  <div class="space-y-8">
    <Pane>
      <div class="p-6 px-8 text-darkgray flex justify-between items-center">
        <div class="flex items-center">
          <p class="text-xl pr-4 border-r-2 border-lightgray">Фильтр</p>
          <div class="flex items-center space-x-2 ml-4">
            <p>раскрыть</p>
            <font-awesome-icon
              class="text-xs mt-1"
              :icon="['fas', 'chevron-down']"
            />
          </div>
        </div>
        <div class="flex items-center space-x-2 ml-4">
          <p>По популярности</p>
          <font-awesome-icon
            class="text-xs mt-1"
            :icon="['fas', 'chevron-down']"
          />
        </div>
      </div>
    </Pane>
    <review-card
      v-for="review in reviews"
      :key="review.id"
      :company-link="false"
      :add-comment="false"
    />
  </div>
</template>

<script>
export default {
  props: {
    reviews: { type: Array },
  },
};
</script>

<style lang="scss" scoped></style>
