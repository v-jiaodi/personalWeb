<template>
  <div class="page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">项目</h1>
        <p class="page-subtitle">我的路线图、实验与工具箱</p>
      </div>

      <!-- Roadmap -->
      <section class="proj-section">
        <h2 class="proj-section-title">
          <span class="tag">Roadmap</span>
          路线图
        </h2>
        <div class="grid-3">
          <div v-for="p in roadmap" :key="p.title" class="card proj-card">
            <div class="proj-status">计划中</div>
            <h3 class="proj-title">{{ p.title }}</h3>
            <p class="proj-goal">{{ p.goal }}</p>
            <div class="proj-meta">
              <div class="proj-stack">
                <span class="proj-label">Stack：</span>
                <span>{{ p.stack }}</span>
              </div>
              <div class="proj-features">
                <span class="proj-label">Features：</span>
                <div class="feat-tags">
                  <span v-for="f in p.features" :key="f" class="tag">{{ f }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experiments -->
      <section class="proj-section">
        <h2 class="proj-section-title">
          <span class="tag">Experiments</span>
          实验场
        </h2>
        <p class="proj-desc">这里会放一些小而快的 AI + UI 实验，用来验证交互与工程方案。</p>
      </section>

      <!-- Toolbox -->
      <section class="proj-section">
        <h2 class="proj-section-title">
          <span class="tag">Toolbox</span>
          技能栈
        </h2>
        <div class="toolbox-grid">
          <div v-for="group in toolbox" :key="group.name" class="toolbox-group">
            <h4 class="toolbox-name">{{ group.name }}</h4>
            <div class="toolbox-items">
              <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Jiaodi — 项目', description: '路线图、实验与技术栈' })

const roadmap = [
  {
    title: 'AI 文档助手（RAG）',
    goal: '把"能检索"做成"可信回答"：带引用、可追溯、可控。',
    stack: 'Node.js · Vector store · RAG · Vue UI',
    features: ['Streaming', 'Citations', 'Source preview', 'Feedback loop'],
  },
  {
    title: '流式对话 UI 组件套件',
    goal: '沉淀一套可复用的流式交互模式与状态机。',
    stack: 'Vue · TypeScript · Motion',
    features: ['Stop/Resume', 'Partial render', 'Retry', 'Error states'],
  },
  {
    title: 'Agent 工具调用演练场',
    goal: '把工具调用做成可观察、可调试、可复盘的开发体验。',
    stack: 'Node.js · Tool calling · Tracing',
    features: ['Tool timeline', 'Prompt versioning', 'Failure replay', 'Metrics'],
  },
]

const toolbox = [
  { name: 'Frontend', items: ['Vue', 'Nuxt', 'TypeScript', 'Vite'] },
  { name: 'AI', items: ['LLM API', 'RAG', 'Embeddings', 'Agent tool-use'] },
  { name: 'Backend', items: ['Node.js', 'API design', 'Auth'] },
  { name: 'Quality', items: ['Logging', 'Tracing', 'Eval', 'Monitoring'] },
]
</script>

<style scoped>
.page-container {
  padding-top: calc(var(--header-height) + var(--space-16));
  padding-bottom: var(--space-24);
}

.page-header {
  margin-bottom: var(--space-16);
}

.page-title {
  font-size: var(--text-5xl);
  margin-bottom: var(--space-3);
}

.page-subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

.proj-section {
  margin-bottom: var(--space-16);
}

.proj-section-title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-2xl);
  margin-bottom: var(--space-8);
}

.proj-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.proj-status {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.proj-title {
  font-size: var(--text-xl);
  font-weight: 700;
}

.proj-goal {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
  flex: 1;
}

.proj-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.proj-stack {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.proj-label {
  font-weight: 600;
  color: var(--text-secondary);
}

.feat-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-1);
}

.proj-desc {
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.7;
  max-width: 60ch;
}

.toolbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-6);
}

.toolbox-group {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
}

.toolbox-name {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-3);
}

.toolbox-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
