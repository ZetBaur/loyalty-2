<template>
    <div>
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

        <span></span>

        <div class="action-buttons">
            <div id="delete-button" class="delete-button"></div>

            <div id="edit-button" class="tool-button mx-1"></div>

            <div id="add-button" class="add-button"></div>
        </div>
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

<style lang="scss">
.vue-flow__node-stage {
    width: 80px;
    height: 80px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;

    &.selected {
        border-color: #3a9023;

        & span {
            border-color: #c0dbb8;
        }

        & .action-buttons {
            display: flex;
        }
    }

    & span {
        width: 86px;
        height: 86px;
        border: 3px solid #ffffff;
        border-radius: 13px;
        position: absolute;
        left: -5px;
        top: -5px;
        z-index: -1;
    }
}

.action-buttons {
    position: absolute;
    display: none;
    top: -50px;
    left: -17px;
}

.tool-button,
.add-button,
.delete-button {
    background-repeat: no-repeat !important;
    background-position: center !important;
    width: 34px;
    height: 34px;
    border-radius: 5px;
    background: #69696b;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.tool-button {
    background-image: url('@/assets/images/toolsicon.svg');
}
.add-button {
    background-image: url('@/assets/images/plusicon.svg');
}
.delete-button {
    background-image: url('@/assets/images/deleteicon.svg');
}
</style>
