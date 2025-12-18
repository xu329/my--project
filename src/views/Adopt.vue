<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">领养 {{ typeMap[type] }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="pet in pets" :key="pet.id" class="border rounded-lg overflow-hidden shadow">
        <img :src="pet.image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-bold text-lg">{{ pet.name }}</h3>
          <p class="text-gray-600 mt-2">{{ pet.desc }}</p>
          <el-button type="primary" class="mt-4 w-full" @click="handleApply">
            申请领养
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const props = defineProps({
  type: String // 'cat', 'dog', 'bird'
})

const userStore = useUserStore()
const router = useRouter()

const typeMap = {
  cat: '猫咪',
  dog: '狗狗',
  bird: '小鸟'
}

const pets = ref([])

// Mock 数据,用本地图片路径
const mockData = {
  cat: [
    { id: 1, name: '小橘', desc: '活泼亲人，已绝育', image: '/images/pets/cat1.jpg' },
    { id: 2, name: '奶牛', desc: '安静温顺，适合家庭', image: '/images/pets/cat2.jpg' }
  ],
  dog: [
    { id: 3, name: '旺财', desc: '金毛，性格温顺', image: '/images/pets/dog1.jpg' },
    { id: 4, name: '小白', desc: '比熊，爱干净', image: '/images/pets/dog2.jpg' }
  ],
  bird: [
    { id: 5, name: '小蓝', desc: '鹦鹉，会说话', image: '/images/pets/bird1.jpg' }
  ]
}

onMounted(() => {
  pets.value = mockData[props.type] || []
})

const handleApply = () => {
  if (!userStore.isLoggedIn) {
    ElMessage.warning('请先登录后再申请领养！')
    router.push('/login')
  } else {
    ElMessage.success(`您已成功申请领养 ${typeMap[props.type]}！工作人员将尽快联系您。`)
  }
}
</script>