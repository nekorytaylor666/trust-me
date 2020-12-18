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
    <login-form v-if="currentForm === 'login'" :on-submit="onLoginSubmit" />
  </div>
</template>

<script>
import LoginForm from '../LoginForm/LoginForm.vue';
import RegisterForm from '../RegisterForm/RegisterForm.vue';
export default {
  components: { RegisterForm, LoginForm },
  props: {
    initialForm: { type: String, default: 'registration' },
  },
  data() {
    return {
      currentForm: this.initialForm,
    };
  },

  methods: {
    changeForm(form) {
      this.currentForm = form;
    },
    onLoginSubmit(formData) {
      // this.$auth.loginWith('local', {
      //   data: { ...formData },
      // });
      this.$axios.post('http://185.113.134.108/api/Account/Login', {
        login: 'admin228',
        password: 'Nekorytaylor123',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
