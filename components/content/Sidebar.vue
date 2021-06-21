<template>
  <div class="sidebar">
    <h3 class="title">Каталог</h3>
    <ul class="categories-list">
      <li
        class="category"
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    categories: {
      type:Array,
      required: true
    },
  },
  data() {
      return {
        // menu: [
        //   {id: 1, category: 'Рюкзаки', active: 'category-active'},
        //   {id: 2, category: 'Футболки', active: ''},
        //   {id: 3, category: 'Рубашки', active: ''},
        // ]
      }
  }
}
</script>
