<template>
  <view class="container">
    <view
      v-for="(item, index) in lists"
      :key="index"
    >
      <view>{{ item }}</view>
    </view>
  </view>
  <button
    type="default"
    @click="toPage"
  >
    点击我查看关于
  </button>
</template>

<script setup>
import { ref } from 'vue'

const lists = ref(['hello', 'world'])
const c = 0
console.log(c)

const toPage = () => {
  uni.navigateTo({
    url: '/pages/about/about',
  })
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
