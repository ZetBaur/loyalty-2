<template>
    <div class="custom-node">
        <Handle
            id="c"
            type="target"
            :position="Position.Left"
            :style="sourceHandleStyleA"
        />

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
    </div>
</template>

<script setup>
import { Handle, Position } from '@vue-flow/core';
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// const emit = defineEmits(['change', 'gradient']);

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

<style lang="scss" scoped>
.custom-node {
    width: 80px;
    height: 80px;
    border: 1px solid grey;
}
</style>
