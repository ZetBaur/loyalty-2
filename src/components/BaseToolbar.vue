<template>
    <div class="custom-toolbar">
        <BaseButton
            @action="emit('filterEvent')"
            text="Фильтр"
            :icon="'Filter'"
        />

        <BaseButton
            @action="emit('sortEvent')"
            text="Сортировка"
            :icon="'Operation'"
        />

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

        <BaseButton
            @action="emit('createEvent')"
            text="Создать"
            :icon="'Plus'"
            color="green"
        />
    </div>

    <el-divider class="custom-divider" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
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

    & button {
        margin-right: 39px;
    }

    & .el-input {
        max-width: 484px;
        margin-left: auto;
        margin-right: 53px;
    }
}
</style>
