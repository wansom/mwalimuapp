<template>
  <div class="">
    <Header></Header>
<contact-component></contact-component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import Map from "../components/Widgets/Map.vue";
import ContactComponent from '../components/home/ContactComponent.vue';
export default {
  components: { Header, Footer, Breadcrum, Map, ContactComponent },
};
</script>

<style></style>
