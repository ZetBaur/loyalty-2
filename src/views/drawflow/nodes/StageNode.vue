<template>
    <div ref="el" class="flex justify-center items-center">
        <img src="@/assets/images/stageicon.svg" />
    </div>

    <span class="stage-border"></span>

    <div class="node-icons hidden absolute top-[-50px] left-[-17px]">
        <div
            id="delete-button"
            class="delete-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>

        <div
            id="edit-button"
            class="edit-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center mx-1 cursor-pointer"
        ></div>

        <div
            id="add-button"
            class="add-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>
    </div>

    <div class="node-options">
        <div>Этап</div>
        <div>Конверсия</div>
    </div>

    <div class="node-description">
        <div>Второй этап - {{ dataNode.data && stage }}</div>
        <div>
            Размер сегмента -
            {{ dataNode.data && dataNode.data.segment_size }}
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';
// import { useDrawflowStore } from '@/stores/drawflowStore';

// const drawflowStore = useDrawflowStore();

const el = ref(null);
let df = null;
const nodeId = ref(0);
const dataNode = ref({});
df = getCurrentInstance().appContext.config.globalProperties.$df.value;

onMounted(async () => {
    await nextTick();
    nodeId.value = el.value.parentElement.parentElement.id.slice(5);
    dataNode.value = df.getNodeFromId(nodeId.value);
});
</script>

<style lang="scss">
.edit-button,
.add-button,
.delete-button {
    background-repeat: no-repeat;
    background-position: center;
}

.edit-button {
    background-image: url('@/assets/images/toolsicon.svg');
}
.add-button {
    background-image: url('@/assets/images/plusicon.svg');
}
.delete-button {
    background-image: url('@/assets/images/deleteicon.svg');
}
</style>
