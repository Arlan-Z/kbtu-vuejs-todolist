<script setup lang="ts">
import type { Task } from "@/models/task";
import TaskOptions from "./TaskOptions.vue";
import { ref } from "vue";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
}>();

let showTaskOptions = ref(false);

function handleDelete() {
  emit("delete-task", props.task.id);
  showTaskOptions.value = false;
}
</script>

<template>
  <div class="task-item-wrapper" :class="`priority-${props.task.priority}`">
    <button id="options-button" @click="showTaskOptions = !showTaskOptions">...</button>
    <TaskOptions v-if="showTaskOptions" @delete="handleDelete" />

    <p>{{ props.task.title }}</p>

    <div class="category-box">
      <div class="category" v-for="category in props.task.category">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-item-wrapper {
  background-color: #fafafa;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;

  box-sizing: border-box;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  position: relative;
}

.task-item-wrapper:hover #options-button {
  opacity: 1;
}

p {
  font-size: 14px;
  margin-bottom: 10px;
}

.priority-low {
  border-left: #3a933e solid 7px;
}

.priority-medium {
  border-left: #cfbb00 solid 7px;
}

.priority-high {
  border-left: #f95738 solid 7px;
}

.category-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 5px;
}

.category {
  width: max-content;
  font-size: 12px;
  box-sizing: border-box;
  background-color: rgb(112, 112, 199);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
}

#options-button {
  position: absolute;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 42px;

  top: 15%;
  left: 95%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.311);
  transition: 0.3s;
  cursor: pointer;
  opacity: 0;
}

#options-button:hover {
  color: rgba(0, 0, 0, 0.5);
}

#options-button:active {
  color: rgba(0, 0, 0, 0.6);
}
</style>
