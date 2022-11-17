<template>
    <el-container>
        <div class="canvas-toolbar">
            <ul>
                <li
                    v-for="n in listNodes"
                    :key="n"
                    draggable="true"
                    :data-node="n.item"
                    @dragstart="drag($event)"
                    class="drag-drawflow"
                >
                    <BaseButton :text="n.name" />
                </li>
            </ul>

            <BaseButton text="Экспорт" @action="exportEditor" />
            <BaseButton text="Добавить элемент" @action="addNewNode" />
        </div>

        <el-main class="p-0">
            <div
                id="drawflow"
                @drop="drop($event)"
                @dragover="allowDrop($event)"
            ></div>
        </el-main>
    </el-container>
</template>

<script setup>
import Drawflow from 'drawflow';
import styleDrawflow from 'drawflow/dist/drawflow.min.css';
import style from '@/assets/styles/drawflow.scss';
import {
    onMounted,
    shallowRef,
    h,
    getCurrentInstance,
    render,
    readonly,
    ref
} from 'vue';

import StageNode from './nodes/StageNode.vue';
import ConversionNode from './nodes/ConversionNode.vue';

import BaseButton from '@/components/ui/BaseButton.vue';

const listNodes = readonly([
    {
        name: 'StageNode',
        item: 'StageNode',
        input: 1,
        output: 2
    }
]);

const editor = shallowRef({});
const nodesData = ref({});
const Vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();
internalInstance.appContext.app._context.config.globalProperties.$df = editor;

function exportEditor() {
    nodesData.value = editor.value.export();
    console.log(nodesData.value.drawflow.Home.data);
}

const addNewNode = () => {
    editor.value.addNode(
        ConversionNode,
        1,
        1,
        30,
        30,
        'ConversionNode',
        {},
        'ConversionNode',
        'vue'
    );
};

// function addNodeToDrawFlow(name, pos_x, pos_y) {
//     pos_x =
//         pos_x *
//             (editor.value.precanvas.clientWidth /
//                 (editor.value.precanvas.clientWidth * editor.value.zoom)) -
//         editor.value.precanvas.getBoundingClientRect().x *
//             (editor.value.precanvas.clientWidth /
//                 (editor.value.precanvas.clientWidth * editor.value.zoom));
//     pos_y =
//         pos_y *
//             (editor.value.precanvas.clientHeight /
//                 (editor.value.precanvas.clientHeight * editor.value.zoom)) -
//         editor.value.precanvas.getBoundingClientRect().y *
//             (editor.value.precanvas.clientHeight /
//                 (editor.value.precanvas.clientHeight * editor.value.zoom));

//     const nodeSelected = listNodes.find((el) => el.item == name);

//     editor.value.addNode(
//         name,
//         nodeSelected.input,
//         nodeSelected.output,
//         pos_x,
//         pos_y,
//         name,
//         {},
//         name,
//         'vue'
//     );
// }

onMounted(() => {
    var elements = document.getElementsByClassName('drag-drawflow');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchend', drop, false);
        elements[i].addEventListener('touchmove', positionMobile, false);
        elements[i].addEventListener('touchstart', drag, false);
    }

    const id = document.getElementById('drawflow');

    editor.value = new Drawflow(
        id,
        Vue,
        internalInstance.appContext.app._context
    );

    editor.value.start();

    editor.value.registerNode('StageNode', StageNode, {}, {});
    editor.value.registerNode('ConversionNode', ConversionNode, {}, {});

    editor.value.useuuid = true;
});

//=====================================================================================

let mobile_item_selec = '';
let mobile_last_move = null;
function positionMobile(ev) {
    mobile_last_move = ev;
}

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drag = (ev) => {
    if (ev.type === 'touchstart') {
        mobile_item_selec = ev.target
            .closest('.drag-drawflow')
            .getAttribute('data-node');
    } else {
        ev.dataTransfer.setData('node', ev.target.getAttribute('data-node'));
    }
};
const drop = (ev) => {
    if (ev.type === 'touchend') {
        var parentdrawflow = document
            .elementFromPoint(
                mobile_last_move.touches[0].clientX,
                mobile_last_move.touches[0].clientY
            )
            .closest('#drawflow');
        if (parentdrawflow != null) {
            addNodeToDrawFlow(
                mobile_item_selec,
                mobile_last_move.touches[0].clientX,
                mobile_last_move.touches[0].clientY
            );
        }
        mobile_item_selec = '';
    } else {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('node');
        addNodeToDrawFlow(data, ev.clientX, ev.clientY);
    }
};
</script>

<style lang="scss" scoped>
.el-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #494949;
}
.container {
    min-height: calc(100vh - 100px);
}
.canvas-toolbar {
    // border-right: 1px solid #494949;

    display: flex;
    align-items: center;

    & ul {
        display: flex;
        font-display: row;
    }
}

// .canvas-toolbar ul {
//     padding-inline-start: 0px;
//     padding: 10px 10px;
// }
// .canvas-toolbar li {
//     background: transparent;
// }

.node {
    border-radius: 8px;
    border: 2px solid #494949;
    display: block;
    height: 60px;
    line-height: 40px;
    padding: 10px;
    margin: 10px 0px;
    cursor: move;
}
#drawflow {
    width: 100%;
    height: 100%;
    text-align: initial;
    background: #2b2c30;
    background-size: 20px 20px;
    background-image: radial-gradient(#494949 1px, transparent 1px);
}
</style>
