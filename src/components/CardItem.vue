<template>
  <div class="card">
    <div class="content">
      <h1 class="title">{{ post.title }}</h1>
      <p class="description">{{ post.body }}</p>
    </div>
    <div class="author">
      <h4>{{ post.userName }}</h4>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  post: Object,
});
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    padding: 1rem;
  }

  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 16px;
    color: #555;
  }

  .author {
    background-color: #f9f9f9;
    padding: 0.5rem 1rem;
    color: #333;
    font-size: 14px;
    text-align: right;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
}
</style>
