<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <app-header
    :logoSrc="
      'http://images.repzio.com/productimages/' +
      data.ManufacturerID +
      '/logo' +
      data.ManufacturerID +
      '_lg.jpg'
    "
    :companyName="data.CompanyName"
    :repFirst="data.SalesRep.FirstName"
    :repLast="data.SalesRep.LastName"
    :repEmail="data.SalesRep.EmailAddress"
  >
  </app-header>
  <main class="app-main">
    <page-title :pageTitle="data.CompanyName"></page-title>
    <router-view />
  </main>
  <app-footer
    :logoSrc="
      'http://images.repzio.com/productimages/' +
      data.ManufacturerID +
      '/logo' +
      data.ManufacturerID +
      '_lg.jpg'
    "
    :companyName="data.CompanyName"
    :repFirst="data.SalesRep.FirstName"
    :repLast="data.SalesRep.LastName"
    :repEmail="data.SalesRep.EmailAddress"
  >
  </app-footer>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'
import AppHeader from '@/components/AppHeader.vue'
import PageTitle from '@/components/PageTitle.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    PageTitle,
    AppFooter
  },
  data: function () {
    return {
      data: json
    }
  }
}
</script>
<style lang="scss">
:root {
  --dark: #121314;
  --light: #fefefe;
  --accent: #fbc22a;
  --link: rgb(36, 36, 167);
}
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem;
  margin: 0;
  background-color: var(--light);
  color: var(--dark);
}
a {
  color: var(--link);
}
.app-main {
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 4rem 2rem;
}
</style>
