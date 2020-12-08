<template>
  <div class="py-4">
    <Pane>
      <ul class="flex justify-evenly">
        <li
          class="flex justify-center text-center p-6 border-b-2 border-blue-600 flex-1 cursor-pointer"
        >
          <p>Hello world</p>
        </li>
        <li
          class="flex justify-center text-center p-6 border-b-2 border-lightgray flex-1 cursor-pointer"
        >
          <p>Hello world</p>
        </li>
        <li
          class="flex justify-center text-center p-6 border-b-2 border-lightgray flex-1 cursor-pointer"
        >
          <p>Hello world</p>
        </li>
        <li
          class="flex justify-center text-center p-6 border-b-2 border-lightgray flex-1 cursor-pointer"
        >
          <p>Hello world</p>
        </li>
        <li
          class="flex justify-center text-center p-6 border-b-2 border-lightgray flex-1 cursor-pointer"
        >
          <p>Hello world</p>
        </li>
      </ul>
      <div class="flex justify-between p-6 border-b-2 border-lightgray">
        <div class="text-skyblue">
          <NuxtLink to="/"> Смотреть весь список</NuxtLink>
        </div>
        <h1>Топ лучших компаний</h1>
        <div class="flex items-center space-x-2 text-skyblue">
          <p>За последнюю неделю</p>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
      </div>
      <ul class="flex flex-col justify-between">
        <li class="toplist-row py-4 divide-x-2 divide-lightgray">
          <p
            class="text-center text-skyblue text-xl flex items-center justify-center font-semibold px-4"
          >
            01
          </p>
          <div class="flex justify-center items-center space-x-4 px-4">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/language-icons/russia.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">Apple Inc.</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
          </div>
          <div class="flex justify-center items-center font-semibold px-4">
            <p>27 отзывов</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <div class="flex items-center space-x-2">
              <p class="text-center text-skyblue text-xl font-semibold">5</p>
              <font-awesome-icon
                class="text-2xl text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
        <li class="toplist-row py-4 divide-x-2 divide-lightgray">
          <p
            class="text-center text-skyblue text-xl flex items-center justify-center font-semibold px-4"
          >
            02
          </p>
          <div class="flex justify-center items-center space-x-4 px-4">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/language-icons/russia.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">Apple Inc.</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
          </div>
          <div class="flex justify-center items-center font-semibold px-4">
            <p>27 отзывов</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <div class="flex items-center space-x-2">
              <p class="text-center text-skyblue text-xl font-semibold">5</p>
              <font-awesome-icon
                class="text-2xl text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
        <li class="toplist-row py-4 divide-x-2 divide-lightgray">
          <p
            class="text-center text-skyblue text-xl flex items-center justify-center font-semibold px-4"
          >
            03
          </p>
          <div class="flex justify-center items-center space-x-4 px-4">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/language-icons/russia.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">Apple Inc.</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
          </div>
          <div class="flex justify-center items-center font-semibold px-4">
            <p>27 отзывов</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <div class="flex items-center space-x-2">
              <p class="text-center text-skyblue text-xl font-semibold">5</p>
              <font-awesome-icon
                class="text-2xl text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
        <li class="toplist-row py-4 divide-x-2 divide-lightgray">
          <p
            class="text-center text-darkgray text-xl flex items-center justify-center font-semibold px-4"
          >
            04
          </p>
          <div class="flex justify-center items-center space-x-4 px-4">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/language-icons/russia.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">Apple Inc.</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
          </div>
          <div class="flex justify-center items-center font-semibold px-4">
            <p>27 отзывов</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <div class="flex items-center space-x-2">
              <p class="text-center text-skyblue text-xl font-semibold">5</p>
              <font-awesome-icon
                class="text-2xl text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
        <li class="toplist-row py-4 divide-x-2 divide-lightgray">
          <p
            class="text-center text-darkgray text-xl flex items-center justify-center font-semibold px-4"
          >
            05
          </p>
          <div class="flex justify-center items-center space-x-4 px-4">
            <div class="p-4 rounded-2xl bg-lightgray">
              <img
                class="h-8 w-8 object-contain"
                src="~/assets/language-icons/russia.png"
                alt="brand logo"
              />
            </div>
            <p class="text-xl font-semibold">Apple Inc.</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <p class="text-left text-darkgray">Сельское хозяйство и рыба</p>
          </div>
          <div class="flex justify-center items-center font-semibold px-4">
            <p>27 отзывов</p>
          </div>
          <div class="flex justify-center items-center px-4">
            <div class="flex items-center space-x-2">
              <p class="text-center text-skyblue text-xl font-semibold">5</p>
              <font-awesome-icon
                class="text-2xl text-accentYellow"
                :icon="['fas', 'star']"
              />
            </div>
          </div>
        </li>
      </ul>
    </Pane>
  </div>
</template>

<script>
import Pane from '../../components/Pane.vue';

export default {
  components: { Pane },
};
</script>

<style lang="scss" scoped>
.toplist-row {
  display: grid;
  width: 100%;
  grid-template-columns: 100px repeat(4, minmax(100px, auto));
  grid-template-rows: 1fr;
}
</style>
