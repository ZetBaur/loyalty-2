<template>
    <Handle
        id="c"
        type="target"
        :position="Position.Left"
        :style="leftHandleStyle"
    />

    <Handle
        id="a"
        type="source"
        :position="Position.Right"
        :style="rightTopHandleStyle"
    />

    <Handle
        id="b"
        type="source"
        :position="Position.Right"
        :style="rightBottomHandleStyle"
    />

    <Handle
        id="d"
        type="source"
        :position="Position.Right"
        :style="rightMiddleHandleStyle"
    />

    <span></span>

    <div class="action-buttons">
        <div id="delete-button" class="delete-button"></div>

        <div id="edit-button" class="tool-button mx-1"></div>

        <div id="add-button" class="add-button" @click.stop="addHandler"></div>
    </div>

    <div v-if="showOptionsDialog" ref="optionsDialog" class="options">
        <div>Этап</div>
        <div>Конверсия</div>
    </div>

    <div class="conversion-description">Конверсия</div>

    <img src="@/assets/images/conversionicon.svg" />
</template>

<script setup>
import { Handle, Position } from '@vue-flow/core';
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const optionsDialog = ref(null);

onClickOutside(optionsDialog, () => (showOptionsDialog.value = false));

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// const emit = defineEmits(['change', 'gradient']);

const showOptionsDialog = ref(false);

const addHandler = () => {
    showOptionsDialog.value = true;
};

const leftHandleStyle = computed(() => ({
    // top: '50%',
    // transform: 'translateY(-50%)'
}));

const rightTopHandleStyle = computed(() => ({
    // top: '18px',
    // right: '-11px',
    // bottom: 'auto'
}));

const rightBottomHandleStyle = computed(() => ({
    bottom: '-1px',
    right: '-11px',
    top: 'auto'
}));

const rightMiddleHandleStyle = computed(() => ({
    top: '50%',
    right: '-11px',
    transform: 'translateY(-50%)'
}));
</script>

<style lang="scss">
.vue-flow__node-conversion {
    width: 80px;
    height: 80px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
        // border-color: #3a9023;

        & span {
            border-color: #d4b4f1;
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

.options {
    position: absolute;
    right: -140px;
    top: -10px;
    padding: 8px 0;
    border: 1px solid #e4e4e4;
    border-radius: 0px 15px 15px 15px;
    display: block;
    background: #ffffff;

    & div {
        padding: 7px 13px;
        cursor: pointer;

        &:hover {
            background: #f3f5fb;
        }
    }
}

.conversion-description {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    text-align: center;
    bottom: -43px;
    font-size: 18px;
    font-weight: 500;
}

.vue-flow__handle {
    width: 19px !important;
    height: 19px !important;
    background: #ffffff !important;
    border: 1px solid red !important;
}

.vue-flow__handle-left {
    left: -11px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
}

.vue-flow__handle-right {
    right: -11px !important;
    // top: 18px !important;
}
</style>
