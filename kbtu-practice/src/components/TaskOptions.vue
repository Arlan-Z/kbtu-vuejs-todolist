<script setup lang="ts">
const emit = defineEmits<{
  (e: "delete"): void;
}>();
</script>

<template>
  <div class="priority-filter-wrapper">
    <button id="delete-btn" @click="emit('delete')">Delete</button>
  </div>
</template>

<style scoped>
.priority-filter-wrapper {
  position: absolute;
  top: 100%;
  left: 72.5%;
  z-index: 1000;

  padding: 5px 0px;
  background: #fafafa;
  width: 125px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

#delete-btn {
  width: 100%;
  border: none;
  background-color: transparent;
  transition: 0.3s;
  font-size: 16px;
  padding: 10px 20px;
  box-sizing: border-box;
  text-align: left;
  color: #f95738;
}

#delete-btn:hover {
  background-color: rgba(0, 0, 0, 0.071);
}
</style>
