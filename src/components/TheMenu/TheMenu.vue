<template>
    <div class="menu">
        <div class="logo">
            <LogoIcon />
        </div>

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

            <!-- ---------------------------------- -->

            <!-- <li>
                <RouterLink to="/"> Страница 2 </RouterLink>
            </li>

            <li>
                <div class="item-title" @click="toggle">
                    <div>Страница 3</div>

                    <ArrowIcon class="arrow" :class="{ expanded: expanded }" />
                </div>

                <ul class="nested-list" v-if="expanded">
                    <li>
                        <RouterLink to="/"> Страница 3-1 </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/"> Страница 3-2 </RouterLink>
                    </li>
                </ul>
            </li> -->
        </ul>
    </div>
</template>

<script setup lang="ts">
import MenuItems from './MenuItems.vue';
import LogoIcon from '../icons/LogoIcon.vue';
import SingleMenuItem from './SingleMenuItem.vue';
</script>

<style lang="scss">
.menu {
    padding: 38px 16px;
    width: 250px;
}

.logo {
    text-align: center;
}

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
