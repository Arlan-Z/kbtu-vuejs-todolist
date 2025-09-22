<script setup lang="ts">
import Header from "@/components/partials/Header.vue";
import TaskList from "@/components/TaskList.vue";

import { ref } from "vue";

const filters = ref<{ keyword: string; categories: string[]; priorities: string[] }>({
  keyword: "",
  categories: [],
  priorities: [],
});
</script>

<template>
  <Header class="header" @update-filters="filters = $event" />
  <TaskList :filters="filters" />
</template>

<style scoped>
.header {
  margin-bottom: 50px;
}
</style>
