<template>
  <q-page class="q-pa-md">
    <div class="header">
      <q-btn
        flat
        round
        dense
        icon="arrow_back"
        to="/dashboard"
      />
      <div class="text-h5">{{ title }}</div>
    </div>

    <div
      v-if="tasks.length === 0"
      class="text-grey q-mt-lg text-center"
    >
      Aucune tâche
    </div>

    <TaskItem
      v-for="(task, i) in tasks"
      :key="task.id ?? i"
      :task="task"
      @edit="editTask"
      @delete="deleteTask"
    />
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTaskStore } from '../stores/taskStore';
  import { categories } from 'src/models/Category';
  import TaskItem from '../components/TaskItem.vue';

  const route = useRoute();
  const router = useRouter();
  const store = useTaskStore();

  const rawType = route.params.catId;
  const type = Array.isArray(rawType) ? rawType[0] : rawType;

  const title = computed((): string => {
    if (!type || type === 'today') {
      return "Tâches d'aujourd'hui";
    }

    const id = Number(type);
    if (isNaN(id)) {
      return 'Autres';
    }

    const cat = categories.find((c) => c.id === id);

    return cat ? cat.name : 'Autres';
  });

  const tasks = computed(() => {
    if (!type || type === 'today') return store.todayTasks;

    const id = Number(type);
    if (isNaN(id)) return [];

    const result = store.tasks.filter((t) => t.categoryId === id);

    return result;
  });

  function editTask(id: number) {
    void router.push('/edit/' + id);
  }

  function deleteTask(id: number) {
    store.deleteTask(id);
  }
</script>
