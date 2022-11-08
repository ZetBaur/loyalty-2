<template>
    <div class="wrapper">
        <TheAside />

        <div class="main">
            <TheHeader />

            <div class="content"><RouterView /></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheMenu/TheAside.vue';
</script>

<style lang="scss">
.wrapper {
    background: $custom-black;
    min-height: 100vh;
    display: flex;
}

.main {
    display: flex;
    flex-direction: column;
    border-radius: 25px 0 0 25px;
    overflow: hidden;
    width: 100%;
    padding: 20px;
    background: white;
}

.content {
    height: 100%;
}
</style>
