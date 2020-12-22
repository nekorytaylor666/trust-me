<template>
  <div class="flex flex-col">
    <label :for="name" class="hidden">{{ label ? label : name }}</label>
    <div
      class="p-4 bg-lightgray text-accentGray flex items-center space-x-3 rounded-lg"
    >
      <font-awesome-icon class="text-xl" :icon="icon" />
      <input
        :id="name"
        :type="type"
        :name="name"
        :value="value"
        class="bg-transparent outline-none w-full"
        :placeholder="placeholder ? placeholder : `Ваш ${name}`"
        @input="handleInput($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    icon: {
      type: Array,
      required: false,
      default() {
        return ['', ''];
      },
    },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
  },
  data() {
    return { content: this.value };
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
