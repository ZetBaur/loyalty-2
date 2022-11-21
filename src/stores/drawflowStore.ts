import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDFstore = defineStore('drawflow', () => {
    const nodeSelected = ref(null);

    const currentNodes = ref(null);

    const optionsDialog = ref(false);

    return { nodeSelected, currentNodes, optionsDialog };
});
