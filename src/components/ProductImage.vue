<template>
  <div class="aspect-ratio aspect-ratio--1x1">
    <img
      class="aspect-ratio--object"
      :src="imageSource + '?width=320&height=320&quality=90'"
      :alt="imageAlt"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    imageSource: String,
    imageAlt: String
  }
}
</script>

<style scoped>
.aspect-ratio {
  height: 0;
  position: relative;
}

.aspect-ratio--1x1 {
  padding-bottom: 100%;
  background: pink;
}

.aspect-ratio--object {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 10; */
}
</style>
