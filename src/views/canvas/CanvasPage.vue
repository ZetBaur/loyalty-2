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
import { Position, VueFlow, useVueFlow } from '@vue-flow/core';
import { h, onMounted, ref } from 'vue';
import BaseNode from './nodes/ConversionThree.vue';

const { findNode } = useVueFlow();

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
            type: 'output',
            label: '1111111111111',
            position: { x: 350, y: 25 },
            targetPosition: Position.Left
        },
        {
            id: '3',
            type: 'output',
            label: '222222222222222',
            position: { x: 350, y: 200 },
            targetPosition: Position.Left
        },

        {
            id: 'e1a-2',
            source: '1',
            sourceHandle: 'a',
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
