<template>
  <div>
    <h1 v-text="error.statusCode" />
    <p v-text="error.message" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
