<template>
  <ul class="flex flex-col justify-between">
    <top-row
      v-for="(row, index) in table"
      :key="index"
      :index="index + 1"
      :company-name="row.companyName"
      :company-type="row.companyType"
      :rating="row.rating"
      :reviews-amount="row.reviewsAmount"
      :highlighted-index="index < 3"
    />
  </ul>
</template>

<script>
import TopRow from './TopRow.vue';

export default {
  components: { TopRow },
  props: {
    table: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.table);
  },
};
</script>

<style lang="scss" scoped></style>
