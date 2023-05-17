<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-left">
            <div class="footer-logo">
              <a href="#"><img src="images/dial-logo.png" alt="" style="height: 80px; object-fit: contain;"/></a>
            </div>
            <ul>
              <li>Address: I&M Building 2nd Ngong Avenue, Nairobi, Kenya</li>
              <li>Phone: +65 11.188.888</li>
              <li>Email: info@acelitigator.com</li>
            </ul>
            <div class="footer-social">
              <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-facebook"></i></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-instagram"></i></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-twitter"></i></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"><i class="fa fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1">
          <div class="footer-widget">
            <h5>COMPANY</h5>
            <ul>
              <li><a href="//acelitigator.com">About Us</a></li>
              <li><a href="/find-a-lawyer">Find a Lawyer</a></li>
              <li><a href="https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/Privacy%20Policy%20200223.docx?alt=media&token=bd536806-a1ac-4361-a56a-ddfca9885a8f">Privacy Policy</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="footer-widget">
            <h5>ADVOCATES</h5>
            <ul>
              
              <li><router-link to="sign-up">Create Account</router-link></li>
              <li><router-link to="sign-in">Login</router-link></li>
              <li><router-link to="//kenyalaw.org">Know Your Courts</router-link></li>
              <!-- <li><a href="#">Advocates In Practise</a></li> -->
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="newslatter-item">
            <h5>Join Our Newsletter Now</h5>
            <p>Get E-mail updates about our latest articles and event offers.</p>
            <form action="#" class="subscribe-form" @submit.prevent="handleSubmit">
              <input type="text" placeholder="Enter Your Mail" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;
             {{ new Date().getFullYear() }}
              All rights reserved | 
              <a href="https://acelitigator.com" target="_blank">ACELITIGATOR</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </div>
            <div class="payment-pic">
              <img src="images/home/payment-method.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
