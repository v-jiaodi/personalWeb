export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const STORAGE_KEY = 'spa_redirect_path'
  const redirect = sessionStorage.getItem(STORAGE_KEY)

  if (redirect) {
    sessionStorage.removeItem(STORAGE_KEY)
    // Only navigate if the path is different from the current one
    if (redirect !== window.location.pathname) {
      const router = useRouter()
      router.replace(redirect)
    }
  }
})
