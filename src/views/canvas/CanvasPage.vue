<template>
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
            <el-icon class="mr-[38px]" :size="25"><ArrowLeft /></el-icon>

            <h1 class="text-[30px] font-bold mr-[38px]">Новый сценарий</h1>

            <EditIcon />
        </div>

        <div class="flex items-center">
            <BaseButton
                class="mx-2"
                text="Сохранить"
                color="green"
                @action="save"
            />
            <BaseButton class="mx-2" text="Отменить" @action="router.go(-1)" />
        </div>
    </div>

    <hr />
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const save = () => {
    console.log('save');
};
</script>
