<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">{{ isZh ? '精选内容' : 'Featured' }}</h2>
      <p class="section-subtitle">{{ isZh ? '我正在探索的三个核心方向' : 'Three areas I\'m actively exploring' }}</p>

      <div class="grid-3">
        <div v-for="card in cards" :key="card.title" class="card featured-card">
          <div class="card-icon" aria-hidden="true">{{ card.icon }}</div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc">{{ card.desc }}</p>
          <div class="card-tags">
            <span v-for="tag in card.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ locale: 'zh' | 'en' }>()
const isZh = computed(() => props.locale === 'zh')

const cards = computed(() =>
  isZh.value
    ? [
        {
          icon: '✦',
          title: 'AI UX Notes / AI 交互笔记',
          desc: '流式输出、失败提示、不确定性表达、引用与溯源。',
          tags: ['Streaming UI', 'Citations', 'RAG'],
        },
        {
          icon: '◈',
          title: 'Build Logs / 构建日志',
          desc: '从 0 到 1 做 Demo/原型：架构、实现、上线与复盘。',
          tags: ['Node.js', 'Vue', 'Architecture'],
        },
        {
          icon: '⬡',
          title: 'Engineering / 工程实践',
          desc: 'Vue 工程化、性能优化、组件设计、Node.js 集成。',
          tags: ['Performance', 'Components', 'Tooling'],
        },
      ]
    : [
        {
          icon: '✦',
          title: 'AI UX Notes',
          desc: 'Streaming outputs, failure states, uncertainty UX, citations and traceability.',
          tags: ['Streaming UI', 'Citations', 'RAG'],
        },
        {
          icon: '◈',
          title: 'Build Logs',
          desc: 'From idea to shipped: architecture, implementation, launch and retrospective.',
          tags: ['Node.js', 'Vue', 'Architecture'],
        },
        {
          icon: '⬡',
          title: 'Engineering',
          desc: 'Vue engineering, performance optimization, component design, and Node.js integration.',
          tags: ['Performance', 'Components', 'Tooling'],
        },
      ]
)
</script>

<style scoped>
.featured-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.card-icon {
  font-size: var(--text-2xl);
  line-height: 1;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--text-primary);
}

.card-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
</style>
