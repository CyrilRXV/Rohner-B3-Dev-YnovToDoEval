<template>
  <q-page class="create-page">
    <div class="header">
      <q-btn
        flat
        round
        dense
        icon="arrow_back"
        class="back"
        to="/dashboard"
      />

      <div class="title">Créer une tache</div>
    </div>
    <div class="form">
      <div class="label">Nom de la tache</div>
      <q-input
        v-model="task.name"
        outlined
        dense
        class="input"
      />

      <div class="label">Date & Time</div>
      <div>
        <q-input
          v-model="task.date"
          outlined
          dense
          class="input"
          readonly
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
              >
                <q-date
                  v-model="task.date"
                  mask="YYYY-MM-DD"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          v-model="task.time"
          outlined
          dense
          class="input"
          readonly
        >
          <template v-slot:append>
            <q-icon
              name="schedule"
              class="cursor-pointer"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
              >
                <q-time
                  v-model="task.time"
                  format24h
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="label">Priorité</div>
      <div class="priority">
        <q-btn
          label="Basse"
          class="prio low"
          :class="{ active: task.priority === 'low' }"
          no-caps
          unelevated
          @click="setPriority('low')"
        />
        <q-btn
          label="Moyenne"
          class="prio medium"
          :class="{ active: task.priority === 'medium' }"
          no-caps
          unelevated
          @click="setPriority('medium')"
        />
        <q-btn
          label="Haute"
          class="prio high"
          :class="{ active: task.priority === 'high' }"
          no-caps
          unelevated
          @click="setPriority('high')"
        />
      </div>

      <div class="label">Ctégorie</div>
      <div class="categories">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="cat-btn"
          :class="{ active: task.categoryId === cat.id }"
          :style="{ backgroundColor: cat.color }"
          @click="selectCategory(cat.id)"
        >
          <div class="cat-top">
            <div class="cat-name">{{ cat.name }}</div>
          </div>
        </button>
      </div>

      <div class="label">Description ( optionnel )</div>
      <q-input
        v-model="task.description"
        outlined
        type="textarea"
        class="textarea"
      />
    </div>

    <div class="bottom">
      <q-btn
        label="Annuler"
        no-caps
        class="create-btn-cancel"
        to="/dashboard"
      />
      <q-btn
        label="Créer"
        no-caps
        class="create-btn-save"
        @click="createTask"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useTaskStore } from 'src/stores/taskStore';
  import { useRouter } from 'vue-router';
  import { categories } from 'src/models/Category';
  import type { Task } from 'src/models/Task';

  const task = ref<Task>({
    id: undefined,
    name: '',
    date: '',
    time: '',
    priority: 'low',
    categoryId: undefined,
    description: '',
    done: false,
  });

  const taskStore = useTaskStore();
  const router = useRouter();

  function setPriority(p: 'low' | 'medium' | 'high') {
    task.value.priority = p;
  }

  function selectCategory(id: number) {
    task.value.categoryId = id;
  }

  function createTask() {
    taskStore.addTask({
      id: Date.now(),
      name: task.value.name,
      date: task.value.date,
      time: task.value.time,
      priority: task.value.priority,
      categoryId: task.value.categoryId,
      description: task.value.description,
      done: false,
    });

    void router.push('/dashboard');
  }
</script>

<style scoped>
  .create-page {
    background: #f4f4f4;
    min-height: 100vh;
    padding: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .back {
    margin-right: 10px;
  }

  .title {
    font-size: 22px;
    font-weight: 600;
    flex: 1;
    text-align: center;
    margin-right: 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .label {
    font-weight: 500;
    font-size: 14px;
  }

  .input {
    width: 60%;
    background: white;
    border-radius: 10px;
  }

  .textarea {
    background: white;
    border-radius: 10px;
  }

  .priority {
    display: flex;
    gap: 10px;
  }

  .prio {
    flex: 1;
    border-radius: 10px;
    font-size: 13px;
  }

  .low {
    background: #d7dbf6;
  }

  .medium {
    background: #9986db;
  }

  .high {
    background: #f0e3e3;
  }

  .category-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .categories {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 10px;
  }

  .cat-btn {
    background-color: #d7dbf6;
    border-radius: 10px;
    font-size: 13px;
  }

  .bottom {
    margin-top: 30px;
  }

  .create-btn-save {
    width: 80%;
    background: #159a9c;
    color: white;
    font-size: 16px;
    border-radius: 12px;
    padding: 12px;
  }

  .create-btn-cancel {
    width: 18%;
    background: #ff3c00;
    color: white;
    font-size: 16px;
    border-radius: 12px;
    padding: 12px;
    margin-right: 10px;
  }

  .cat-btn {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 170px;
    padding: 12px;
    background: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    text-align: left;
    cursor: pointer;
    transition:
      transform 0.12s,
      box-shadow 0.12s,
      border-color 0.12s;
  }
  .cat-btn .cat-name {
    font-weight: 700;
  }

  .cat-btn.active {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #159a9c;
    border-width: 3px;
  }

  .prio.active {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    background-color: #159a9c;
  }
</style>
