<template>
    <div class="custom-node">
        <Handle
            id="c"
            type="target"
            :position="Position.Left"
            :style="sourceHandleStyleC"
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

        <Handle
            id="d"
            type="source"
            :position="Position.Right"
            :style="sourceHandleStyleD"
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

const sourceHandleStyleC = computed(() => ({
    backgroundColor: props.data.color,
    top: '50%',
    transform: 'translateY(-50%)'
}));

const sourceHandleStyleA = computed(() => ({
    backgroundColor: props.data.color,
    top: '19px',
    bottom: 'auto'
}));

const sourceHandleStyleB = computed(() => ({
    backgroundColor: props.data.color,
    bottom: '13px',
    top: 'auto'
}));

const sourceHandleStyleD = computed(() => ({
    backgroundColor: props.data.color,
    top: '50%',
    transform: 'translateY(-50%)'
}));
</script>

<style lang="scss" scoped>
.custom-node {
    width: 80px;
    height: 80px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;
}
</style>
