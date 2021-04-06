<template>
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
    <page-header
      :page-title="data.CompanyName"
      :page-message="data.Message"
    ></page-header>
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
import PageHeader from '@/components/PageHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    PageHeader,
    AppFooter
  },
  data: function () {
    return {
      data: json
    }
  }
}
</script>
<style>
:root {
  --dark: #121314;
  --light: #fefefe;
  --gray: #7a7a7a;
  --gray-light: #ececec;
  --accent: #fbc22a;
  --link: #2424a7;
  --link-hover: #3535d4;
  --error: #ad1414;
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
  font-size: 16px;
}
a {
  color: var(--link);
  text-decoration: none;
  transition: opacity 0.2s ease-in;
}
a:hover {
  opacity: 0.7;
}
.app-main {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
}
@media screen and (min-width: 600px) {
  .app-main {
    padding: 3rem 4rem 2rem;
  }
}
</style>
