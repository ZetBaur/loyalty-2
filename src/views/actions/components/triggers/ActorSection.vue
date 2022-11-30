<template>
    <div class="flex items-center justify-between max-w-[900px] mb-4">
        <div class="flex items-center">
            <h3>Магазин</h3>

            <el-icon class="ml-3 cursor-pointer"><Plus /></el-icon>
        </div>

        <el-icon class="cursor-pointer"><Minus /></el-icon>
    </div>

    <el-form>
        <el-form-item label="ID">
            <el-select
                v-model="form.region"
                placeholder="please select your zone"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
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
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

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

const options = [
    {
        value: 'Option1',
        label: 'Option1'
    },
    {
        value: 'Option2',
        label: 'Option2'
    },
    {
        value: 'Option3',
        label: 'Option3'
    },
    {
        value: 'Option4',
        label: 'Option4'
    },
    {
        value: 'Option5',
        label: 'Option5'
    }
];

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
</script>
