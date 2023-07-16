<template>
    <div class="container">
        <el-tabs v-model="activeName" class="demo-tabs">
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
            <el-tab-pane label="现役" name="now">
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="退役" name="before">
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="所有" name="all">
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-pagination v-model:current-page="page_num" v-model:page-size="page_size" :page-sizes="[10, 20, 50, 100]"
            background layout="sizes, prev, pager, next" :total="total" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const showInfo = [
    "stuNO",
    "realname",
    "classname",
    "sex",
    "school",
    "year",
    "cfRating",
    "cf",
    "cf++",
    "acRating",
    "ac",
    "ac++",
    "vj",
    "nc",
    "ncRating",
    "jsk",
];
const stuInfo = [
    {
        stuNO: "2019010317",
        realname: "姚宗宇",
        classname: "计科2003",
        sex: "男",
        school: "北京化工大学",
        year: 2019,
        cfRating: 1000,
        cf: 88,
        "cf++": "245/298",
        acRating: 0,
        ac: 20,
        "ac++": "1/3",
        vj: "",
        nc: 0,
        ncRating: 9,
        jsk: 0,
    },
    {
        stuNO: "2019010317",
        realname: "姚宗宇",
        classname: "计科2003",
        sex: "男",
        school: "北京化工大学",
        year: 2019,
        cfRating: 1000,
        cf: 88,
        "cf++": "245/298",
        acRating: 0,
        ac: 20,
        "ac++": "1/3",
        vj: "",
        nc: 0,
        ncRating: 9,
        jsk: 0,
    },
    {
        stuNO: "2019010317",
        realname: "姚宗宇",
        classname: "计科2003",
        sex: "男",
        school: "北京化工大学",
        year: 2019,
        cfRating: 1000,
        cf: 88,
        "cf++": "245/298",
        acRating: 0,
        ac: 20,
        "ac++": "1/3",
        vj: "",
        nc: 0,
        ncRating: 9,
        jsk: 0,
    }
];

const activeName = ref("now");
const searchInput = ref('');
const page_num = ref(1);
const page_size = ref(10);
const total = ref(1000);

const handleSearch = () => {
    console.log(132);
}
const gotoRatingLine = () => {
    router.push('/rating-line');
}
const gotoTagPolor = () => {
    router.push('/tag-polor');
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