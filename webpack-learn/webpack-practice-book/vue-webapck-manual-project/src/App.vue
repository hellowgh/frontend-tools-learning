<template>
    <div>{{msg}}</div>
</template>

<script setup>
import {ref} from 'vue';

const msg = ref('msg')

</script>

<style scoped lang="less">
@div-color: red;

.div-common {
    font-width: 700;
}

div {
    @apply .div-common;
    color: @div-color;
}
</style>
