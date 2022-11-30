<template>
    <div class="flex items-center justify-between mb-[25px]">
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

    <h3 class="font-medium mb-[30px]">Выбранные сегменты:</h3>

    <div class="mb-[30px]">
        <div class="flex justify-between items-center mb-[13px]">
            <p>23 Мамочки с детьми 23.06.2002</p>

            <div class="flex items-center">
                <EditIcon class="cursor-pointer" />

                <DeleteIcon class="ml-[35px] cursor-pointer" />
            </div>
        </div>

        <hr class="h-px bg-[#ebebeb]" />
    </div>

    <hr class="h-[5px] bg-[#ebebeb] rounded-[5px] mb-7" />
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
