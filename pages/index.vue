<template>
  <div>
      <h1>Main page</h1>
      <div>
        <img src="/icon.png" alt="Nuxt3 icon" />
      </div>
      <button @click="handleClick">Coupon get</button>
      <LazyCoupon v-if="show" />
  </div>
</template>

<script setup>
const show = ref(false)

const handleClick = () => {
  show.value = true
}
</script>
