<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <button @click="clearError({ redirect: '/' })">Clear error</button>
  </NuxtLayout>
</template>

<script setup>
// const error = useError();
defineProps({
  error: { type: Object, default: null },
});
</script>
