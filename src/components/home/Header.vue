<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="logo">
              <router-link to="/">
                <img src="images/logo-lg.png" alt="" style="height: 80px; object-fit: contain;" />
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
          <!-- <div class="lan-selector">
                        <select class="language_drop" name="countries" id="countries" style="width:300px;">
                            <option value='yt' class="flag-bg"
                                data-title="English">English</option>
                            <option value='yu' class="flag-bg"
                                data-title="Bangladesh">Kiswahili </option>
                        </select>
                    </div> -->

          <div class="top-social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <router-link to="/">
                <img src="images/logo-lg.png" alt="" style="height: 80px; object-fit: contain;" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="advanced-search">
              <button type="button" class="category-btn">SEARCH FOR </button>
              <div class="input-group">
                <input type="text" placeholder="advocates you need?" />
                <button type="button">
                  <i class="fa fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-right col-md-3">
                        <ul class="nav-right">
                            <li class="heart-icon">
                                <a href="#">
                                    <i class="icon_heart_alt"></i>
                                    <span>1</span>
                                </a>
                            </li>
                            <li class="cart-icon">
                                <a href="#">
                                    <i class="icon_bag_alt"></i>
                                    <span>3</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="si-pic"><img src="images/home/select-product-1.jpg" alt=""></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="si-pic"><img src="img/select-product-2.jpg" alt=""></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5>$120.00</h5>
                                    </div>
                                    <div class="select-button">
                                        <a href="#" class="primary-btn view-card">VIEW CARD</a>
                                        <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                            <li class="cart-price">$150.00</li>
                        </ul>
                    </div>
        </div>
      </div>
    </div> -->
    <div class="nav-item">
      <div class="container">
        <div class="nav-depart">
          <div class="depart-btn">
            <i class="fa fa-bars"></i>
            <span>FIND LAWYERS</span>
            <ul class="depart-hover">
              <span class="header-title">Practise Areas</span>
              <li v-for="area of practiseAreas" :key="area"><a href="#all-lawyers">{{ area }}</a></li><br><br><br>

              <span class="header-title">Counties</span>
              <li v-for="county of counties" :key="county"><a href="#all-lawyers">{{ county }}</a></li>
            </ul>
          </div>
        </div>
        
        <nav class="nav-menu mobile-menu">
          <ul>
            <li class="active"><router-link to="/">Home</router-link></li>
            <!-- <li><router-link to="/">About Us</router-link></li> -->
            <li><a href="#courts">Know Your Courts</a></li>
            <li>
              <a href="#">Resources</a>
              <ul class="dropdown">
                <li><a href="acelitigator.com">Legal Documents</a></li>
                <li><a href="acelitigator.com">Articles</a></li>
                <li><a href="acelitigator.com">Webiners</a></li>
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
