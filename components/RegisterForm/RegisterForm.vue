<template>
  <form class="p-6 px-8 space-y-4">
    <div>
      <tr-input
        v-model.trim.lazy="$v.firstName.$model"
        :lable="'имя'"
        :name="'firstName'"
        :placeholder="'Ваше имя'"
      />
      <div
        v-if="!$v.firstName.required && $v.firstName.$dirty"
        class="text-red-500 text-sm"
      >
        Обязательное поле
      </div>
    </div>

    <div>
      <tr-input
        v-model.trim.lazy="$v.lastName.$model"
        :lable="'фамилия'"
        :name="'lastName'"
        :placeholder="'Ваша фамилия'"
      />
      <div
        v-if="!$v.lastName.required && $v.lastName.$dirty"
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
        v-if="
          (!$v.password.valid || !$v.password.minLength) && $v.password.$dirty
        "
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
        <!-- <tr-input
          v-model.trim.lazy="$v.phoneNumber.$model"
          :lable="'телефон'"
          :name="'phonenumber'"
          :placeholder="'Номер телефона'"
        /> -->
        <div
          class="p-4 bg-lightgray text-accentGray flex items-center space-x-3 rounded-lg"
        >
          <input
            v-model="$v.phoneNumber.$model"
            v-mask="'7(###)###-##-##'"
            class="bg-transparent outline-none w-full"
            placeholder="Номер телефона"
            type="text"
          />
        </div>

        <base-button :disabled="$v.$invalid" @click="sendCode">
          Получить код
        </base-button>
      </div>
      <div
        v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
        class="text-red-500 text-sm"
      >
        Обязательное поле
      </div>
      <div
        v-if="!$v.phoneNumber.minLength && $v.phoneNumber.$dirty"
        class="text-red-500 text-sm"
      >
        Невалидный номер телефона
      </div>
    </div>

    <div>
      <!-- <tr-input
        v-model.trim.lazy="$v.code.$model"
        :name="'code'"
        :placeholder="'Введите 4-х значный код сюда'"
      /> -->
      <div
        class="p-4 bg-lightgray text-accentGray flex items-center space-x-3 rounded-lg"
      >
        <input
          v-model="$v.code.$model"
          v-mask="'####'"
          class="bg-transparent outline-none w-full text-center"
          placeholder="Введите 4-х значный код сюда"
          type="text"
        />
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <input id="licence" type="checkbox" name="licence" checked />
      <p class="text-sm text-accentGray w-2/3">
        Продолжая регистрацию я принимаю
        <a href="/" class="text-deepPurple">пользовательское соглашение</a>
      </p>
    </div>

    <div class="grid gap-4 grid-cols-2">
      <button
        class="bg-lightgray border-gray-400 border-2 text-darkgray p-4 w-full rounded-lg font-light"
        @click="cancelClick"
      >
        Отменить
      </button>

      <base-button :disabled="!isFormAndCodeValid" @click="submitForm">
        Регистрация
      </base-button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import BaseButton from '../BaseButton/BaseButton.vue';
import TrInput from '../TrInput/TrInput.vue';

export default {
  components: { TrInput, BaseButton },
  props: {
    onSubmit: {
      type: Function,
      default: () => {},
    },
    onCodeSend: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      code: '',
      codeSent: false,
      submitStatus: null,
    };
  },
  computed: {
    isCodeInputed() {
      const codeLength = this.code.length;
      return codeLength === 4;
    },
    isPhoneInputed() {
      const phoneLength = this.phoneNumber.length;
      return phoneLength === 11;
    },
    isFormAndCodeValid() {
      const isCodeInputed = this.isCodeInputed;
      const isFormInvalid = this.$v.$invalid;
      console.log(!isFormInvalid && isCodeInputed);
      return !isFormInvalid && isCodeInputed;
    },
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
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
      minLength: minLength(11),
    },
    code: {},
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        console.log('code is being verified');
        this.onSubmit({
          phoneNumber: this.phoneNumber,
          code: this.code,
          firstName: this.firstName,
          password: this.password,
          email: this.email,
          lastName: this.lastName,
        });
      }
    },
    sendCode() {
      const retrievePhoneFromMaskedPhone = () => {
        const regex = /\d/gm;
        const str = `7(778)397-39-90`;
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
        const actualPhoneNumber = retrievePhoneFromMaskedPhone(
          this.phoneNumber
        );
        this.onCodeSend({
          firstName: this.firstName,
          password: this.password,
          email: this.email,
          lastName: this.lastName,
          phoneNumber: actualPhoneNumber,
        });
      }
    },
    cancelClick() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss" scoped></style>
