<template>
  <section class="section now-section">
    <div class="container">
      <h2 class="section-title">{{ isZh ? '我正在做' : 'Now building' }}</h2>
      <p class="section-subtitle">{{ isZh ? '当前正在研究与构建的事情' : 'What I\'m currently working on' }}</p>

      <ul class="now-list">
        <li v-for="item in items" :key="item.title" class="now-item">
          <div class="now-dot"></div>
          <div class="now-content">
            <strong class="now-title">{{ item.title }}</strong>
            <span class="now-desc">{{ item.desc }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ locale: 'zh' | 'en' }>()
const isZh = computed(() => props.locale === 'zh')

const items = computed(() =>
  isZh.value
    ? [
        {
          title: 'RAG 文档助手',
          desc: '产品化原型：支持引用溯源与可控回答。',
        },
        {
          title: '流式输出 UI 模式库',
          desc: 'loading / partial / stop / retry 全状态覆盖。',
        },
        {
          title: 'AI 功能可观测性',
          desc: 'prompt 版本、工具调用链路、失败复盘与评测指标。',
        },
      ]
    : [
        {
          title: 'RAG Docs Assistant',
          desc: 'A product-ready prototype with citations and controllable answers.',
        },
        {
          title: 'Streaming UI Pattern Kit',
          desc: 'Full state coverage: loading / partial / stop / retry.',
        },
        {
          title: 'AI Feature Observability',
          desc: 'Prompt versioning, tool-call traces, failure replay and eval metrics.',
        },
      ]
)
</script>

<style scoped>
.now-section {
  background: var(--gradient-subtle);
  border-radius: var(--radius-xl);
  margin: 0 var(--space-6);
  padding: var(--space-16) var(--space-10);
}

.now-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.now-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.now-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient-brand);
  flex-shrink: 0;
  margin-top: 5px;
}

.now-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.now-title {
  font-size: var(--text-base);
  color: var(--text-primary);
  font-weight: 600;
}

.now-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .now-section {
    margin: 0;
    border-radius: 0;
    padding: var(--space-10) var(--space-5);
  }
}
</style>
