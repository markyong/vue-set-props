<template>
  <div id="app">
    <el-button>按钮</el-button>
    <el-button>按钮</el-button>
    <el-button>按钮</el-button>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>
