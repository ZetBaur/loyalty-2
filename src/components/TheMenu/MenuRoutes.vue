<template>
    <ul class="menu-list">
        <SingleMenuItem
            link="Страница 1"
            path="/"
            icon="Microphone"
            :menuIsExpanded="props.menuIsExpanded"
        />

        <MenuItems
            itemName="Конфигурация детекторов"
            icon="Discount"
            :menuIsExpanded="props.menuIsExpanded"
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

        <MenuItems
            itemName="Вкладка 2"
            icon="Microphone"
            :menuIsExpanded="props.menuIsExpanded"
            path="/"
            :links="[
                {
                    link: 'Страница Test',
                    path: '/test'
                },
                {
                    link: 'Страница 2-2',
                    path: '/page2'
                }
            ]"
        />

        <OpenMenuIcon @click="emit('expandMenu')" />
    </ul>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import OpenMenuIcon from '../icons/OpenMenuIcon.vue';
import MenuItems from './MenuItems.vue';
import SingleMenuItem from './SingleMenuItem.vue';

const props = defineProps<{
    menuIsExpanded: boolean;
}>();

const emit = defineEmits<{
    (e: 'expandMenu'): void;
}>();

// const menuIsOpen = ref(false);

// const openMenu = () => {
//     console.log('openMenu');
// };
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
