<template>
    <div class="base-table-card">
        <div class="column">
            <div class="item">
                <span>Тип:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="item">
                <span>Название:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="item">
                <span>Сегмент:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>

            <div class="item">
                <span>Дата создания:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
        </div>

        <div class="column">
            <div class="item">
                <span>Период действия:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div class="item">
                <span>Кол-во клиентов:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div class="item">
                <span>Автор:</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>

        <div class="icons">
            <DeleteIcon @click="deleteHandler" />
            <PagesIcon />
            <PlayIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import DeleteIcon from './icons/DeleteIcon.vue';
import PagesIcon from './icons/PagesIcon.vue';
import PlayIcon from './icons/PlayIcon.vue';

const emit = defineEmits<{
    (e: 'delete'): void;
}>();

const deleteHandler = () => {
    emit('delete');
};
</script>

<style lang="scss">
.base-table-card {
    padding: 14.5px;
    display: flex;
    font-size: 14px;
    border: 1px solid #e4e4e4;
    border-radius: 15px;
}

.column {
    margin-right: 10px;

    &:first-child {
        flex: 1;
    }

    &:nth-child(2) {
        flex: 1.2;
    }
}

.item {
    display: flex;
    margin-bottom: 10px;

    & span {
        min-width: 130px;
    }

    & p {
        font-weight: 500;
    }
}

.icons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & svg {
        cursor: pointer;
    }
}
</style>
