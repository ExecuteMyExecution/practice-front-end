<template>
    <div class="container">
        <el-card class="box-card" style="width: 700px;">
            <el-form :model="form" label-width="60px" label-position="left" inline>
                <el-form-item v-for="(val, key, index) of showInfo" :key="index" :label="val" style="width: 250px;">
                    <el-input v-model="form[key]" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="width: 400px;">
            <strong>关于新申请:</strong><br>
            &emsp;&emsp;· 操作选择“创建”，学号，班级，性别，班级，学校，年级为必填项,其余账号选填,提交后可进入审核列表进行查看审核相关信息以及填写情况。<br>
            &emsp;&emsp;· cfcheck及accheck项供检查codeforces、atcoder网站用户名的正确性,若为True即该账号存在,若为false请检查账号是否正确。<br>
            <br>
            <strong>关于更新信息:</strong><br>
            &emsp;&emsp;· 学号必填,填写要更新的信息,不更新的信息不填<br>
            &emsp;&emsp;· 例: 需要更新codeforces昵称，填写学号和CfID后,其他信息留空。审核通过后会更新codeforces账号，其他账号不变
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const showInfo = {
    username: '姓名',
    classname: '班别',
    password: '密码',
    realname: '用户名',
    school: '学校',
    status: '',
    stuno: '学号',
    year: '年级',
}
const form = reactive({
    username: '',
    classname: '',
    password: '',
    realname: '',
    school: '',
    status: '',
    stuno: '',
    year: '',
})

const onSubmit = () => {
    console.log('sub');
    let list = [];
    console.log(list[0].add_time || '');
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>