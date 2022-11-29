<template>
    <h2 class="mb-3 font-bold text-[24px]">Триггеры</h2>

    <el-select v-model="value" placeholder="Select" class="mb-5">
        <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
        />
    </el-select>

    <hr class="mb-3" />

    <div class="flex items-center justify-between mb-5 max-w-[900px]">
        <div class="flex">
            <h3 class="mr-5 font-bold">Магазин</h3>
            <el-icon class="mt-1 cursor-pointer"><Plus /></el-icon>
        </div>
        <el-icon class="mt-1 cursor-pointer"><Minus /></el-icon>
    </div>

    <el-form>
        <el-form-item label="ID">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </el-form-item>

        <el-form-item class="ml-4">
            <el-tag
                v-for="tag in dynamicTags"
                :key="tag"
                class="mx-1"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
            >
                {{ tag }}
            </el-tag>
        </el-form-item>
    </el-form>

    <hr class="mb-3" />

    <div class="flex items-center justify-between mb-5 max-w-[900px]">
        <div class="flex">
            <h3 class="mr-5 font-bold">Типы карт</h3>
            <el-icon class="mt-1 cursor-pointer"><Plus /></el-icon>
        </div>
        <el-icon class="mt-1 cursor-pointer"><Minus /></el-icon>
    </div>

    <el-form>
        <el-form-item label="ID">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </el-form-item>
    </el-form>

    <hr class="mb-3" />

    <div class="flex items-center justify-between mb-5 max-w-[900px]">
        <div class="flex">
            <h3 class="mr-5 font-bold">Условия по сумме чека</h3>
            <el-icon class="mt-1 cursor-pointer"><Plus /></el-icon>
        </div>
        <el-icon class="mt-1 cursor-pointer"><Minus /></el-icon>
    </div>

    <el-form :inline="true">
        <el-form-item label="Минимальная сумма чека" class="flex items-center">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </el-form-item>

        <el-form-item label="ID" class="flex items-center">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </el-form-item>
    </el-form>

    <el-form>
        <el-form-item
            label="вычесть сумму товаров исключения?"
            class="flex items-center"
        >
            <el-checkbox v-model="checked2" />
        </el-form-item>
    </el-form>

    <hr class="mb-3" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref(['test', 'test1']);

const value = ref('');

const checked2 = ref(false);

const dynamicTags = ref(['LongTag 1', 'Tag 2', 'Tag 3']);

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
</script>

<style lang="scss"></style>
