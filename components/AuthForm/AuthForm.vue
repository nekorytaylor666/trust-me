<template>
  <div>
    <div class="grid grid-cols-2 text-xl">
      <button
        :class="`outline-none focus:outline-none py-4 px-6 border-b-2  text-center ${
          currentForm === 'login'
            ? 'text-skyblue border-skyblue'
            : 'border-lightgray text-gray-500'
        }`"
        @click="changeForm('login')"
      >
        Войти
      </button>
      <button
        :class="`outline-none focus:outline-none py-4 px-6 border-b-2  text-center ${
          currentForm === 'registration'
            ? 'text-skyblue border-skyblue'
            : 'border-lightgray text-gray-500'
        }`"
        @click="changeForm('registration')"
      >
        Регистрация
      </button>
    </div>
    <form v-if="currentForm === 'registration'" class="p-6 px-8 space-y-4">
      <div>
        <tr-input
          v-model.trim.lazy="$v.name.$model"
          :lable="'имя'"
          :name="'name'"
          :placeholder="'Ваше имя'"
        />
        <div
          v-if="!$v.name.required && $v.name.$dirty"
          class="text-red-500 text-sm"
        >
          Обязательное поле
        </div>
      </div>

      <div>
        <tr-input
          v-model.trim.lazy="$v.secondName.$model"
          :lable="'фамилия'"
          :name="'secondName'"
          :placeholder="'Ваша фамилия'"
        />
        <div
          v-if="!$v.secondName.required && $v.secondName.$dirty"
          class="text-red-500 text-sm"
        >
          Обязательное поле
        </div>
      </div>
      <div>
        <tr-input
          v-model.trim.lazy="$v.email.$model"
          :lable="'почта'"
          :name="'email'"
          :placeholder="'E-mail'"
        />
        <div
          v-if="!$v.email.required && $v.email.$dirty"
          class="text-red-500 text-sm"
        >
          Обязательное поле
        </div>
        <div
          v-if="!$v.email.email && $v.email.$dirty"
          class="text-red-500 text-sm"
        >
          Должен быть валидным почтовымс адресом
        </div>
      </div>
      <div>
        <tr-input
          v-model.lazy="$v.password.$model"
          :lable="'пароль'"
          :name="'password'"
          :type="'password'"
          :placeholder="`Придумайте пароль`"
        />
        <div
          v-if="!$v.password.required && $v.password.$dirty"
          class="text-red-500 text-sm"
        >
          Обязательное поле
        </div>
        <div
          v-if="!$v.password.minLength && $v.password.$dirty"
          class="text-red-500 text-sm"
        >
          Минимум 8 знаков
        </div>
        <div
          v-if="!$v.password.valid && $v.password.$dirty"
          class="text-red-500 text-sm"
        >
          Минимум 8 знаков, минимум 1 с большим регистром
        </div>
        <p class="text-sm text-accentGray text-center mt-2">
          Минимум 8 знаков, минимум 1 с большим регистром
        </p>
      </div>
      <div>
        <div class="grid gap-4 grid-cols-2">
          <tr-input
            v-model.trim.lazy="$v.phoneNumber.$model"
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
        <div
          v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
          class="text-red-500 text-sm"
        >
          Обязательное поле
        </div>
      </div>

      <div>
        <tr-input
          v-model.trim.lazy="$v.code.$model"
          :name="'code'"
          :placeholder="'Введите 4-х значный код сюда'"
        />

        <div
          v-if="!$v.code.numeric && $v.code.$dirty"
          class="text-red-500 text-sm"
        >
          Принимаются только числа
        </div>
      </div>
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
        <input
          value="Регистрация"
          type="submit"
          class="bg-accentGray text-white p-4 w-full rounded-lg font-light"
          @click.prevent="submitForm"
        />
      </div>
    </form>
    <form v-if="currentForm === 'login'" class="p-6 px-8 space-y-4">
      <tr-input
        :lable="'имя'"
        :name="'name'"
        :icon="['fas', 'user']"
        :placeholder="'Введите номер телефона либо вашу почту'"
      />

      <tr-input
        :lable="'пароль'"
        :name="'password'"
        :icon="['fas', 'key']"
        :type="'password'"
        :placeholder="`Придумайте пароль`"
      />

      <div class="grid gap-4 grid-cols-2">
        <button
          class="bg-lightgray border-gray-400 border-2 text-darkgray p-4 w-full rounded-lg font-light"
        >
          Отменить
        </button>
        <button class="bg-skyblue text-white p-4 w-full rounded-lg font-light">
          Войти
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, numeric, minLength } from 'vuelidate/lib/validators';
import TrInput from '../TrInput/TrInput.vue';

export default {
  components: { TrInput },
  data() {
    return {
      currentForm: 'login',
      name: '',
      secondName: '',
      email: '',
      password: '',
      phoneNumber: '',
      code: null,
      codeSent: false,
    };
  },
  validations: {
    name: {
      required,
    },
    secondName: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      valid(value) {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        return containsUppercase && containsLowercase && containsNumber;
      },
    },
    phoneNumber: {
      required,
    },
    code: {
      numeric,
    },
  },
  methods: {
    changeForm(form) {
      this.currentForm = form;
    },
    submitForm() {
      console.log(this.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
