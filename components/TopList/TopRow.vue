<template>
  <li class="toplist-row py-4 divide-x-2 divide-lightgray">
    <p
      :class="`text-center text-xl flex items-center justify-center font-semibold px-4 ${
        highlightedIndex ? 'text-skyblue' : 'text-darkgray'
      }`"
    >
      {{ index }}
    </p>
    <div class="flex justify-center items-center space-x-4 px-4">
      <div class="p-4 rounded-2xl bg-lightgray">
        <img
          class="h-8 w-8 object-contain"
          src="~/assets/apple.png"
          alt="brand logo"
        />
      </div>
      <p class="text-xl font-semibold">{{ companyName }}</p>
    </div>
    <div class="flex justify-center items-center px-4">
      <p class="text-left text-darkgray">{{ companyType }}</p>
    </div>
    <div class="flex justify-center items-center font-semibold px-4">
      <p>{{ reviewsAmount }} отзывов</p>
    </div>
    <div class="flex justify-center items-center px-4">
      <div class="flex items-center space-x-2">
        <p class="text-center text-skyblue text-xl font-semibold">
          {{ rating }}
        </p>
        <font-awesome-icon
          class="text-2xl text-accentYellow"
          :icon="['fas', 'star']"
        />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    companyName: { type: String, default: '' },
    companyType: { type: String, default: '' },
    index: { type: Number, default: 0 },
    reviewsAmount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    highlightedIndex: { type: Boolean, defaul: false, required: false },
  },
};
</script>

<style lang="scss" scoped>
.toplist-row {
  display: grid;
  width: 100%;
  grid-template-columns: 100px repeat(4, minmax(100px, auto));
  grid-template-rows: 1fr;
}
</style>
