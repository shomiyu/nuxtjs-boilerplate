<template>
  <div>
    <h1 class="title">Hello Nuxt.js!</h1>
  </div>
</template>

<script>
export default {
  // async asyncData({ $microcms }) {
  //   const faq = await $microcms.get({
  //     endpoint: 'faq',
  //   })
  //   const blog = await $microcms.get({
  //     endpoint: 'blog',
  //   })
  //   return {
  //     faq,
  //     blog,
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.title {
  color: $text-color-primary;
  text-align: center;
}
</style>
