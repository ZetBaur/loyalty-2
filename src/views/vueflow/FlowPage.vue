<template>
    <HeaderView />

    <div class="flex it mt-4">
        <BaseButton @click="onAdd" text="Конверсия" class="mr-4">
            <ConversionIcon />
        </BaseButton>

        <BaseButton text="Этапы">
            <StageIcon />
        </BaseButton>
    </div>

    <VueFlow
        v-model="elements"
        class="basicflow"
        :default-edge-options="{ type: 'smoothstep' }"
        :default-zoom="1.5"
        :min-zoom="0.2"
        :max-zoom="4"
        fit-view-on-init
    >
        <template #node-custom="{ data }">
            <CustomNode :data="data" />
        </template>
    </VueFlow>
</template>

<script setup>
import { VueFlow, useVueFlow, Position } from '@vue-flow/core';
import { ref, onMounted } from 'vue';
// import { initialElements } from './initial-elements.ts';
import HeaderView from './components/HeaderView.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ConversionIcon from '@/components/icons/ConversionIcon.vue';
import StageIcon from '@/components/icons/StageIcon.vue';
import CustomNode from './nodes/CustomNode.vue';

const { onConnect, addEdges } = useVueFlow();

const {
    nodes,
    addNodes
    // setNodes,
    // setEdges,
    // dimensions,
    // setTransform,
    // toObject
} = useVueFlow();

const elements = ref([]);

onConnect((params) => {
    console.log('onConnect', params);

    addEdges([params]);
});

const onAdd = () => {
    const id = nodes.value.length + 1;

    const newNode = {
        type: 'custom',
        id: id,
        label: `Node ${id}`,

        position: { x: 0, y: 0 },
        targetPosition: Position.Left
    };

    addNodes([newNode]);
};

onMounted(() => {
    elements.value = [
        {
            id: '1',
            type: 'custom',
            data: {},
            position: { x: 0, y: 50 }
        },
        {
            id: '2',
            type: 'output',
            position: { x: 350, y: 25 },
            targetPosition: Position.Left
        },
        {
            id: '3',
            type: 'output',
            position: { x: 350, y: 200 },
            targetPosition: Position.Left
        },
        {
            id: 'e1a-2',
            source: '1',
            sourceHandle: 'a',
            target: '2',
            animated: true,
            style: () => ({})
        },
        {
            id: 'e1b-3',
            source: '1',
            sourceHandle: 'b',
            target: '3',
            animated: true,
            style: () => ({})
        }
    ];
});
</script>

<style>
/* import the required styles */
@import '@vue-flow/core/dist/style.css';

/* import the default theme (optional) */
@import '@vue-flow/core/dist/theme-default.css';
</style>
