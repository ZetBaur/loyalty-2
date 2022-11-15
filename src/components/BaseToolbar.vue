<template>
    <div class="custom-toolbar">
        <BaseButton
            v-if="props.filter"
            @action="emit('filterEvent')"
            text="Фильтр"
            :icon="'Filter'"
            style="margin-right: 39px"
        />

        <BaseButton
            v-if="props.sort"
            @action="emit('sortEvent')"
            text="Сортировка"
            :icon="'Operation'"
            style="margin-right: 39px"
        />

        <el-input
            v-model="search"
            placeholder="Please input"
            @input="searchHadler"
            clearable
        >
            <template #prepend>
                <el-icon size="25"><Search /></el-icon>
            </template>
        </el-input>

        <BaseButton
            v-if="props.create"
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
}>();

const emit = defineEmits<{
    (e: 'filterEvent'): void;
    (e: 'sortEvent'): void;
    (e: 'createEvent'): void;
    (e: 'searchEvent', value: string | number): void;
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

    & .el-input {
        max-width: 484px;
        margin-left: auto;
        margin-right: 53px;
    }

    & .el-input-group__prepend {
        border-radius: 15px 0 0 15px;
    }

    & .el-input__wrapper {
        border-radius: 0 15px 15px 0;
    }
}
</style>
