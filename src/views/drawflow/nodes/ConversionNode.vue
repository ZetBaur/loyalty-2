<template>
    <div ref="el" class="flex justify-center items-center">
        <img src="@/assets/images/conversionicon.svg" />
    </div>

    <span class="conversion-border"></span>

    <div class="flex absolute top-[-50px] left-[-17px]">
        <div
            @click="emit('delete')"
            id="delete-button"
            class="delete-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>

        <div
            @click="emit('edit')"
            id="edit-button"
            class="edit-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center mx-1 cursor-pointer"
        ></div>

        <div
            @click="emit('add')"
            id="add-button"
            class="add-button w-[34px] h-[34px] rounded-[5px] bg-[#69696B] flex justify-center items-center cursor-pointer"
        ></div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';
const emit = defineEmits(['delete', 'edit', 'add']);

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
