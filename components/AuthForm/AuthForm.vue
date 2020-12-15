<template>
  <div class="px-16">
    <form>
      <div class="space-y-4">
        <div>
          <label for="login" class="hidden">Login</label>
          <div
            class="flex bg-lightgray text-darkgray h-16 px-4 rounded-xl items-center space-x-4"
          >
            <font-awesome-icon class="text-xl" :icon="['fas', 'user']" />
            <input
              id="login"
              type="text"
              name="login"
              class="bg-transparent w-full h-full outline-none"
              placeholder="Введите номер телефона либо вашу почту"
            />
          </div>
        </div>
        <div>
          <label for="password" class="hidden">password</label>
          <div
            class="flex bg-lightgray text-darkgray h-16 px-4 rounded-xl items-center space-x-4"
          >
            <font-awesome-icon class="text-xl" :icon="['fas', 'key']" />
            <input
              id="password"
              type="text"
              name="password"
              class="bg-transparent w-full h-full outline-none"
              placeholder="Введите пароль"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
