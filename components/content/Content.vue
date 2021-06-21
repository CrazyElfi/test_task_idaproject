<template>
  <div class="container">
    <sidebar :categories="categoriesLoaded"/>
    <div class="catalog-list">
      <filters/>
      <div class="items-wrapper">
        <catalogItem
          :products="productsLoaded"/>
      </div>

    </div>
  </div>
</template>

<script>
import sidebar from '@/components/content/Sidebar.vue'
import filters from '@/components/content/Filters.vue'
import catalogItem from '@/components/content/CatalogItem.vue'

export default {
  name: "Content",
  components: {
    sidebar,
    filters,
    catalogItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
  },
  computed: {
    categoriesLoaded() {
      console.log('2')
      return this.$store.getters.getCategoriesLoaded
    },
    productsLoaded() {
      return this.$store.getters.getProductsLoaded
    }
  }
}
</script>


