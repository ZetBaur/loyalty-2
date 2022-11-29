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

        <div class="flex mb-8">
            <div class="mr-10">
                <div class="mb-3">Создано: 23-07-2022</div>
                <div>Дата старта: 23-07-2022</div>
            </div>

            <div class="mr-10">
                <div class="mb-3">Изменено: 23-07-2022</div>
                <div>Дата окончания: 23-07-2022</div>
            </div>

            <div>
                <div>Количество клиентов: 100 000</div>
            </div>
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
                <OrangePlusIcon class="ml-[18px] cursor-pointer" />
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

        <h2>Триггеры</h2>

        <el-select
            v-model="value"
            class="m-2 rounded-md"
            placeholder="Select"
            size="large"
        >
            <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item"
            />
        </el-select>

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
import CrossIcon from '@/components/icons/CrossIcon.vue';
import OrangePlusIcon from '@/components/icons/OrangePlusIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
// import { ElSelect, ElOption, ElButton } from 'element-plus';
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'createNewScript'): void;
}>();

const options = ref(['test', 'test1']);

const value = ref('');
</script>

<script setup lang="ts"></script>

<style lang="scss"></style>
