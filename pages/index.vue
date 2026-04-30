<script setup lang="ts">
// Redirect root to /zh
const router = useRouter()
await navigateTo('/zh', { replace: true })
</script>
