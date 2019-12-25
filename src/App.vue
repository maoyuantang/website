<!--
 * @Author: tmy
 * @Date: 2019-12-04 09:24:02
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-25 15:32:55
 * @Description: Do not edit
 -->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class App extends Vue { }
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
}
</style>
