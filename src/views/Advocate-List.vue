<template>
  <div>
    <DefaultHeader />
    <div class="img-banner" style="display:flex; align-items: center;justify-content: center;">
        <div class="" >
            <h1 class="text-white text-center">Find Lawyers</h1>
        </div>
    </div>
  </div>
</template>

<script>
import DefaultHeader from "../components/Headers/DefaultHeader.vue";
export default {
  components: {
    DefaultHeader,
  },
};
</script>

<style scoped>
body {
  background-color: #ffffff;
}
.img-banner{
    background-image: url("../../public/images/lsk.jpg");
    height: 40vh;
    background-size: cover;
    
}
</style>
