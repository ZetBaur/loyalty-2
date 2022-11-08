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
    width: 250px;
}

.logo {
    text-align: center;
}
</style>
