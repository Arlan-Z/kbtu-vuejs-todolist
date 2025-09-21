<script setup lang="ts">
import type { TaskCategory } from "@/models/task";
import DeleteIcon from "@/assets/icons/delete-icon.svg?component";
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
    <button id="add-btn" @click="addCategory">+ Add category</button>

    <div v-for="(cat, index) in localCategories" :key="index" class="category">
      <input
        type="text"
        v-model="cat.name"
        placeholder="Category name"
        class="input"
        @input="updateCategory(index, 'name', cat.name)"
      />

      <button id="remove-btn" @click="removeCategory(index)">
        <DeleteIcon class="delete-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.category-form-wrapper {
  position: absolute;
  position: absolute;
  top: 110%;
  left: 0;
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
