<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="logo">
              <router-link to="/">
                <img src="images/dial-logo.png" alt="" style="height: 80px; object-fit: contain;" />
              </router-link>
            </div>
          <div class="mail-service">
            <i class="fa fa-envelope"></i>
            info@acelitigator.com
          </div>
          <div class="phone-service">
            <i class="fa fa-phone"></i>
            +2547 051 2230
          </div>
        </div>

        <div class="ht-right">
          <!-- <a href="#" class="login-panel"><i class="fa fa-user"></i>ACCOUNT</a> -->
          <a-dropdown>
    <a class="login-panel" @click="e => e.preventDefault()"><i class="fa fa-user"></i>
     ACCOUNT
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="1">
        <a href="/sign-up">Create Account</a>
      </a-menu-item>
      <a-menu-item key="2">
        <a href="/sign-in">Login</a>
        
      </a-menu-item>
    
    </a-menu>
  </a-dropdown>

          <div class="top-social">
            <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-facebook"></i></a>
            <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-twitter"></i></a>
            <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-linkedin"></i></a>
            <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <div class="container">
        <div class="nav-depart">
          <a href="/find-a-lawyer">
          <div class="depart-btn">
            
            <span>FIND LAWYERS</span>
          </div></a>
        </div>
        
        <nav class="nav-menu mobile-menu">
          <ul>
            <li class="active"><router-link to="/">Home</router-link></li>
            <!-- <li><router-link to="/">About Us</router-link></li> -->
            <li><a href="#courts">Know Your Courts</a></li>
            <li>
              <a href="#">Resources</a>
              <ul class="dropdown">
                <li><a href="//acelitigator.com" target="blank">Legal Documents</a></li>
                <li><a href="//acelitigator.com" target="blank">Articles</a></li>
                <li><a href="//acelitigator.com" target="blank">Webiners</a></li>
              </ul>
            </li>
            <li><router-link to="contact-us">Contact</router-link></li>
           
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
      
        }
    },
    computed: {
    ...mapState(["practiseAreas","counties"]),}
};
</script>

<style></style>
