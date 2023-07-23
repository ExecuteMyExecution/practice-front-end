<template>
    <div class="container">
        <header class="commonHeader">
            <el-input v-model="searchInput" placeholder="Please input" style="width: 300px;">
                <template #append>
                    <el-button :icon="Search" type="primary" @click="handleSearch" />
                </template>
            </el-input>
            <div class="data-button">
                <el-button type="primary" @click="gotoRatingLine">CFRatingLine</el-button>
                <el-button type="primary" @click="gotoTagPolor">CFTagPolor</el-button>
            </div>
        </header>
        <el-table :data="showStuInfo" border stripe style="width: 100%" @selection-change="handleSelectionChange">
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
import { useRouter } from 'vue-router';
import { getStuInfo } from '@/api/index';
const router = useRouter();

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
    "acAfter"
];
let stuInfo = ref(null);
let showStuInfo = ref(null);
const multipleSelection = ref([null]);
let searchInput = ref('');
let page_num = ref(1);
let page_size = ref(10);
let total = ref(1000);

const init = async () => {
    const params = {
        page: page_num.value,
        pagesize: page_size.value
    };
    let res = await getStuInfo(params);
    if (res.data.msg == 'success') {
        stuInfo.value = res.data.data.rows;
        total.value = res.data.data.total;
        showStuInfo.value = stuInfo.value;
    }
}

init();

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const handleSearch = () => {
    if (searchInput.value === '') {
        showStuInfo.value = stuInfo.value;
    } else {
        showStuInfo.value = stuInfo.value.filter(item => item.realname === searchInput.value);
    }
}
const gotoRatingLine = () => {
    router.push({
        name: 'rating-line',
        params: {
            realname: multipleSelection.value[0].realname
        }
    });
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