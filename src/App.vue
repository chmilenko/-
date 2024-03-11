<template>
  <div v-if="loading"><LoaderComponent /></div>
  <div v-else>
    <FilterInput v-model:filterValue="filterValue" />
    <div class="container">
      <div v-for="post in filteredItems" :key="post.id" class="card">
        <CardItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from "vue";
import { useStore } from "./store/items.js";
import CardItem from "./components/CardItem.vue";
import FilterInput from "./components/FilterInput.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import { storeToRefs } from "pinia";

const store = useStore();
const filterValue = ref("");
const { items, loading } = storeToRefs(store);

const filteredItems = computed(() => {
  const filter = filterValue.value.toLowerCase();
  return items.value.filter((post) =>
    post.userName.toLowerCase().includes(filter)
  );
});

onBeforeMount(() => {
  store.fetchData();
});
</script>

<style lang="scss" scoped>
@import "@styles/main.scss";
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px;
}
.input_container {
  width: 100%;
  display: flex;
  justify-content: center;
  .input {
    width: 30%;
    padding: $primary-padding;
    margin-top: 30px;
  }
}
@media (max-width: 560px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
