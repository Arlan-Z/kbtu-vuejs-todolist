<script setup lang="ts">
import type { Task } from "@/models/task";

const props = defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="task-item-wrapper" :class="`priority-${props.task.priority}`">
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
}

p {
  font-size: 14px;
  margin-bottom: 10px;
}

.priority-low {
  border-left: #3a933e solid 7px;
}

.priority-medium {
  border-left: #ee964b solid 10px;
}

.priority-high {
  border-left: #f95738 solid 10px;
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
</style>
