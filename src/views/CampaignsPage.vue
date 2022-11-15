<template>
    <BaseToolbar
        @filter-event="filterHandler"
        @sort-event="sortHandler"
        @create-event="createHandler"
        @search-event="searchHandler"
        filter
        sort
        create
    />

    <el-pagination background layout="prev, pager, next" :total="1000" />

    <br />

    <BaseTableCard @delete="deleteHandler" />
</template>

<script setup lang="ts">
import BaseToolbar from '@/components/BaseToolbar.vue';
import BaseTableCard from '@/components/BaseTableCard.vue';

const filterHandler = () => console.log('filter');

const sortHandler = () => console.log('sortHandler');

const createHandler = () => console.log('createHandler');

const searchHandler = (e: string | number) => console.log('searchHandler', e);

const deleteHandler = () => {
    console.log('deleteHandler');
};
</script>
