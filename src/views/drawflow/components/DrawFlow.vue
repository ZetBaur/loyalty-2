<template>
    <el-container class="h-full flex flex-col">
        <HeaderView @save="exportEditor" />

        <div class="flex it mt-4">
            <BaseButton
                text="Конверсия"
                class="mr-4"
                draggable="true"
                data-node="ConversionNode"
                @dragstart="drag($event)"
            >
                <ConversionIcon />
            </BaseButton>

            <BaseButton
                text="Этапы"
                draggable="true"
                data-node="StageNode"
                @dragstart="drag($event)"
            >
                <StageIcon />
            </BaseButton>
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
import ConversionIcon from '@/components/icons/ConversionIcon.vue';
import StageIcon from '@/components/icons/StageIcon.vue';
import HeaderView from './HeaderView.vue';
import {
    onMounted,
    shallowRef,
    h,
    getCurrentInstance,
    render,
    readonly,
    ref
} from 'vue';
import StageNode from '../nodes/StageNode.vue';
import ConversionNode from '../nodes/ConversionNode.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useDFstore } from '@/stores/drawflowStore';

const DFstore = useDFstore();

const listNodes = readonly([
    {
        name: 'StageNode',
        item: 'StageNode',
        input: 0,
        output: 0
    },

    {
        name: 'ConversionNode',
        item: 'ConversionNode',
        input: 0,
        output: 0
    }
]);

const editor = shallowRef({});
const nodesData = ref({});
const Vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();
internalInstance.appContext.app._context.config.globalProperties.$df = editor;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function exportEditor() {
    nodesData.value = editor.value.export();
}

// const addConversionNode = () => {
//     editor.value.addNode(
//         'ConversionNode',
//         1,
//         1,
//         70,
//         70,
//         'ConversionNode',
//         {},
//         'ConversionNode',
//         'vue'
//     );
// };

// const addStageNode = () => {
//     editor.value.addNode(
//         'StageNode',
//         1,
//         1,
//         200,
//         70,
//         'StageNode',
//         {},
//         'StageNode',
//         'vue'
//     );
// };

const handleNodeEvents = (event) => {
    DFstore.currentNodes = editor.value.export().drawflow.Home.data;

    if (event.target.attributes.id) {
        console.log('event', event.target.attributes.id.value);

        // delete node

        if (event.target.attributes.id.value === 'delete-button') {
            editor.value.removeNodeId('node-' + DFstore.nodeSelected);
        }

        // add node

        if (event.target.attributes.id.value === 'add-button') {
            console.log('currentNodes', DFstore.currentNodes);
            console.log('nodeSelected', DFstore.nodeSelected);
        }
    }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addNodeToDrawFlow(name, pos_x, pos_y) {
    pos_x =
        pos_x *
            (editor.value.precanvas.clientWidth /
                (editor.value.precanvas.clientWidth * editor.value.zoom)) -
        editor.value.precanvas.getBoundingClientRect().x *
            (editor.value.precanvas.clientWidth /
                (editor.value.precanvas.clientWidth * editor.value.zoom));
    pos_y =
        pos_y *
            (editor.value.precanvas.clientHeight /
                (editor.value.precanvas.clientHeight * editor.value.zoom)) -
        editor.value.precanvas.getBoundingClientRect().y *
            (editor.value.precanvas.clientHeight /
                (editor.value.precanvas.clientHeight * editor.value.zoom));

    const nodeSelected = listNodes.find((el) => el.item == name);

    editor.value.addNode(
        name,
        nodeSelected.input,
        nodeSelected.output,
        pos_x,
        pos_y,
        name,
        {},
        name,
        'vue'
    );
}

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

    editor.value.on('nodeSelected', (id) => (DFstore.nodeSelected = id));

    editor.value.on('click', (event) => handleNodeEvents(event));
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
