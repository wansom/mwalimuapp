<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Know Your Courts</h2>
                    </div>
                </div>
            </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="product-large set-bg">
            <h2>Top Courts</h2>
            <a href="#all-lawyers">Discover More</a>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1">
         
          <a-tabs default-active-key="1" :tab-position="tabPosition" class="filter-control">
      <a-tab-pane key="1" tab="Federal Courts">
        <carousel :autoplay="true" :nav="false">
           <div v-for="advocate of list" :key="advocate" style="display:flex; gap:40px">
         <card-profile></card-profile>
          </div>
          </carousel>
      </a-tab-pane>
      <a-tab-pane key="2" tab="State Courts">
        <carousel :autoplay="true" :nav="false">
           <div v-for="advocate of list" :key="advocate" style="display:flex; gap:40px">
         <card-profile></card-profile>
          </div>
          </carousel>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tribunals">
        <carousel :autoplay="true" :nav="false">
           <div v-for="advocate of list" :key="advocate" style="display:flex; gap:40px">
         <card-profile></card-profile>
          </div>
          </carousel>
      </a-tab-pane>
    </a-tabs>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState } from "vuex";
import CardProfile from "../Cards/CardProfile.vue";
export default {
  props: ["advocates"],
  data(){
    return{
      list:[1,2,3,4,5]
    }
  },
  components: { carousel, CardProfile },
  computed: {
    ...mapState(["practiseAreas"]),
  },
};
</script>

<style></style>
