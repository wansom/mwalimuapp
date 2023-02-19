<template>
  <div class="product-item">
    <div class="pi-pic">
      <img
        :src="advocate.profile_photo"
        alt=""
      />
      <div class="icon">
        <a  :href="'//' + advocate.website" target="_blank"><i class="fa fa-globe"></i></a>
        <a :href="'//' + advocate.twitter"  target="_blank"><i class="ti-twitter-alt"></i></a>
        <a :href="'//' +advocate.linkedIn"  target="_blank"><i class="ti-linkedin"></i></a>
      </div>
      <router-link :to="'/advocate/'+advocate.id">
        <ul>
          <li class="w-icon active">
            <a href="#"><i class="fa fa-eye"></i></a>
          </li>
          <li class="quick-view">
            <a href="#">+ Quick View</a>
          </li>
          <li class="w-icon">
            <a href="#"><i class="fa fa-random"></i></a>
          </li></ul
      ></router-link>
    </div>
    <div class="pi-text">
      <div class="catagory-name">{{advocate.job_title}}</div>
      <a href="#">
        <h5>{{ advocate.first_name }}<span class="mr-5"></span>{{ advocate.last_name }}</h5>
      </a>
      <div class="product-price">
       {{ advocate.specialisation }}
        <span v-for="area of advocate.practise_areas" :key="area">{{area}},</span>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['advocate']
};
</script>

<style></style>
