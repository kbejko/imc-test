<template>
  <h1 class="page-title">{{ pageTitle }}</h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    pageTitle: String
  }
}
</script>

<style scoped>
.page-title {
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
