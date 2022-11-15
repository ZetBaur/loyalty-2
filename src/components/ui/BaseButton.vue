<template>
    <button
        class="base-button"
        @click="emit('action', $event)"
        :class="props.color"
    >
        {{ props.text }}

        <component :is="props.icon" lass="icon" v-if="props.icon" />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string;
    icon?: string;
    color?: string;
}>();

const emit = defineEmits<{
    (e: 'action', $event: Event): void;
}>();
</script>

<style lang="scss">
.base-button {
    background: #ffffff;
    padding: 0 20.5px;
    height: 50px;
    border: 1px solid #e4e4e4;
    border-radius: 15px;
    font-size: inherit;
    display: flex;
    align-items: center;

    &:hover {
        background: #e4e4e4;
    }

    & svg {
        margin-left: 18px;
        width: 20px;
    }
}

.green {
    background-color: #00c389;
    color: #ffffff;

    &:hover {
        background-color: #1fe1a4;
    }
}
</style>
