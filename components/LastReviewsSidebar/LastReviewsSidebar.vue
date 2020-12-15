<template>
  <Pane>
    <div class="flex flex-col">
      <h2 class="text-xl px-6 border-b-2 border-lightgray py-4">
        {{ title }}
      </h2>
      <ul class="px-6">
        <li v-for="(review, index) in reviews" :key="index">
          <div class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2 w-2/5">
              <div class="p-3 rounded-xl bg-lightgray">
                <img
                  class="h-5 w-5 object-contain"
                  src="~/assets/apple.png"
                  alt="brand logo"
                />
              </div>
              <p class="text-darkgray text-sm">Джон</p>
            </div>

            <div class="flex items-center space-x-2 w-3/5">
              <div class="p-3 rounded-xl bg-lightgray">
                <img
                  class="h-5 w-5 object-contain"
                  src="~/assets/apple.png"
                  alt="brand logo"
                />
              </div>
              <p class="text-sm">ТОО Apple Inc.</p>
            </div>
            <div class="flex items-center space-x-2 w-1/12 justify-end">
              <p class="text-center text-skyblue text-xl font-semibold">3</p>
              <font-awesome-icon
                class="text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="px-6 py-4">
        <button class="bg-lightgray text-lg p-4 w-full rounded-xl">
          Скрыть последние отзывы
        </button>
      </div>
    </div>
  </Pane>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
