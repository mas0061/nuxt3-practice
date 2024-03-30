export default defineNuxtRouteMiddleware((to, from) => {
  console.debug("from", from);
  console.debug("to", to);
  // if (from.fullPath === '/') {
  // return navigateTo('/')
  //   return abortNavigation()
  // }
});
