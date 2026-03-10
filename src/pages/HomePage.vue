<template>
  <q-page class="home-page flex flex-center column">
    <div class="logo">
      <div class="shape1"></div>
      <div class="shape2"></div>
    </div>

    <h1 class="title">YnovTodo</h1>

    <p class="subtitle">Gestion de tâches Simple et Rapide.</p>

    <q-btn
      class="start-btn"
      color="primary"
      label="Get started"
      icon-right="arrow_forward"
      unelevated
      @click="start"
    />
  </q-page>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function start(): void {
    router.push('/dashboard').catch(console.error);
  }
</script>

<style scoped>
  .home-page {
    background-image: url('src/assets/home-background.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  .title {
    font-size: 34px;
    font-weight: 700;
    margin-top: 15px;
  }

  .subtitle {
    color: #777;
    margin-bottom: 30px;
  }

  .start-btn {
    background: #b8d7d7;
    color: #000;
    padding: 10px 20px;
    border-radius: 8px;
  }

  .logo {
    width: 40px;
    height: 40px;
    position: relative;
  }

  .shape1 {
    width: 20px;
    height: 20px;
    background: #3c3cff;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 3px;
  }

  .shape2 {
    width: 20px;
    height: 20px;
    background: #23c483;
    position: absolute;
    top: 0;
    right: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
</style>
