<template>
    <div class="input">
        <input type="text" :value="inputValue" @input="updateValue($event)" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    width: string;
}>();

const emit = defineEmits<{
    (e: 'inputValue', event: string | number): void;
}>();

const inputValue = ref<Event>();

const updateValue = (event: Event) => {
    emit('inputValue', event);
};
</script>

<style lang="scss">
.input {
    border: 1px solid #e4e4e4;
    border-radius: 15px;
    overflow: hidden;
    width: v-bind(width);
}
</style>
