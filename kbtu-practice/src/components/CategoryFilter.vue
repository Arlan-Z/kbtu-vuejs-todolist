<script setup lang="ts">
import type { TaskCategory } from "@/models/task";
import { categories } from "@/data/taskCategories";
import { ref } from "vue";

const allCategories = ref<TaskCategory[]>(categories);
</script>

<template>
  <div class="category-filter-wrapper">
    <div v-for="(cat, index) in allCategories" :key="index" class="category">
      <label class="select-wrap">
        <input type="checkbox" />
        <span class="check-custom"></span>
      </label>

      <input
        type="text"
        v-model="cat.name"
        placeholder="Category name"
        class="input"
        disabled
      />
    </div>
  </div>
</template>

<style scoped>
.category-filter-wrapper {
  position: absolute;
  position: absolute;
  top: 100%;
  left: 42.5%;
  z-index: 1000;

  padding: 20px;
  background: #fafafa;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
}

.category {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

#remove-btn {
  border: none;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  background-color: transparent;
}

#remove-btn {
  background-color: inherit;
}

.delete-icon {
  fill: #cacaca;
  height: 14px;
  transition: 0.2s;
}

.delete-icon:hover {
  fill: #9f9f9f;
}

#add-btn {
  width: 50%;
  height: fit-content;
  border: none;
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.075);
  font-size: 16px;
  transition: 0.2s;
}

#add-btn:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
