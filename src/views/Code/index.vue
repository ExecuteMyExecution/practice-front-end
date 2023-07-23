<template>
    <div class="container">
        <div>
            {{ showCode }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showCode = computed(() => {
    let text = '';
    for (const ch of route.params.code) {
        if (ch == '\\') {

        }
    }
    return route.params.code;
})
</script>

<style lang="scss" scoped>
.container {
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #ccc;
    white-space: pre-wrap;
    div {
        background-color: #f5f5f5;
        padding: 15px;
    }
}
</style>