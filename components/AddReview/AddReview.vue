<template>
  <div>
    <Pane>
      <div class="py-6">
        <div
          class="flex items-center justify-between pb-6 border-b-2 border-lightgray px-8"
        >
          <p class="text-lg w-5/12">
            Чтобы получить больше больше
            <span class="text-deepPurple"> TrustPoints </span>заполните больше
            полей:
          </p>
          <button class="bg-deepPurple text-white px-8 py-2 rounded-lg">
            Расширенная форма
          </button>
        </div>
        <form class="mt-6 space-y-4 px-8">
          <div class="grid grid-cols-2 gap-4">
            <tr-input :placeholder="'Ваша фамилия'" />
            <tr-input :placeholder="'Ваше имя'" />
          </div>
          <div class="flex items-center space-x-3 text-darkgray">
            <input id="anonymous" type="checkbox" name="anonymous" />
            <label for="anonymous">Опубликовать Анонимно</label>
          </div>
        </form>
      </div>
    </Pane>
    <Pane class="mt-4">
      <div class="py-6">
        <div class="pb-6 border-b-2 border-lightgray px-8">
          <p class="text-lg text-center">
            Пожалуйста, расскажите о вашем опыте работы в
            <span class="text-deepPurple"> ТОО “СДМПродакшн”</span>
          </p>
        </div>
        <form class="mt-6 space-y-4 px-8 text-lg">
          <div class="flex items-center">
            <p>Ваша оценка:</p>
            <div class="flex-grow flex justify-center">
              <star-rating :rating="2" />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <p>Текст отзыв:</p>
              <div class="flex-grow flex justify-center">
                <p class="text-accentGray">
                  в тексте вы можете отметить человека
                  <span class="text-deepPurple"> с помощью знака @</span>
                </p>
              </div>
            </div>
            <label for="reviewText" class="hidden">Текст отзыва</label>

            <textarea
              id="reviewText"
              name="reviewText"
              rows="4"
              cols="50"
              class="bg-lightgray text-darkgray p-4 rounded-lg"
              placeholder="Введите текст отзыва..."
            >
            </textarea>
          </div>
          <div>
            <ul class="flex flex-wrap text-accentGray my-4">
              <li class="border-r-2 border-lightgray px-4">
                <div class="flex items-center space-x-2">
                  <p>Photo.png</p>
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </div>
              </li>
              <li class="border-r-2 border-lightgray px-4">
                <div class="flex items-center space-x-2">
                  <p>Photo.png</p>
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </div>
              </li>
              <li class="border-r-2 border-lightgray px-4">
                <div class="flex items-center space-x-2">
                  <p>Photo.png</p>
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </div>
              </li>
              <li class="border-r-2 border-lightgray px-4">
                <div class="flex items-center space-x-2">
                  <p>Photo.png</p>
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </div>
              </li>
            </ul>
            <label for="fileupload">
              <div
                class="flex bg-accentGray text-white w-full p-4 justify-center items-center space-x-2 rounded-lg"
              >
                <p>Прикрепить файл</p>
                <font-awesome-icon :icon="['fas', 'upload']" />
              </div>
            </label>
            <input id="fileupload" type="file" name="file" class="hidden" />
          </div>
          <div>
            <div class="flex items-center space-x-2 text-lg mb-2">
              <font-awesome-icon
                class="text-green-400"
                :icon="['fas', 'check']"
              />
              <p>Плюсы компании:</p>
            </div>
            <div>
              <fieldset class="flex space-x-2">
                <tr-input
                  v-model="features.currentPlus"
                  :name="pluses"
                  class="flex-grow"
                  :placeholder="'Введите плюсы компании'"
                  @keyup.enter="addFeature('pluses')"
                />
                <button
                  class="p-4 bg-deepPurple rounded-md text-white"
                  @click.prevent="addFeature('pluses')"
                >
                  Add
                </button>
              </fieldset>

              <ul class="flex flex-wrap mt-4">
                <li
                  v-for="(plus, index) in features.pluses"
                  :key="plus"
                  class="flex items-center px-4 py-1 rounded-md space-x-2 bg-deepPurple text-white mb-2 mr-2 cursor-pointer"
                  @click.prevent="removeFeature('pluses', index)"
                >
                  <p>{{ plus }}</p>
                  <font-awesome-icon :icon="['fas', 'check']" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2 text-lg mb-2">
              <font-awesome-icon
                class="text-red-500"
                :icon="['fas', 'times']"
              />
              <p>Минусы компании:</p>
            </div>
            <div>
              <fieldset class="flex space-x-2">
                <tr-input
                  v-model="features.currentMinus"
                  :name="minuses"
                  class="flex-grow"
                  :placeholder="'Введите минусы компании'"
                  @keyup.enter="addFeature('minuses')"
                />
                <button
                  class="p-4 bg-deepPurple rounded-md text-white"
                  @click.prevent="addFeature('minuses')"
                >
                  Add
                </button>
              </fieldset>
              <ul class="flex flex-wrap mt-4">
                <li
                  v-for="(minus, index) in features.minuses"
                  :key="index"
                  class="flex items-center px-4 py-1 rounded-md space-x-2 bg-deepPurple text-white mb-2 mr-2 cursor-pointer"
                  @click.prevent="removeFeature('minuses', index)"
                >
                  <p>{{ minus }}</p>
                  <font-awesome-icon :icon="['fas', 'check']" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </Pane>
  </div>
</template>

<script>
import StarRating from '../StarRating/StarRating.vue';
import TrInput from '../TrInput/TrInput.vue';
export default {
  components: { TrInput, StarRating },
  data() {
    return {
      features: {
        currentPlus: '',
        currentMinus: '',
        pluses: ['Адекватность', 'Адекватность'],
        minuses: ['Адекватность', 'Адекватность'],
      },
    };
  },
  methods: {
    addFeature(type) {
      const currentFeature =
        type === 'minuses'
          ? this.features.currentMinus
          : this.features.currentPlus;
      if (type === 'minuses') this.features.currentMinus = '';
      if (type === 'pluses') this.features.currentPlus = '';
      this.features[type].push(currentFeature);
    },
    removeFeature(type, index) {
      this.features[type].splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
