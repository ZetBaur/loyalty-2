<template>
    <VueFlow
        v-model="elements"
        class="basicflow"
        :default-edge-options="{ type: 'smoothstep' }"
        :default-zoom="1.5"
        :min-zoom="0.2"
        :max-zoom="4"
        fit-view-on-init
    >
        <!-- <Background pattern-color="#aaa" gap="8" /> -->
    </VueFlow>
</template>

<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { ref } from 'vue';
import { initialElements } from './initial-elements.ts';

const { onConnect, addEdges } = useVueFlow();

const elements = ref(initialElements);

onConnect((params) => {
    console.log('fffffffffff');

    addEdges([params]);
});
</script>

<style>
/* import the required styles */
@import '@vue-flow/core/dist/style.css';

/* import the default theme (optional) */
@import '@vue-flow/core/dist/theme-default.css';
</style>
