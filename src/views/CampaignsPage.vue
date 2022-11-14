<template>
    <BaseToolbar
        @filter-event="filterHandler"
        @sort-event="sortHandler"
        @search-event="searchHandler"
        @create-event="createHandler"
        filter
        clickSearch
        sort
        create
    />

    <h1>Campaigns</h1>
</template>

<script setup lang="ts">
import BaseToolbar from '@/components/BaseToolbar.vue';

const filterHandler = () => console.log('filter');

const sortHandler = () => console.log('sortHandler');

const searchHandler = () => console.log('searchHandler');

const createHandler = () => console.log('createHandler');
</script>
