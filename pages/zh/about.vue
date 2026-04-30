<template>
  <div class="page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">关于</h1>
        <p class="about-tagline gradient-text">我擅长把 AI 能力变成清晰、顺滑、可控的前端产品体验。</p>
      </div>

      <div class="about-grid">
        <section class="about-section">
          <h2 class="section-label">简介</h2>
          <p class="about-bio">我是 <strong>Jiaodi</strong>，专注前端与 AI 的结合：把 LLM/RAG/Agent 做成可用、可信、可维护的产品体验。写作以技术为主（约 70%），同时记录产品与交互思考（约 30%）。</p>
        </section>

        <section class="about-section">
          <h2 class="section-label">我关注的主题</h2>
          <ul class="focus-list">
            <li v-for="item in focuses" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="about-section">
          <h2 class="section-label">技能栈</h2>
          <div class="skill-groups">
            <div v-for="g in skills" :key="g.name" class="skill-group">
              <div class="skill-group-name">{{ g.name }}</div>
              <div class="skill-tags">
                <span v-for="s in g.items" :key="s" class="tag">{{ s }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section resume-section">
          <h2 class="section-label">简历摘要</h2>
          <div class="resume-items">
            <div class="resume-item">
              <span class="resume-key">角色</span>
              <span>前端 × AI（Vue / Node.js）</span>
            </div>
            <div class="resume-item">
              <span class="resume-key">方向</span>
              <span>AI UX、流式交互、RAG/Agent 产品化、工程化与可观测性</span>
            </div>
            <div class="resume-item">
              <span class="resume-key">联系</span>
              <a href="mailto:v-jiaodi@microsoft.com">v-jiaodi@microsoft.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Jiaodi — 关于', description: '关于 Jiaodi — 前端 × AI 产品体验' })

const focuses = [
  'AI UX：流式输出、不确定性表达、引用溯源',
  'RAG 产品化：可信回答、可控输出、反馈闭环',
  'Agent 工具调用与可观测性',
  'Vue 工程化：性能、组件设计、架构',
  'AI 功能的失败设计与韧性',
]

const skills = [
  { name: 'Frontend', items: ['Vue', 'Nuxt', 'TypeScript', 'Vite'] },
  { name: 'AI', items: ['LLM API', 'RAG', 'Embeddings', 'Agent tool-use'] },
  { name: 'Backend', items: ['Node.js', 'API design'] },
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
  margin-bottom: var(--space-4);
}

.about-tagline {
  font-size: var(--text-2xl);
  font-weight: 700;
  line-height: 1.3;
}

.about-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  max-width: 720px;
}

.section-label {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.about-bio {
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.8;
}

.focus-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.focus-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.focus-list li::before {
  content: '→';
  color: var(--color-primary-light);
  flex-shrink: 0;
  margin-top: 1px;
}

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skill-group {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.skill-group-name {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--text-secondary);
  min-width: 80px;
  padding-top: 3px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.resume-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.resume-item {
  display: flex;
  gap: var(--space-4);
  font-size: var(--text-sm);
}

.resume-key {
  font-weight: 700;
  color: var(--text-secondary);
  min-width: 40px;
  flex-shrink: 0;
}
</style>
