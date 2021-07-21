<template>
  <div>
    <h1 class="title">Hello Nuxt.js!</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "~assets/scss/settings/variables" as var;

.title {
  color: var.$base-text-color;
  text-align: center;
}
</style>
