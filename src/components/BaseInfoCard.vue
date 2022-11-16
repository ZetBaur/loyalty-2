<template>
    <div class="p-4 border-solid border border-slate-300 rounded-[15px] flex-1">
        <div class="text-3xl flex justify-between mb-[40px]">
            <div class="flex items-center">
                <h1 class="mr-[30px] font-bold">Тестовая</h1>

                <EditIcon class="cursor-pointer ml-[18px]" />
            </div>

            <CrossIcon class="cursor-pointer" />
        </div>

        <hr class="h-[5px] bg-[#ebebeb] rounded-[5px] mb-[40px]" />

        <div class="flex items-center justify-between mb-[30px]">
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
                <OrangePlusIcon class="ml-[18px]" />
            </div>
        </div>

        <h3 class="font-medium mb-[30px]">Выбранные сегменты:</h3>

        <div class="mb-[30px]">
            <div class="flex justify-between items-center mb-[18px]">
                <p>23 Мамочки с детьми 23.06.2002</p>

                <div class="flex items-center">
                    <EditIcon class="cursor-pointer" />

                    <DeleteIcon class="ml-[35px] cursor-pointer" />
                </div>
            </div>

            <hr class="h-px bg-[#ebebeb]" />
        </div>

        <hr class="h-[5px] bg-[#ebebeb] rounded-[5px] mb-[40px]" />

        <div class="flex items-center justify-between mb-[30px]">
            <h2>Сценарий</h2>

            <div class="flex justify-between">
                <span
                    class="text-[#ff8200] leading-8 border-r border-solid border-r-[#d0d0d0] px-[18px] cursor-pointer"
                    >Создать сценарий</span
                >

                <OrangePlusIcon class="ml-[18px] cursor-pointer" />
            </div>
        </div>

        <div class="flex items-center justify-between mb-[46px]">
            <p>Новый сценарий</p>

            <div class="flex justify-between items-center">
                <EditIcon class="cursor-pointer" />

                <DeleteIcon class="ml-[35px] cursor-pointer" />
            </div>
        </div>

        <hr class="h-[5px] bg-[#ebebeb] rounded-[5px] mb-[40px]" />

        <div class="flex justify-center mb-[46px]">
            <BaseButton class="mx-[14px]" text="Сохранить" color="green" />

            <BaseButton text="Отменить" />
        </div>
    </div>
</template>

<script setup lang="ts">
import EditIcon from './icons/EditIcon.vue';
import CrossIcon from './icons/CrossIcon.vue';
import OrangePlusIcon from './icons/OrangePlusIcon.vue';
import DeleteIcon from './icons/DeleteIcon.vue';
import BaseButton from './ui/BaseButton.vue';
</script>
