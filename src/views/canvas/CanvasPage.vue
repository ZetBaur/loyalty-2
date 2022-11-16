<template>
    <HeaderView @save="save" />
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue';

const save = () => {
    console.log('save');
};
</script>
