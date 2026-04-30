<template>
  <div class="page-container">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">写作</h1>
        <p class="page-subtitle">技术笔记、AI UX 思考与构建日志</p>
      </div>

      <div v-if="posts && posts.length > 0" class="writing-grid">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="writing-card card"
        >
          <div class="card-meta">
            <span class="tag">{{ post.category || 'Engineering' }}</span>
            <time class="card-date">{{ formatDate(post.date) }}</time>
          </div>
          <h2 class="card-title">{{ post.title }}</h2>
          <p class="card-desc">{{ post.description }}</p>
          <div class="card-tags">
            <span v-for="t in (post.tags || [])" :key="t" class="tag">{{ t }}</span>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="empty-state">
        <p>第一篇文章即将发布。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Jiaodi — 写作', description: '技术笔记、AI UX 思考与构建日志' })

const { data: posts } = await useAsyncData('zh-writing', () =>
  queryContent('/zh/writing').sort({ date: -1 }).find()
)

function formatDate(date?: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>

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

.writing-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.writing-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-decoration: none;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.card-date {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.writing-card:hover .card-title {
  color: var(--color-primary-light);
}

.card-desc {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.empty-state {
  text-align: center;
  padding: var(--space-24) 0;
  color: var(--text-secondary);
  font-size: var(--text-lg);
  border: 1px dashed var(--border-subtle);
  border-radius: var(--radius-lg);
}
</style>
