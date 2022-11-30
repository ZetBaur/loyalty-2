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

    <!-- large -->
    <el-divider class="bg-[#f4f4f4] h-2 border-0 rounded-lg my-6" />

    <!-- small -->
    <el-divider class="h-1 border-0 bg-[#ebebeb] rounded-lg mb-10" />
</template>
