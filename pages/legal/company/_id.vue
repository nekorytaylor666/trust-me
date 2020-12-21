<template>
  <div class="mt-4">
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
            <p class="text-2xl font-semibold">TOO Apple Inc.</p>
            <div class="text-darkgray">
              <p>Руководитель: МАГУЛАРИЯ ДАВИД</p>
              <p>Деятельности: Розничная торговля</p>
              <p>БИН: 090940003479</p>
            </div>
            <button class="flex items-center space-x-2 text-skyblue">
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
                <div class="text-2xl flex items-center">
                  <p class="font-semibold text-accentYellow text-3xl mr-4">4</p>
                  <div class="space-x-2">
                    <font-awesome-icon
                      class="text-accentYellow"
                      :icon="['fas', 'star']"
                    />
                    <font-awesome-icon
                      class="text-accentYellow"
                      :icon="['fas', 'star']"
                    />
                    <font-awesome-icon
                      class="text-accentYellow"
                      :icon="['fas', 'star']"
                    />
                    <font-awesome-icon
                      class="text-accentYellow"
                      :icon="['fas', 'star']"
                    />
                    <font-awesome-icon
                      class="text-gray-400"
                      :icon="['fas', 'star']"
                    />
                  </div>
                </div>
                <p>
                  <span class="text-sm text-skyblue">10 534</span> просмотров
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
    <Pane class="mt-4">
      <div class="flex justify-between items-center p-6 px-8">
        <div class="flex space-x-4 items-center">
          <p class="text-xl">Отзывы:</p>
          <button
            class="px-6 py-2 bg-skyblue border-2 border-skyblue text-white rounded-lg"
          >
            Работодатель (152)
          </button>
          <button
            class="px-6 py-2 bg-white border-2 border-skyblue text-skyblue rounded-lg"
          >
            Исполнитель (23)
          </button>
          <button
            class="px-6 py-2 bg-white border-2 border-skyblue text-skyblue rounded-lg"
          >
            Заказчик (14)
          </button>
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
              class="px-6 py-2 border-2 border-skyblue bg-skyblue text-white rounded-lg flex items-center space-x-2"
            >
              <font-awesome-icon class="text-lg" :icon="['fas', 'edit']" />
              <p>Оставить отзыв</p>
            </button>
          </div>
        </div>
      </div>
    </Pane>
    <div class="py-4 grid-with-sidebar">
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
        <review-card :company-link="false" :add-comment="false" />
        <review-card :company-link="false" :add-comment="false" />
        <review-card :company-link="false" :add-comment="false" />
        <review-card :company-link="false" :add-comment="false" />
        <review-card :company-link="false" :add-comment="false" />
      </div>
      <div class="space-y-6">
        <Pane>
          <div class="p-6 space-y-6">
            <p class="text-xl font-light text-center">
              Вы представитель
              <span class="font-bold text-skyblue"> ТОО Apple Inc</span>?
            </p>
            <p class="text-center text-lg font-light">
              Управляйте страницей своей компании и отвечайте на отзывы
              сотрудников от имени работодателя
            </p>
            <button
              class="bg-skyblue text-white rounded-lg px-6 py-3 w-full text-lg"
            >
              Привязать
            </button>
          </div>
        </Pane>
        <last-reviews-sidebar :reviews="lastReviews" title="Последние отзывы" />
        <last-reviews-sidebar :reviews="lastReviews" title="Лучшие отзывы" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyId: this.$route.params.id,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-with-sidebar {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
}
</style>
