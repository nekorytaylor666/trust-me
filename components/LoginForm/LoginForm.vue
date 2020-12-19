<template>
  <form class="p-6 px-8 space-y-4" @submit.prevent="submitForm">
    <div>
      <tr-input
        v-model.lazy="$v.login.$model"
        :lable="'имя'"
        :name="'login'"
        :icon="['fas', 'user']"
        :placeholder="'Введите номер телефона либо вашу почту'"
      />
      <div
        v-if="!$v.login.required && $v.login.$dirty"
        class="text-red-500 text-sm"
      >
        Обязательное поле
      </div>
    </div>
    <div>
      <tr-input
        v-model.lazy="$v.password.$model"
        :lable="'пароль'"
        :name="'password'"
        :icon="['fas', 'key']"
        :type="'password'"
        :placeholder="`Придумайте пароль`"
      />
      <div
        v-if="!$v.password.required && $v.password.$dirty"
        class="text-red-500 text-sm"
      >
        Обязательное поле
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <button
        class="bg-lightgray border-gray-400 border-2 text-darkgray p-4 w-full rounded-lg font-light"
        @click="cancelClick"
      >
        Отменить
      </button>
      <input
        type="submit"
        class="bg-skyblue text-white p-4 w-full rounded-lg font-light"
        value="Войти"
      />
    </div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import TrInput from '../TrInput/TrInput.vue';
export default {
  components: { TrInput },
  props: {
    onSubmit: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      login: '',
      password: '',
    };
  },
  validations: {
    login: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.onSubmit({ login: this.login, password: this.password });
      }
    },
    cancelClick() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss" scoped></style>
