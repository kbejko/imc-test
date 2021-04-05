<template>
  <div class="aspect-ratio aspect-ratio--sq">
    <img
      class="aspect-ratio--object"
      :src="imageSource + '?width=600&height=600&quality=90'"
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

.aspect-ratio--sq {
  padding-bottom: 100%;
  background: rgb(235, 235, 235);
}

.aspect-ratio--object {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
}
</style>
