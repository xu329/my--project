<template>
  <div class="login flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">用户登录</h2>
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="w-full">登录</el-button>
          <p class="mt-4 text-center">
            还没有账号？<router-link to="/register" class="text-blue-500">立即注册</router-link>
          </p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'

const form = reactive({ username: '', password: '' })
const userStore = useUserStore()
const router = useRouter()

const login = () => {
  if (!form.username || !form.password) {
    ElMessage.error('请输入用户名和密码')
    return
  }
  // 简单验证（实际应调用 API）
  userStore.login(form.username)
  ElMessage.success('登录成功！')
  router.push('/')
}
</script>