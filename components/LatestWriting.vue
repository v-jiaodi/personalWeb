<template>
  <section class="section">
    <div class="container">
      <div class="writing-header">
        <div>
          <h2 class="section-title">{{ isZh ? '最近写作' : 'Latest writing' }}</h2>
          <p class="section-subtitle">{{ isZh ? '技术笔记与 AI 产品思考' : 'Technical notes and AI product thinking' }}</p>
        </div>
        <NuxtLink :to="`/${locale}/writing`" class="btn btn-secondary view-all">
          {{ isZh ? '查看全部' : 'View all' }}
        </NuxtLink>
      </div>

      <div v-if="posts && posts.length > 0" class="writing-list">
        <NuxtLink
          v-for="post in posts.slice(0, 3)"
          :key="post._path"
          :to="post._path"
          class="writing-item card"
        >
          <div class="writing-meta">
            <span class="tag">{{ post.category || 'Engineering' }}</span>
            <span class="writing-date">{{ formatDate(post.date) }}</span>
          </div>
          <h3 class="writing-title">{{ post.title }}</h3>
          <p class="writing-excerpt">{{ post.description }}</p>
        </NuxtLink>
      </div>

      <div v-else class="writing-empty">
        <p>{{ isZh ? '第一篇文章即将发布。' : 'First post coming soon.' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ locale: 'zh' | 'en' }>()
const isZh = computed(() => props.locale === 'zh')

const { data: posts } = await useAsyncData(
  `latest-writing-${props.locale}`,
  () =>
    queryContent(`/${props.locale}/writing`)
      .sort({ date: -1 })
      .limit(3)
      .find()
)

function formatDate(date?: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(props.locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<style scoped>
.writing-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.writing-header .section-title,
.writing-header .section-subtitle {
  margin-bottom: var(--space-1);
}

.view-all {
  flex-shrink: 0;
}

.writing-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.writing-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-decoration: none;
}

.writing-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.writing-date {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.writing-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.writing-item:hover .writing-title {
  color: var(--color-primary-light);
}

.writing-excerpt {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

.writing-empty {
  text-align: center;
  padding: var(--space-16) 0;
  color: var(--text-secondary);
  font-size: var(--text-lg);
  border: 1px dashed var(--border-subtle);
  border-radius: var(--radius-lg);
}
</style>
