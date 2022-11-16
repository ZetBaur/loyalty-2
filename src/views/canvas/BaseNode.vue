<template>
    <Handle
        id="a"
        type="source"
        :position="Position.Right"
        :style="sourceHandleStyleA"
    />

    <Handle
        id="b"
        type="source"
        :position="Position.Right"
        :style="sourceHandleStyleB"
    />
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const sourceHandleStyleA = computed(() => ({
    backgroundColor: props.data.color,
    filter: 'invert(100%)',
    top: '10px'
}));

const sourceHandleStyleB = computed(() => ({
    backgroundColor: props.data.color,
    filter: 'invert(100%)',
    bottom: '10px',
    top: 'auto'
}));
</script>
