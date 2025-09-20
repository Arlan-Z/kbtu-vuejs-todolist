<script lang="ts" setup>
import DownArrow from "@/assets/icons/down-arrow.svg?component";
import DeleteIcon from "@/assets/icons/delete-icon.svg?component";
</script>

<template>
  <div class="header-wrapper">
    <div class="logo-box">TODO List</div>

    <div class="filter-box">
      <input type="text" class="search-input" placeholder="Filter by keyword" />

      <button id="category-filter">
        Category
        <DownArrow class="down-arrow-icon" />
      </button>

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
}

.logo-box {
  width: 100%;
  height: 75px;
  background-color: #1f5384;

  color: #fafafa;
  font-size: 32px;

  display: flex;
  justify-content: start;
  align-items: center;
}

.filter-box {
  width: auto;
  height: auto;
  padding: 10px 40px;
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
  color: #5c6063c1;
}

#category-filter {
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #5c6063c1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.down-arrow-icon,
.delete-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  flex-shrink: 0;
  fill: gray;
}

#clear-filter-btn {
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #5c6063a2;
}
</style>
