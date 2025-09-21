<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import TaskForm from "./TaskForm.vue";
import type { Task } from "@/models/task";
import { ref } from "vue";

let showTaskForm = ref(false);

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn Vue",
    status: "new",
    priority: "high",
    category: [{ name: "Chore", color: "black" }],
  },
  {
    id: 2,
    title: "Finish homework",
    status: "in-progress",
    priority: "medium",
    category: [
      { name: "Study", color: "blue" },
      { name: "Urgent", color: "red" },
    ],
  },
  {
    id: 3,
    title: "Buy groceries",
    status: "completed",
    priority: "low",
    category: [{ name: "Personal", color: "green" }],
  },
  {
    id: 4,
    title: "Work on side project",
    status: "in-progress",
    priority: "high",
    category: [{ name: "Development", color: "purple" }],
  },
  {
    id: 5,
    title: "Plan vacation",
    status: "new",
    priority: "medium",
    category: [
      { name: "Personal", color: "teal" },
      { name: "Family", color: "orange" },
    ],
  },
];
</script>

<template>
  <div class="task-list-wrapper">
    <div class="column" id="new">
      <div class="title">New</div>

      <div class="task-container">
        <button id="new-task" @click="showTaskForm = !showTaskForm">+ New item</button>

        <TaskForm v-if="showTaskForm" />

        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>

    <div class="column" id="in-progress">
      <div class="title">In progress</div>

      <div class="task-container"></div>
    </div>

    <div class="column" id="completed">
      <div class="title">Completed</div>

      <div class="task-container"></div>
    </div>
  </div>
</template>

<style scoped>
.task-list-wrapper {
  width: 100%;
  height: 100%;
  padding: 0 50px;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
}

.title {
  font-size: 20px;
  padding: 15px 15px;
  border-bottom: 4px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
}

.task-container {
  width: 100%;
  height: 500px;
  background-color: rgba(122, 39, 255, 0.05);

  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  padding: 15px 15px;
  row-gap: 15px;
}

#new-task {
  width: 30%;
  border: none;
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.075);
  font-size: 16px;
  transition: 0.2s;
}

#new-task:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

#new-task:active {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
