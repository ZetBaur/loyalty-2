<template>
    <div class="aside" :class="{ 'menu-expanded': menuIsExpanded }">
        <div class="logo">
            <LogoIcon />
        </div>

        <MenuRoutes
            @expand-menu="expandMenu"
            :menuIsExpanded="menuIsExpanded"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';
import MenuRoutes from './MenuRoutes.vue';

const menuIsExpanded = ref(false);

const expandMenu = () => {
    console.log('expandMenu');

    menuIsExpanded.value = !menuIsExpanded.value;
};
</script>

<style lang="scss">
.aside {
    padding: 38px 16px;
    width: 100px;
    position: fixed;
    background: $custom-black;
    min-height: 100%;
}

.menu-expanded {
    transform: translateX(0);
    width: 300px;
}

.logo {
    text-align: center;
}
</style>
