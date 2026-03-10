<template>
  <q-card class="q-pa-md">
    <div class="text-h6 q-mb-md">Catégories</div>

    <div
      v-for="cat in stats"
      :key="cat.name"
      class="q-mb-sm"
    >
      <div class="row items-center justify-between">
        <div>{{ cat.name }}</div>
        <div>{{ cat.count }}</div>
      </div>

      <q-linear-progress
        :value="cat.percent"
        color="primary"
        class="q-mt-xs"
      />
    </div>
  </q-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useTaskStore } from 'src/stores/taskStore';
  import type { Task } from '../models/Task';
  import { categories } from 'src/models/Category';

  const store = useTaskStore();

  const stats = computed(() => {
    const total = store.tasks.length || 1;

    return categories.map((cat) => {
      const count = store.tasks.filter((t: Task) => t.categoryId === cat.id).length;

      return {
        name: cat.name,
        count,
        percent: count / total,
      };
    });
  });
</script>
