<template>
  <div>
    <div class="grid grid-cols-2 text-xl">
      <button
        :class="`outline-none focus:outline-none py-4 px-6 border-b-2  text-center ${
          currentForm === 'login'
            ? 'text-deepPurple border-deepPurple'
            : 'border-lightgray text-gray-500'
        }`"
        @click="changeForm('login')"
      >
        Войти
      </button>
      <button
        :class="`outline-none focus:outline-none py-4 px-6 border-b-2  text-center ${
          currentForm === 'registration'
            ? 'text-deepPurple border-deepPurple'
            : 'border-lightgray text-gray-500'
        }`"
        @click="changeForm('registration')"
      >
        Регистрация
      </button>
    </div>
    <new-register-form
      v-if="currentForm === 'registration'"
      :on-submit="onRegistrationSubmit"
      :on-code-send="onSendCodeRegistration"
      @cancel="cancelForm"
    />
    <new-login-form
      v-if="currentForm === 'login'"
      :on-submit="onLoginSubmit"
      @cancel="cancelForm"
    />
    <p v-if="loading">Loading...</p>
    <div v-if="error" class="mb-4">
      <p class="text-red-500 text-center">{{ error }}</p>
    </div>
    <div class="p-4 border-t-2 border-lightgray">
      <social-login-button @click="onFacebookLogin"
        >facebook</social-login-button
      >
    </div>
  </div>
</template>

<script>
import NewLoginForm from '../LoginForm/NewLoginForm.vue';
import NewRegisterForm from '../RegisterForm/NewRegisterForm.vue';
import SocialLoginButton from '../SocialLoginButton/SocialLoginButton.vue';
export default {
  components: { NewRegisterForm, NewLoginForm, SocialLoginButton },
  props: {
    initialForm: { type: String, default: 'registration' },
  },
  data() {
    return {
      currentForm: this.initialForm,
      error: '',
      loading: false,
    };
  },

  methods: {
    changeForm(form) {
      this.currentForm = form;
    },
    cancelForm() {
      this.$emit('close');
    },
    async onFacebookLogin(formdata) {
      const res = await this.$auth.loginWith('facebook');
      console.log(res);
    },
    async onGoogleLogin(formdata) {
      const res = await this.$auth.loginWith('google');
      console.log(res);
    },
    async onSendCodeRegistration(formData) {
      try {
        this.error = '';
        await this.$axios.$post('/Account/Register', {
          phone: formData.phoneNumber,
          password: formData.password,
          typeUser: 1,
        });
      } catch (error) {
        this.error = error.response.data.Error;
      }
    },
    async onRegistrationSubmit(formData) {
      try {
        this.error = '';
        console.log(formData);
        const res = await this.$axios.$post('/Account/VerifyPhone', {
          phone: formData.phoneNumber,
          code: formData.code,
        });
        const resLogin = await this.$auth.loginWith('local', {
          data: { phone: formData.phoneNumber, password: formData.password },
        });
        console.log(res, resLogin);
        this.$emit('close');
      } catch (error) {
        this.error = 'Неверный код';
      }
    },
    async onLoginSubmit(formData) {
      try {
        this.error = '';
        await this.$auth.loginWith('local', {
          data: { ...formData },
        });

        this.$emit('close');
      } catch (error) {
        this.error = 'Неправильный логин или пароль';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
