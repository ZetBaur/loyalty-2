<template>
    <div class="flex items-center">
        <BaseButton
            class="mx-2"
            text="Сохранить"
            color="green"
            @action="emit('')"
        />
        <BaseButton class="mx-2" text="Отменить" @action="emit('')" />
    </div>
</template>
