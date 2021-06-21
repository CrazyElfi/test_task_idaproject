import axios from "axios";

export const state =() =>({
  categoriesLoaded: [],
  productsLoaded: [],
})

export const mutations = {
  setCategories (state, categories) {
    state.categoriesLoaded = categories
  },
  setProducts (state, products) {
    // console.log('setProducts',products)
    state.productsLoaded = products
  },
}

export const actions = {
  async getProducts ({commit}, payload) {
    const result = await axios.get('https://frontend-test.idaproject.com/api/product?category=1')
        const productsArray = []
        for( let key in result.data) {
          productsArray.push( {...result.data[key], id: key  })
        }
        commit('setProducts', productsArray)
  },
  async getCategories ({commit}, payload) {
      const result = await axios.get('https://frontend-test.idaproject.com/api/product-category')

      const categoriesArray = []
      for( let key in result.data) {
        categoriesArray.push( {...result.data[key], id: key })
      }
      commit('setCategories', categoriesArray)
  },

}

export const getters = {
  getCategoriesLoaded (state) {
    return state.categoriesLoaded
  },
  getProductsLoaded (state) {
    return state.productsLoaded
  },
  getTest (state) {
    return state.test
  }
}

// export default {
//   state,
//   mutations,
//   actions,
//   getters
// }
