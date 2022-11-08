<template>
    <ul class="menu-list">
        <SingleMenuItem link="Страница 1" path="/" />

        <MenuItems
            itemName="Страница 2"
            path="/"
            :links="[
                {
                    link: 'Страница 2-1',
                    path: '/page'
                },
                {
                    link: 'Страница 2-2',
                    path: '/page2'
                }
            ]"
        />
    </ul>
</template>

<script setup lang="ts">
import MenuItems from './MenuItems.vue';
import SingleMenuItem from './SingleMenuItem.vue';
</script>

<style lang="scss">
.menu-list {
    background: $custom-black;
    color: #ffffff;
    width: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    user-select: none;

    & li {
        padding: 25px 0;
    }

    & .el-icon,
    & a {
        color: #ffffff;
    }
}
</style>
