<template>
  <div class="container">
    <h1 class="text-2xl font-bold">Hello world</h1>
    <h1 class="text-2xl font-bold">Hello world</h1>
    <h1 class="text-2xl font-bold">Hello world</h1>
    <p>Icons</p>
    <font-awesome-icon
      class="text-6xl text-yellow-700"
      :icon="['fab', 'linkedin']"
    />
    <font-awesome-icon :icon="['fab', 'github']" />
    <font-awesome-icon :icon="['fab', 'facebook']" />
    <font-awesome-icon :icon="['fas', 'coffee']" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
