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
      :productID="getItem.ProductID"
      :quantityAvailable="getItem.OnHandQuantity"
    ></product-info>
    <pagination :paginationLinks="getAllIds"></pagination>
  </article>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'
import ProductImage from '../components/ProductImage.vue'
import ProductInfo from '../components/ProductInfo.vue'
import Pagination from '../components/Pagination.vue'

export default {
  name: 'Product',
  props: {
    id: String
  },
  components: {
    ProductImage,
    ProductInfo,
    Pagination
  },
  data: function () {
    return {
      data: []
    }
  },
  computed: {
    getItem() {
      return this.data.items.find(item => item.ProductID === Number(this.id))
    },
    getAllIds() {
      const ids = []
      for (let i = 0; i < this.data.items.length; i++) {
        ids.push(this.data.items[i].ProductID)
      }
      return ids
    }
  },
  // created hook worked instead of mounted??
  created() {
    this.data = json
  }
}
</script>

<style scoped>
@media screen and (min-width: 900px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 3rem;
    grid-gap: 2rem;
  }
  .pagination {
    display: flex;
    flex-flow: column;
  }
  .pagination-link {
    width: calc(100% - 0.5rem);
  }
}
</style>
