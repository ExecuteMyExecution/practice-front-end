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
            layout="total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
import { getProblemInfo } from '@/api/index';

const showInfo = [
    'cid',
    'name',
    'qindex',
    'problemName',
    'tags',
    'difficulty'
];
let raceInfo = ref(null);
let searchInput = ref('');
let page_num = ref(1);
let page_size = ref(10);
let total = ref(1000);

const init = async () => {
    const params = {
        cid: searchInput.value ? searchInput.value : 0
    };
    let res = await getProblemInfo(params);
    if (res.data.msg == 'success') {
        raceInfo.value = res.data.data;
        total.value = res.data.data.length;
    }
}

init();

const handleSearch = () => {
    init();
}
const handleSizeChange = () => {
    init()
}
const handleCurrentChange = () => {
    init()
}
const handleView = async (row) => {
    window.open(`https://codeforces.com/contest/${row.cid}/problem/${row.qindex}`)
}
const handleSubmit = (row) => {
    window.open(`https://codeforces.com/contest/${row.cid}/problem/${row.qindex}`)
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