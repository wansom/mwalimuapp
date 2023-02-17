<template>
  <div
    class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter"
  >
    <!-- <div class="filter-widget">
      <h4 class="fw-title">Primary Practise Areas</h4>
      <ul class="filter-catagories">
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Kids</a></li>
      </ul>
    </div> -->
    <div class="filter-widget">
      <a-collapse
        expand-icon-position="right"
        :bordered="false"
        default-active-key="1"
      >
        <template #expandIcon="props">
          <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
        </template>
        <a-collapse-panel key="1" header="Practise Areas">
          <div class="fw-brand-check">
            <div class="bc-item" v-for="area of practiseAreas" :key="area">
              <label :for="area">
                {{ area }}
                <input type="checkbox" :id="area" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="filter-widget">
      <h4 class="fw-title">Years of Experience</h4>
      <div class="filter-range-wrap position-relative">
        <!-- <a-slider
          range
          :default-value="[3, 50]"
          @change="setExperience"
          :tooltip-visible="toolTip"
        /> -->
        <vue-range-slider ref="slider" v-model="value"></vue-range-slider>
      </div>
    </div>
    <div class="filter-widget">
      <a-collapse
        v-model="activeKey"
        expand-icon-position="right"
        :bordered="false"
      >
        <template #expandIcon="props">
          <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
        </template>
        <a-collapse-panel key="1" header="Counties">
          <div class="fw-color-choose">
            <div class="cs-item" v-for="county of counties" :key="county">
              <input type="radio" :id="county" :value="county" />
              <label class="cs-red" :for="county">{{ county }}</label>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <!-- <div class="filter-widget">
                        <h4 class="fw-title">Size</h4>
                        <div class="fw-size-choose">
                            <div class="sc-item">
                                <input type="radio" id="s-size">
                                <label for="s-size">s</label>
                            </div>
                            <div class="sc-item">
                                <input type="radio" id="m-size">
                                <label for="m-size">m</label>
                            </div>
                            <div class="sc-item">
                                <input type="radio" id="l-size">
                                <label for="l-size">l</label>
                            </div>
                            <div class="sc-item">
                                <input type="radio" id="xs-size">
                                <label for="xs-size">xs</label>
                            </div>
                        </div>
                    </div> -->
    <div class="filter-widget mt-4">
      <h4 class="fw-title">Tags</h4>
      <div class="fw-tags">
        <a href="#">Male</a>
        <a href="#">Female</a>
        <a href="#">Magistrate</a>
        <a href="#">Judges</a>
        <a href="#">Advocates</a>
        <a href="#">Niceties</a>
        <a href="#">Port Harcourt</a>
      </div>
    </div>
    <a href="#" class="filter-btn">Filter</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import '../../../public/home/css/range-slider.css'
import VueRangeSlider from 'vue-range-component'
export default {
  components: {
    VueRangeSlider
  },
  data() {
    return {
      toolTip: false,
      value: [0,50],
    };
  },
  methods: {
    setExperience(element) {
      this.toolTip = true;
      console.log(element);
    },
  },

  computed: {
    ...mapState(["practiseAreas", "counties"]),
  },
  mounted() {},
};
</script>

<style scoped>

</style>
