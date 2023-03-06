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
import {FieldValue} from "firebase/firestore"
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
        this.$store.dispatch('updateUser',{
          profile_visits: FieldValue.increment(+1),
        })
      })
    },
    // updateProfileVisits() {
    //   fb.usersCollection.doc(this.$route.params.id).update({
    //     profile_visits: fb.types.FieldValue.increment(+1),
    //   });
    // },
  },
  mounted() {
    this.fetchDetails();
  },
};
</script> 

<style></style>
