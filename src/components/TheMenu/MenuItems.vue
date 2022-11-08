<template>
    <li>
        <div class="item-title" @click="toggle">
            <component :is="props.icon" class="icon" />

            <div v-if="menuIsExpanded">{{ props.itemName }}</div>

            <ArrowIcon
                v-if="menuIsExpanded"
                class="arrow"
                :class="{ droppedDown: droppedDown }"
            />
        </div>

        <ul class="nested-list" v-if="droppedDown && menuIsExpanded">
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
    icon: string;

    menuIsExpanded: boolean;

    links: Array<Ilinks>;
}>();

const droppedDown = ref(false);

const toggle = () => {
    droppedDown.value = !droppedDown.value;
};
</script>

<style lang="scss">
.arrow {
    margin-left: 16px;
    cursor: pointer;

    transform: rotate(-90deg);
}

.droppedDown {
    transform: rotate(0);
}

.nested-list {
    margin: 8px 0 0 64px;

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

.icon {
    margin-right: 16px;
    width: 20px;
}
</style>
