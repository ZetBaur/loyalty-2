<template>
    <li>
        <div class="item-title" @click="toggle">
            <div>{{ props.itemName }}</div>

            <ArrowIcon class="arrow" :class="{ expanded: expanded }" />
        </div>

        <ul class="nested-list" v-if="expanded">
            <li v-for="el in links" :key="el.link">
                <RouterLink :to="el.path"> {{ el.link }} </RouterLink>
            </li>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ArrowIcon from '../icons/ArrowIcon.vue';

interface Ilinks {
    link: string;
    path: string;
}

const props = defineProps<{
    itemName: string;
    path: string;

    links: Array<Ilinks>;
}>();

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
