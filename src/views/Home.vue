<template>
 <div>
    <Header></Header>
    <Hero/>
    <Banner></Banner>
    
    <SignupBanner/>
    <all-lawyers :advocates="advocates"></all-lawyers>
    <KnowYourCourts/>
    <Footer></Footer>
 
 </div>
</template>

<script>
import Banner from '../components/home/Banner.vue'
import Hero from '../components/home/Hero.vue'
import Header from '../components/home/Header.vue';
import Footer from '../components/home/Footer.vue';
import TopLawyers from '../components/home/Top-Lawyers.vue';
import KnowYourCourts from '../components/home/Know-Your-Courts.vue';
import AllLawyers from '../components/home/All-Lawyers.vue';
import SignupBanner from '../components/home/Signup-Banner.vue';
import { mapState } from 'vuex';

export default {
  components: { Hero, Banner,Header, Footer, TopLawyers, KnowYourCourts, AllLawyers,SignupBanner },
  data(){
    return{
      columns
    }
  },
  created() {

},
computed:{
  ...mapState(['allAdvocates',"courtData"]),
  advocates(){
    return this.allAdvocates.filter((advocate)=>advocate.status==='active')

  }

}
}
</script>

<style>

</style>