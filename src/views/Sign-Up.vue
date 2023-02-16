<template>
  <div>
    <Header></Header>
	<Breadcrum></Breadcrum>
	<RegisterForm></RegisterForm>
	<Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/home/Header.vue';
import Footer from '../components/home/Footer.vue';
import Breadcrum from '../components/Widgets/Breadcrum.vue';
import RegisterForm from '../components/forms/Register-Form.vue';
export default {
  components:{Header,Footer,Breadcrum,RegisterForm},

};
</script>

<style lang="scss"></style>
