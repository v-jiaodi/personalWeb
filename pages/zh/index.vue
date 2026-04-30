<template>
  <div>
    <HeroSection locale="zh" />
    <FeaturedCards locale="zh" />
    <NowBuilding locale="zh" />
    <LatestWriting locale="zh" />
    <AboutSnapshot locale="zh" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jiaodi — 首页',
  description: '我做前端 + AI，把能力做成用户用得上的体验。',
})
</script>
