<template>
  <li class="toplist-row p-4 bg-white rounded-xl">
    <div class="company-title space-x-4">
      <div
        class="p-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-lightgray"
      >
        <img class="object-contain" src="~/assets/apple.png" alt="brand logo" />
      </div>
      <div class="flex justify-start flex-grow items-center space-x-4">
        <p class="text-xl font-semibold">{{ companyName }}</p>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="flex justify-center p-4 border-r-2 border-l-2 border-lightgray items-center"
      >
        <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
      </div>
      <div class="flex items-center justify-center divide-x-2 divide-lightgray">
        <div class="flex items-center justify-center p-4 px-8 space-x-4">
          <div class="flex items-center space-x-2">
            <p class="text-lg block text-deepPurple font-semibold">4.5</p>
            <font-awesome-icon
              class="text-2xl text-accentYellow"
              :icon="['fas', 'star']"
            />
          </div>
          <div>
            <p class="font-semibold text-deepPurple">Работадатель</p>
            <p>{{ workProviderReviewAmount }} отзывов</p>
          </div>
        </div>
        <div class="flex items-center justify-center p-4 px-8 space-x-4">
          <div class="flex items-center space-x-2">
            <p class="text-lg block text-deepPurple font-semibold">4.5</p>
            <font-awesome-icon
              class="text-2xl text-accentYellow"
              :icon="['fas', 'star']"
            />
          </div>
          <div>
            <p class="font-semibold text-deepPurple">Работадатель</p>
            <p>{{ workProviderReviewAmount }} отзывов</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 p-4 px-8">
          <div class="flex items-center space-x-2">
            <p class="text-lg block text-deepPurple font-semibold">4.5</p>
            <font-awesome-icon
              class="text-2xl text-accentYellow"
              :icon="['fas', 'star']"
            />
          </div>
          <div>
            <p class="font-semibold text-deepPurple">Работадатель</p>
            <p>{{ workProviderReviewAmount }} отзывов</p>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-center items-center">
        <div class="flex items-center space-x-2">
          <p class="text-center text-deepPurple text-xl font-semibold">
            {{ rating }}
          </p>
          <font-awesome-icon
            class="text-2xl text-accentYellow"
            :icon="['fas', 'star']"
          />
        </div>
      </div> -->
    </div>
  </li>
</template>

<script>
export default {
  props: {
    companyName: { type: String, default: '' },
    companyType: { type: String, default: '' },
    index: { type: Number, default: 0 },
    workProviderReviewAmount: { type: Number, default: 0 },
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
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  column-gap: 1rem;
}

.company-title {
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
}
</style>
