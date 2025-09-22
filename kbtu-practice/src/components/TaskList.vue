<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import TaskForm from "./TaskForm.vue";
import type { Task } from "@/models/task";
import { computed, ref } from "vue";
import draggable from "vuedraggable";

const props = defineProps<{
  filters: { keyword: string; categories: string[]; priorities: string[] };
}>();

let showTaskForm = ref(false);

const newTasks = ref<Task[]>([]);
const inProgressTasks = ref<Task[]>([]);
const completedTasks = ref<Task[]>([]);

function handleAddTask(task: Task) {
  newTasks.value.push(task);
  showTaskForm.value = false;
}

function deleteTask(id: number, column: "new" | "in-progress" | "completed") {
  if (column === "new") {
    newTasks.value = newTasks.value.filter((task) => task.id !== id);
  } else if (column === "in-progress") {
    inProgressTasks.value = inProgressTasks.value.filter((task) => task.id !== id);
  } else if (column === "completed") {
    completedTasks.value = completedTasks.value.filter((task) => task.id !== id);
  }
}

function matchesFilters(task: Task) {
  const keywordOk =
    !props.filters.keyword ||
    task.title.toLowerCase().includes(props.filters.keyword.toLowerCase());

  const categoryOk =
    props.filters.categories.length === 0 ||
    task.category.some((c) => props.filters.categories.includes(c.name));

  const priorityOk =
    props.filters.priorities.length === 0 ||
    props.filters.priorities.includes(task.priority);

  return keywordOk && categoryOk && priorityOk;
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

        <draggable v-model="newTasks" group="tasks" item-key="id" class="draggable-box">
          <template #item="{ element }">
            <TaskItem
              :key="element.id"
              :task="element"
              @delete-task="deleteTask($event, 'new')"
              v-if="matchesFilters(element)"
            />
          </template>
        </draggable>
      </div>
    </div>

    <div class="column" id="in-progress">
      <div class="title">In progress</div>

      <div class="task-container">
        <p v-if="inProgressTasks.length === 0" class="no-tasks">No Tasks</p>

        <draggable
          v-model="inProgressTasks"
          group="tasks"
          item-key="id"
          class="draggable-box"
        >
          <template #item="{ element }">
            <TaskItem
              :key="element.id"
              :task="element"
              @delete-task="deleteTask($event, 'in-progress')"
              v-if="matchesFilters(element)"
            />
          </template>
        </draggable>
      </div>
    </div>

    <div class="column" id="completed">
      <div class="title">Completed</div>

      <div class="task-container">
        <p v-if="completedTasks.length === 0" class="no-tasks">No Tasks</p>

        <draggable
          v-model="completedTasks"
          group="tasks"
          item-key="id"
          class="draggable-box"
        >
          <template #item="{ element }">
            <TaskItem
              :key="element.id"
              :task="element"
              @delete-task="deleteTask($event, 'completed')"
              v-if="matchesFilters(element)"
            />
          </template>
        </draggable>
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
  position: relative;
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
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  grid-row: 3;

  color: #82837c;
  font-size: 24px;
}

.draggable-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

#new-task {
  width: 30%;
  height: fit-content;
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
