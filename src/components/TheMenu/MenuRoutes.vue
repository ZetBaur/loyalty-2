<template>
    <ul class="menu-list">
        <SingleMenuItem
            link="Страница Test"
            path="/test"
            icon="Microphone"
            :menuIsExpanded="props.menuIsExpanded"
            @close-menu="emit('closeMenu')"
        />

        <MultiMenuItems
            itemName="Кампании"
            icon="Discount"
            :menuIsExpanded="props.menuIsExpanded"
            @close-menu="emit('closeMenu')"
            path="/"
            :links="[
                {
                    link: 'Страница Test',
                    path: '/test'
                },
                {
                    link: 'Кампании',
                    path: '/campaigns'
                }
            ]"
        />

        <SingleMenuItem
            link="Акции"
            path="/actions"
            icon="Microphone"
            :menuIsExpanded="props.menuIsExpanded"
            @close-menu="emit('closeMenu')"
        />

        <OpenMenuIcon class="open-menu-icon" @click="emit('expandMenu')" />
    </ul>
</template>

<script setup lang="ts">
import OpenMenuIcon from '../icons/OpenMenuIcon.vue';
import MultiMenuItems from './components/MultiMenuItems.vue';
import SingleMenuItem from './components/SingleMenuItem.vue';

//-------------

const props = defineProps<{
    menuIsExpanded: boolean;
}>();

//-------------

const emit = defineEmits<{
    (e: 'expandMenu'): void;
    (e: 'closeMenu'): void;
}>();

//-------------
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
    margin-top: 25px;

    & li {
        padding: 25px 0;
    }

    & .el-icon,
    & a {
        color: #ffffff;
    }

    .open-menu-icon {
        width: 45px;
        margin: 72px 0;
        cursor: pointer;
    }
}
</style>
