<template>
  <div>
    <h1>User listページ</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ users.name }}</li>
    </ul>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>

<script setup>
const counter = ref(0);
const inc = () => {
  throw createError({
    statusCode: '400',
    statusMessage: 'Bad Request',
    message: 'エラー発生',
    fatal: true,
  });
  // counter.value++;
};

const { data: users } = await useFetch(
  'https://jsonplaceholder.typicode.com/user/'
);
console.log('process');

if (!users.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  });
}
</script>
