<template>
  <div>
      <h1>Main page</h1>
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
