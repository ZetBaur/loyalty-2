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
                    <!-- <div class="node" :style="`background: ${n.color}`">
                        {{ n.name }}
                    </div> -->

                    <BaseButton :text="n.name" />
                </li>
            </ul>

            <BaseButton text="Экспорт" @action="exportEditor" />
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
import Node1 from './nodes/node1.vue';
import Node2 from './nodes/node2.vue';
import Node3 from './nodes/node3.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseNode from './nodes/BaseNode.vue';

const listNodes = readonly([
    {
        name: 'BaseNode',
        color: '#49494970',
        item: 'BaseNode',
        input: 2,
        output: 2
    },
    {
        name: 'Script',
        color: 'blue',
        item: 'Node2',
        input: 1,
        output: 2
    },
    {
        name: 'console.log',
        color: '#ff9900',
        item: 'Node3',
        input: 1,
        output: 0
    }
]);

const editor = shallowRef({});
const dialogData = ref({});
const Vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();
internalInstance.appContext.app._context.config.globalProperties.$df = editor;

function exportEditor() {
    dialogData.value = editor.value.export();
    console.log(dialogData.value.drawflow.Home.data);
}

function addNodeToDrawFlow(name, pos_x, pos_y) {
    console.log(name);

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

    console.log(nodeSelected);

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

    editor.value.registerNode('Node1', Node1, {}, {});
    editor.value.registerNode('Node2', Node2, {}, {});
    editor.value.registerNode('Node3', Node3, {}, {});
    editor.value.registerNode('BaseNode', BaseNode, {}, {});

    editor.value.import({
        drawflow: {
            Home: {
                data: {
                    5: {
                        id: 5,
                        name: 'Node2',
                        data: {
                            script: '(req,res) => {\n console.log(req);\n}'
                        },
                        class: 'Node2',
                        html: 'Node2',
                        typenode: 'vue',
                        inputs: {
                            input_1: {
                                connections: [{ node: '6', input: 'output_1' }]
                            }
                        },
                        outputs: {
                            output_1: { connections: [] },
                            output_2: { connections: [] }
                        },
                        pos_x: 1000,
                        pos_y: 117
                    },
                    6: {
                        id: 6,
                        name: 'Node1',
                        data: { url: 'localhost/add', method: 'post' },
                        class: 'Node1',
                        html: 'Node1',
                        typenode: 'vue',
                        inputs: {},
                        outputs: {
                            output_1: {
                                connections: [{ node: '5', output: 'input_1' }]
                            }
                        },
                        pos_x: 137,
                        pos_y: 89
                    }
                }
            }
        }
    });
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
