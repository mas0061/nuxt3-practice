<script setup>
const {
  data: posts,
  error,
  refresh,
  pending,
} = await useLazyFetch("https://jsonplaceholder.typicode.com/posts/");
console.log(useNuxtApp().payload.data);
console.log("error", error.value);
</script>

<template>
  <div>
    <h1>Post一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.userId">{{ post.title }}</li>
    </ul>
  </div>
</template>
