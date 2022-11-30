<template>
    <div class="p-4 border-solid border border-slate-300 rounded-[15px] flex-1">
        <BlockTitle />

        <GeneralInfo />

        <SegmentsSection />

        <TriggersSection />

        <div class="flex items-center justify-between mb-[30px]">
            <h2>Сценарий</h2>

            <div class="flex justify-between">
                <span
                    class="text-[#ff8200] leading-8 border-r border-solid border-r-[#d0d0d0] px-[18px] cursor-pointer"
                    >Создать сценарий</span
                >

                <OrangePlusIcon
                    @click="emit('createNewScript')"
                    class="ml-[18px] cursor-pointer"
                />
            </div>
        </div>

        <div class="flex items-center justify-between mb-[46px]">
            <p>Новый сценарий</p>

            <div class="flex justify-between items-center">
                <EditIcon
                    class="cursor-pointer"
                    @click="emit('createNewScript')"
                />

                <DeleteIcon class="ml-[35px] cursor-pointer" />
            </div>
        </div>

        <hr class="h-[5px] bg-[#ebebeb] rounded-[5px] mb-[40px]" />

        <div class="flex justify-center mb-[46px]">
            <el-button class="bg-[#00C389] text-[#ffffff]">Сохранить</el-button>

            <el-button>Отменить</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue';
// import CrossIcon from '@/components/icons/CrossIcon.vue';
import OrangePlusIcon from '@/components/icons/OrangePlusIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
// import { ElSelect, ElOption, ElButton } from 'element-plus';
// import { ref } from 'vue';
import BlockTitle from './BlockTitle.vue';
import GeneralInfo from './GeneralInfo.vue';
import SegmentsSection from './SegmentsSection.vue';
import TriggersSection from './TriggersSection.vue';

const emit = defineEmits<{
    (e: 'createNewScript'): void;
}>();
</script>

<script setup lang="ts"></script>

<style lang="scss"></style>
