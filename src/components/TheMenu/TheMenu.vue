<template>
    <div class="menu">
        <div class="logo">
            <LogoIcon />
        </div>

        <ul class="menu-list">
            <MenuItem />

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
import MenuItem from './MenuItem.vue';
import LogoIcon from '../icons/LogoIcon.vue';
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

    & li {
        padding: 25px 0;
    }

    & .el-icon,
    & a {
        color: #ffffff;
    }
}
</style>
