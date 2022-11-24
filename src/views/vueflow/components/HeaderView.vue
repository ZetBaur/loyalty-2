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
            />

            <BaseButton @action="router.go(-1)" class="mx-2" text="Отменить" />
        </div>
    </div>

    <hr />

    <!-- ----------------------------- -->

    <div class="flex it mt-4">
        <BaseButton
            @click="emit('addStageNode')"
            text="Этапы"
            :disabled="!props.elements.length"
            class="mr-4"
        >
            <StageIcon />
        </BaseButton>

        <BaseButton
            @click="emit('addConversionNode')"
            text="Конверсия"
            :disabled="props.elements.length === 0"
        >
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
import { onMounted } from 'vue';

const props = defineProps(['elements']);

const emit = defineEmits(['save', 'addConversionNode', 'addStageNode']);

// const emit = defineEmits<{
//     (e: 'save'): void;
//     (e: 'addConversionNode'): void;
//     (e: 'addStageNode'): void;
// }>();

const router = useRouter();

onMounted(() => {
    console.log(props.elements.length);
});
</script>
