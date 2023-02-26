<template>
  <p>ユーザID： {{ $route.params.id }}</p>
</template>

<script setup>
const router = useRoute()
console.log(router.params.id)

useHead({
  title: 'Nuxt 3',
  meta: [{
    name: 'description',
    content: `User Id: ${router.params.id}`
  }]
})
</script>
