<template>
  <nav>
    <div class="flex bg-lightgray items-center justify-between">
      <ul class="flex flex-grow">
        <li class="w-48">
          <NuxtLink to="/">
            <div
              class="flex items-center justify-center text-sm px-2 py-4 bg-blue-600 text-white"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'briefcase']" />
              <p>Юридические лица</p>
            </div>
          </NuxtLink>
        </li>
        <li class="py-4 w-48">
          <NuxtLink to="/">
            <div
              class="flex items-center justify-center text-sm px-2 border-right border-gray-700"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'user']" />
              <p>Юридические</p>
            </div>
          </NuxtLink>
        </li>
        <li class="py-4 w-48">
          <NuxtLink to="/">
            <div
              class="flex items-center justify-center text-sm px-2 border-right border-gray-700"
            >
              <font-awesome-icon
                class="mr-2"
                :icon="['fas', 'map-marked-alt']"
              />
              <p>Юридические лица</p>
            </div>
          </NuxtLink>
        </li>
        <li class="py-4 w-48">
          <NuxtLink to="/">
            <div
              class="flex items-center justify-center text-sm px-2 border-right border-gray-700"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'shopping-bag']" />
              <p>Юридические лица</p>
            </div>
          </NuxtLink>
        </li>
        <li class="py-4 w-48">
          <NuxtLink to="/">
            <div class="flex items-center justify-center text-sm px-2">
              <font-awesome-icon class="mr-2" :icon="['fas', 'user']" />
              <p>Юридические лица</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center space-x-8">
        <div
          class="flex items-center justify-center rounded-2xl text-sm bg-white text-darkgray py-2 px-4 space-x-3"
        >
          <font-awesome-icon class="text-xl" :icon="['fas', 'life-ring']" />
          <p>Предложения / поддержка</p>
        </div>
        <div class="flex items-center space-x-2">
          <img
            class="object-contain w-8 h-8"
            src="~/assets/language-icons/russia.png"
            alt="ru"
          />
          <p>RU</p>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.border-right {
  border-right: 2px solid #d0d0d0;
}
</style>
