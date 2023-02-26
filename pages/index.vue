<template>
  <div>
      <Html lang="ja">
        <Head>
          <Title>indexページ</Title>
          <Meta name="description" content="indexページ" />
        </Head>
      </Html>
      <h1>Main page</h1>
      <h2>{{ $hello('Wolrd') }}</h2>
      <div>
        <img src="/icon.png" alt="Nuxt3 icon" />
      </div>
      <div>
        <button @click="handleClick">Coupon get</button>
        <LazyCoupon v-if="show" />
      </div>
      <div>
        <div>Count: {{  count }}</div>
        <button @click="() => inc()">increase</button>
        <button @click="() => dec()">decrease</button>
      </div>
  </div>
</template>

<script setup>
const { $hello } = useNuxtApp()
const show = ref(false)

const handleClick = () => {
  show.value = true
}

const { count, inc, dec } = useCounter(100)
</script>
