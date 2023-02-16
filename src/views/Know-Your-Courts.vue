<template>
 <div>
    <Header></Header>
    <Breadcrum></Breadcrum> 
    <Footer></Footer>
   </div>
</template>


<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
export default {
    components:{Header,Footer,Breadcrum}

}
</script>

<style>

</style>