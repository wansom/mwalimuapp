<template>
  <div class="container">
    <DefaultHeader />
    <div class="img-banner" style="display:flex; align-items: center;justify-content: center;">
        <div class="" >
            <h1 class="text-white text-center">Find Lawyers</h1>
        </div>
    </div>
    	<!-- Header Breadcrumbs -->
      <a-breadcrumb class="py-5 my-5">
						<a-breadcrumb-item><router-link to="/"> Home</router-link></a-breadcrumb-item>
						<a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
					</a-breadcrumb>
          <hr class="divider"/>
					<!-- / Header Breadcrumbs -->
<div class="mx-5 find-by-focus">
  <h3>FIND LAWYERS BY FOCUS</h3>
  <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}">
            <a-col  :span="24" :md="6" v-for="i of focus_areas" :key="i">
              <p>Real Estate</p>
            </a-col>

          </a-row>
</div>
<div class="p-5">
  <h3>Meet Some of our Lawyers</h3>
  <div>
<a-row :gutter="[24,24]" justify="space-around" align="middle">
  <a-col :span="16">
    <a-space direction="vertical">
      <div v-for="advocate of advocates" :key="advocate.id">
        <card-info class="my-5" :advocate="advocate"></card-info>
      </div>
    </a-space>

  </a-col>
<a-col :span="8">
  <div>
    <h4>LEARN ABOUT CONTRACTS</h4>
    <hr class="divider">
    <p>Bill of Sale</p>
    <p>Bill of Sale</p>
    <p>Bill of Sale</p>
    <p>Bill of Sale</p>
  </div>
  <div>
    <h4>OTHER HELPFUL ARTICLES</h4>
    <hr class="divider">
    <p>How much does it cost to draft a contract?</p>
    <p>How much does it cost to draft a contract?</p>
    <p>How much does it cost to draft a contract?</p>

  </div>
</a-col>
</a-row>
  </div>
</div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardInfo from '../components/Cards/CardInfo.vue';
import DefaultHeader from "../components/Headers/DefaultHeader.vue";
export default {
  components: {
    DefaultHeader,
    CardInfo,

  },
  data(){
    return{
      focus_areas:[1,2,3,4,5,0,6,7,51,43,50,49,]
    }
  },
  computed: {
    ...mapState(["advocates", "user"]),
  },
  mounted() {
    
    this.$store.dispatch("fetchAdvocates");
  },
};
</script>

<style scoped>
body {
  background-color: #ffffff;
}

.divider{
  background-color: #DB1C22;
  height: 2px;
  border: none;
}
.img-banner{
    background-image: url("../../public/images/lsk.jpg");
    height: 40vh;
    background-size: cover;
    
}
</style>
