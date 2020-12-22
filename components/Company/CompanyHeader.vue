<template>
  <Pane>
    <div class="p-6 px-8 flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <div class="p-6 rounded-2xl bg-lightgray">
          <img
            class="h-16 w-16 object-contain"
            src="~/assets/apple.png"
            alt="brand logo"
          />
        </div>
        <div class="space-y-1">
          <p class="text-2xl font-semibold">{{ company.nameRU }}</p>
          <div class="text-darkgray">
            <p>Руководитель: МАГУЛАРИЯ ДАВИД</p>
            <p>Деятельности: Розничная торговля</p>
            <p>БИН: {{ company.bin }}</p>
          </div>
          <button class="flex items-center space-x-2 text-deepPurple">
            <p>Информация</p>
            <font-awesome-icon
              class="text-sm mt-1"
              :icon="['fas', 'chevron-down']"
            />
          </button>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-end space-y-4">
          <div class="flex items-center space-x-4">
            <div class="flex flex-col items-end">
              <star-rating :rating="company.rating" />
              <p>
                <span class="text-sm text-deepPurple">10 534</span> просмотров
                страницы
              </p>
              <div class="flex space-x-4 text-3xl text-darkgray mt-2">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                <font-awesome-icon :icon="['fab', 'vk']" />
              </div>
            </div>
            <button class="px-4 py-2 bg-lightgray rounded-lg">
              <font-awesome-icon
                class="text-darkgray text-2xl"
                :icon="['fas', 'ellipsis-h']"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Pane>
</template>

<script>
import StarRating from '../StarRating/StarRating.vue';
export default {
  components: { StarRating },
  props: {
    company: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
