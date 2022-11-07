<template>
    <div class="header">
        <el-dropdown trigger="click">
            <span>
                <icon-user />

                Current User
            </span>

            <template #dropdown>
                <el-dropdown-menu trigger="click">
                    <el-dropdown-item @click="logout">Logout</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import IconUser from './icons/IconUser.vue';

const logout = () => console.log('logout');
</script>

<style lang="scss">
.header {
    width: 100%;
    text-align: right;
    background: white;
    margin-bottom: 30px;

    & .el-dropdown {
        cursor: pointer !important;
    }

    & span {
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    & svg {
        margin-right: 12px;
    }
}
</style>
