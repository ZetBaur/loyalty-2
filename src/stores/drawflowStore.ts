import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDrawflowStore = defineStore('drawflow', () => {
    const nodeSelected = ref(null);

    return { nodeSelected };
});
