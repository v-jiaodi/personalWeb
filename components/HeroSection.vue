<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-inner">
        <!-- Abstract graphic -->
        <div class="hero-graphic" aria-hidden="true">
          <div class="mesh-blob blob-1"></div>
          <div class="mesh-blob blob-2"></div>
          <div class="mesh-blob blob-3"></div>
          <div class="mesh-ring ring-1"></div>
          <div class="mesh-ring ring-2"></div>
        </div>

        <!-- Content -->
        <div class="hero-content">
          <div class="hero-badge">
            <span class="tag">Frontend × AI</span>
          </div>

          <h1 class="hero-title">
            <span class="gradient-text">{{ title }}</span>
          </h1>

          <p class="hero-subtitle">{{ subtitle }}</p>

          <div class="hero-meta">
            <div class="meta-item" v-for="m in meta" :key="m.label">
              <span class="meta-label">{{ m.label }}</span>
              <span class="meta-value">{{ m.value }}</span>
            </div>
          </div>

          <div class="hero-actions">
            <NuxtLink :to="writingPath" class="btn btn-primary">
              {{ cta.writing }}
            </NuxtLink>
            <a href="mailto:v-jiaodi@microsoft.com" class="btn btn-secondary">
              {{ cta.subscribe }}
            </a>
            <NuxtLink :to="contactPath" class="btn btn-link">
              {{ cta.contact }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ locale: 'zh' | 'en' }>()

const isZh = computed(() => props.locale === 'zh')

const title = computed(() =>
  isZh.value
    ? '我做前端 + AI，把能力做成用户用得上的体验。'
    : 'I build Frontend + AI experiences people actually use.'
)

const subtitle = computed(() =>
  isZh.value
    ? '基于 Vue 与 Node.js，专注 AI 功能的交互、工程化与可靠性：流式输出、引用溯源、RAG、Agent 工具调用与可观测性。'
    : 'Built with Vue and Node.js, focusing on AI UX, engineering quality, and reliability—streaming UI, citations, RAG, agent tool-use, and observability.'
)

const meta = computed(() =>
  isZh.value
    ? [
        { label: 'Focus / 方向', value: 'Frontend × AI' },
        { label: 'Stack / 技术栈', value: 'Vue · Node.js' },
        { label: 'Writing / 输出', value: 'Build logs & AI UX notes' },
      ]
    : [
        { label: 'Focus', value: 'Frontend × AI' },
        { label: 'Stack', value: 'Vue · Node.js' },
        { label: 'Writing', value: 'Build logs & AI UX notes' },
      ]
)

const cta = computed(() =>
  isZh.value
    ? { writing: '阅读博客', subscribe: '订阅更新', contact: '联系我 →' }
    : { writing: 'Read writing', subscribe: 'Subscribe', contact: 'Contact →' }
)

const writingPath = computed(() => `/${props.locale}/writing`)
const contactPath = computed(() => `/${props.locale}/contact`)
</script>

<style scoped>
.hero {
  padding-top: calc(var(--header-height) + var(--space-16));
  padding-bottom: var(--space-24);
  position: relative;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-12);
}

/* Abstract graphic */
.hero-graphic {
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  width: 440px;
  height: 440px;
  pointer-events: none;
  flex-shrink: 0;
}

.mesh-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.blob-1 {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, #7c3aed, transparent);
  top: 10%;
  left: 10%;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #ec4899, transparent);
  bottom: 15%;
  right: 10%;
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, #10b981, transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 12s ease-in-out infinite;
}

.mesh-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.ring-1 {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin 20s linear infinite;
}

.ring-2 {
  width: 420px;
  height: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(16, 185, 129, 0.1);
  animation: spin 30s linear infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.hero-badge {
  margin-bottom: var(--space-5);
}

.hero-title {
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  line-height: 1.15;
  margin-bottom: var(--space-5);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-8);
  max-width: 56ch;
}

.hero-meta {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.meta-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.meta-value {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-graphic {
    display: none;
  }
}
</style>
