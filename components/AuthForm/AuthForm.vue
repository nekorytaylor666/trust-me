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
    <register-form
      v-if="currentForm === 'registration'"
      :on-submit="onRegistrationSubmit"
      :on-code-send="onSendCodeRegistration"
      @cancel="cancelForm"
    />
    <login-form
      v-if="currentForm === 'login'"
      :on-submit="onLoginSubmit"
      @cancel="cancelForm"
    />
    <p v-if="loading">Loading...</p>
    <div v-if="error" class="mb-4">
      <p class="text-red-500 text-center">{{ error }}</p>
    </div>
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
    async onSendCodeRegistration(formData) {
      try {
        console.log('sent code for user', formData.email, formData.phoneNumber);
        await this.$axios.$post('/Account/Register', {
          login: formData.email,
          firstName: formData.firstName,
          lastNume: formData.lastName,
          phone: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
          typeUser: 1,
        });
      } catch (error) {
        this.error =
          'Невозможно создать аккаунт. Попробуйте еще раз через пару минут.';
      }
    },
    async onRegistrationSubmit(formData) {
      console.log('on regis');
      try {
        this.loading = true;
        console.log('verifuing code with', formData);
        const res = await this.$axios.$post('/Account/VerifyPhone', {
          phone: formData.phoneNumber,
          code: formData.code,
        });
        console.log(res);
        setTimeout(async () => {
          try {
            this.loading = false;
            const loginRes = await this.$auth.loginWith('local', {
              data: { login: formData.email, password: formData.password },
            });
            console.log(loginRes);
            this.$emit('close');
          } catch (error) {
            console.log(error);
          }
        }, 1000);
      } catch (error) {
        console.log(error);
        this.error =
          'Невозможно создать аккаунт. Попробуйте еще раз через пару минут.';
      }
    },
    async onLoginSubmit(formData) {
      try {
        await this.$auth.loginWith('local', {
          data: { ...formData },
        });

        this.$emit('close');
      } catch (error) {
        this.error = 'Неправильный логин или пароль.';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
