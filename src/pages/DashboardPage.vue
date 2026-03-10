<template>
  <q-page class="dashboard">
    <h2 class="title">Taches</h2>
    <q-card class="progress-card">
      <div class="progress-content">
        <div>
          <div class="progress-title">Suivi des taches</div>

          <q-btn
            label="Voir"
            icon-right="arrow_forward"
            no-caps
            class="see-btn"
            @click="$router.push('/tasks/today')"
          />
        </div>

        <q-circular-progress
          show-value
          font-size="18px"
          :value="80"
          size="100px"
          :thickness="0.22"
          color="white"
          track-color="rgba(255,255,255,0.25)"
          class="progress"
        />
      </div>
    </q-card>

    <div class="section-title">Catégories</div>

    <div class="categories">
      <q-card
        v-for="cat in categories"
        :key="cat.id"
        class="cat"
        :style="{ backgroundColor: cat.color }"
        @click="$router.push('/tasks/' + cat.id)"
      >
        <div class="cat-header">
          <span>{{ cat.name }}</span>
          <span>{{ progress(cat.id) }}%</span>
        </div>
        <div class="cat-count">{{ taskCount(cat.id) }}</div>
      </q-card>
    </div>

    <div class="section-title">Taches Journalier</div>

    <q-list>
      <q-item class="task urgent">
        <q-item-section avatar>
          <q-checkbox v-model="checked2" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="task-title"> Envoyer email </q-item-label>

          <q-item-label caption> Mercredi 09 November </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="edit"
            class="icon"
          />
          <q-icon
            name="delete"
            class="icon delete"
          />
        </q-item-section>
      </q-item>

      <q-item class="task">
        <q-item-section avatar>
          <q-checkbox v-model="checked1" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="task-title"> AC page client </q-item-label>

          <q-item-label caption> Mercredi 09 November </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="edit"
            class="icon"
          />
          <q-icon
            name="delete"
            class="icon delete"
          />
        </q-item-section>
      </q-item>

      <q-item class="task done">
        <q-item-section avatar>
          <q-checkbox model-value="true" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="task-title done-text"> Trier dossier AXE </q-item-label>

          <q-item-label caption> 08:00 AM - 12:00 PM </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="delete"
            class="icon delete"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <q-btn
      label="Créer une tache"
      no-caps
      class="create-btn"
      @click="$router.push('/create')"
    />
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useTaskStore } from 'src/stores/taskStore';
  import { categories } from 'src/models/Category';

  const checked1 = ref(false);
  const checked2 = ref(false);

  const taskStore = useTaskStore();

  function taskCount(categoryId: number): number {
    return taskStore.tasks.filter((t) => t.categoryId === categoryId).length;
  }

  function progress(categoryId: number): number {
    const tasks = taskStore.tasks.filter((t) => t.categoryId === categoryId);
    if (tasks.length === 0) {
      return 0;
    }
    const done = tasks.filter((t) => t.done).length;

    return Math.round((done / tasks.length) * 100);
  }
</script>

<style scoped>
  .dashboard {
    padding: 20px;
    background: #f4f4f4;
    min-height: 100vh;
  }

  .title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .section-title {
    font-weight: 600;
    margin: 20px 0 12px;
  }

  /* PROGRESS CARD */

  .progress-card {
    background: linear-gradient(135deg, #5f2cff, #a100ff);
    border-radius: 18px;
    padding: 22px;
    color: white;
  }

  .progress-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progress-title {
    font-size: 17px;
    width: 170px;
    margin-bottom: 15px;
  }

  .see-btn {
    background: white;
    color: #6a00ff;
    border-radius: 12px;
    padding: 5px 16px;
  }

  .categories {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .cat {
    border-radius: 14px;
    padding: 16px;
    cursor: pointer;
    transition: 0.2s;
  }

  .cat:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  }

  .cat-header {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .cat-count {
    font-size: 20px;
    font-weight: 700;
  }

  .projects {
    background: #cfd3ff;
  }
  .work {
    background: #c8ece4;
  }
  .daily {
    background: #d57bff;
    color: white;
  }
  .other {
    background: #f1dcc3;
  }

  .task {
    background: white;
    border-radius: 14px;
    margin-bottom: 12px;
    padding: 10px;
    transition: 0.15s;
  }

  .task:hover {
    transform: scale(1.01);
  }

  .task.urgent {
    background: #f3b7b7;
  }

  .task.done {
    background: #e6e6e6;
  }

  .task-title {
    font-weight: 600;
  }

  .done-text {
    text-decoration: line-through;
    opacity: 0.7;
  }

  .icon {
    margin-left: 10px;
    cursor: pointer;
  }

  .delete {
    color: #ff4d4f;
  }

  .create-btn {
    margin-top: 20px;
    width: 100%;
    background: #0f9fa8;
    color: white;
    border-radius: 12px;
    padding: 12px;
    font-size: 16px;
  }
</style>
