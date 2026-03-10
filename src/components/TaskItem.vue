<template>
  <q-card class="q-mb-sm">
    <q-card-section class="row items-center">
      <q-checkbox
        :model-value="task.done"
        @update:model-value="$emit('toggle', task.id)"
      />

      <div class="col q-ml-md">
        <div :class="{ 'text-strike': task.done }">
          {{ task.name }}
        </div>

        <div class="text-caption text-grey">
          {{ task.date }}
        </div>
      </div>

      <q-btn
        flat
        icon="edit"
        @click="$emit('edit', task.id)"
      />

      <q-btn
        flat
        icon="delete"
        color="red"
        @click="$emit('delete', task.id)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
  import type { Task } from 'src/models/Task';

  defineProps<{ task: Task }>();

  defineEmits(['edit', 'delete', 'toggle']);
</script>
