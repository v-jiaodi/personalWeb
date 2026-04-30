<template>
  <div class="page-container">
    <div class="container">
      <article v-if="post" class="article">
        <header class="article-header">
          <div class="article-meta">
            <span class="tag">{{ post.category || 'Engineering' }}</span>
            <time class="article-date">{{ formatDate(post.date) }}</time>
          </div>
          <h1 class="article-title">{{ post.title }}</h1>
          <p class="article-desc">{{ post.description }}</p>
          <div class="article-tags">
            <span v-for="t in (post.tags || [])" :key="t" class="tag">{{ t }}</span>
          </div>
        </header>

        <div class="prose article-body">
          <ContentRenderer :value="post" />
        </div>

        <footer class="article-footer">
          <NuxtLink to="/zh/writing" class="btn btn-secondary">← 返回写作列表</NuxtLink>
        </footer>
      </article>

      <div v-else class="not-found">
        <p>文章未找到。</p>
        <NuxtLink to="/zh/writing" class="btn btn-primary">返回写作列表</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`zh-post-${route.params.slug}`, () =>
  queryContent(`/zh/writing/${route.params.slug}`).findOne()
)

useSeoMeta({
  title: computed(() => post.value?.title ? `Jiaodi — ${post.value.title}` : 'Jiaodi — 文章'),
  description: computed(() => post.value?.description || ''),
})

function formatDate(date?: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>

.article-header {
  margin-bottom: var(--space-12);
  max-width: 72ch;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.article-date {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.article-title {
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
}

.article-desc {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-5);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.article-body {
  margin-bottom: var(--space-16);
}

.article-footer {
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-subtle);
}

.not-found {
  text-align: center;
  padding: var(--space-24) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  color: var(--text-secondary);
}
</style>
