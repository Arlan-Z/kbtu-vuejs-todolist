<script setup lang="ts"></script>

<template>
  <div class="task-item-wrapper">
    <h1>Task Title</h1>
    <p>Description</p>

    <div class="category-box">
      <div class="category">Category</div>
    </div>

    <div class="priority">Priority</div>
  </div>
</template>

<style scoped>
.task-item-wrapper {
  background-color: #fafafa;
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 5px;

  box-sizing: border-box;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 24px;
  font-weight: 600;
}
</style>
