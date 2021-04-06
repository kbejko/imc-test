<template>
  <div class="aspect-ratio aspect-ratio--sq">
    <img
      class="aspect-ratio--object"
      :src="imageSource + '?width=600&height=600&quality=80'"
      :alt="imageAlt"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
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
  background: var(--gray-light);
  border-radius: 4px;
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
