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
              <star-rating-input
                :grade="evaluation"
                @change="changeEvaluation"
              />
            </div>
          </div>
          <div
            v-if="!$v.evaluation.valid && $v.evaluation.$dirty"
            class="error"
          >
            Поставьте вашу оценку
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
            <div class="w-full">
              <textarea
                id="reviewText"
                v-model="$v.reviewText.$model"
                name="reviewText"
                rows="4"
                cols="50"
                class="bg-lightgray text-darkgray p-4 rounded-lg w-full"
                placeholder="Введите текст отзыва..."
              >
              </textarea>

              <div
                v-if="!$v.reviewText.required && $v.reviewText.$dirty"
                class="error"
              >
                Текст отзыва обязателен
              </div>
              <div
                v-if="!$v.reviewText.minLength && $v.reviewText.$dirty"
                class="error"
              >
                Отзыв должен состоять хотя бы из 10 символов
              </div>
            </div>
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
              <fieldset class="flex space-x-2 flex-col">
                <input
                  id="Plus"
                  v-model="$v.features.currentPlus.$model"
                  class="px-4 p-2 bg-lightgray text-accentGray flex items-center w-full rounded-lg"
                  type="text"
                  name="Plus"
                  placeholder="Введите плюсы компании"
                  @input="$v.features.currentPlus.$reset()"
                  @blur="$v.features.currentPlus.$touch()"
                  @keyup.enter.prevent="addFeature('pluses')"
                />
                <div
                  v-if="!$v.features.plusesAmount"
                  class="text-darkgray flex items-center space-x-2 mt-2 text-sm"
                >
                  <font-awesome-icon :icon="['fas', 'info']" />
                  <p>Введите по крайней мере один плюс</p>
                </div>
                <div
                  v-if="
                    !$v.features.currentPlus.minLength &&
                    $v.features.currentPlus.$dirty
                  "
                  class="error"
                >
                  Отзыв должен состоять хотя бы из 10 символов
                </div>
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
              <fieldset class="flex space-x-2 flex-col">
                <!-- <tr-input
                  v-model="features.currentMinus"
                  :name="minuses"
                  class="flex-grow"
                  :placeholder="'Введите минусы компании'"
                  @keyup.enter="addFeature('minuses')"
                /> -->
                <input
                  id="minus"
                  v-model="$v.features.currentMinus.$model"
                  type="text"
                  class="px-4 p-2 bg-lightgray text-accentGray flex items-center w-full rounded-lg"
                  name="minus"
                  placeholder="Введите минусы компании"
                  @input="$v.features.currentMinus.$reset()"
                  @blur="$v.features.currentMinus.$touch()"
                  @keyup.enter.prevent="addFeature('minuses')"
                />

                <div
                  v-if="!$v.features.minusesAmount"
                  class="text-darkgray flex items-center space-x-2 mt-2 text-sm"
                >
                  <font-awesome-icon :icon="['fas', 'info']" />
                  <p>Введите по крайней мере один минус</p>
                </div>
                <div
                  v-if="
                    !$v.features.currentMinus.minLength &&
                    $v.features.currentMinus.$dirty
                  "
                  class="error"
                >
                  Отзыв должен состоять хотя бы из 10 символов
                </div>
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
          <input
            class="bg-deepPurple text-white p-4 rounded-lg w-full text-lg"
            type="button"
            value="Отправить"
            @click="sendReview"
          />
        </form>
      </div>
    </Pane>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import StarRatingInput from '../StarRatingInput/StarRatingInput.vue';
import TrInput from '../TrInput/TrInput.vue';
export default {
  components: { TrInput, StarRatingInput },
  data() {
    return {
      evaluation: 0,
      reviewText: '',
      features: {
        currentPlus: '',
        currentMinus: '',
        pluses: [],
        minuses: [],
      },
    };
  },
  validations: {
    evaluation: {
      valid() {
        return this.evaluation > 0;
      },
    },
    reviewText: {
      required,
      minLength: minLength(10),
    },
    features: {
      plusesAmount() {
        return this.features.pluses.length >= 1;
      },
      minusesAmount() {
        return this.features.minuses.length >= 1;
      },
      currentPlus: {
        minLength: minLength(10),
      },
      currentMinus: {
        minLength: minLength(10),
      },
    },
  },
  computed: {
    formatedFeatures() {
      // add review requires only string values for featuers property so instead of array we add formatted string divided by special character configures in nuxt config
      const formatedPluses = this.features.pluses.join(
        this.$config.featuresDivider
      );
      const formatedMinuses = this.features.minuses.join(
        this.$config.featuresDivider
      );
      return {
        pluses: formatedPluses,
        minuses: formatedMinuses,
      };
    },
  },
  methods: {
    addFeature(type) {
      this.$v.features.$touch();
      const currentFeature =
        type === 'minuses'
          ? this.features.currentMinus
          : this.features.currentPlus;
      const validPlus = !this.$v.features.currentPlus.$invalid;
      const validMinus = !this.$v.features.currentMinus.$invalid;
      if (type === 'minuses') {
        if (!validMinus) return;

        this.features.currentMinus = '';
      }
      if (type === 'pluses') {
        if (!validPlus) return;

        this.features.currentPlus = '';
      }

      this.features[type].push(currentFeature);
    },
    removeFeature(type, index) {
      this.features[type].splice(index, 1);
    },
    sendReview() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.$emit('on-review', {
          evaluation: this.evaluation,
          reviewText: this.reviewText,
          pluses: this.formatedFeatures.pluses,
          minuses: this.formatedFeatures.minuses,
        });
      }
    },
    changeEvaluation(value) {
      this.$v.evaluation.$model = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  @apply text-red-500;
}
</style>
