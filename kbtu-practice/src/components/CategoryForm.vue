<script setup lang="ts">
import type { TaskCategory } from "@/models/task";
import { ref } from "vue";

const props = defineProps<{
  categories: TaskCategory[];
}>();

const emit = defineEmits<{
  (e: "update:categories", value: TaskCategory[]): void;
}>();

const localCategories = ref<TaskCategory[]>([...props.categories]);

function addCategory() {
  localCategories.value.push({
    name: "",
    color: "#000000",
  });
  emit("update:categories", localCategories.value);
}

function updateCategory(index: number, key: keyof TaskCategory, value: string) {
  localCategories.value[index][key] = value;
  emit("update:categories", localCategories.value);
}

function removeCategory(index: number) {
  localCategories.value.splice(index, 1);
  emit("update:categories", localCategories.value);
}
</script>

<template>
  <div class="category-form-wrapper">
    <div v-for="(cat, index) in localCategories" :key="index" class="category">
      <input
        type="text"
        v-model="cat.name"
        placeholder="Category name"
        class="input"
        @input="updateCategory(index, 'name', cat.name)"
      />

      <button class="remove-btn" @click="removeCategory(index)">✕</button>
    </div>

    <button class="add-btn" @click="addCategory">+ Add category</button>
  </div>
</template>

<style scoped>
.category-form-wrapper {
  position: absolute;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;

  padding: 20px;
  border-radius: 5px;
  background: #fafafa;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

.remove-btn {
  background: #ff6b6b;
  border: none;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.remove-btn:hover {
  background: #ff4b4b;
}

.add-btn {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #7a27ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

.add-btn:hover {
  background: #5d1ecc;
}
</style>
