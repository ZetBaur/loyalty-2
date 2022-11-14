<template>
    <div class="custom-toolbar">
        <BaseButton @click-event="click" text="Фильтр" :icon="'Filter'" />

        <el-button
            v-if="props.filter"
            class="filter-button"
            @click="emit('filterEvent')"
            >Фильтр<el-icon class="el-icon--right" size="18"><Filter /></el-icon
        ></el-button>

        <el-button
            v-if="props.sort"
            class="sort-button"
            @click="emit('sortEvent')"
            >Сортировка<el-icon class="el-icon--right"><Operation /></el-icon
        ></el-button>

        <el-input
            v-if="props.clickSearch"
            v-model="search"
            placeholder="Please input"
        >
            <template #prepend>
                <el-button @click="searchHadler" :icon="Search" />
            </template>
        </el-input>

        <el-input
            v-if="props.inputSearch"
            v-model="search"
            placeholder="Please input"
            @input="searchHadler"
        >
            <template #prepend>
                <el-button :icon="Search" />
            </template>
        </el-input>

        <el-button
            type="success"
            v-if="props.create"
            @click="emit('createEvent')"
            >Создать<el-icon class="el-icon--right"><Plus /></el-icon
        ></el-button>
    </div>

    <el-divider class="custom-divider" />
</template>

<script setup lang="ts">
import { Filter, Operation, Search, Plus } from '@element-plus/icons-vue';
import { ref } from 'vue';
import BaseButton from './ui/BaseButton.vue';

const props = defineProps<{
    filter?: boolean;
    sort?: boolean;
    create?: boolean;
    inputSearch?: boolean;
    clickSearch?: boolean;
}>();

const emit = defineEmits<{
    (e: 'filterEvent'): void;
    (e: 'sortEvent'): void;
    (e: 'createEvent'): void;
    (e: 'searchEvent', value: string): void;
}>();

const click = (e: Event) => console.log('click', e);

const search = ref('');

const searchHadler = () => emit('searchEvent', search.value);
</script>

<style lang="scss">
.custom-divider {
    background: #f4f4f4;
    height: 8px !important;
    border-radius: 10px;
    border: none;
}

.custom-toolbar {
    display: flex;

    & .sort-button {
        margin-right: 10px;
    }

    & .filter-button {
        margin-right: 38px;
    }

    & .el-input {
        max-width: 484px;
        margin-left: auto;
        margin-right: 53px;
    }
}
</style>
