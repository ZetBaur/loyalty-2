<template>
    <div
        class="p-[14.5px] flex text-[14px] border border-solid rounded-[15px] mb-[14px]"
    >
        <div class="mr-[10px] flex-1">
            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Тип:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Название:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Сегмент:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Дата создания:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
        </div>

        <div class="flex-1">
            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Период действия:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Кол-во клиентов:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div class="flex mb-[10px]">
                <span class="min-w-[130px]">Автор:</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>

        <div class="flex flex-col justify-between ml-1">
            <DeleteIcon class="cursor-pointer" @click="deleteHandler" />
            <PagesIcon class="cursor-pointer" />
            <PlayIcon class="cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import PagesIcon from '@/components/icons/PagesIcon.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';

const emit = defineEmits<{
    (e: 'delete'): void;
}>();

const deleteHandler = () => {
    emit('delete');
};
</script>
