<template>
  <div class="home p-6">
    <!-- 轮播图 -->
    <el-carousel height="300px" class="rounded mb-8 overflow-hidden">
      <el-carousel-item v-for="(img, i) in carouselImages" :key="i">
        <div class="w-full h-full flex items-center justify-center bg-gray-100">
          <img 
            :src="img" 
            class="max-h-full max-w-full object-contain"
            alt="轮播图片"
          />
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 宠物种类 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div v-for="pet in petTypes" :key="pet.type"
           class="border rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition"
           @click="goToAdopt(pet.type)">
        <el-icon class="text-4xl mb-3"><component :is="pet.icon" /></el-icon>
        <h3 class="text-xl font-bold">{{ pet.name }}</h3>
      </div>
    </div>

    <!-- 养宠注意事项 -->
    <div class="bg-gray-100 p-6 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">养宠注意事项</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>领养前请确认有足够时间、空间和经济能力照顾宠物</li>
        <li>定期接种疫苗、驱虫，保持宠物健康</li>
        <li>不离不弃，宠物是家人，不是玩具</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { 
  IceCream as CatIcon, 
  ShoppingCartFull as DogIcon, 
  PartlyCloudy as BirdIcon 
} from '@element-plus/icons-vue'

const router = useRouter()

// 轮播图图片，使用 public/images 下的本地图片
const carouselImages = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg'
]

const petTypes = [
  { type: 'cat', name: '猫咪', icon: CatIcon },
  { type: 'dog', name: '狗狗', icon: DogIcon },
  { type: 'bird', name: '小鸟', icon: BirdIcon }
]

const goToAdopt = (type) => {
  router.push(`/adopt/${type}`)
}
</script>
