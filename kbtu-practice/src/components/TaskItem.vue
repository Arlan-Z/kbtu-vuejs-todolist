<script setup lang="ts"></script>

<template>
  <div class="task-item-wrapper priority-high">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, at dignissimos
      dolorem numquam reprehenderit
    </p>

    <div class="category-box">
      <div class="category">Category</div>
    </div>
  </div>
</template>

<style scoped>
.task-item-wrapper {
  background-color: #fafafa;
  width: 100%;
  height: 150px;
  padding: 10px 15px;
  border-radius: 5px;

  box-sizing: border-box;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
}

p {
  font-size: 14px;
}

.priority-low {
  border-left: #3a933e solid 7px;
}

.priority-medium {
  border-left: #ee964b solid 10px;
}

.priority-high {
  border-left: #f95738 solid 10px;
}
</style>
