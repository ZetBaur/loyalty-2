<template>
    <div ref="el" class="flex justify-center items-center">
        <img src="@/assets/images/stageicon.svg" />
    </div>
    <span class="stage-border"></span>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';
import StageIcon from '@/components/icons/StageIcon.vue';

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
