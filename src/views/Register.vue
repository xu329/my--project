<!-- src/views/Register.vue -->
<template>
  <div class="register flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">用户注册</h2>
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.confirmPassword" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register" class="w-full">注册</el-button>
          <p class="mt-4 text-center">
            已有账号？<router-link to="/login" class="text-blue-500">立即登录</router-link>
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

const form = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const userStore = useUserStore()
const router = useRouter()

const register = () => {
  if (!form.username || !form.password) {
    ElMessage.error('请输入用户名和密码')
    return
  }
  if (form.password !== form.confirmPassword) {
    ElMessage.error('两次密码不一致')
    return
  }

  // 简单注册（实际应调用 API）
  userStore.login(form.username)
  ElMessage.success('注册成功并已自动登录！')
  router.push('/')
}
</script>