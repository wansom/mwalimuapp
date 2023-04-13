<template>
  <div>
    <Header></Header>
    <breadcrum></breadcrum>
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <detail-card  :advocate="advocate"></detail-card>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import DetailCard from '../components/Detail/Detail-card.vue';
import RelatedAdvocates from '../components/Detail/Related-Advocates.vue';
import {getAdvocate} from '../database/firestore'
import {increment} from "firebase/firestore"
import { updateAdvocate } from "../database/firestore";
import { arrayUnion} from "firebase/firestore";
export default {
  components: { Header, Footer, Breadcrum,DetailCard, RelatedAdvocates },
  data(){
    return{
      advocate:{}
    }
    
  },
  methods: {
    moveToHome(){
      router.push('/')

    },
    fetchDetails() {
      getAdvocate(this.$route.params.id).then((data)=>{
       this.advocate=data
       updateAdvocate(this.$route.params.id,{
          profile_visits:arrayUnion(new Date()),
        })
      })
    },
  },
  mounted() {
    this.fetchDetails();
  },
};
</script> 

<style></style>
