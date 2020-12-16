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
    <register-form v-if="currentForm === 'registration'" />
    <login-form v-if="currentForm === 'login'" />
  </div>
</template>

<script>
import LoginForm from '../LoginForm/LoginForm.vue';
import RegisterForm from '../RegisterForm/RegisterForm.vue';
export default {
  components: { RegisterForm, LoginForm },
  data() {
    return {
      currentForm: 'login',
    };
  },

  methods: {
    changeForm(form) {
      this.currentForm = form;
    },
  },
};
</script>

<style lang="scss" scoped></style>
