<template>
  <q-form @submit="submit">
    <q-input
      v-model="title"
      label="Nom de la tâche"
    />

    <q-input
      v-model="date"
      type="date"
      label="Date"
    />

    <q-select
      v-model="category"
      :options="categories"
      label="Catégorie"
    />

    <q-select
      v-model="priority"
      :options="['low', 'medium', 'high']"
      label="Priorité"
    />

    <q-input
      v-model="description"
      type="textarea"
      label="Description"
    />

    <q-btn
      type="submit"
      color="primary"
      label="Sauvegarder"
    />
  </q-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { categories } from 'src/models/Category';

  const emit = defineEmits(['submit']);

  const title = ref('');
  const date = ref('');
  const category = ref('');
  const priority = ref('medium');
  const description = ref('');

  function submit() {
    emit('submit', {
      title: title.value,
      date: date.value,
      category: category.value,
      priority: priority.value,
      description: description.value,
    });
  }
</script>
