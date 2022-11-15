<template>
    <div class="base-info-card">
        <div class="header">
            <div>
                <h1>Тестовая</h1>

                <EditIcon />
            </div>

            <CrossIcon />
        </div>

        <hr />

        <br />

        <div class="segments">
            <h2>Сегменты</h2>

            <div>
                <span>Выбрать</span>
                <span>Настроить группы</span>
                <OrangePlusIcon />
            </div>
        </div>

        <br />

        <h3>Выбранные сегменты:</h3>

        <br />

        <br />

        <div>
            <div class="selected-segments">
                <p>23 Мамочки с детьми 23.06.2002</p>

                <div class="icons">
                    <span>
                        <EditIcon />
                    </span>

                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            </div>

            <hr class="thin-line" />
        </div>

        <br />

        <hr />

        <br />

        <div class="segments">
            <h2>Сценарий</h2>

            <div>
                <span>Создать сценарий</span>
                <OrangePlusIcon />
            </div>
        </div>

        <br />

        <br />

        <div>
            <div class="selected-segments">
                <p>Новый сценарий</p>

                <div class="icons">
                    <span>
                        <EditIcon />
                    </span>

                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            </div>

            <hr class="thin-line" />
        </div>

        <hr />

        <br />

        <div class="btns">
            <BaseButton text="Сохранить" color="green" />

            <BaseButton text="Отменить" />
        </div>
    </div>
</template>

<script setup lang="ts">
import EditIcon from './icons/EditIcon.vue';
import CrossIcon from './icons/CrossIcon.vue';
import OrangePlusIcon from './icons/OrangePlusIcon.vue';
import DeleteIcon from './icons/DeleteIcon.vue';
import BaseButton from './ui/BaseButton.vue';
</script>

<style lang="scss">
.base-info-card {
    padding: 14.5px;
    flex: 1;
    border: 1px solid #e4e4e4;
    border-radius: 15px;

    & svg {
        cursor: pointer;
    }

    & hr {
        height: 5px;
        background: #ebebeb;
        border-radius: 5px;
    }

    & h2 {
        font-size: 24px;
        font-weight: 500;
    }

    & h3 {
        font-weight: 500;
    }

    & .header {
        font-size: 30px;
        display: flex;
        justify-content: space-between;

        & div {
            display: flex;
            align-items: center;
        }

        & h1 {
            margin-right: 30px;
            font-weight: 700;
        }
    }

    & .segments {
        display: flex;
        justify-content: space-between;

        & div {
            display: flex;
            align-items: center;

            & svg {
                margin-left: 18px;
            }

            & span {
                color: #ff8200;
                line-height: 32px;
                border-right: 1px solid #d0d0d0;
                padding: 0 18px;
                cursor: pointer;

                &:hover {
                    color: #f6c48f;
                }
            }
        }
    }

    & .selected-segments {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        & .icons {
            display: inline;

            & svg:last-child {
                margin-left: 35px;
            }
        }
    }

    .thin-line {
        height: 1px;
        background: #ebebeb;
        width: 100%;
    }

    .btns {
        display: flex;
        justify-content: center;

        & button {
            margin: 0 14px;
        }
    }
}
</style>
