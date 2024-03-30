<template>
  <div>
    <Html lang="ja" />
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
// definePageMeta({
//   pageTransition: false
// })

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 practice` : "Nuxt 3 practice";
  },
});
</script>

<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>
