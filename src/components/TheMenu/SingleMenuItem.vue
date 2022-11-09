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

        <!-- <component v-else :is="props.icon" class="not-expand-icon" /> -->

        <RouterLink :to="props.path" v-if="props.menuIsExpanded">
            {{ props.link }}
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
    link: string;
    path: string;
    icon: string;
    menuIsExpanded: boolean;
}>();
</script>

<style lang="scss">
.single-menu-item {
    display: flex;
    align-items: center;
}
</style>
