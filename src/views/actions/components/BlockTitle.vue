<template>
    <div class="text-3xl flex justify-between my-8">
        <div class="flex items-center">
            <h1 class="mr-[30px] font-bold">Тестовая</h1>

            <EditIcon class="cursor-pointer ml-[18px]" />
        </div>

        <CrossIcon class="cursor-pointer" />
    </div>

    <el-divider class="bg-[#f4f4f4] h-1 border-0 rounded-lg my-10" />
</template>

<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue';
import EditIcon from '@/components/icons/EditIcon.vue';
</script>
