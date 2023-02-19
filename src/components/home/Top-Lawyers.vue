<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <div class="product-large set-bg">
            <h2>Top Lawyers</h2>
            <a href="#all-lawyers">Discover More</a>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1">
          <div class="filter-control">
            <ul>
              <li class="active">{{ practiseAreas[0] }} Law</li>
              <li v-for="area of practiseAreas.slice(8)" :key="area">
                {{ area }} Law
              </li>
            </ul>
          </div>

          <carousel :autoplay="true" :nav="false" class="product-slider">
          <card-profile></card-profile>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState } from "vuex";
import CardProfile from '../Cards/CardProfile.vue';
export default {
  components: { carousel,CardProfile },
  computed: {
    ...mapState(["practiseAreas"]),
  },
};
</script>

<style></style>
