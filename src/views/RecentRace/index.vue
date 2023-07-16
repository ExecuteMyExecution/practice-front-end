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
            <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" sortable />
        </el-table>
        <el-pagination v-model:current-page="page_num" v-model:page-size="page_size" :page-sizes="[10, 20, 50, 100]"
            layout="sizes, prev, pager, next" :total="total" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const showInfo = [
    "#",
    "date",
    "name",
    "#stu",
    "source"
];
const raceInfo = [
    {
        '#': 1,
        date: "2022-06-19 22:00",
        name: "AtCoder Regular Contest 142",
        "#stu": 1,
        source: "ac"
    },
    {
        '#': 2,
        date: "2022-06-19 22:00",
        name: "AtCoder Regular Contest 142",
        "#stu": 1,
        source: "ac"
    },
    {
        '#': 3,
        date: "2022-06-19 22:00",
        name: "AtCoder Regular Contest 142",
        "#stu": 1,
        source: "ac"
    }
];

const searchInput = ref('');
const page_num = ref(1);
const page_size = ref(10);
const total = ref(1000);

const handleSearch = () => {
    console.log(132);
}
const handleView = (row) => {
    console.log(row);
}
const handleSubmit = (row) => {
    console.log(row);
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