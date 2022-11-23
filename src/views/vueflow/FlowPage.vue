<template>
    <HeaderView
        @save="save"
        @add-conversion-node="addStageNode"
        @add-stage-node="addConversionNode"
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
        @nodesChange="nodesChange"
    >
        <template #node-custom="{ data }">
            <CustomNode :data="data" />
        </template>

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
import { VueFlow, useVueFlow, Position } from '@vue-flow/core';
import { ref, onMounted } from 'vue';
import HeaderView from './components/HeaderView.vue';
import CustomNode from './nodes/CustomNode.vue';
import StageNode from './nodes/StageNode.vue';
import ConversionNode from './nodes/ConversionNode.vue';
import CustomEdge from './edges/CustomEdge.vue';

const { onConnect, addEdges, nodes, addNodes, applyNodeChanges } = useVueFlow();

const elements = ref([]);
const selectedNode = ref(null);

const save = () => {
    console.log('save');
};

const nodeClick = (val) => {
    // console.log('nodeClick', val.node.id);
    // console.log('nodeClick', val);

    selectedNode.value = val.node.id;
};

const remove = () => {
    console.log('remove', selectedNode.value);
    applyNodeChanges([
        {
            id: selectedNode.value,
            type: 'remove'
        }
    ]);
};

onConnect((params) => {
    // console.log('onConnect', params);

    addEdges([params]);
});

const nodesChange = (val) => {
    val;
    // console.log(val);
    // console.log('nodesChange', elements.value);
};

const addStageNode = () => {
    const id = nodes.value.length + 1;

    const newNode = {
        type: 'stage',
        id: id,
        position: { x: 0, y: 0 },
        targetPosition: Position.Left
    };

    addNodes([newNode]);
};

const addConversionNode = () => {
    const id = nodes.value.length + 1;

    const newNode = {
        type: 'conversion',
        id: id,
        position: { x: 0, y: 0 },
        targetPosition: Position.Left
    };

    addNodes([newNode]);
};

onMounted(() => {
    elements.value = [
        {
            id: '1',
            type: 'stage',
            data: {},
            position: { x: 0, y: 50 }
        },
        {
            id: '2',
            type: 'stage',
            data: {},
            position: { x: 350, y: 25 }
            // targetPosition: Position.Left
        },
        {
            id: '3',
            type: 'conversion',
            position: { x: 350, y: 200 },
            targetPosition: Position.Left
        },

        {
            id: 'e1a-2',
            type: 'customEdge',
            source: '1',
            sourceHandle: 'a',
            target: '2',
            animated: true,
            style: () => ({}),
            data: {
                label: 'No'
            }
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

<style lang="scss">
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
