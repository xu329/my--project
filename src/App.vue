<!-- src/App.vue -->
<template>
  <div id="app">
    <header class="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <!-- ✅ 点击标题返回首页 -->
      <router-link to="/" class="text-xl font-bold flex items-center hover:opacity-80">
        <el-icon class="mr-2"><BrushFilled /></el-icon>
        爱心宠物领养中心
      </router-link>

      <div class="flex items-center space-x-3">
        <span v-if="!userStore.isLoggedIn">
          <router-link to="/login" class="hover:underline">登录</router-link>
          <span class="mx-2">|</span>
          <router-link to="/register" class="hover:underline">注册</router-link>
        </span>
        <span v-else class="flex items-center">
          <el-icon class="text-lg mr-1"><User /></el-icon>
          {{ userStore.userInfo.username }}
          <el-button type="info" size="small" @click="logout" class="ml-2">退出</el-button>
        </span>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { BrushFilled, User } from '@element-plus/icons-vue' 

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/')
}
</script>