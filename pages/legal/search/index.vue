<template>
  <div class="mt-4">
    <div class="bg-white rounded-lg p-4 px-8 flex items-center justify-between">
      <div class="flex items-center space-x-8 text-lg">
        <p class="text-accentGray">Вы искали:</p>
        <p class="font-semibold text-xl capitalize">{{ searchValue }}</p>
      </div>
      <div class="text-lg">
        <p>
          Найдено
          <span class="text-deepPurple">{{ entities.length }} компаний</span>
        </p>
      </div>
    </div>
    <ul class="space-y-4 mt-4">
      <li v-for="(entity, index) in entities" :key="entity.id">
        <a :href="`/legal/company/${entity.id}`">
          <company-entity :index="index + 1" :company-name="entity.name" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import CompanyEntity from '../../../components/SearchEntities/CompanyEntity.vue';

export default {
  components: { CompanyEntity },
  async fetch() {
    this.searchValue = this.$route.query.search;
    this.entities = await this.$axios.$get(
      `/Company/SearchCompanies?search=${this.searchValue}&limit=20`
    );
    console.log(this.entities);
  },
  data() {
    return { entities: [], searchValue: '', loading: false };
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
