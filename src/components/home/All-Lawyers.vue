<template>
  <div>
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad" id="all-lawyers">
      <div class="container-fluid">
        <div class="row">
          <filters :advocates="advocates"></filters>
          <div class="col-lg-9 order-1 order-lg-2">

            <!-- <div class="product-list">
              <div class="row">
                <div class="col-lg-12 col-sm-12" v-for="advocate of advocates" :key="advocate">
                  <card-info :advocate="item"></card-info>
                </div>
              </div>
            </div> -->
            <!-- <a-list
              item-layout="horizontal"
              size="large"
              :pagination="pagination"
              :data-source="advocates"
            >
              <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                <card-info :advocate="item"></card-info>
              </a-list-item>
            </a-list> -->
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
import CardProfile from "../Cards/CardProfile.vue";
import CardInfo from "../../components/Cards/CardInfo.vue";
export default {
  props: ["advocates"],
  components: { Filters, CardProfile, CardInfo },
  data() {
    return {
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
      displayedItems:[],
      selectedPractiseArea:"",
      selectedCounty:"",
      years_of_experience:""
    };
  },
  method: {
    handleChange() {},
    filterItems(advocates,filters) {
      // Get the selected filter values
      const selectedPractiseArea = filters.selectedPractiseArea;
      const selectedCounty = filters.selectedCounty;
      const years_of_experience = filters.years_of_experience;

      // Filter the items based on the selected filter values
      let filteredItems = advocates.filter((item) => {
        let practiseAreaMatch = true;
        let countyMatch = true;
        let experienceMatch = true;

        // Check if the item matches the selected color
        if (selectedPractiseArea !== "all" && item.specialisation !== selectedPractiseArea) {
          practiseAreaMatch = false;
        }

        // Check if the item matches the selected size
        if (selectedCounty !== "all" && item.location !== selectedCounty) {
          countyMatch = false;
        }

        // Check if the item matches the selected price range
        if (years_of_experience !== "all") {
          const [minPrice, maxPrice] = years_of_experience.split("-");
          if (item.years_of_experience < minPrice || item.years_of_experience > maxPrice) {
            experienceMatch = false;
          }
        }
        // Return true only if all the filter conditions are met
      return practiseAreaMatch && countyMatch && experienceMatch;
    });

    // Update the items to display the filtered items
    this.displayedItems = filteredItems;
    console.log(filteredItems)
    },
  },
};
</script>

<style></style>
