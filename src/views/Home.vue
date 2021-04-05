<template>
  <ul class="grid">
    <li
      v-for="(item, index) in data.items"
      :key="item.ProductID"
      :class="{ odd: index % 2 !== 0, even: index % 2 === 0 }"
    >
      <router-link :to="{ name: 'Product', params: { id: item.ProductID } }">
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
      data: []
    }
  },
  mounted() {
    this.data = json
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  row-gap: 3rem;
  grid-auto-flow: dense;
  /* add to align item on each grid row to the bottom */
  /* align-items: end; */

  list-style: none;
  margin: 0;
  padding: 0;
}
.grid li {
  display: flex;
  flex-flow: column;
  justify-content: center;
}
</style>
