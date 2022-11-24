import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDFstore = defineStore('drawflow', () => {
    const elements = ref([]);

    return { elements };
});
