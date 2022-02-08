<template>
  <div class="wrapper">
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  overflow-x: hidden;
}
</style>
