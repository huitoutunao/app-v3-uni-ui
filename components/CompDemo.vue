<template>
  <view class="comp-demo">
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('component demo')
</script>

<style scoped lang="scss">
.comp-demo {
  font-size: 14px;
  line-height: 24px;
}
</style>
