<!-- src/views/404.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-red-500">404</h1>
      <p class="text-xl mt-4">页面未找到</p>
      <el-button type="primary" @click="$router.push('/')" class="mt-6">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup>
// 无需逻辑
</script>