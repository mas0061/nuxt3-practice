export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    console.log('page:start');
  });
  nuxtApp.hook('vue:error', (err, target, info) => {
    console.log('err', err);
    console.log('target', target);
    console.log('info', info);
  });
});
