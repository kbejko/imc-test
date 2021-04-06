<template>
  <section class="page-header">
    <h1>{{ pageTitle }}</h1>
    <section v-html="pageMessage"></section>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    pageTitle: String,
    pageMessage: String
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 1.75rem;
  font-weight: bold;
}
</style>
