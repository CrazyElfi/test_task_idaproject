<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <nuxt-link class="logo-link" to="/">TestList</nuxt-link>
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link"
                         :title="link.title"
                         :to="link.url">
                <img class="navbar-img" src="~/assets/images/cart.svg">
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Cart', url: '/cart'},
      ]
    }
  }
}
</script>

<style>
@import "assets/css/navbar.css";

</style>
