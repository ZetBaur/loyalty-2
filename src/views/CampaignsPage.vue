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

    <h1>Campaigns</h1>
</template>

<script setup lang="ts">
import BaseToolbar from '@/components/BaseToolbar.vue';

const filterHandler = () => console.log('filter');

const sortHandler = () => console.log('sortHandler');

const createHandler = () => console.log('createHandler');

const searchHandler = (e: string | number) => console.log('searchHandler', e);
</script>
