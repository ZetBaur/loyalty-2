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
import { ref } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';
import MenuRoutes from './MenuRoutes.vue';
import { onClickOutside } from '@vueuse/core';

const target = ref(null);

const menuIsExpanded = ref(false);

onClickOutside(target, () => (menuIsExpanded.value = false));

const expandMenu = () => {
    console.log('expandMenu');

    menuIsExpanded.value = !menuIsExpanded.value;
};
</script>

<style lang="scss">
.aside {
    padding: 38px 16px;
    width: 77px;
    position: fixed;
    background: $custom-black;
    min-height: 100%;
    transition: all 400ms;
}

.menu-expanded {
    width: 300px;
}
</style>
