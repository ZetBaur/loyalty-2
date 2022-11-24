<template>
    <HeaderView
        @save="save"
        @add-conversion-node="addConversionNode"
        @add-stage-node="addStageNode"
        :elements="elements"
    />

    <VueFlow
        v-model="elements"
        class="basicflow"
        :default-edge-options="{ type: 'customEdge', animated: true }"
        :default-zoom="1.1"
        :min-zoom="0.2"
        :max-zoom="3"
        fit-view-on-init
        @nodeClick="nodeClick"
    >
        <template #node-stage="{ data }">
            <StageNode :data="data" @remove="remove" />
        </template>

        <template #node-conversion="{ data }">
            <ConversionNode :data="data" @remove="remove" />
        </template>

        <template #edge-customEdge="props">
            <CustomEdge v-bind="props" />
        </template>
    </VueFlow>
</template>

<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { ref, onMounted } from 'vue';
import HeaderView from './components/HeaderView.vue';
import StageNode from './components/nodes/StageNode.vue';
import ConversionNode from './components/nodes/ConversionNode.vue';
import CustomEdge from './components/edges/CustomEdge.vue';

const { onConnect, addEdges, nodes, addNodes, applyNodeChanges } = useVueFlow();

const elements = ref([]);

const selectedNode = ref(null);

const nodeClick = (val) => (selectedNode.value = val);

const save = () => {
    console.log('save', elements.value);
};

onConnect((params) => addEdges([params]));

const remove = () => {
    applyNodeChanges([
        {
            id: selectedNode.value.node.id,
            type: 'remove',
            removeConnectedEdges: true
        }
    ]);
};

const addStageNode = () => {
    const id = nodes.value.length + 1;

    const newPositionX = nodes.value.length * 150 + 100;

    const newNode = {
        type: 'stage',
        id: id,
        position: { x: newPositionX, y: 100 }
    };

    addNodes([newNode]);
};

const addConversionNode = () => {
    const id = nodes.value.length + 1;
    const newPositionX = nodes.value.length * 150 + 100;

    const newNode = {
        type: 'conversion',
        id: id,
        position: { x: newPositionX, y: 100 }
    };

    addNodes([newNode]);
};

onMounted(() => {
    // elements.value = [
    //     {
    //         id: '1',
    //         type: 'stage',
    //         data: {},
    //         position: { x: 0, y: 50 }
    //     },
    //     {
    //         id: '2',
    //         type: 'stage',
    //         data: {},
    //         position: { x: 350, y: 25 }
    //         // targetPosition: Position.Left
    //     },
    //     {
    //         id: '3',
    //         type: 'conversion',
    //         position: { x: 350, y: 200 },
    //         targetPosition: Position.Left
    //     },
    //     {
    //         id: 'e1a-2',
    //         type: 'customEdge',
    //         source: '1',
    //         sourceHandle: 'a',
    //         target: '2',
    //         animated: true,
    //         style: () => ({}),
    //         data: {
    //             label: 'No'
    //         }
    //     },
    //     {
    //         id: 'e1b-3',
    //         source: '1',
    //         sourceHandle: 'b',
    //         target: '3',
    //         animated: true,
    //         style: () => ({})
    //     }
    // ];
});
</script>

<style lang="scss">
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
