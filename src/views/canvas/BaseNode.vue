<template>
    <div
        class="w-[80px] h-[80px] border border-solid rounded-[10px] border-[#E4E4E4]"
    >
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
            class="w-[13px] h-[13px]"
        />
    </div>
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
    top: '15px'
}));

const sourceHandleStyleB = computed(() => ({
    backgroundColor: props.data.color,
    filter: 'invert(100%)',
    bottom: '10px',
    top: 'auto'
}));
</script>
