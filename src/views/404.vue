<template>
  <section class="page-404">
    <h2>Page not found</h2>
    <router-link :to="{ name: 'Home' }">home</router-link>
  </section>
</template>

<style scoped lang="scss">
.page-404 {
  text-align: center;
  text-transform: uppercase;
  a {
    font-weight: bold;
    font-size: 1.25rem;
  }
}
</style>
