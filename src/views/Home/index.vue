<template>
    <div class="container">
        <el-table :data="stuInfo" border stripe style="width: 100%">
            <el-table-column v-for="(item, index) of showInfo" :key="index" :prop="item" :label="item" />
        </el-table>
    </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #ccc;
}
</style>