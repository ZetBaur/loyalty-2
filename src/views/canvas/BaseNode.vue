<template>
    <div
        class="w-[80px] h-[80px] border border-solid rounded-[10px] border-[#E4E4E4]"
    >
        <Handle
            id="a"
            type="target"
            :position="Position.Left"
            class="handle-left"
        />

        <Handle
            id="a"
            type="source"
            :position="Position.Right"
            class="handle-upper"
        />

        <Handle
            id="b"
            type="source"
            :position="Position.Right"
            class="handle"
        />
    </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
// import { computed } from 'vue';

// const props = defineProps({
//     data: {
//         type: Object,
//         required: true
//     }
// });

// const sourceHandleStyleA = computed(() => ({
//     backgroundColor: props.data.color,
//     filter: 'invert(100%)',
//     top: '15px'
// }));

// const sourceHandleStyleB = computed(() => ({
//     background: '#FFFFFF',
//     bottom: '10px',
//     top: 'auto',
//     width: '13px',
//     height: '13px',
//     border: '2px solid #D2D2D2'
// }));
</script>

<style scoped lang="scss">
.handle-left,
.handle-upper,
.handle {
    width: 13px;
    height: 13px;
    background: #ffffff;
    border: 2px solid #e68c8c;
    top: auto;
    bottom: 6px;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 5px;
        height: 5px;
        background: #b3b3b3;
        border-radius: 50%;
    }

    &:after {
        content: '';
        position: absolute;
        left: -6px;
        top: -5px;
        width: 21px;
        height: 19px;
        border-radius: 50%;
        border: 3px solid #ffffff;
    }
}

.handle-left {
    border: 2px solid #d2d2d2;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
}

.handle-upper {
    border: 2px solid #8ce4ca;
    top: 19px;
    bottom: auto;
}
</style>
