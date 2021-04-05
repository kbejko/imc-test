<template>
  <article class="grid">
    <product-image
      :imageSource="getItem.PhotoName"
      :imageAlt="getItem.Description"
    ></product-image>
    <product-info
      :productName="getItem.ItemName"
      :basePrice="getItem.BasePrice"
      :description="getItem.Description"
      :dimensions="getItem.Dimensions"
      :productID="getItem.ItemID"
      :quantityAvailable="getItem.OnHandQuantity"
    ></product-info>
  </article>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'
import ProductImage from '../components/ProductImage.vue'
import ProductInfo from '../components/ProductInfo.vue'

export default {
  name: 'Product',
  props: {
    id: Number
  },
  components: {
    ProductImage,
    ProductInfo
  },
  data: function () {
    return {
      data: []
    }
  },
  computed: {
    getItem() {
      return this.data.items.find(item => item.ProductID === Number(this.id))
    }
  },
  // created hook worked instead of mounted
  created() {
    this.data = json
  }
}
</script>

<style scoped>
.grid h2 {
  font-size: 1rem;
  background-color: var(--accent);
  padding: 1rem;
}

@media screen and (min-width: 900px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}
</style>
