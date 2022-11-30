<template>
    <div class="flex">
        <el-button v-if="props.filter" @click="emit('filterEvent')"
            >Фильтр<el-icon class="ml-3"><Filter /></el-icon
        ></el-button>

        <el-button v-if="props.sort" @click="emit('sortEvent')"
            >Сортировка<el-icon class="ml-3"><Operation /></el-icon
        ></el-button>

        <el-input
            v-model="search"
            placeholder="Please input"
            @input="searchHadler"
            clearable
            class="toolbar-input max-w-[484px] ml-auto mr-[53px]"
        >
            <template #prepend>
                <el-icon size="25"><Search /></el-icon>
            </template>
        </el-input>

        <el-button
            v-if="props.create"
            @click="emit('createEvent')"
            class="bg-[#00C389] text-[#ffffff]"
            >Создать<el-icon class="ml-3"><Plus /></el-icon
        ></el-button>
    </div>

    <el-divider class="bg-[#f4f4f4] h-2 border-0 rounded-lg my-6" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';

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
.toolbar-input {
    .el-input__wrapper {
        border-radius: 0 15px 15px 0;
    }
}
</style>
