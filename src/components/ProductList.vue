<template>
  <div>
    <article id="site-modal" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <img
            data-dismiss="modal"
            class="img-fluid"
            :src="modalPhoto"
            alt="Large Res Product Photo"
          >
        </div>
      </div>
    </article>
    <transition-group
      name="fade"
      tag="div"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        class="row d-flex mb-3 align-items-center"
        v-for="(item, index) in products"
        :key="item.id"
        :data-index="index"
      >
        <div class="col-1 m-auto">
          <button class="btn btn-info" @click="$parent.$emit('add', item)">+</button>
        </div>
        <div class="col-2">
          <img
            data-toggle="modal"
            data-target="#site-modal"
            class="lowres img-fluid d-block"
            :src="item.image"
            :alt="item.name"
            @click="$parent.$emit('setCurrentPhoto', item.image)"
          >
        </div>
        <div class="col">
          <h3 class="text-info">{{ item.name }}</h3>
          <p class="mb-0">{{ item.description }}</p>
          <div class="h5 float-right">
            <price :value="Number(item.price)"></price>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: { Price },
  props: ["products", "modalPhoto"],
  methods: {
    beforeEnter: function(el) {
      el.className = "d-none";
    },
    enter: function(el) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function(el) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    }
  }
};
</script>
<style>
.lowres:hover {
  cursor: pointer;
}
</style>
