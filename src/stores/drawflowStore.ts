import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDFstore = defineStore('drawflow', () => {
    const currentNodes = ref([]);

    const nodeSelected = ref(null);

    const optionsDialog = ref(false);

    return { nodeSelected, currentNodes, optionsDialog };
});
