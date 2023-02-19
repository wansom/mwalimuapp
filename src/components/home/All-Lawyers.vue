<template>
  <div>
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad" id="all-lawyers">
      <div class="container-fluid">
        <div class="row">
          <filters></filters>
          <div class="col-lg-9 order-1 order-lg-2">
            <div class="product-show-option">
              <div class="row">
                <div class="col-lg-7 col-md-7">
                  <div class="select-option">
                    <a-select
                    placeholder="Sort By..."
                      style="width: 250px"
                      @change="handleChange"
                      class="sorting"
                    >

                      <a-select-option value="jack">
                        Years of Experience
                      </a-select-option>
                      <a-select-option value="lucy"> Gender </a-select-option>
                    </a-select>

                  </div>
                </div>
                <div class="col-lg-5 col-md-5 text-right">
                  <p>Show 01- 09 Of 36 Advocates</p>
                </div>
              </div>
            </div>
            <!-- <div class="product-list">
              <div class="row">
                <div class="col-lg-12 col-sm-12" v-for="advocate of advocates" :key="advocate">
                  <card-info :advocate="item"></card-info>
                </div>
              </div>
            </div> -->
            <a-list
                        item-layout="vertical"
                        size="large"
                        :pagination="pagination"
                        :data-source="advocates"
                       
                      >
                        <a-list-item
                          slot="renderItem"
                          key="item.title"
                          slot-scope="item"
                         
                        >
                          <card-info :advocate="item"></card-info>
                        </a-list-item>
                      </a-list>
            <!-- <div class="loading-more">
              <i class="icon_loading"></i>
              <a href="#"> Loading More </a>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
  </div>
</template>

<script>
import Filters from "../../components/Widgets/Filters.vue";
import CardProfile from '../Cards/CardProfile.vue';
import CardInfo from "../../components/Cards/CardInfo.vue";
export default {
  props:["advocates"],
  components: { Filters, CardProfile,CardInfo },
  data(){
    return{
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
    }
  }
};
</script>

<style></style>
