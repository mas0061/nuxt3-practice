<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <button @click="clearError({ redirect: '/' })">Clear error</button>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
const props = defineProps({
  error: Object,
});
</script>
