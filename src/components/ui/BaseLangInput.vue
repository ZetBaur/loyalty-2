<template>
    <div class="lang-input">
        <div
            :class="type === 'text' ? 'text-prefix' : 'textarea-prefix'"
            @click="handleChange"
        >
            {{ lang }}
        </div>

        <el-input
            v-if="lang === 'kk'"
            :placeholder="lang"
            v-model="langData.kk"
            @keyup="onChange"
            :type="type"
            :autosize="{ minRows: 6, maxRows: 24 }"
        />

        <el-input
            v-if="lang === 'en'"
            :placeholder="lang"
            v-model="langData.en"
            @keyup="onChange"
            :type="type"
            :autosize="{ minRows: 6, maxRows: 24 }"
        />

        <el-input
            v-if="lang === 'ru'"
            :placeholder="lang"
            v-model="langData.ru"
            @keyup="onChange"
            :type="type"
            :autosize="{ minRows: 6, maxRows: 24 }"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    type: string;
}>();

const emit = defineEmits<{
    (e: 'inputEvent', value: object): void;
}>();

interface InputEvent extends Event {
    target: HTMLInputElement;
}

const lang = ref('kk');

const langData = ref({
    kk: '',
    en: '',
    ru: ''
});

const handleChange = () => {
    if (lang.value === 'ru') {
        lang.value = 'kk';
    } else if (lang.value === 'kk') {
        lang.value = 'en';
    } else {
        lang.value = 'ru';
    }
};

const onChange = (e: InputEvent) => {
    if (lang.value === 'kk') langData.value.kk = e.target.value;
    if (lang.value === 'en') langData.value.en = e.target.value;
    if (lang.value === 'ru') langData.value.ru = e.target.value;
    emit('inputEvent', langData.value);
};
</script>

<!-- ============================================================= -->

<style lang="scss">
.lang-input {
    display: flex;

    .el-input {
        .el-input__wrapper {
            border-radius: 0 15px 15px 0 !important;
        }
    }

    .text-prefix,
    .textarea-prefix {
        color: #606266;
        font-size: 16px;
        border: 1px solid #dcdfe6;
        border-radius: 10px 0px 0px 10px;
        border-right: none;
        height: 32px;
        line-height: 32px;
        text-transform: uppercase;
        width: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .text-prefix {
        margin: auto;
    }
}
</style>
