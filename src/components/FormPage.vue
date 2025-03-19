<template>
    <div>
      <h1>Форма ввода данных</h1>
      <form @submit.prevent="submit">
        <div>
          <label for="city">Город:</label>
          <select id="city" v-model="form.city">
            <option disabled value="">Выберите город</option>
            <option value="moscow">Москва</option>
            <option value="spb">Санкт-Петербург</option>
          </select>
        </div>
  
        <div>
          <label for="workshop">Цех:</label>
          <select id="workshop" v-model="form.workshop" :disabled="!form.city">
            <option disabled value="">Выберите цех</option>
            <option v-for="workshop in workshops" :key="workshop" :value="workshop">{{ workshop }}</option>
          </select>
        </div>
  
        <div>
          <label for="employee">Сотрудник:</label>
          <select id="employee" v-model="form.employee" :disabled="!form.workshop">
            <option disabled value="">Выберите сотрудника</option>
            <option v-for="employee in employees" :key="employee" :value="employee">{{ employee }}</option>
          </select>
        </div>
  
        <div>
          <label for="team">Бригада:</label>
          <select id="team" v-model="form.team">
            <option disabled value="">Выберите бригаду</option>
            <option value="team1">Бригада 1</option>
            <option value="team2">Бригада 2</option>
          </select>
        </div>
  
        <div>
          <label for="shift">Смена:</label>
          <select id="shift" v-model="form.shift">
            <option disabled value="">Выберите смену</option>
            <option value="shift1">Смена 1</option>
            <option value="shift2">Смена 2</option>
          </select>
        </div>
  
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { formStore } from '../stores/formStore';
  import { useRouter } from 'vue-router';
  
  const router = useRouter(); 
  const formData = formStore()
  
  const form= computed(() => formData.formData);

  const cities = {
    moscow: ['Цех 1', 'Цех 2'],
    spb: ['Цех A', 'Цех B']
  };
  
  const employeesData = {
    'moscow-Цех 1': ['Сотрудник 1', 'Сотрудник 2'],
    'moscow-Цех 2': ['Сотрудник 3', 'Сотрудник 4'],
    'spb-Цех A': ['Сотрудник A1', 'Сотрудник A2'],
    'spb-Цех B': ['Сотрудник B1', 'Сотрудник B2']
  };
  
  const workshops = computed(() => {
    return cities[form.value.city] || [];
  });
  
  const employees = computed(() => {
    return employeesData[`${form.value.city}-${form.value.workshop}`] || [];
  });
 
  const submit = () => {
  formData.saveFormData(form.value); 
  router.push({ name: 'SavedPage' });
};
 

  </script>
  
  <style scoped>
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  