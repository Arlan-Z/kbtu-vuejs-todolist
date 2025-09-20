# ASSIGNMENT 1 | Todo List

**Goal:** Create a simple single-page application (SPA) in Vue 3 that allows users to:
- Add tasks with priority and category,
- Filter them,
- Mark them as completed.

---

## Requirements by topics:

### 1. Creating an Application
a. Initialize a new Vue project via **create-vue** or **Vite**.  
b. Create the main component `App.vue` with a basic structure.  

### 2. Template Syntax
a. Use interpolation `{{ }}` to display text.  
b. Apply bindings (`v-bind`) for attributes.  

### 3. Reactivity Fundamentals
a. Store the task list in reactive state using `ref` or `reactive`.  

### 4. Computed Properties
a. Implement computed properties for:  
   i. the number of incomplete tasks,  
   ii. the filtered task list (e.g., by category or priority).  

### 5. Class and Style Bindings
a. Highlight completed tasks via `:class`, e.g., strike through the text.  

### 6. Conditional Rendering
a. Show a “No tasks” message when the list is empty using `v-if`.  

### 7. List Rendering
a. Render tasks with `v-for` and unique `key`.  

### 8. Event Handling
a. Handle button clicks for:  
   i. “Add task”  
   ii. “Delete task”  
   iii. “Mark as completed”  

### 9. Form Input Bindings
a. Use `v-model` for task text input and category selection.  

---

## Optional (for extra points)
- Add a `<select>` element for choosing a category.  
- Implement a filter to display only incomplete tasks.  
- Split the app into components: `TaskList.vue`, `TaskForm.vue`, `TaskItem.vue`.  
