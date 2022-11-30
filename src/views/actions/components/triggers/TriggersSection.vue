<template>
    <h2 class="text-lg font-medium mb-4">Триггеры</h2>

    <el-select placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
        />
    </el-select>

    <el-divider class="border-0 bg-[#ebebeb] rounded-lg mb-10" />

    <ActorSection />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActorSection from './ActorSection.vue';
const options = ref(['trest', 'test2']);
</script>

<style lang="scss"></style>
