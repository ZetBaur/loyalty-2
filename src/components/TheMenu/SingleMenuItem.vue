<template>
    <li class="single-menu-item">
        <component :is="props.icon" class="icon" />

        <RouterLink :to="props.path">
            {{ props.link }}
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
    link: string;
    path: string;
    icon: string;
}>();
</script>

<style lang="scss">
.single-menu-item {
    display: flex;
    align-items: center;
}
</style>
