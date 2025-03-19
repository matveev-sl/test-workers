import { defineStore } from 'pinia';

export const formStore = defineStore('form', {
    state: () => ({
      formData: {
        city: '',
        workshop: '',
        employee: '',
        brigade: '',
        shift: ''
      }
    }),
    actions: {
        saveFormData(data) {
          this.formData = data; 
          console.log('Данные сохранены в хранилище', this.formData);
        }
      }
    });