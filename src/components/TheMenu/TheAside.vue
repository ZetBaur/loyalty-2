<template>
    <div class="aside">
        <div class="logo">
            <LogoIcon />
        </div>

        <MenuRoutes />
    </div>
</template>

<script setup lang="ts">
import LogoIcon from '../icons/LogoIcon.vue';
import MenuRoutes from './MenuRoutes.vue';
</script>

<style lang="scss">
.aside {
    padding: 38px 16px;
    width: 300px;
    position: fixed;
    transform: translateX(-100%);
    background: $custom-black;
    min-height: 100%;
}

.menu-expanded {
    transform: translateX(0);
}

.logo {
    text-align: center;
}
</style>
