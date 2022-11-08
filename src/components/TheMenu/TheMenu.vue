<template>
    <div class="menu">
        <div class="logo">
            <LogoIcon />
        </div>

        <ul class="menu-list">
            <li>
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
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArrowIcon from '../icons/ArrowIcon.vue';
import LogoIcon from '../icons/LogoIcon.vue';

const expanded = ref(false);

const toggle = () => {
    expanded.value = !expanded.value;
};
</script>

<style lang="scss">
.menu {
    padding: 38px 16px;
    width: 200px;
}

.logo {
    text-align: center;
}

.arrow {
    margin-left: 8px;
    cursor: pointer;

    transform: rotate(-90deg);
}

.expanded {
    transform: rotate(0);
}

.nested-list {
    margin: 8px 0 0 16px;

    & li {
        padding: 8px 0 !important;
    }
}

.item-title {
    display: flex;
    align-items: center;

    & div {
        cursor: pointer;
    }
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
