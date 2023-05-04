<template>
  <div>
    <Header></Header>
    <FormulateInput type="text" />
	<RegisterForm></RegisterForm>
  <!-- <test-form/> -->
	<Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/home/Header.vue';
import Footer from '../components/home/Footer.vue';
import Breadcrum from '../components/Widgets/Breadcrum.vue';
import RegisterForm from '../components/forms/Register-Form.vue';
import TestForm from '../components/forms/TestForm.vue';
export default {
  components:{Header,Footer,Breadcrum,RegisterForm, TestForm},

};
</script>

<style lang="scss"></style>
