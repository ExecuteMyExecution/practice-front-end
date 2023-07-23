<template>
    <div class="container">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            {{ route.params.name }}
            <el-button type="primary" @click="goDetail">status</el-button>
        </div>
        <header class="commonHeader">
            <el-input v-model="searchInput" placeholder="Please input" style="width: 300px;">
                <template #append>
                    <el-button :icon="Search" type="primary" @click="handleSearch" />
                </template>
            </el-input>
        </header>
        <el-table :data="raceInfo" border stripe style="width: 100%">
            <el-table-column prop="name" label="name" sortable>
                <template #default="scope">
                    <span @click="goUserInfo(scope.row)" style="color: #409eff; cursor: pointer;">{{
                        raceInfo[scope.$index].realname }}</span>
                </template>
            </el-table-column>
            <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" sortable />
        </el-table>
        <el-pagination v-model:current-page="page_num" v-model:page-size="page_size" :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
import { getAtcoderInfo } from '@/api/index';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const names = ['田帅华', '洪枢适', '曾朴凡', '梁凯星', '巴同学', '陈柯舟', '黄东琦', '李佩峰', '李腾飞', '刘祥睿', '邱若昕', '常泽星', '闫阳旭', '曾梓勋', '范露曦', '张占文', '许舜清', '郭力玮', '杨济泽', '刘洋滔', '杨泽忠'];
const showInfo = [
    "atcoderId",
    "classname",
    "rating",
    "trank",
    "diff",
];
let raceInfo = ref(null);

let searchInput = ref('');
let page_num = ref(1);
let page_size = ref(10);
let total = ref(1000);

const init = async () => {
    const params = {
        page: 1,
        pagesize: 100
    };
    const newArr = [];
    for (const item of names) {
        params.username = item;
        let res = await getAtcoderInfo(params);
        if (res.data.msg == 'success') {
            for (const obj of res.data.data.rows) {
                if (obj.name === route.params.name) {
                    newArr.push(obj);
                }
            }
        }
    }
    raceInfo.value = newArr;
    total.value = newArr.length;
}

init();

const handleSearch = () => {
    console.log(132);
}
const goDetail = async (row) => {
    router.push({
        name: 'submit'
    });
}
const handleSizeChange = () => {
    init()
}
const handleCurrentChange = () => {
    init()
}
const goUserInfo = (row) => {
    router.push({
        name: 'user',
        params: {
            realname: row.realname
        }
    })
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