<template>
  <div class="product-info">
    <section class="product-info--main">
      <h2 class="product-info--title">{{ productName }}</h2>
      <h6 class="product-info--header">Base Price</h6>
      <h3 class="product-info--data">${{ basePrice.toFixed() }}</h3>
      <p class="product-info--text">{{ description }}</p>
    </section>
    <section
      class="product-info--additional"
      v-if="dimensions || productId || quantityAvailable"
    >
      <h5 v-if="dimensions">Additional Information</h5>
      <div class="product-info--additional-data">
        <div>
          <h6 class="product-info--header">Dimensions</h6>
          <h3 class="product-info--data">{{ dimensions }}</h3>
        </div>
        <div>
          <h6 class="product-info--header">Product ID</h6>
          <h3 class="product-info--data">{{ productId }}</h3>
        </div>
        <div>
          <h6 class="product-info--header">In stock</h6>
          <h3
            class="product-info--data"
            :class="{ negative: quantityAvailable < 0 }"
          >
            <span v-if="quantityAvailable < 0">No</span
            ><span v-else>{{ quantityAvailable }}</span>
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    productName: String,
    basePrice: Number,
    description: String,
    dimensions: String,
    productId: Number,
    quantityAvailable: Number
  }
}
</script>

<style lang="scss" scoped>
.product-info {
  h2 {
    font-size: 1.25rem;
  }
  h2,
  h3,
  h6 {
    line-height: 1.25;
    font-weight: 500;
  }
  h3,
  h5 {
    font-size: 1rem;
    margin: 0.25rem 0 1rem;
  }
  h6 {
    margin: 0;
    font-size: 0.75rem;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  &--main {
    color: var(--dark);
  }
  &--info-text {
    margin-top: 2rem;
  }
  &--additional {
    margin-top: 3rem;
  }
  &--additional-data {
    display: flex;
    flex-wrap: wrap;
    div {
      margin-right: 1.5rem;
    }
  }
  .negative {
    color: var(--error);
  }
}
</style>
