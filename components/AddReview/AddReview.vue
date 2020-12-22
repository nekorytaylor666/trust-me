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
            >
               At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
            </textarea>
          </div>
          <div class="flex items-center space-x-3 text-darkgray">
            <input id="anonymous" type="checkbox" name="anonymous" />
            <label for="anonymous">Опубликовать Анонимно</label>
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
};
</script>

<style lang="scss" scoped></style>
