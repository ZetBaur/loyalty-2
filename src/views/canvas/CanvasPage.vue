<template>
    <VueFlow
        v-model="elements"
        class="customnodeflow"
        :connection-line-style="connectionLineStyle"
        :default-zoom="1.5"
        fit-view-on-init
    >
        <template #node-custom="{ data }">
            <BaseNode :data="data" />
        </template>
    </VueFlow>
</template>

<script setup>
import { VueFlow } from '@vue-flow/core';
import { onMounted, ref } from 'vue';
import BaseNode from './nodes/ConversionThree.vue';

const elements = ref([]);

const connectionLineStyle = { stroke: '#000' };

onMounted(() => {
    elements.value = [
        {
            id: '1',
            type: 'custom',
            position: { x: 0, y: 50 }
        },

        {
            id: '2',
            type: 'custom',
            position: { x: 350, y: 25 }
        },

        {
            id: '3',
            type: 'custom',
            position: { x: 350, y: 200 }
        },

        {
            id: '4',
            type: 'custom',
            position: { x: 350, y: 200 }
        },

        {
            id: 'e1a-2',
            source: '1',
            target: '2',
            animated: true
        },

        {
            id: 'e1b-3',
            source: '1',
            sourceHandle: 'b',
            target: '3',
            animated: true
        }
    ];
});
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
