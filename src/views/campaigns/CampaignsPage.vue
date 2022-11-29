<template>
    <ToolBar
        @filter-event="filterHandler"
        @sort-event="sortHandler"
        @create-event="createHandler"
        @search-event="searchHandler"
        filter
        sort
        create
    />

    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="mb-4"
    />

    <div class="flex">
        <div class="flex-1 mr-[12px]">
            <TableCard @delete="deleteHandler" />
        </div>

        <InfoCard
            class="ml-[14px]"
            @create-new-script="router.push('/flowpage')"
        />
    </div>
</template>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue';
import TableCard from './components/TableCard.vue';
import InfoCard from './components/InfoCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const filterHandler = () => console.log('filter');

const sortHandler = () => console.log('sortHandler');

const createHandler = () => console.log('createHandler');

const searchHandler = (e: string | number) => console.log('searchHandler', e);

const deleteHandler = () => {
    console.log('deleteHandler');
};
</script>
