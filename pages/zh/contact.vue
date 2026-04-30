<template>
  <div class="page-container">
    <div class="container contact-wrap">
      <div class="contact-header">
        <h1 class="page-title">联系我</h1>
        <p class="contact-sub">欢迎交流：合作、内容、技术讨论或机会邀请。</p>
      </div>

      <div class="contact-options">
        <a href="mailto:v-jiaodi@microsoft.com" class="contact-card card">
          <div class="contact-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div class="contact-info">
            <div class="contact-method">电子邮件</div>
            <div class="contact-value">v-jiaodi@microsoft.com</div>
            <div class="contact-note">我通常会在 24–48 小时内回复。</div>
          </div>
          <div class="contact-arrow">→</div>
        </a>

        <a href="https://github.com/v-jiaodi" target="_blank" rel="noopener noreferrer" class="contact-card card">
          <div class="contact-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <div class="contact-info">
            <div class="contact-method">GitHub</div>
            <div class="contact-value">github.com/v-jiaodi</div>
            <div class="contact-note">代码、项目与贡献。</div>
          </div>
          <div class="contact-arrow">→</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Jiaodi — 联系', description: '联系 Jiaodi — 合作、技术讨论或机会邀请' })
</script>

<style scoped>
.page-container {
  padding-top: calc(var(--header-height) + var(--space-16));
  padding-bottom: var(--space-24);
}

.contact-wrap {
  max-width: 640px;
}

.contact-header {
  margin-bottom: var(--space-12);
}

.page-title {
  font-size: var(--text-5xl);
  margin-bottom: var(--space-4);
}

.contact-sub {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  line-height: 1.6;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  text-decoration: none;
  cursor: pointer;
}

.contact-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-subtle);
  border-radius: var(--radius-lg);
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
}

.contact-method {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-1);
}

.contact-value {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.contact-note {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.contact-arrow {
  color: var(--text-muted);
  font-size: var(--text-lg);
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.contact-card:hover .contact-arrow {
  transform: translateX(4px);
  color: var(--color-primary-light);
}
</style>
