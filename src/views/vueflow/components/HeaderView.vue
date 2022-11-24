<template>
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
            <el-icon
                @click="router.go(-1)"
                class="mr-7 cursor-pointer"
                :size="25"
                ><ArrowLeft
            /></el-icon>

            <h1 class="text-[30px] font-bold mr-10">Новый сценарий</h1>

            <EditIcon class="cursor-pointer" />
        </div>

        <div class="flex items-center">
            <BaseButton
                class="mx-2"
                text="Сохранить"
                color="green"
                @action="emit('save')"
                :disabled="!props.elements.length"
            />

            <BaseButton
                @action="router.go(-1)"
                class="mx-2"
                text="Отменить"
                :disabled="!props.elements.length"
            />
        </div>
    </div>

    <hr />

    <!-- ----------------------------- -->

    <div class="flex it mt-4">
        <BaseButton @click="emit('addStageNode')" text="Этапы" class="mr-4">
            <StageIcon />
        </BaseButton>

        <BaseButton @click="emit('addConversionNode')" text="Конверсия">
            <ConversionIcon />
        </BaseButton>
    </div>
</template>

<script setup>
import EditIcon from '@/components/icons/EditIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useRouter } from 'vue-router';
import ConversionIcon from '@/components/icons/ConversionIcon.vue';
import StageIcon from '@/components/icons/StageIcon.vue';
// import { useDFstore } from '@/stores/drawflowStore';

// const DFstore = useDFstore();

const props = defineProps(['elements']);

const emit = defineEmits(['save', 'addConversionNode', 'addStageNode']);

const router = useRouter();
</script>
