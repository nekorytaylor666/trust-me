<template>
  <Pane
    ><div class="flex-col">
      <div class="py-4 px-6 bg-skyblue rounded-b-none rounded-lg text-white">
        <div class="flex justify-between items-center space-x-4">
          <div class="flex space-x-6 items-center">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/apple.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">TOO Apple Inc.</p>
          </div>
          <p class="text-lg">Сельское хозяйство</p>
          <NuxtLink to="/" class="flex items-center space-x-2 text-lg"
            ><p>На страницу компаниии</p>
            <font-awesome-icon
              class="text-sm"
              :icon="['fas', 'chevron-right']"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="px-4 py-8">
        <div class="review-card-grid">
          <div class="border-r-2 border-lightgray p-2 pr-10">
            <div class="flex items-center space-x-6 mb-4">
              <img
                class="w-24 h-24 rounded-2xl object-cover"
                src="~/assets/face.jpg"
                alt="avatar"
              />
              <p class="text-xl font-semibold">
                Бекболат <br />
                Нурболат
              </p>
            </div>
            <div class="mb-8">
              <p class="text-lg">
                Отзывов: <span class="text-skyblue">17</span>
              </p>
              <p class="text-lg">
                Репутация: <span class="text-green-500">+1500</span>
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Описание:</h3>
              <p class="text-lg">
                Работаю в Windows стаж работы 3 года, живу в Астане
              </p>
            </div>
          </div>
          <div class="pl-8">
            <div class="flex items-center justify-between">
              <div class="text-xl flex items-center">
                <p class="font-semibold text-accentYellow text-2xl mr-4">4</p>
                <div class="space-x-1">
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
              <p class="text-md">
                11.11.2020 / <span class="text-skyblue">18:21</span>
              </p>
              <div class="flex items-center space-x-4">
                <div
                  class="border-2 w-12 h-12 p-3 flex items-center justify-center border-gray-500 rounded-lg bg-white"
                >
                  <font-awesome-icon
                    class="text-gray-500 text-xl"
                    :icon="['fas', 'bookmark']"
                  />
                </div>
                <div
                  class="border-2 w-12 h-12 p-3 flex items-center justify-center border-gray-500 rounded-lg bg-white"
                >
                  <font-awesome-icon
                    class="text-gray-500 text-xl"
                    :icon="['fas', 'ellipsis-h']"
                  />
                </div>
              </div>
            </div>
            <p class="font-light text-lg leading-8 my-6">
              Lorem ipsum — классический текст-«рыба». Является искажённым
              отрывком из философского трактата Марка Туллия Цицерона «О
              пределах добра и зла», написанного в 45 году до н. э. на латинском
              языке, обнаружение сходства приписывается Ричарду МакКлинтоку.
            </p>
            <div class="space-y-2">
              <ul class="space-y-2">
                <li>
                  <div
                    class="text-green-500 text-lg flex items-center space-x-2"
                  >
                    <div class="w-4 flex justify-center">
                      <font-awesome-icon :icon="['fas', 'check']" />
                    </div>
                    <p>Хороший персонал</p>
                  </div>
                </li>
              </ul>
              <ul class="space-y-2">
                <li>
                  <div class="text-red-500 text-lg flex items-center space-x-2">
                    <div class="w-4 flex justify-center">
                      <font-awesome-icon :icon="['fas', 'times']" />
                    </div>
                    <p>Не удобная входная группа</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-between">
              <div class="h-16 flex items-center space-x-6">
                <img
                  class="w-16 rounded-lg h-full object-cover"
                  src="~/assets/gallery-test.jpg"
                  alt="test"
                />
                <img
                  class="w-16 rounded-lg h-full object-cover"
                  src="~/assets/gallery-test.jpg"
                  alt="test"
                />
                <img
                  class="w-16 rounded-lg h-full object-cover"
                  src="~/assets/gallery-test.jpg"
                  alt="test"
                />
              </div>
              <div class="flex mt-6 items-center space-x-6">
                <div class="text-skyblue flex flex-col items-center">
                  <button
                    value="Ответить"
                    class="flex items-center py-2 h-12 px-4 rounded-xl font-medium border-2 border-skyblue space-x-3 text-skyblue"
                  >
                    <p>Ответить</p>
                    <font-awesome-icon :icon="['fas', 'comment']" />
                  </button>
                  <p>10К коментариев</p>
                </div>
                <div class="text-skyblue flex flex-col items-center">
                  <button
                    class="border-2 w-12 h-12 flex items-center justify-center border-skyblue rounded-lg bg-white"
                  >
                    <font-awesome-icon
                      class="text-skyblue text-xl"
                      :icon="['fas', 'thumbs-up']"
                    />
                  </button>

                  <p>500</p>
                </div>
                <div class="text-gray-500 flex flex-col items-center">
                  <button
                    class="border-2 w-12 h-12 flex items-center justify-center border-gray-500 rounded-lg bg-white"
                  >
                    <font-awesome-icon
                      class="text-xl"
                      :icon="['fas', 'thumbs-down']"
                    />
                  </button>

                  <p>12К</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-6 pr-4 pb-4">
        <button class="justify-center bg-lightgray w-full p-4 rounded-xl">
          <div class="flex items-center justify-center space-x-3">
            <p class="text-darkgray">
              <span class="font-semibold">7 комментариев</span> на данный отзыв,
              раскрыть?
            </p>
            <font-awesome-icon
              class="text-darkgray"
              :icon="['fas', 'chevron-down']"
            />
          </div>
        </button>
        <div class="mt-6 h-16 flex items-center space-x-6">
          <img
            class="w-16 h-full rounded-lg object-cover"
            src="~/assets/gallery-test.jpg"
            alt="test"
          />
          <div
            class="px-6 h-full flex items-center bg-lightgray w-full rounded-lg"
          >
            <input
              id="comment"
              class="text-darkgray bg-transparent h-full w-full outline-none"
              type="text"
              name="comment"
              placeholder="Напишите комментарий..."
            />
          </div>
        </div>
      </div></div
  ></Pane>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.review-card-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
