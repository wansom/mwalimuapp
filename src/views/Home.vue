<template>
 <div>
    <Header></Header>
    <Hero></Hero>
    <Banner></Banner>
    <top-lawyers></top-lawyers>
    <KnowYourCourts></KnowYourCourts>
    <all-lawyers></all-lawyers>
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
export default {
  components: { Hero, Banner,Header, Footer, TopLawyers, KnowYourCourts, AllLawyers },
  created() {
}
}
</script>

<style>

</style>