<template>
    <div class="container" id="container">
        {{ route.params.realname }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getChangeInfo } from '@/api/index';
import * as echarts from 'echarts';

const route = useRoute();
const raceInfo = ref(null);

const timeFormat = (time) => {
    return time >= 10 ? time : '0' + time;
}
const date2day = (date) => {
    let year = date.getFullYear();
    let month = timeFormat(date.getMonth() + 1);
    let day = timeFormat(date.getDay());
    return `${year}-${month}-${day}`;
}

const init = async () => {
    const params = {
        page: 1,
        pagesize: 100,
        username: route.params.realname
    };
    let res = await getChangeInfo(params);
    let rows = res.data.data.rows.map(item => {
        item.time = date2day(new Date(item.startTimeStamp * 1000));
        return item;
    });
    if (res.data.msg == 'success') {
        raceInfo.value = rows;
    }
    draw();
}

init();

const draw = () => {
    var chartDom = document.getElementById('container');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: raceInfo.value.map(item => item.time)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: raceInfo.value.map(item => item.trank),
                type: 'line',
                smooth: true
            }
        ]
    };

    option && myChart.setOption(option);
}
</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #ccc;
    height: 550px;
}
</style>