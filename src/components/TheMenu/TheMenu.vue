<template>
    <div class="menu">
        <div class="logo">
            <LogoIcon />
        </div>

        <MenuList />
    </div>
</template>

<script setup lang="ts">
import LogoIcon from '../icons/LogoIcon.vue';
import MenuList from './MenuList.vue';
</script>

<style lang="scss">
.menu {
    padding: 38px 16px;
    width: 250px;
}

.logo {
    text-align: center;
}
</style>
