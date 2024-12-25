<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen">
    <!-- 左侧目录区域 -->
    <div class="w-64 border-r border-gray-200 p-4">
      <!-- 目录列表占位 -->
      <div class="text-gray-400 text-center mt-8">
        目录区域
      </div>
    </div>

    <!-- 右侧编辑器区域 -->
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
