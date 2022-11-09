<template>
    <div class="aside" :class="{ 'menu-expanded': menuIsExpanded }">
        <div>
            <LogoIcon />
        </div>

        <MenuRoutes
            @expand-menu="expandMenu"
            :menuIsExpanded="menuIsExpanded"
            ref="target"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';
import MenuRoutes from './MenuRoutes.vue';
import { onClickOutside } from '@vueuse/core';
import { useRoute } from 'vue-router';

const route = useRoute();

// const currentPath = ref(route.fullPath);

const currentPath = computed(() => route.fullPath);

console.log('currentPath', currentPath.value);

const target = ref(null);

const menuIsExpanded = ref(false);

onClickOutside(target, () => (menuIsExpanded.value = false));

const expandMenu = () => (menuIsExpanded.value = !menuIsExpanded.value);

watch(
    () => currentPath.value,
    (newValue, oldValue) => {
        console.log(newValue);
        console.log(oldValue);

        if (newValue !== oldValue) menuIsExpanded.value = false;
    },
    { deep: true }
);
</script>

<style lang="scss">
.aside {
    padding: 38px 16px;
    width: 77px;
    position: fixed;
    background: $custom-black;
    min-height: 100%;
}

.menu-expanded {
    width: 300px;
}
</style>
