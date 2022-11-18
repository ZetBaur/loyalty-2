import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDrawflowStore = defineStore('drawflow', () => {
    const nodeSelected = ref(null);

    // const showOptions = ref(false);

    return { nodeSelected };
});
