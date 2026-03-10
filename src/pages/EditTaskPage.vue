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

      <div class="label">Priority</div>
      <div class="priority">
        <q-btn
          label="Low"
          class="prio low"
          no-caps
          unelevated
        />
        <q-btn
          label="Medium"
          class="prio medium"
          no-caps
          unelevated
        />
        <q-btn
          label="High"
          class="prio high"
          no-caps
          unelevated
        />
      </div>

      <div class="label category-label">
        Category ( optionnel )
        <q-icon
          name="edit"
          size="16px"
        />
      </div>
      <div class="categories">
        <q-btn
          label="Projet"
          class="cat-btn"
          no-caps
          unelevated
        />
        <q-btn
          label="Travail"
          class="cat-btn"
          no-caps
          unelevated
        />
        <q-btn
          label="Journalier"
          class="cat-btn"
          no-caps
          unelevated
        />
        <q-btn
          label="Autres"
          class="cat-btn"
          no-caps
          unelevated
        />
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
      />
      <q-btn
        label="Créer"
        no-caps
        class="create-btn-save"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  type Task = {
    name: string;
    date: string;
    time: string;
    priority: 'low' | 'medium' | 'high';
    category: string;
    description: string;
  };

  const task = ref<Task>({
    name: '',
    date: '',
    time: '',
    priority: 'medium',
    category: '',
    description: '',
  });
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
    background: white;
    border: 2px solid #8c6bff;
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
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .cat-btn {
    background: #d7dbf6;
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
</style>
