<template>
  <div class="page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">About</h1>
        <p class="about-tagline gradient-text">I turn AI capabilities into clear, smooth, and controllable product experiences.</p>
      </div>

      <div class="about-grid">
        <section class="about-section">
          <h2 class="section-label">Intro</h2>
          <p class="about-bio">I'm <strong>Jiaodi</strong>, working at the intersection of frontend and AI—turning LLM/RAG/agents into usable, trustworthy, and maintainable product experiences. My writing is mostly technical (~70%), with product & interaction thinking (~30%).</p>
        </section>

        <section class="about-section">
          <h2 class="section-label">What I focus on</h2>
          <ul class="focus-list">
            <li v-for="item in focuses" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="about-section">
          <h2 class="section-label">Toolbox</h2>
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
          <h2 class="section-label">Resume snapshot</h2>
          <div class="resume-items">
            <div class="resume-item">
              <span class="resume-key">Role</span>
              <span>Frontend × AI (Vue / Node.js)</span>
            </div>
            <div class="resume-item">
              <span class="resume-key">Focus</span>
              <span>AI UX, streaming interactions, RAG/agent productization, engineering & observability</span>
            </div>
            <div class="resume-item">
              <span class="resume-key">Contact</span>
              <a href="mailto:v-jiaodi@microsoft.com">v-jiaodi@microsoft.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Jiaodi — About', description: 'About Jiaodi — Frontend × AI product experiences' })

const focuses = [
  'AI UX: streaming output, uncertainty expression, citations and traceability',
  'RAG productization: trustworthy answers, controllable output, feedback loops',
  'Agent tool-use and observability',
  'Vue engineering: performance, component design, architecture',
  'Failure design and resilience for AI features',
]

const skills = [
  { name: 'Frontend', items: ['Vue', 'Nuxt', 'TypeScript', 'Vite'] },
  { name: 'AI', items: ['LLM API', 'RAG', 'Embeddings', 'Agent tool-use'] },
  { name: 'Backend', items: ['Node.js', 'API design'] },
  { name: 'Quality', items: ['Logging', 'Tracing', 'Eval', 'Monitoring'] },
]
</script>

<style scoped>

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
  min-width: 60px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .about-tagline {
    font-size: var(--text-lg);
  }

  .page-header {
    margin-bottom: var(--space-10);
  }

  .about-grid {
    gap: var(--space-8);
  }
}
</style>
