<template>
    <ul class="menu">
        <LogoIcon />

        <li>
            <RouterLink to="/"> Страница 2 </RouterLink>
        </li>

        <li>
            <div style="display: flex; align-items: center">
                <div>Страница 3</div>

                <ArrowRight style="margin-left: 8px" />
            </div>

            <ul>
                <li>
                    <RouterLink to="/"> Страница 3-1 </RouterLink>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import ArrowRight from '../icons/ArrowIcon.vue';
import LogoIcon from '../icons/LogoIcon.vue';
</script>

<style lang="scss">
.menu {
    background: $custom-black;
    padding: 38px 16px;
    color: #ffffff;
    width: auto;
    white-space: nowrap;

    display: flex;
    flex-direction: column;
    align-items: center;

    & .el-icon,
    & a {
        color: #ffffff;
    }
}
</style>
