<template>
    <li class="single-menu-item">
        <component :is="props.icon" class="icon" v-if="menuIsExpanded" />

        <el-tooltip v-else placement="right" effect="light">
            <template #content>
                <div class="popover">
                    <RouterLink :to="props.path">
                        {{ props.link }}
                    </RouterLink>
                </div>
            </template>

            <component :is="props.icon" class="not-expand-icon" />
        </el-tooltip>

        <span v-if="props.menuIsExpanded" @click="linkHandler(props.path)">{{
            props.link
        }}</span>
    </li>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

const props = defineProps<{
    link: string;
    path: string;
    icon: string;
    menuIsExpanded: boolean;
}>();

const emit = defineEmits<{
    (e: 'closeMenu'): void;
}>();

const router = useRouter();

const linkHandler = (path: string) => {
    console.log(path);

    emit('closeMenu');

    router.push(path);
};
</script>

<style lang="scss">
.single-menu-item {
    display: flex;
    align-items: center;

    & span {
        cursor: pointer;

        &:hover {
            color: #f50f64;
        }
    }
}
</style>
