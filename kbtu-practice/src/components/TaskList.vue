<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import TaskForm from "./TaskForm.vue";
import type { Task } from "@/models/task";
import { computed, ref } from "vue";

let showTaskForm = ref(false);

const tasks = ref<Task[]>([]);

const newTasks = computed(() => tasks.value.filter((task) => task.status === "new"));
const inProgressTasks = computed(() =>
  tasks.value.filter((task) => task.status === "in-progress")
);
const completedTasks = computed(() =>
  tasks.value.filter((task) => task.status === "completed")
);

function handleAddTask(task: Task) {
  tasks.value.push(task);
  showTaskForm.value = false;
}
</script>

<template>
  <div class="task-list-wrapper">
    <div class="column" id="new">
      <div class="title">New</div>

      <div class="task-container">
        <button id="new-task" @click="showTaskForm = !showTaskForm">+ New item</button>

        <TaskForm v-if="showTaskForm" @add-task="handleAddTask($event)" />

        <p v-if="newTasks.length === 0 && !showTaskForm" class="no-tasks">No Tasks</p>

        <TaskItem v-else v-for="task in newTasks" :key="task.id" :task="task" />
      </div>
    </div>

    <div class="column" id="in-progress">
      <div class="title">In progress</div>

      <div class="task-container">
        <p v-if="inProgressTasks.length === 0" class="no-tasks">No Tasks</p>
        <TaskItem v-else v-for="task in inProgressTasks" :key="task.id" :task="task" />
      </div>
    </div>

    <div class="column" id="completed">
      <div class="title">Completed</div>

      <div class="task-container">
        <p v-if="completedTasks.length === 0" class="no-tasks">No Tasks</p>
        <TaskItem v-else v-for="task in completedTasks" :key="task.id" :task="task" />
      </div>
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

.no-tasks {
  display: flex;
  align-items: center;
  justify-content: center;

  grid-row: 2;

  color: #82837c;
  font-size: 24px;
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
