<template>
  <header class="app-header">
    <a href="/" class="logo">
      <img :src="logoSrc + '?width=80'" alt="manufacturer logo" />
    </a>
    <p>
      Contact {{ repFirst }} {{ repLast }}
      <a href="'mailto:' + repEmail">{{ repEmail }}</a>
    </p>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    logoSrc: String,
    repFirst: String,
    repLast: String,
    repEmail: String
  }
}
</script>

<style scoped>
.app-header {
  padding: 0 2rem;
  border-top: 2px solid var(--dark);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin-right: 1rem;
}
.app-header p a {
  text-decoration: none;
  font-weight: bold;
}
</style>
