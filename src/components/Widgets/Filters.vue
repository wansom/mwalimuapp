<template>
<section>
  <div class="container py-4">
    <div>
      <a-row :gutter="16">
        
        </a-row>
    </div>
  </div>
</section>
</template>

<script>
import { mapState } from "vuex";
import CardInfo from "../../components/Cards/CardInfo.vue";
import DefaultHeader from "../../components/Headers/DefaultHeader.vue";
import VueRangeSlider from "vue-range-component";
import "../../../public/home/css/range-slider.css";
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
        pageSize: 10,
      },
      searchName: "",
      searchString: "",
      value: [0, 50],
      selectedPractiseArea: [],
      selectedCounty: "",
      years_of_experience: [0, 50],
      displayItems: [],
      filterApplied: false,
    };
  },
  methods: {
    removeTags: function (item) {
      var itemIndex = this.filtersAppied.indexOf(item);
      this.filtersAppied.splice(itemIndex, 1);
    },
    clearTags() {
      this.filtersAppied = [];
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
    onSearch() {
      if (this.searchString) {
        this.filtersAppied = false;
        return this.advocates.filter((a) =>
          a.username.includes(this.searchString)
        );
      }
      return this.advocates;
    },
    // filterAdvocates(
    //   county,
    //   minExperience,
    //   maxExperience,
    //   practiceAreas,
    //   advocates
    // ) {
    //   return advocates.filter((advocate) => {
    //     let experience =
    //       new Date().getFullYear() -
    //       new Date(advocate.practise_start).getFullYear();
    //     // Check if the advocate's country matches the specified country
    //     if (advocate.location !== county) {
    //       return false;
    //     }

    //     // Check if the advocate's experience is within the specified range
    //     if (experience < minExperience || experience > maxExperience) {
    //       return false;
    //     }

    //     // Check if the advocate's practice areas include all the specified practice areas
    //     return practiceAreas.every((practiceArea) => {
    //       return advocate.practise_areas.includes(practiceArea);
    //     });
    //   });
    // },
    filterAdvocates(
      county,
      minExperience,
      maxExperience,
      practiceAreas,
      advocates
    ) {
      // Filter advocates based on country
      if (county) {
        advocates = advocates.filter(
          (advocate) => advocate.location === county
        );
      }

      // Filter advocates based on years of experience
      if (minExperience || maxExperience) {
        advocates = advocates.filter((advocate) => {
          let experience =
            new Date().getFullYear() -
            new Date(advocate.practise_start).getFullYear();
          if (minExperience && experience < minExperience) {
            return false;
          }
          if (maxExperience && experience > maxExperience) {
            return false;
          }
          return true;
        });
      }

      // Filter advocates based on practice areas
      if (practiceAreas && practiceAreas.length > 0) {
        advocates = advocates.filter((advocate) => {
          return practiceAreas.every((area) =>
            advocate.practise_areas.includes(area)
          );
        });
      }

      return advocates;
    },

    filterItems() {
      // Get the selected filter values
      const selectedPractiseArea = this.selectedPractiseArea;
      const selectedCounty = this.selectedCounty;
      const years_of_experience = this.years_of_experience;
      // Update the items to display the filtered items

      this.displayItems = this.filterAdvocates(
        selectedCounty,
        years_of_experience[0],
        years_of_experience[1],
        selectedPractiseArea,
        this.advocates
      );
      this.filterApplied = true;
    },
  },
  computed: {
    ...mapState([
      "user",
      "allAdvocates",
      "practiseAreas",
      "loading",
      "firebaseEror",
    ]),
  },
  updated() {},
  mounted() {},
  created() {},
};
</script>
