<template>
    <div class="flex items-center">
        <el-button class="bg-[#00C389] text-[#ffffff]">Сохранить</el-button>
    </div>

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
