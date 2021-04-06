<template>
  <p v-if="loading">Loading...</p>
  <ul class="grid" v-else>
    <li v-for="item in data.items" :key="item.ProductID" class="grid-item">
      <router-link
        class="grid-item--link"
        :to="{ name: 'Product', params: { id: item.ProductID } }"
      >
        <product-image
          :imageSource="item.PhotoName"
          :imageAlt="item.Description"
        ></product-image>

        <product-info
          :productName="item.ItemName"
          :basePrice="item.BasePrice"
        ></product-info>
      </router-link>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'
import ProductImage from '@/components/ProductImage.vue'
import ProductInfo from '../components/ProductInfo.vue'

export default {
  name: 'Home',
  components: {
    ProductImage,
    ProductInfo
  },
  data: function () {
    return {
      loading: true,
      data: []
    }
  },
  mounted() {
    this.data = json
    setTimeout(() => {
      this.loading = false
    }, 300)
  }
  // created() {
  //   fetch('/test.json')
  //     .then(response => response.json())
  //     .then(data => (this.data = data))
  // }
}
</script>

<style scoped>
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
}
.grid-item {
  width: 50%;
  margin: 0 auto;
}
.grid-item--link:hover {
  opacity: 0.1;
  transition: opacity 0.3s ease-in-out;
}
@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    row-gap: 3rem;
  }
  .grid-item {
    width: 100%;
    margin: auto;
  }
}
</style>
