<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Header/>
    <!--    <Main-->
    <!--      :categories ="categoriesLoaded"-->
    <!--      :products="productsLoaded"/>-->
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
// import Main from "@/components/content/Content.vue"
import sidebar from '@/components/content/Sidebar.vue'
import filters from '@/components/content/Filters.vue'
import catalogItem from '@/components/content/CatalogItem.vue'

export default {
  components: {
    Header,
    // Main,
    sidebar,
    filters,
    catalogItem
  },
  async mounted() {
    await this.$store.dispatch('getProducts')
    await this.$store.dispatch('getCategories')
  },
  computed: {
    getTest() {
      console.log('computed getTest')
      return this.$store.state.test
    },
    categoriesLoaded() {
      console.log('computed categoriesLoaded')
      return this.$store.getters.getCategoriesLoaded
    },
    productsLoaded() {
      console.log('computed productsLoaded')
      return this.$store.getters.getProductsLoaded
    }
  },
}
</script>

<style>

</style>
