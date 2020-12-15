<template>
  <div>
    <div class="grid grid-cols-2 text-xl">
      <button
        class="py-4 px-6 border-b-2 border-lightgray text-gray-500 text-center"
      >
        Войти
      </button>
      <button
        class="py-2 px-6 border-b-2 text-skyblue border-skyblue text-center"
      >
        Регистрация
      </button>
    </div>
    <form class="p-6 space-y-4">
      <tr-input :lable="'имя'" :name="'name'" :placeholder="'Ваше имя'" />
      <tr-input
        :lable="'фамилия'"
        :name="'secondName'"
        :placeholder="'Ваша фамилия'"
      />
      <tr-input
        :lable="'email'"
        :type="'email'"
        :name="'email'"
        :placeholder="`E-mail`"
      />
      <div>
        <tr-input
          :lable="'пароль'"
          :name="'password'"
          :type="'password'"
          :placeholder="`Придумайте пароль`"
        />
        <p class="text-sm text-accentGray text-center mt-2">
          Минимум 8 знаков, минимум 1 с большим регистром
        </p>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <tr-input
          :lable="'телефон'"
          :name="'phonenumber'"
          :placeholder="'Номер телефона'"
        />
        <button
          class="bg-accentGray text-white p-4 w-full rounded-lg font-light"
        >
          Получить код
        </button>
      </div>
      <tr-input :name="'code'" :placeholder="'Введите 4-х значный код сюда'" />
      <div class="flex items-center space-x-4">
        <input id="licence" type="checkbox" name="licence" checked />
        <p class="text-sm text-accentGray w-2/3">
          Продолжая регистрацию я принимаю
          <a href="/" class="text-skyblue">пользовательское соглашение</a>
        </p>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <button
          class="bg-lightgray border-gray-400 border-2 text-darkgray p-4 w-full rounded-lg font-light"
        >
          Отменить
        </button>
        <button
          class="bg-accentGray text-white p-4 w-full rounded-lg font-light"
        >
          Регистрация
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import TrInput from '../TrInput/TrInput.vue';
export default {
  components: { TrInput },
};
</script>

<style lang="scss" scoped></style>
