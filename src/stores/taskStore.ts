import { defineStore } from 'pinia';
import type { Task } from '../models/Task';
import { categories } from 'src/models/Category';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
  }),

  getters: {
    todayTasks: (state) => {
      const today = new Date().toISOString().slice(0, 10);
      return state.tasks.filter((t) => t.date === today);
    },
  },

  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },

    updateTask(updated: Task) {
      const index = this.tasks.findIndex((t) => t.id === updated.id);
      if (index !== -1) {
        this.tasks[index] = updated;
      }
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.done = !task.done;
    },

    tasksByCategory(categoryName: string) {
      const category = categories.find((c) => c.name === categoryName);

      if (!category) return [];

      return this.tasks.filter((t) => t.categoryId === category.id);
    },
  },
});
