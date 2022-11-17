<template>
    <div ref="el"></div>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick, onMounted } from 'vue';

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
<style scoped>
p {
    margin: 5px;
    margin-bottom: 10px;
}
</style>
