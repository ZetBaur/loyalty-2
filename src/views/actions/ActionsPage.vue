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
</template>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const filterHandler = () => console.log('filter');

const sortHandler = () => console.log('sortHandler');

const createHandler = () => console.log('createHandler');

const searchHandler = (e: string | number) => console.log('searchHandler', e);
</script>

<style lang="scss"></style>
