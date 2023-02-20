<template>
  <div class="product-item">
    <div class="pi-pic">
      <img
        src="https://acelitigator.com/wp-content/uploads/2023/01/Carolyne-Rono.jpg"
        alt=""
      />
      <div class="icon">
        <a href="#"><i class="ti-facebook"></i></a>
        <a href="#"><i class="ti-twitter-alt"></i></a>
        <a href="#"><i class="ti-linkedin"></i></a>
        <a href="#"><i class="ti-pinterest"></i></a>
      </div>
      <ul>
        <li class="w-icon active">
          <a href="#"><i class="fa fa-eye"></i></a>
        </li>
        <li class="quick-view"><a href="#">+ View Profile</a></li>
        <li class="w-icon">
          <a href="#"><i class="fa fa-random"></i></a>
        </li>
      </ul>
    </div>
    <div class="pi-text">
      <div class="catagory-name">Advocate</div>
      <a href="#">
        <h5>Carolyne Rono</h5>
      </a>
      <div class="product-price">
        Commercial Law
        <span>Litigation,</span>
        <span>Litigation,</span>
        <span>Litigation,</span>
        <span>Criminal Law,</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["advocate"],
};
</script>

<style></style>
