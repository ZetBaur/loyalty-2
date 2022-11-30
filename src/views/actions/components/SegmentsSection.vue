<template>
    <div class="flex items-center justify-between mb-5">
        <h2 class="text-lg font-medium">Сегменты</h2>

        <div class="flex justify-between items-center">
            <span
                class="text-[#ff8200] leading-8 border-r border-solid border-r-[#d0d0d0] px-[18px] cursor-pointer"
                >Выбрать</span
            >
            <span
                class="text-[#ff8200] leading-8 border-r border-solid border-r-[#d0d0d0] px-[18px] cursor-pointer"
                >Настроить группы</span
            >
            <OrangePlusIcon class="ml-[18px] cursor-pointer" />
        </div>
    </div>

    <h3 class="font-medium mb-5">Выбранные сегменты:</h3>

    <div class="mb-5">
        <div class="flex justify-between items-center mb-2">
            <p>23 Мамочки с детьми 23.06.2002</p>

            <div class="flex items-center">
                <EditIcon class="cursor-pointer" />

                <DeleteIcon class="ml-[35px] cursor-pointer" />
            </div>
        </div>

        <hr class="h-px bg-[#ebebeb]" />
    </div>

    <hr class="h-1 border-0 bg-[#ebebeb] rounded-lg mb-10" />
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
</script>
