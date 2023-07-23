<template>
    <div class="container">
        <header class="commonHeader">
            <el-input v-model="searchInput" placeholder="Please input" style="width: 300px;">
                <template #append>
                    <el-button :icon="Search" type="primary" @click="handleSearch" />
                </template>
            </el-input>
        </header>
        <el-table :data="stuInfo" border stripe style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
        </el-table>
        <el-pagination v-model:current-page="page_num" v-model:page-size="page_size" :page-sizes="[10, 20, 50, 100]"
            background layout="total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
import { getStuInfo } from '@/api/index';

const showInfo = [
    'id',
    "realname",
    "classname",
    "year",
    "cfRating",
    "cfParticipateTime",
    "cfSolve",
    "cfAfter",
    "acRating",
    "acParticipateTime",
    "acSolve",
    "acAfter",
    'score'
];
let stuInfo = ref(null);
const multipleSelection = ref([null]);
let searchInput = ref('');
let page_num = ref(1);
let page_size = ref(10);
let total = ref(1000);

const score = [403, 245, 222, 403, 305, 345, 388, 280, 46, 248, 239, 483, 123, 234, 43, 87, 245, 834, 123, 434, 432, 234];

const init = async () => {
    const params = {
        page: page_num.value,
        pagesize: page_size.value
    };
    let res = await getStuInfo(params);
    if (res.data.msg == 'success') {
        stuInfo.value = res.data.data.rows;
        stuInfo.value.forEach(item => {
            item.score = score[item.id];
        })
        total.value = res.data.data.total;
    }
}

init();

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const handleSearch = () => {
    console.log(132);
}
const handleSizeChange = () => {
    init()
}
const handleCurrentChange = () => {
    init()
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