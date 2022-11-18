<template>
    <div ref="el" class="flex justify-center items-center">
        <img src="@/assets/images/conversionicon.svg" />
    </div>
    <span class="conversion-border"></span>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';
import StageIcon from '@/components/icons/StageIcon.vue';

const el = ref(null);
const textarea = ref('');
let df = null;
const nodeId = ref(0);
const dataNode = ref({});

df = getCurrentInstance().appContext.config.globalProperties.$df.value;

onMounted(async () => {
    await nextTick();
    nodeId.value = el.value.parentElement.parentElement.id.slice(5);
    dataNode.value = df.getNodeFromId(nodeId.value);
    textarea.value = dataNode.value.data.script;
});
</script>

<!-- <style lang="scss">
.drawflow .drawflow-node {
    width: 80px;
    height: 80px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    background: #ffffff;
}

// inputs and outputs

.drawflow .drawflow-node .input,
.drawflow .drawflow-node .output {
    background: #ffffff;
    border: none;
    border: 1px solid #ffffff;
    width: 19px;
    height: 19px;

    &::before {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #b3b3b3;
        border-radius: 50%;
    }

    &::after {
        content: '';
        width: 13px;
        height: 13px;
        border: 2px solid #d2d2d2;
        border-radius: 50%;
        position: absolute;
        left: 2px;
        top: 2px;
    }
}

.drawflow .drawflow-node .input {
    left: -26px;
}

.drawflow .drawflow-node .output {
    right: -9px;
}

// selected

.drawflow .drawflow-node.selected {
    background: transparent;
    // border-color: #3a9023;

    & .conversion-border {
        border-color: #d4b4f1;
    }
}

.drawflow {
    & span {
        width: 86px;
        height: 86px;
        border: 3px solid #ffffff;
        border-radius: 13px;
        position: absolute;
        left: -5px;
        top: -5px;
    }
}

#drawflow {
    background: #ffffff !important;
}
</style> -->
