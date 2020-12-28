<template>
  <form class="p-6 px-8 space-y-4" @submit.prevent="submitForm">
    <div>
      <div
        class="p-4 bg-lightgray text-accentGray flex items-center space-x-3 rounded-lg"
      >
        <font-awesome-icon class="text-xl" :icon="['fas', 'phone']" />
        <input
          v-model="$v.phone.$model"
          v-mask="'7(###)###-##-##'"
          class="bg-transparent outline-none w-full"
          placeholder="Номер телефона"
          type="text"
        />
      </div>
    </div>
    <div
      v-if="!$v.phone.required && $v.phone.$dirty"
      class="text-red-500 text-sm"
    >
      Обязательное поле
    </div>
    <div
      v-if="!$v.phone.minLength && $v.phone.$dirty"
      class="text-red-500 text-sm"
    >
      Невалидный номер телефона
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
    <div class="flex justify-between">
      <button
        class="bg-none text-deepPurple underline"
        @click.prevent="forgotPassword"
      >
        Забыли пароль?
      </button>
      <button
        class="bg-none text-deepPurple underline"
        @click.prevent="notRegistered"
      >
        Не зарегестрированы?
      </button>
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
        class="bg-deepPurple text-white p-4 w-full rounded-lg font-light"
        value="Войти"
      />
    </div>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
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
      phone: '',
      password: '',
    };
  },
  validations: {
    phone: {
      required,
      minLength: minLength(11),
    },
    password: {
      required,
    },
  },
  methods: {
    submitForm() {
      const retrievePhoneFromMaskedPhone = () => {
        const regex = /\d/gm;
        const str = this.phone;
        let m;
        const res = [];
        while ((m = regex.exec(str)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }

          // The result can be accessed through the `m`-variable.
          m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            res.push(match);
          });
        }
        return res.join('');
      };
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        const actualPhoneNumber = retrievePhoneFromMaskedPhone(this.phone);
        console.log(actualPhoneNumber, this.password);
        this.onSubmit({ phone: actualPhoneNumber, password: this.password });
      }
    },
    cancelClick() {
      this.$emit('cancel');
    },
    forgotPassword() {
      this.$emit('forgot-password');
    },
    notRegistered() {
      this.$emit('notRegistered');
    },
  },
};
</script>

<style lang="scss" scoped></style>
