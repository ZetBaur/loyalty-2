<template>
    <HeaderView @save="save" />

    <VueFlow v-model="elements" />
</template>

<script setup lang="ts">
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { ref } from 'vue';
import HeaderView from './HeaderView.vue';

const elements = ref([
    {
        id: '1',
        type: 'input',
        label: 'Node 1',
        position: { x: 250, y: 5 },
        style: { backgroundColor: 'green', width: '200px', height: '100px' }
    },

    { id: '2', label: 'Node 2', position: { x: 100, y: 100 } },
    { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },

    { id: '4', type: 'output', label: 'Node 4', position: { x: 400, y: 200 } },

    { id: 'e1-3', source: '1', target: '3' },

    { id: 'e1-2', source: '1', target: '2', animated: true }
]);

const { applyNodeChanges } = useVueFlow({
    nodes: elements.value
});

const save = () => console.log('save');
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
