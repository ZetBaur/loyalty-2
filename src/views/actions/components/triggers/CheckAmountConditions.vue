<template>
    <h3 class="mb-4">Условия по сумме чека</h3>

    <el-form :inline="true">
        <el-form-item label="Минимальная сумма чека" class="flex items-center">
            <el-select
                v-model="form.region"
                placeholder="please select your zone"
            >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>

        <el-form-item label="ID" class="flex items-center">
            <el-select
                v-model="form.region"
                placeholder="please select your zone"
            >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>
    </el-form>

    <el-form>
        <el-form-item label="Вычесть сумму товаров исключения?">
            <el-checkbox name="type" />
        </el-form-item>
    </el-form>

    <el-divider class="border-0 bg-[#ebebeb] rounded-lg mb-10" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
});
</script>
