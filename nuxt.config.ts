// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/style.css'],
  app: {
    head: {
      title: 'Nuxt 3 practice',
      meta: [{name: 'description', content: 'Nuxt 3 for beginners'}],
      link: [{rel: 'icon', href: '/favicon.ico'}]
    }
  }
})
