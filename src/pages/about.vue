<template>
  <div>
    <Head>
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
    <button @click="enableCustomLayout">Update layout</button>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="counter++">+</button></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log('to', to);
    console.log('from', from);
  }),
  pageTransition: false,
});

const route = useRoute();

const enableCustomLayout = () => {
  route.meta.layout = 'custom';
};

const counter = useCount();

// const title = ref('Aboutページ')
// const description = ref('Aboutページ')
// useHead({
//   title,
//   meta: [{
//     name: 'description',
//     content: description
//   }]
// })
</script>
