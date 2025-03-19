<template>
    <div class="container">
      <h1>Сохраненные данные</h1>
      <div class="data-box">
        <p><strong>Город:</strong> {{ form.city }}</p>
        <p><strong>Цех:</strong> {{ form.workshop }}</p>
        <p><strong>Сотрудник:</strong> {{ form.employee }}</p>
        <p><strong>Бригада:</strong> {{ form.team }}</p>
        <p><strong>Смена:</strong> {{ form.shift }}</p>
      </div>
      <button class="back-button" @click="goBack">← Назад</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { formStore } from '../stores/formStore';
  
  const form = computed(() => formStore().formData);
  const router = useRouter();
  
  const goBack = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .data-box {
    text-align: left;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
  }
  
  .back-button {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .back-button:hover {
    background: #0056b3;
  }
  </style>
  