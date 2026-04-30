<template>
  <div class="site-wrapper">
    <AppHeader />
    <main class="site-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-main {
  flex: 1;
}
</style>
