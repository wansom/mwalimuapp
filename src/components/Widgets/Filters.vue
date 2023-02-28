<template>
  <div class="container-fluid">
    <div id="product-list">
      <div class="col-sm-12 product-list-all">
        <a-row>
          <a-col :span="24" :lg="6">
            <div id="filters">
              <div class="sidebar">
                <!-- sidebar  -->
                <div id="shopbypanel" class="collapse">
                  <div class="shopbypanel">
                    <a-input-search
                      placeholder="Enter first or last name"
                      enter-button
                      @search="onSearch"
                      v-model="searchString"
                    />
                  </div>
                </div>
                <h5>FILTERS</h5>
                <span class="line"></span>

                <div class="filter-widget">
                  <a-collapse
                    expand-icon-position="right"
                    :bordered="false"
                    default-active-key="1"
                  >
                    <template #expandIcon="props">
                      <a-icon
                        type="caret-down"
                        :rotate="props.isActive ? 180 : 0"
                      />
                    </template>
                    <a-collapse-panel key="1" header="Practise Areas">
                      <div
                        v-for="category in practiseAreas"
                        :key="category"
                        class="checkbox"
                        @change="
                          () => {
                            setActive(category);
                          }
                        "
                      >
                        <label>
                          <input type="checkbox" /><span
                            class="checkbox-material"
                            ><span class="check"></span
                          ></span>
                          {{ category }}
                        </label>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                </div>
                <div class="filter-widget">
                  <h4 class="fw-title">Years of Experience</h4>
                  <div class="filter-range-wrap position-relative">
                    <vue-range-slider
                      ref="slider"
                      v-model="years_of_experience"
                      @change="setExperience"
                    ></vue-range-slider>
                  </div>
                </div>

                <div class="filter-widget">
                  <a-collapse
                    expand-icon-position="right"
                    :bordered="false"
                  >
                    <template #expandIcon="props">
                      <a-icon
                        type="caret-down"
                        :rotate="props.isActive ? 180 : 0"
                      />
                    </template>
                    <a-collapse-panel key="1" header="Counties">
                      <div class="fw-color-choose">
                        <div
                          class="cs-item"
                          v-for="item in counties"
                          :key="item"
                        >
                          <input
                            type="radio"
                            :id="item"
                            :value="item"
                            v-model="selectedCounty"
                          />
                          <label class="cs-red" :for="item">{{ item }}</label>
                        </div>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                 
                </div>
               
              </div>
              <button class="filter-btn px-5" @click="filterItems">Filter</button>
            </div>
          </a-col>
          <a-col :span="24" :lg="18">
              <div class="row">
                <div class="col-lg-7 col-md-7">
                  <div class="row">
                    <div class="advanced-search">
                      <button type="button" class="category-btn">
                        SEARCH FOR
                      </button>
                      <div class="input-group">
                        <input type="text" placeholder="advocates you need?" />
                        <button type="button">
                          <i class="fa fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 text-right">
                  <p>Showing {{filterApplied?displayItems.length:advocates.length }} Advocates</p>
                </div>
              </div>
            <div id="product-list-wrapper">
              <div class="col-sm-12">
                <div class="row mt-4">
                  <div
                  class="col-3"
                    v-for="filterAppied in filtersAppied"
                    :key="filterAppied"
                  >
                    <a-button
                      class="filter-value"
                      @click="removeTags(filterAppied)"
                      icon="delete"
                    
                    >
                      {{ filterAppied }}
                    </a-button>
                  </div>

                  <transition name="fade">
                    <a-button
                      v-if="filtersAppied.length > 0"
                      class="clear-values"
                      @click.prevent="clearTags"
                      type="primary"
                    >
                      Clear All</a-button
                    >
                  </transition>
                </div>
                <div class="wrapper-product-list">
                  <div class="grid-placehodler">
                    <div class="grid-list">
                      <!-- Loop products  -->
                     
                      <a-list
                        item-layout="vertical"
                        size="large"
                        :pagination="pagination"
                        :data-source="filterApplied?displayItems:advocates"
                      >
                        <a-list-item
                          slot="renderItem"
                          key="item.title"
                          slot-scope="item"
                        >
                          <card-info :advocate="item"></card-info>
                        </a-list-item>
                      </a-list>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardInfo from "../../components/Cards/CardInfo.vue";
import DefaultHeader from "../../components/Headers/DefaultHeader.vue";
import VueRangeSlider from "vue-range-component";
import "../../../public/home/css/range-slider.css";
import { getAllAdvocates } from "../../database/firestore";
export default {
  props: ["advocates"],
  components: {
    DefaultHeader,
    CardInfo,
    VueRangeSlider,
  },
  data() {
    return {
      defaultCounty: null,
      county: null,
      category: null,
      counties: [
        "Nairobi",
        "Mombasa",
        "Kwale",
        "Kilifi",
        "Tana River",
        "Lamu",
        "Taita/Taveta",
        " Garissa",
        "Wajir",
        "Mandera",
        "Marsabit",
        "Isiolo",
        "Meru",
        "Tharaka-Nithi",
        "Embu",
        "Kitui",
        "Machakos",
        "Makueni",
        "Nyandarua",
        "Nyeri",
        "Kirinyaga",
        "Murang'a",
        " Kiambu",
        "Turkana",
        "West Pokot",
        "Samburu",
        "Trans Nzoia",
        "Uasin Gishu",
        "Elgeyo/Marakwet",
        "Nandi",
        " Baringo",
        "Laikipia",
        "Nakuru",
        "Narok",
        "Kajiado",
        "Kericho",
        "Bomet",
        "Kakamega",
        "Vihiga",
        "Bungoma",
        "Busia",
        "Siaya",
        "Kisumu",
        "Homa Bay",
        "Migori",
        "Kisii",
        "Nyamira",
      ],
      categories: [
        "Family",
        "Employment",
        "Criminal Defense",
        "Real Estate",
        "Business",
        "Immigration",
        "Personal Injury",
        "Wills, Trusts & Estates",
        "Bankruptcy & Finances",
        "Government",
        "Products & Services",
        "Intellectual Property",
      ],
      experience: 2,
      data: [],
      message: "Hello",
      shopbymenu: true,
      inputValue: 0,
      productItemsNumbers: 19,
      filtertoApply: ["size"],
      filtersAppied: [],
      genders: ["male", "female"],
      colors: ["red", "blue", "black", "white", "gold"],
      experience: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      colorsActive: [],
      sizesActive: [],
      filteredItems2: [],
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
      searchName: "",
      searchString: "",
      value: [0, 50],
      selectedPractiseArea: [],
      selectedCounty: "",
      years_of_experience: [0, 50],
      displayItems:[],
    filterApplied:false
    };
  },
  methods: {
    removeTags: function (item) {
      var itemIndex = this.filtersAppied.indexOf(item);
      this.filtersAppied.splice(itemIndex, 1);
    },
    clearTags(){
      this.filtersAppied=[]
    },
    setExperience(element) {
      // //find range  elements
      const oldRange = this.filtersAppied.filter((element) =>
        Array.isArray(element)
      );
      // //remove experience range
      oldRange.forEach((e) => {
        this.filtersAppied.pop(e);
      });
      // //add new experience
      this.filtersAppied.push(element);
      console.log(this.filtersAppied);
    },
    setActive: function (element) {
      if (this.selectedPractiseArea.indexOf(element) > -1) {
        this.selectedPractiseArea.pop(element);
      } else {
        this.selectedPractiseArea.push(element);
      }
    },
    isActive: function (menuItem) {
      return this.filtersAppied.indexOf(menuItem) > -1;
    },
    formatter(value) {
      return `${value} Years`;
    },
    onSearch(element) {
      if (this.filtersAppied.indexOf(element) > -1) {
        this.filtersAppied.pop(element);
      } else {
        this.filtersAppied.push(element);
      }
    },
    filterItems() {
      // Get the selected filter values
      const selectedPractiseArea = this.selectedPractiseArea;
      const selectedCounty = this.selectedCounty;
      const years_of_experience = this.years_of_experience;

      // Filter the items based on the selected filter values
      let filteredItems = this.advocates.filter((item) => {
        let practiseAreaMatch = true;
        let countyMatch = true;
        let experienceMatch = true;

        // Check if the item matches the selected selected practise area
       
          for(let i=0; i<=selectedPractiseArea.length,i++;){
            if (selectedPractiseArea !== "all" && item.practise_areas.includes(selectedPractiseArea[i])) {
              practiseAreaMatch = false;
            }
          }
     
     

        // Check if the item matches the selected county
        if ( selectedCounty !== "all" && item.location !== selectedCounty) {
          countyMatch = false;
        }

        // Check if the item matches the selected experience range
        let experience =
          new Date().getFullYear() -
          new Date(item.practise_start).getFullYear();
        if (years_of_experience.length) {
          if (experience < years_of_experience[0] || experience > years_of_experience[1]) {
            experienceMatch = false;
          }
        }
        // Return true only if all the filter conditions are met
      return practiseAreaMatch && countyMatch && experienceMatch;
    });
  
    // Update the items to display the filtered items
    this.displayItems=filteredItems
    this.filterApplied=true
    },
  },
  computed: {
    ...mapState(["user", "allAdvocates", "practiseAreas","filteredItems"]),

    filteredItems: function () {
      return this.advocates.filter((product) => {
        let experience =
          new Date().getFullYear() -
          new Date(product.practise_start).getFullYear();
        const oldRange = this.filtersAppied.filter((element) =>
          Array.isArray(element)
        );

        return this.filtersAppied.every((filterAppied) => {
          if (this.searchString.length) {
            if (
              product.first_name
                .toLowerCase()
                .includes(filterAppied.toLowerCase())
            ) {
              return product.first_name
                .toLowerCase()
                .includes(filterAppied.toLowerCase());
            }
            if (
              product.last_name
                .toLowerCase()
                .includes(filterAppied.toLowerCase())
            ) {
              return product.last_name
                .toLowerCase()
                .includes(filterAppied.toLowerCase());
            }
          }

          if (product.practise_areas.includes(filterAppied)) {
            return product.practise_areas.includes(filterAppied);
          }
          if (product.specialisation.includes(filterAppied)) {
            return product.specialisation.includes(filterAppied);
          }
          if (product.location.includes(filterAppied)) {
            return product.location.includes(filterAppied);
          }
          if (oldRange.length) {
            if (experience >= oldRange[0][0] && experience <= oldRange[0][1]) {
              return (
                experience >= oldRange[0][0] && experience <= oldRange[0][1]
              );
            }
          }
        });
      });
    },
  },
  updated() {},
  mounted() {},
  created() {},
};
</script>
