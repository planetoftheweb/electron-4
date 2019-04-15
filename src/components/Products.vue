<template>
  <div>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
    <h2 class="text-center mt-0">Shop</h2>
    <p>Share your love of technology, and spread good cheer, with BinaryVille official merchandise, including t-shirts, hats, mugs, aprons, and more.</p>
    <product-list :modalPhoto="modalPhoto" :products="products"></product-list>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "products",
  props: ["products", "cart", "cartQty", "cartTotal", "modalPhoto"],
  components: {
    Navbar,
    ProductList
  }
};
</script>
