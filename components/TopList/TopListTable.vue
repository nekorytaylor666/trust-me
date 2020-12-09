<template>
  <ul class="flex flex-col justify-between">
    <top-row
      :index="1"
      company-name="Apple inc"
      company-type="Сельское хозяйство и рыба"
      :rating="5"
      :reviews-amount="27"
      :highlighted-index="true"
    />
    <top-row
      :index="2"
      company-name="Apple inc"
      company-type="Сельское хозяйство и рыба"
      :rating="4.5"
      :reviews-amount="27"
      :highlighted-index="true"
    />
    <top-row
      :index="3"
      company-name="Apple inc"
      company-type="Сельское хозяйство и рыба"
      :rating="5"
      :reviews-amount="27"
      :highlighted-index="true"
    />
    <top-row
      :index="4"
      company-name="Apple inc"
      company-type="Сельское хозяйство и рыба"
      :rating="5"
      :reviews-amount="27"
    />
    <top-row
      :index="5"
      company-name="Apple inc"
      company-type="Сельское хозяйство и рыба"
      :rating="5"
      :reviews-amount="27"
    />
  </ul>
</template>

<script>
import TopRow from './TopRow.vue';

export default {
  components: { TopRow },
};
</script>

<style lang="scss" scoped></style>
