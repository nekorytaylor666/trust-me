/* eslint-disable nuxt/no-globals-in-created */
<template>
  <nav id="navbar-container">
    <div class="bg-lightgray">
      <div class="flex items-center justify-between container mx-auto">
        <ul class="flex flex-grow">
          <li>
            <NuxtLink to="/legal">
              <div class="link-container py-4 w-48">
                <div
                  class="link-content flex items-center justify-center text-sm px-2 border-right border-gray-700"
                >
                  <font-awesome-icon
                    class="mr-2"
                    :icon="['fas', 'briefcase']"
                  />
                  <p>Юридические лица</p>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/physical">
              <div class="link-container py-4 w-48">
                <div
                  class="link-content flex items-center justify-center text-sm px-2 border-right border-gray-700"
                >
                  <font-awesome-icon class="mr-2" :icon="['fas', 'user']" />
                  <p>Физические лица</p>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/places">
              <div class="link-container py-4 w-48">
                <div
                  class="link-content flex items-center justify-center text-sm px-2 border-right border-gray-700"
                >
                  <font-awesome-icon
                    class="mr-2"
                    :icon="['fas', 'map-marked-alt']"
                  />
                  <p>Места</p>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/items">
              <div class="link-container py-4 w-48">
                <div
                  class="link-content flex items-center justify-center text-sm px-2 border-right border-gray-700"
                >
                  <font-awesome-icon
                    class="mr-2"
                    :icon="['fas', 'shopping-bag']"
                  />
                  <p>Товары</p>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users">
              <div class="link-container py-4 w-48">
                <div
                  class="link-content flex items-center justify-center text-sm px-2"
                >
                  <font-awesome-icon class="mr-2" :icon="['fas', 'user']" />
                  <p>Пользователи</p>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center space-x-8">
          <div
            class="flex items-center justify-center rounded-2xl text-sm bg-white text-darkgray py-2 px-4 space-x-3"
          >
            <font-awesome-icon
              class="text-xl text-blue-500"
              :icon="['fas', 'life-ring']"
            />
            <p>Предложения / поддержка</p>
          </div>
          <div class="flex items-center space-x-2">
            <img
              class="object-contain w-6 h-6"
              src="~/assets/language-icons/russia.png"
              alt="ru"
            />
            <p>RU</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </div>
        </div>
      </div>
      <div id="navbar" class="bg-white">
        <div class="flex container mx-auto py-6 justify-between">
          <div class="flex items-center">
            <div class="px-6 border-right">
              <img src="~/assets/Logo.png" alt="logo" />
            </div>
            <div class="flex items-center space-x-2 pl-6">
              <p>г.Нур-султан</p>
              <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </div>
            <div
              class="flex items-center bg-lightgray space-x-3 py-2 px-4 rounded-xl ml-6"
            >
              <font-awesome-icon
                class="text-xl text-blue-500"
                :icon="['fas', 'search']"
              />
              <input
                id="search"
                type="text"
                name="search"
                class="bg-transparent w-64 outline-none font-light"
                placeholder="Поиск по БИН / Наименованию"
              />
            </div>
          </div>
          <div class="flex items-center space-x-8">
            <button
              class="text-blue-500 underline"
              @click="signupButtonClick('registration')"
            >
              Регистрация
            </button>
            <button
              class="border-blue-500 border-2 rounded-xl py-2 px-4 flex items-center space-x-2 text-blue-500"
              href="#"
              @click="signupButtonClick('login')"
            >
              <font-awesome-icon
                class="text-xl text-blue-500"
                :icon="['fas', 'user']"
              />
              <p>Войти</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal />
  </nav>
</template>

<script>
import AuthForm from './AuthForm/AuthForm.vue';
export default {
  data() {
    return {
      sticky: 0,
    };
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    const navbar = document.getElementById('navbar');
    // init a offset y to sticky variable

    this.sticky = navbar.offsetTop;
  },
  methods: {
    signupButtonClick(formType) {
      this.$modal.show(
        AuthForm,
        { initialForm: formType },
        {
          classes: 'rounded-2xl bg-white shadow-lg',
          transition: 'pop-out',
          width: '450',
          height: 'auto',
          scrollable: true,
        }
      );
    },
    handleScroll(event) {
      //  to prevent collisions from sticking navbar we need to add padding to next div after nav
      //  that's why we get navbar container and add style stickyoffset with padding for next element
      const navbar = document.getElementById('navbar');
      const navbarContainer = document.getElementById('navbar-container');

      if (window.pageYOffset >= this.sticky) {
        navbar.classList.add('sticky');
        navbar.classList.add('shadow-md');
        navbarContainer.classList.add('stickyOffset');
      } else {
        navbar.classList.remove('sticky');
        navbar.classList.remove('shadow-md');
        navbarContainer.classList.remove('stickyOffset');
      }
    },
  },
};
</script>

<style lang="scss">
.border-right {
  border-right: 1px solid #d0d0d0;
}

.sticky {
  @apply fixed top-0 w-full;
}

.stickyOffset + div {
  padding-top: 100px;
}

.link-container {
  transition: all ease-in-out 0.2s;
}

.nuxt-link-active {
  .link-container {
    background-color: #0085ff;
    color: white;
    .link-content {
      border: none;
    }
  }
}
.nuxt-link-exact-active {
  .link-container {
    background-color: #0085ff;
    color: white;
    .link-content {
      border: none;
    }
  }
}
</style>
