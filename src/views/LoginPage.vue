<template>
    <el-card>
        <el-form label-width="70px">
            <el-form-item label="Login">
                <el-input v-model="formInfo.login" />
            </el-form-item>

            <el-form-item label="Пароль">
                <el-input v-model="formInfo.password" />
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="submit"
                    :disabled="!btnEnabled"
                    >Войти</el-button
                >
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';

const formInfo = ref({
    login: '',
    password: ''
});

const btnEnabled = computed(() => {
    return !!formInfo.value.login && !!formInfo.value.password;
});

const submit = () => console.log('login');
</script>
