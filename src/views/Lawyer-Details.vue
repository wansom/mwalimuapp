<template>
  <div>
    <Header></Header>
    <breadcrum></breadcrum>
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <detail-card></detail-card>
         
        </div>
        <related-advocates></related-advocates>
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
export default {
  components: { Header, Footer, Breadcrum,DetailCard, RelatedAdvocates },
};
</script> 

<style></style>
