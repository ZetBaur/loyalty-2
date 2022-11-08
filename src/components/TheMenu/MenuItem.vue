<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ArrowIcon from '../icons/ArrowIcon.vue';

const expanded = ref(false);

const toggle = () => {
    expanded.value = !expanded.value;
};
</script>

<style lang="scss">
.arrow {
    margin-left: 16px;
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
</style>
