<template>
    <div class="container">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="现役" name="now">
                now
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="退役" name="before">
                before
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="所有" name="all">
                all
                <el-table :data="stuInfo" border stripe style="width: 100%">
                    <el-table-column type="selection" width="55" />
                    <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

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
    "jsk"
];
const stuInfo = [
    {
        "stuNO": "2019010317",
        "realname": "姚宗宇",
        "classname": "计科2003",
        "sex": "男",
        "school": "北京化工大学",
        "year": 2019,
        "cfRating": 1000,
        "cf": 88,
        "cf++": "245/298",
        "acRating": 0,
        "ac": 20,
        "ac++": "1/3",
        "vj": "",
        "nc": 0,
        "ncRating": 9,
        "jsk": 0
    }, {
        "stuNO": "2019010317",
        "realname": "姚宗宇",
        "classname": "计科2003",
        "sex": "男",
        "school": "北京化工大学",
        "year": 2019,
        "cfRating": 1000,
        "cf": 88,
        "cf++": "245/298",
        "acRating": 0,
        "ac": 20,
        "ac++": "1/3",
        "vj": "",
        "nc": 0,
        "ncRating": 9,
        "jsk": 0
    }, {
        "stuNO": "2019010317",
        "realname": "姚宗宇",
        "classname": "计科2003",
        "sex": "男",
        "school": "北京化工大学",
        "year": 2019,
        "cfRating": 1000,
        "cf": 88,
        "cf++": "245/298",
        "acRating": 0,
        "ac": 20,
        "ac++": "1/3",
        "vj": "",
        "nc": 0,
        "ncRating": 9,
        "jsk": 0
    }
]

const activeName = ref('now');

</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #ccc;
    .el-pagination {
        margin-top: 20px;
        display: flex;
        justify-content: end;
    }
}
</style>