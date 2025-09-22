<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ selected: string[] }>();
const emit = defineEmits<{ (e: "update:selected", val: string[]): void }>();

const priorities = ref([
  { name: "Low", value: "low" },
  { name: "Medium", value: "medium" },
  { name: "High", value: "high" },
]);

function togglePriority(value: string) {
  const copy = [...props.selected];
  const idx = copy.indexOf(value);
  if (idx === -1) copy.push(value);
  else copy.splice(idx, 1);
  emit("update:selected", copy);
}
</script>

<template>
  <div class="priority-filter-wrapper">
    <div v-for="(p, index) in priorities" :key="index" class="priority">
      <label class="select-wrap">
        <input
          type="checkbox"
          :checked="props.selected.includes(p.value)"
          @change="togglePriority(p.value)"
        />
        <span class="check-custom"></span>
      </label>

      <input type="text" v-model="p.name" placeholder="Priority" class="input" disabled />
    </div>
  </div>
</template>

<style scoped>
.priority-filter-wrapper {
  position: absolute;
  position: absolute;
  top: 100%;
  left: 47.25%;
  z-index: 1000;

  padding: 20px;
  background: #fafafa;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
}

.priority {
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
