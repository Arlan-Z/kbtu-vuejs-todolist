<script setup lang="ts">
import type { Task, TaskCategory, TaskPriority } from "@/models/task";
import { ref } from "vue";
import CategoryForm from "./CategoryForm.vue";

const emit = defineEmits<{
  (e: "add-task", task: Task): void;
}>();

const showCategoryForm = ref(false);

const title = ref("");
const priority = ref<TaskPriority>("low");
const categories = ref<TaskCategory[]>([]);

function saveTask() {
  if (!title.value) return;

  const newTask: Task = {
    id: Date.now(),
    title: title.value,
    priority: priority.value,
    category: categories.value,
  };

  emit("add-task", newTask);

  title.value = "";
  priority.value = "low";
  categories.value = [];
}
</script>

<template>
  <div class="task-form-wrapper">
    <input type="text" id="title" placeholder="Task title" v-model="title" />

    <div class="option-box">
      <button id="category" @click="showCategoryForm = !showCategoryForm">
        + Category
      </button>

      <CategoryForm v-if="showCategoryForm" v-model:categories="categories" />

      <select v-model="priority" id="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <button class="save-btn" @click="saveTask">Save</button>
  </div>
</template>

<style scoped>
.task-form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;

  background-color: #f5f5f5;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  box-sizing: border-box;
}

#title {
  width: 100%;
  font-size: 14px;
  padding: 10px 12px;

  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;

  transition: border 0.2s ease-in-out;
}
#title:focus {
  border-color: #7a27ff;
}

.option-box {
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
}

#category {
  flex: 1;
  background-color: #0d3b66;
  color: white;
  font-size: 14px;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;
}
#category:hover {
  background-color: #155794;
}

#priority {
  flex: 1;
  font-size: 14px;
  padding: 10px 12px;

  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  transition: border 0.2s ease-in-out;
}
#priority:focus {
  border-color: #7a27ff;
}

.save-btn {
  align-self: flex-end;
  background-color: #28a745;
  color: white;
  font-size: 14px;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;
}
.save-btn:hover {
  background-color: #218838;
}
</style>
