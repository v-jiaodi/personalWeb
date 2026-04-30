<template>
  <section class="section">
    <div class="container">
      <div class="about-snap">
        <div class="about-text">
          <h2 class="section-title">{{ isZh ? '关于 Jiaodi' : 'About Jiaodi' }}</h2>
          <p class="about-bio">{{ bio }}</p>
          <NuxtLink :to="`/${locale}/about`" class="btn btn-secondary">
            {{ isZh ? '了解更多' : 'More about me' }}
          </NuxtLink>
        </div>
        <div class="about-tags">
          <span v-for="item in skills" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ locale: 'zh' | 'en' }>()
const isZh = computed(() => props.locale === 'zh')

const bio = computed(() =>
  isZh.value
    ? '我是 Jiaodi，专注前端与 AI 的结合：把 LLM/RAG/Agent 做成可用、可信、可维护的产品体验。写作以技术为主（约 70%），同时记录产品与交互思考（约 30%）。'
    : "I'm Jiaodi, working at the intersection of frontend and AI—turning LLM/RAG/agents into usable, trustworthy, and maintainable product experiences. My writing is mostly technical (~70%), with product & interaction thinking (~30%)."
)

const skills = [
  'Vue', 'Node.js', 'TypeScript', 'RAG', 'Agent', 'Streaming UI',
  'LLM API', 'Observability', 'Performance', 'Architecture',
]
</script>

<style scoped>
.about-snap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.about-bio {
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.8;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-content: flex-start;
}

@media (max-width: 768px) {
  .about-snap {
    grid-template-columns: 1fr;
  }
}
</style>
