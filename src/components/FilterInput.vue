<template>
  <div class="input_container">
    <input
      class="input"
      placeholder="Filter by author..."
      :value="filterValue"
      @input="$emit('update:filterValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["filterValue"]);
</script>

<style lang="scss">
.input_container {
  width: 100%;
  display: flex;
  justify-content: center;

  .input {
    width: 30%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin-top: 30px;
  }

  .input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.6);
  }
}
</style>
