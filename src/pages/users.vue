<template>
  <div>
    <h1>Usersページ</h1>
    <p>Count: {{ counter }}</p>
    <!-- <NuxtErrorBoundary @error="someErrorLogger"> -->
    <NuxtPage />
    <!-- <template #error="{ error }">
        <p>{{ error }}</p>
        <button @click="resetError(error)">Clear error</button>
      </template>
    </NuxtErrorBoundary> -->
  </div>
</template>

<script setup>
const counter = useCount();
// const resetError = (error) => {
//   error.value = null;
// };

// const someErrorLogger = (error) => {
//   console.log('someErrorLogger', error);
// };
</script>
