<template>
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
            <el-icon
                @click="router.go(-1)"
                class="mr-[38px] cursor-pointer"
                :size="25"
                ><ArrowLeft
            /></el-icon>

            <h1 class="text-[30px] font-bold mr-[38px]">Новый сценарий</h1>

            <EditIcon class="cursor-pointer" />
        </div>

        <div class="flex items-center">
            <BaseButton
                class="mx-2"
                text="Сохранить"
                color="green"
                @action="emit('save')"
            />
            <BaseButton @action="router.go(-1)" class="mx-2" text="Отменить" />
        </div>
    </div>
    <hr />
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useRouter } from 'vue-router';

const emit = defineEmits<{
    (e: 'save'): void;
}>();

const router = useRouter();
</script>
