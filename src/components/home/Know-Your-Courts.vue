<template>
  <section class="women-banner spad" id="courts">
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
            <div style="background-color:#ffffff;opacity: 0.5; height: 200px;position: absolute; top: 50px;">
            </div>
              <h2>Top Courts</h2>
              <a href="#all-lawyers">Discover More</a>
           
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1">
          <a-tabs :default-active-key="courts[0]" class="filter-control" @change="callback">
            <a-tab-pane :tab="court" v-for="court of courts" :key="court" >
              <data-table
                :tableData="selectedCourts"
              ></data-table>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardProfile from "../Cards/CardProfile.vue";
import DataTable from "../Tables/DataTable.vue";
import Pagination from "../Widgets/Pagination.vue";
export default {
  props: ["advocates"],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
      title: "courts",
      currentPage: 1,
      itemsPerPage: 4,
      visibleItems: [],
      numVisibleItems: 3,
      activeTab:""
    };
 
  },
  components: { CardProfile, Pagination, DataTable },
  computed: {
    ...mapState(["practiseAreas", "courts", "courtData"]),
    canLoadMore() {
      return this.numVisibleItems < this.practiseAreas.length;
    },
    selectedCourts(){
      return this.courtData.filter((c)=>c.type_of_court==this.activeTab)
    }
  },
  methods: {
    callback(key){
      this.activeTab=key
      let cout =this.courtData.filter((c)=>c.type_of_court==this.activeTab)
      console.log(this.activeTab,cout)
    },
    handleChange(current) {
      console.log(curr);
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
    loadMore() {
      this.numVisibleItems += 3;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.practiseAreas.slice(0, this.numVisibleItems);
    },
  },
  created() {
    this.updateVisibleItems();
    this.$store.dispatch("fetchCourts");
  },

};
</script>

<style></style>
