<script setup lang="ts">
import Header from "@/components/partials/Header.vue";
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <Header class="header" />
  <TaskList />
</template>

<style scoped>
.header {
  margin-bottom: 50px;
}
</style>
