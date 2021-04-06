<template>
  <section class="pagination">
    <router-link :to="{ name: 'Home' }" class="pagination-link"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-home"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" /></svg
    ></router-link>
    <router-link
      v-for="(link, i) in paginationLinks"
      class="pagination-link"
      :key="link"
      :to="{ name: 'Product', params: { id: link } }"
      >{{ i + 1 }}</router-link
    >
  </section>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    paginationLinks: Array
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 4rem 0;
}
.pagination-link {
  padding: 0.5rem;
  margin: 0.25rem;
  border: 1px solid var(--accent);
  border-radius: 2px;
  text-align: center;
  min-width: 2rem;
}
.router-link-active {
  color: var(--dark);
  background: var(--accent);
}
@media screen and (min-width: 900px) {
  .pagination {
    display: flex;
    flex-flow: column;
    margin: 0;
  }
  .pagination-link {
    width: calc(100% - 0.5rem);
  }
}
</style>
