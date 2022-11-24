<template>
    <button
        class="base-button"
        @click="emit('action', $event)"
        :class="props.color"
        type="button"
        :disabled="props.disabled"
    >
        {{ props.text }}

        <component :is="props.icon" v-if="props.icon" />

        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string;
    icon?: string;
    color?: string;
    disabled?: boolean;
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

button:disabled,
button[disabled] {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
}

button[disabled]:hover {
    background-color: #cccccc;
    color: #666666;
}
</style>
