<template>
  <ul class="grid">
    <li
      v-for="(item, index) in data.items"
      :key="item.ItemID"
      :class="{ odd: index % 2 !== 0, even: index % 2 === 0 }"
    >
      <img
        :src="item.PhotoName + '?width=600&quality=50'"
        :alt="item.Description"
      />
      <h2>{{ item.ItemName }}</h2>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/test.json'

export default {
  name: 'Home',
  data: function () {
    return {
      data: json
    }
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
  grid-gap: 6rem;
  row-gap: 3rem;
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
  /* border: 1px solid black; */
  text-align: center;
}
.grid h2 {
  font-size: 1rem;
  background-color: var(--accent);
  padding: 1rem;
}

/* this can be removed —  I think it makes it a bit more dynamic */
@media screen and (min-width: 600px) {
  .odd {
    margin-top: 6rem;
  }
}
</style>
