<template>
    <li>
        <div class="item-title" @click="toggle">
            <component :is="props.icon" class="icon" v-if="menuIsExpanded" />

            <el-tooltip v-else placement="right" effect="dark">
                <template #content>
                    <div class="popover">
                        <RouterLink
                            v-for="el in links"
                            :key="el.link"
                            :to="el.path"
                        >
                            {{ el.link }}
                        </RouterLink>
                    </div>
                </template>
                <component :is="props.icon" class="not-expand-icon" />
            </el-tooltip>

            <div v-if="menuIsExpanded">{{ props.itemName }}</div>

            <ArrowIcon
                v-if="menuIsExpanded"
                class="arrow"
                :class="{ droppedDown: droppedDown }"
            />
        </div>

        <ul class="nested-list" v-if="droppedDown && menuIsExpanded">
            <li v-for="el in links" :key="el.link">
                <span @click="linkHandler(el.path)">{{ el.link }}</span>
            </li>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ArrowIcon from '../../icons/ArrowIcon.vue';
import { useRouter } from 'vue-router';

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

const emit = defineEmits<{
    (e: 'closeMenu'): void;
}>();

const router = useRouter();

const droppedDown = ref(false);

const linkHandler = (path: string) => {
    emit('closeMenu');
    router.push(path);
};

const toggle = () => (droppedDown.value = !droppedDown.value);
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

    & span {
        cursor: pointer;
        &:hover {
            color: #f50f64;
        }
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
    width: 45px;
}

.not-expand-icon {
    width: 45px;
    cursor: pointer;

    &:hover {
        color: #f50f64;
    }
}

.popover {
    display: flex;
    flex-direction: column;

    & a {
        font-size: 18px;
        color: #ffffff;
        padding: 8px;

        &:hover {
            color: #f50f64;
        }
    }
}
</style>
