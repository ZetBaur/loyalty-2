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
            <el-button @click="emit('save')" class="bg-[#00C389] text-[#ffffff]"
                >Сохранить</el-button
            >

            <el-button @click="router.go(-1)" :disabled="!props.elements.length"
                >Отменить</el-button
            >
        </div>
    </div>

    <hr />

    <!-- ----------------------------- -->

    <div class="flex it mt-4">
        <el-button @click="emit('addStageNode')" class="mr-4">
            <StageIcon class="w-5 mr-2" />
            Этапы
        </el-button>

        <el-button @click="emit('addConversionNode')">
            <ConversionIcon class="w-5 mr-2" />
            Конверсия
        </el-button>
    </div>
</template>

<script setup>
import EditIcon from '@/components/icons/EditIcon.vue';
import { useRouter } from 'vue-router';
import ConversionIcon from '@/components/icons/ConversionIcon.vue';
import StageIcon from '@/components/icons/StageIcon.vue';
// import { useDFstore } from '@/stores/drawflowStore';

// const DFstore = useDFstore();

const props = defineProps(['elements']);

const emit = defineEmits(['save', 'addConversionNode', 'addStageNode']);

const router = useRouter();
</script>
