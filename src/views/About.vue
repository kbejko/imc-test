<template>
  <div class="about">
    <h1>{{ getItem.ItemName }}</h1>
  </div>
  <product-image
    :imageSource="getItem.PhotoName"
    :imageAlt="getItem.Description"
  ></product-image>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'
import ProductImage from '@/components/ProductImage.vue'

export default {
  name: 'About',
  props: {
    id: Number
  },
  components: {
    ProductImage
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
