<template>
   <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="product-large set-bg">
                        <h2>Top Lawyers</h2>
                        <a href="#">Discover More</a>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-1">
                    <div class="filter-control">
                        <ul>
                            <li class="active">{{practiseAreas[0]}} Law</li>
                            <li v-for="area of practiseAreas.slice(8)" :key="area">{{area}} Law</li>
                            
                        </ul>
                    </div>
                  
                        <carousel :autoplay="true" :nav="false" class="product-slider ">
                            <div class="product-item ">
                            <div class="pi-pic">
                                <img src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-9.png" alt="">
                                <div class="sale">Verified</div>
                                <div class="icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li class="quick-view"><a href="#">+ View Profile</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Senior Advocate</div>
                                <a href="#">
                                    <h5>Stella Orengo</h5>
                                </a>
                                <div class="product-price">
                                    Commercial Law
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Criminal Law</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-7.png" alt="">
                                <div class="icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li class="quick-view"><a href="#">+ View Profile</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Advocate</div>
                                <a href="#">
                                    <h5>Brian Owalo</h5>
                                </a>
                                <div class="product-price">
                                    Commercial Law
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Criminal Law</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-6.png" alt="">
                                <div class="icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li class="quick-view"><a href="#">+ View Profile</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Advocate</div>
                                <a href="#">
                                    <h5>Ambrose Waigwa</h5>
                                </a>
                                <div class="product-price">
                                    Commercial Law
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Criminal Law</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="https://acelitigator.com/wp-content/uploads/2023/01/nelima.jpg" alt="">
                                <div class="icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Advocate</div>
                                <a href="#">
                                    <h5>Nelima Walubengo</h5>
                                </a>
                                <div class="product-price">
                                    Commercial Law
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Litigation,</span>
                                    <span>Criminal Law</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="https://acelitigator.com/wp-content/uploads/2023/01/Carolyne-Rono.jpg" alt="">
                                <div class="icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li class="quick-view"><a href="#">+ View Profile</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
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
                        </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
    components:{carousel},
    computed: {
    ...mapState(["practiseAreas"]),}

}
</script>

<style>

</style>