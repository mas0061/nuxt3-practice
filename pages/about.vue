<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const route = useRoute()

const enableCustomLayout = () => {
  route.meta.layout = 'custom'
}
</script>
