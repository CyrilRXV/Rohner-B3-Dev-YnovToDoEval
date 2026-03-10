import type { Task } from '../models/Task';

const STORAGE_KEY = 'tasks';

export default {
  getTasks(): Task[] {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  },

  saveTasks(tasks: Task[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};
