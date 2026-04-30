<template>
  <div>
    <HeroSection locale="en" />
    <FeaturedCards locale="en" />
    <NowBuilding locale="en" />
    <LatestWriting locale="en" />
    <AboutSnapshot locale="en" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jiaodi — Home',
  description: 'I build Frontend + AI experiences people actually use.',
})
</script>
