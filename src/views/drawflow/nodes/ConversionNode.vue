<template>
    <div ref="el" class="flex justify-center items-center">
        <img src="@/assets/images/conversionicon.svg" />
    </div>

    <span class="conversion-border"></span>

    <div class="node-icons hidden absolute top-[-50px] left-[-17px]">
        <div
            id="delete-button"
            class="delete-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>

        <!--  -->

        <div
            id="edit-button"
            class="edit-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center mx-1 cursor-pointer"
        ></div>

        <!--  -->

        <div
            id="add-button"
            class="add-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>
    </div>

    <div class="node-adds">
        <div>Этап</div>
        <div>Конверсия</div>
    </div>

    <div class="node-description conversion-node-description">Конверсия</div>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';

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
