<script setup lang="ts">
import type { TaskCategory } from "@/models/task";
import { categories } from "@/data/taskCategories";
import { ref } from "vue";

const props = defineProps<{ selected: string[] }>();
const emit = defineEmits<{ (e: "update:selected", val: string[]): void }>();

const allCategories = ref<TaskCategory[]>(categories);

function toggleCategory(name: string) {
  const copy = [...props.selected];
  const idx = copy.indexOf(name);
  if (idx === -1) copy.push(name);
  else copy.splice(idx, 1);
  emit("update:selected", copy);
}
</script>

<template>
  <div class="category-filter-wrapper">
    <div v-for="(cat, index) in allCategories" :key="index" class="category">
      <label class="select-wrap">
        <input
          type="checkbox"
          :checked="props.selected.includes(cat.name)"
          @change="toggleCategory(cat.name)"
        />
        <span class="check-custom"></span>
      </label>

      <input
        type="text"
        v-model="cat.name"
        placeholder="Category name"
        class="input"
        disabled
      />
    </div>
  </div>
</template>

<style scoped>
.category-filter-wrapper {
  position: absolute;
  top: 100%;
  left: 42.5%;
  z-index: 1000;

  padding: 20px;
  background: #fafafa;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
}

.category {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
