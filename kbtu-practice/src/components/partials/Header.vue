<script lang="ts" setup>
import DownArrow from "@/assets/icons/down-arrow.svg?component";
import DeleteIcon from "@/assets/icons/delete-icon.svg?component";
import CategoryFilter from "../CategoryFilter.vue";
import PriorityFilter from "../PriorityFilter.vue";
import { ref } from "vue";

let showCategoryFilter = ref(false);
let showPriorityFilter = ref(false);
</script>

<template>
  <div class="header-wrapper">
    <div class="logo-box">TODO List</div>

    <div class="filter-box">
      <input type="text" class="search-input" placeholder="Filter by keyword" />

      <button id="category-filter" @click="showCategoryFilter = !showCategoryFilter">
        Category
        <DownArrow class="down-arrow-icon" />
      </button>
      <CategoryFilter v-if="showCategoryFilter" />

      <button id="priority-filter" @click="showPriorityFilter = !showPriorityFilter">
        Priority
        <DownArrow class="down-arrow-icon" />
      </button>
      <PriorityFilter v-if="showPriorityFilter" />

      <button id="clear-filter-btn" title="Clear filters">
        <DeleteIcon class="delete-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.logo-box {
  width: 100%;
  height: 75px;
  padding: 0 50px;
  box-sizing: border-box;
  background-color: #1f5384;

  color: #fafafa;
  font-size: 32px;
  font-family: "Inter";
  font-weight: bold;

  display: flex;
  justify-content: start;
  align-items: center;
}

.filter-box {
  width: auto;
  height: auto;
  padding: 10px 40px 10px 20px;
  background-color: #faf0ca;

  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  gap: 20px;

  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.search-input {
  width: 500px;
  height: auto;
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
}

.search-input::placeholder {
  color: #82837c;
}

#category-filter,
#priority-filter {
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #82837c;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.down-arrow-icon,
.delete-icon {
  width: 10px;
  height: 12px;
  display: inline-block;
  flex-shrink: 0;
  fill: #82837c;
}

.delete-icon {
  fill: #fa805d;
  width: 12px;
  height: 14px;
}

#clear-filter-btn {
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #82837c;
}
</style>
