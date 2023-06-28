<template>
  <view class="container">
    <text>{{ msg }}</text>
    <CompDemo />
  </view>
</template>

<script setup>
import CompDemo from '@/components/CompDemo.vue'
import { ref } from 'vue'

const msg = ref('about')
</script>

<style scoped lang="scss">
@import '@/common/index.scss';

.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
  color: $main-color;
}
</style>
