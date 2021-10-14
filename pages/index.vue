<template>
  <div>
    <h1 class="title">Hello Nuxt.js!</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  color: $text-color-primary;
  text-align: center;
}
</style>
