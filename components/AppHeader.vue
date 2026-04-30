<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <!-- Branding -->
      <NuxtLink :to="`/${locale}`" class="brand">
        <span class="brand-name gradient-text">Jiaodi</span>
        <span class="brand-dot">.</span>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="nav" :class="{ open: menuOpen }">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <!-- Language switch -->
        <div class="lang-switch">
          <NuxtLink :to="switchLocalePath('zh')" class="lang-btn" :class="{ active: locale === 'zh' }">
            中文
          </NuxtLink>
          <span class="lang-divider">|</span>
          <NuxtLink :to="switchLocalePath('en')" class="lang-btn" :class="{ active: locale === 'en' }">
            EN
          </NuxtLink>
        </div>

        <!-- GitHub -->
        <a
          href="https://github.com/v-jiaodi"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <!-- Email -->
        <a href="mailto:v-jiaodi@microsoft.com" class="icon-link" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        <!-- Mobile menu toggle -->
        <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

// Detect locale from path
const locale = computed(() => {
  if (route.path.startsWith('/en')) return 'en'
  return 'zh'
})

// Navigation items
const navItems = computed(() => {
  if (locale.value === 'zh') {
    return [
      { to: '/zh', label: '首页' },
      { to: '/zh/projects', label: '项目' },
      { to: '/zh/writing', label: '写作' },
      { to: '/zh/about', label: '关于' },
      { to: '/zh/contact', label: '联系' },
    ]
  }
  return [
    { to: '/en', label: 'Home' },
    { to: '/en/projects', label: 'Projects' },
    { to: '/en/writing', label: 'Writing' },
    { to: '/en/about', label: 'About' },
    { to: '/en/contact', label: 'Contact' },
  ]
})

// Language switch paths
function switchLocalePath(targetLocale: string) {
  const currentPath = route.path
  if (currentPath.startsWith('/zh')) {
    return targetLocale === 'en' ? currentPath.replace(/^\/zh/, '/en') : currentPath
  }
  if (currentPath.startsWith('/en')) {
    return targetLocale === 'zh' ? currentPath.replace(/^\/en/, '/zh') : currentPath
  }
  return `/${targetLocale}`
}

// Scrolled state for header styling
const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  transition: background var(--transition-base), backdrop-filter var(--transition-base),
    border-color var(--transition-base);
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(11, 16, 32, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border-subtle);
}

.header-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: var(--space-8);
}

/* Brand */
.brand {
  display: flex;
  align-items: baseline;
  gap: 1px;
  text-decoration: none;
  font-size: var(--text-xl);
  font-weight: 700;
  flex-shrink: 0;
}

.brand-dot {
  color: var(--color-primary);
  font-size: var(--text-2xl);
  line-height: 1;
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1;
}

.nav-link {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--text-primary);
  background: var(--bg-surface);
}

.nav-link.router-link-exact-active {
  color: var(--color-primary-light);
}

/* Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: auto;
}

/* Language switch */
.lang-switch {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.lang-btn {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color var(--transition-fast);
}

.lang-btn:hover,
.lang-btn.active {
  color: var(--color-primary-light);
}

.lang-divider {
  color: var(--border-card);
  font-size: var(--text-xs);
}

/* Icon links */
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
}

.icon-link:hover {
  color: var(--text-primary);
  background: var(--bg-surface);
}

/* Mobile menu toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.bar {
  width: 100%;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform-origin: center;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-base);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
    padding: var(--space-6);
    border-top: 1px solid var(--border-subtle);
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    font-size: var(--text-lg);
    width: 100%;
    padding: var(--space-3) var(--space-4);
  }

  .menu-toggle {
    display: flex;
  }

  /* Hamburger → X animation */
  .menu-toggle .bar:nth-child(1).open {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-toggle .bar:nth-child(2).open {
    opacity: 0;
    transform: scaleX(0);
  }

  .menu-toggle .bar:nth-child(3).open {
    transform: translateY(-7px) rotate(-45deg);
  }
}

@media (max-width: 400px) {
  .icon-link {
    display: none;
  }
}
</style>
