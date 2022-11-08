<template>
    <li style="display: flex; align-items: center">
        <TestIcon style="margin-right: 16px" />

        <RouterLink :to="props.path">
            {{ props.link }}
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import TestIcon from '../icons/TestIcon.vue';

const props = defineProps<{
    link: string;
    path: string;
}>();
</script>

<!-- <style lang="scss">
.arrow {
    margin-left: 16px;
    cursor: pointer;

    transform: rotate(-90deg);
}

.expanded {
    transform: rotate(0);
}

.nested-list {
    margin: 8px 0 0 16px;

    & li {
        padding: 8px 0 !important;
    }
}

.item-title {
    display: flex;
    align-items: center;

    & div {
        cursor: pointer;
    }
}
</style> -->
