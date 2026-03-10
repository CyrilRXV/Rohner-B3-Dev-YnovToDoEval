<template>
  <q-page class="q-pa-md">
    <div class="category-card q-mb-lg">
      <div class="row items-center justify-between">
        <div class="text-h6 text-white">{{ category }}</div>

        <div class="progress">
          <q-circular-progress
            show-value
            font-size="12px"
            :value="progress"
            size="60px"
            color="orange"
            track-color="white"
            class="text-white"
          >
            {{ progress }}%
          </q-circular-progress>
        </div>
      </div>
    </div>

    <div class="text-subtitle1 q-mb-md text-weight-medium">Taches</div>
    <div
      v-for="task in tasks"
      :key="task.id"
      class="task-card"
      :class="{ done: task.done, priority: task.priority === 'high' }"
    >
      <div class="row items-center no-wrap">
        <q-checkbox
          v-model="task.done"
          checked-icon="check_circle"
          unchecked-icon="radio_button_unchecked"
          color="green"
        />
        <div class="task-content">
          <div class="task-title">{{ task.title }}</div>
          <div class="task-date">{{ task.date }}</div>
        </div>

        <div class="task-actions">
          <q-icon
            name="edit"
            class="action-icon"
            @click="editTask(task.id)"
          />
          <q-icon
            name="delete"
            color="red"
            class="action-icon"
            @click="deleteTask(task.id)"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const category = ref('Projets');
  const progress = ref(80);

  const tasks = ref([
    { id: 1, title: 'Envoyer email', date: 'Mercredi 09 Novembre', done: false, priority: 'high' },
    { id: 2, title: 'Rapport', date: 'Mercredi 09 Novembre', done: false, priority: 'high' },
    { id: 3, title: 'AC page client', date: 'Mercredi 09 Novembre', done: false },
    { id: 4, title: 'AC page client', date: 'Mercredi 09 Novembre', done: false },
    { id: 5, title: 'AC page client', date: 'Mercredi 09 Novembre', done: false },
    { id: 6, title: 'Trier dossier AXE', date: '08:00 AM - 12:00 PM', done: true },
  ]);

  function editTask(id: number) {
    void router.push('/edit/' + id);
  }

  function deleteTask(id: number) {
    console.log('delete', id);
  }
</script>

<style scoped>
  .category-card {
    padding: 20px;
    border-radius: 12px;
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  }

  .task-card {
    background: white;
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 14px;
    border: 1px solid #ddd;
  }

  .task-card.priority {
    background: #f6b3b3;
  }

  .task-card.done {
    background: #d9d9d9;
    text-decoration: line-through;
  }

  .task-content {
    flex: 1;
    margin-left: 10px;
  }

  .task-title {
    font-weight: 600;
  }

  .task-date {
    font-size: 12px;
    color: #666;
  }

  .task-actions {
    display: flex;
    gap: 10px;
  }

  .action-icon {
    cursor: pointer;
  }
</style>
