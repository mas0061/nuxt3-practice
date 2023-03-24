<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>&nbsp;
    <NuxtLink to="/about">About</NuxtLink>&nbsp;
    <NuxtLink :to="{ name: 'users-list' }">User list</NuxtLink>&nbsp;
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>&nbsp;
    <NuxtLink to="/posts">Post List</NuxtLink>
  </nav>
</template>
