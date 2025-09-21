<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
</script>

<template>
  <div class="task-list-wrapper">
    <div class="column" id="new">
      <div class="title">New</div>

      <div class="task-container">
        <TaskItem />
      </div>
    </div>

    <div class="column" id="in-progress">
      <div class="title">In progress</div>

      <div class="task-container">
        <TaskItem />
      </div>
    </div>

    <div class="column" id="completed">
      <div class="title">Completed</div>

      <div class="task-container">
        <TaskItem />
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
