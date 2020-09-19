<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keeplive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keeplive"></router-view>
  </div>
</template>

<style lang="less">
  p{
    padding: 0;
    margin: 0;
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
  }

</style>
