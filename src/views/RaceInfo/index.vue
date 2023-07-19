<template>
    <div class="container">
        <header class="commonHeader">
            <el-input v-model="searchInput" placeholder="Please input" style="width: 300px;">
                <template #append>
                    <el-button :icon="Search" type="primary" @click="handleSearch" />
                </template>
            </el-input>
        </header>
        <el-table :data="raceInfo" border stripe style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
            <el-table-column label="Operations" width="180">
                <template #default="scope">
                    <el-button size="small" @click="handleView(scope.row)">View</el-button>
                    <el-button size="small" type="primary" @click="handleSubmit(scope.row)">Submit</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="page_num" v-model:page-size="page_size" :page-sizes="[10, 20, 50, 100]"
            layout="sizes, prev, pager, next" :total="total" />
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Search } from '@element-plus/icons-vue';
import {getRaceInfo} from '@/api/index';

const showInfo = [
    'id',
    'name',
    'level',
    'type',
    'startTime',
    'endTime',
    'duration',
    'participate'
];
let raceInfo = ref(null);

const searchInput = ref('');
const page_num = ref(1);
const page_size = ref(10);
const total = ref(1000);

const second2hour = (time) => {
    let hour = Math.floor(time / 3600);
    let minute = Math.floor(time / 60) % 60;
    let seconde = Math.floor(time % 60);
    return hour + ":" + minute + ":" + seconde;
}

const init = async () => {
    const params = {
        page: page_num.value,
        pagesize: page_size.value
    };
    let res = await getRaceInfo(params);
    console.log('res', res);
    let rows = res.data.data.rows.map(item => {
        item.startTime = new Date(item.startTimeStamp);
        item.endTime = new Date(item.endTimeStamp);
        item.duration = second2hour(item.duration);
        return item;
    });
    if (res.data.msg == 'success') {
        raceInfo.value = rows;
    }
}

init();

const handleSearch = () => {
    console.log(132);
}
</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #ccc;

    .commonHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        :deep(.el-input-group__append) {
            background-color: #409eff;
        }
    }

    .el-pagination {
        margin-top: 20px;
        display: flex;
        justify-content: end;
    }
}
</style>