<template>
  <div class="col-lg-12 order-1 order-lg-2">
    <div class="row">
      <div class="col-lg-6">
        <div class="product-pic-zoom">
          <img
            class="product-big-img"
            :src="advocate.profile_photo"
            alt=""
            style="height:650px;object-fit: contain;"
          />
          <!-- <div class="zoom-icon">
            <i class="fa fa-search-plus"></i>
          </div> -->
        </div>
        <!-- <div class="product-thumbs">
          <div class="product-thumbs-track ps-slider owl-carousel">
            <div
              class="pt active"
              data-imgbigurl="img/product-single/product-1.jpg"
            >
              <img src="img/product-single/product-1.jpg" alt="" />
            </div>
            <div class="pt" data-imgbigurl="img/product-single/product-2.jpg">
              <img src="img/product-single/product-2.jpg" alt="" />
            </div>
            <div class="pt" data-imgbigurl="img/product-single/product-3.jpg">
              <img src="img/product-single/product-3.jpg" alt="" />
            </div>
            <div class="pt" data-imgbigurl="img/product-single/product-3.jpg">
              <img src="img/product-single/product-3.jpg" alt="" />
            </div>
          </div>
        </div> -->
      </div>
      <div class="col-lg-6">
        <div class="product-details">
          <div class="pd-title">
            <span>{{ advocate.job_title }}</span>
            <h3 style="white-space:nowrap">{{ advocate.first_name }}<span class="mr-2"></span>{{ advocate.last_name }}</h3>
            <!-- <a href="#" class="heart-icon"><i class="icon_heart_alt"></i></a> -->
          </div>
          <div class="pd-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <span>(5)</span>
          </div>
          <div class="pd-desc">
            <p>
             {{ advocate.biography }}
            </p>
            <h4><i class="fa fa-business-time mr-2"></i>{{advocate.specialisation }}<span>(Primary Practise Area)</span></h4>
            <h4><i class="fa fa-location-dot mr-2"></i>{{advocate.location}}<span>(Primary Location)</span></h4>
          </div>
          <ul class="pd-tags">
            <li class="row align-items-center"><span  class="mr-3">PRACTISE AREAS:</span><p class="mr-2 mt-2" v-for="area of advocate.practise_areas" :key="area">{{ area }},</p></li>
            <li class="row align-items-center"><span  class="mr-3">lOCATIONS:</span><p class="mr-2 mt-2" v-for="area of advocate.other_counties" :key="area">{{ area }},</p></li>
          </ul>
          <div class="pd-size-choose">
            <div class="sc-item">
              <input type="radio" id="sm-size" />
              <label for="sm-size"> <i class="fa fa-phone"></i>{{advocate.phone}}</label>
            </div>
            <div class="sc-item">
              <input type="radio" id="sm-size" />
              <label for="sm-size"> <i class="fa fa-envelope"></i>{{ advocate.email}}</label>
            </div>
            <div class="sc-item">
              <input type="radio" id="lg-size" />
              <label for="lg-size"> <a :href="'//' +advocate.linkedIn"  target="_blank"><i class="ti-linkedin"></i></a></label>
            </div>
            <div class="sc-item">
              <input type="radio" id="xl-size" />
              <label for="xl-size">  <a :href="'//' + advocate.twitter"  target="_blank"><i class="ti-twitter-alt"></i></a></label>
            </div>
            <div class="sc-item">
              <input type="radio" id="xl-size" />
              <label for="xl-size">  <a  :href="'//' + advocate.website" target="_blank"><i class="fa fa-globe"></i></a></label>
            </div>
          </div>
         
          <!-- <div class="pd-share">
            <div class="p-code">Sku : 00012</div>
            <div class="pd-social">
              <a href="#"><i class="ti-facebook"></i></a>
              <a href="#"><i class="ti-twitter-alt"></i></a>
              <a href="#"><i class="ti-linkedin"></i></a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="product-tab">
      <div class="tab-item">
        <ul class="nav" role="tablist">
          <li>
            <a class="active" data-toggle="tab" href="#tab-1" role="tab"
              >Biography</a
            >
          </li>
          <li>
            <a data-toggle="tab" href="#tab-2" role="tab">EDUCATION BACKGROUND</a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab-4" role="tab">WORK EXPERIENCE</a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab-3" role="tab"
              >CLIENT REVIEWS (02)</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-item-content">
        <div class="tab-content">
          <div class="tab-pane fade-in active" id="tab-1" role="tabpanel">
            <div class="product-content">
              <div class="row">
                <div class="col-lg-7">
                  <h5>{{ advocate.first_name }}<sapn class="mr-2"></sapn>{{ advocate.last_name }}</h5>
                  <p>
                   {{ advocate.biography }}
                  </p>

                </div>
                <div class="col-lg-5">
                  <img src="img/product-single/tab-desc.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-2" role="tabpanel">
            <div class="specification-table">
              <table>
                <!-- <tr>
                  <td class="p-catagory">Client Rating</td>
                  <td>
                    <div class="pd-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                      <span>(5)</span>
                    </div>
                  </td>
                </tr> -->
                <tr>
                  <td class="p-catagory">LAW SCHOOL</td>
                  <td>
                    <div class="p-price">{{ advocate.law_school }}</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-catagory">POSTGRADUATE DIPLOMA</td>
                  <td>
                    <div class="cart-add">{{ advocate.postgraduate_diploma }}</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-catagory">OTHER CERTIFICATION</td>
                  <td>
                    <div class="p-stock">{{advocate.school2 }}</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-4" role="tabpanel">
            <div class="specification-table">
              <table>
                <!-- <tr>
                  <td class="p-catagory">Client Rating</td>
                  <td>
                    <div class="pd-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                      <span>(5)</span>
                    </div>
                  </td>
                </tr> -->
                <tr>
                  <td class="p-catagory">{{ advocate.current_employer }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.current_starting).toDateString() }}</div>
                    
                  </td>
                  <td>
                    <div class="cart-add">PRESENT</div>
                  </td>
                </tr>
                <tr v-if="advocate.prev1">
                  <td class="p-catagory">{{ advocate.prev1 }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev1starting).toDateString() }}</div>
                  </td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev1ending).toDateString() }}</div>
                  </td>
                </tr>
                <tr v-if="advocate.prev2">
                  <td class="p-catagory">{{ advocate.prev2 }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev2ending).toDateString() }}</div>
                  </td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev2ending).toDateString() }}</div>
                  </td>
                </tr>
               
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-3" role="tabpanel">
            <div class="customer-review-option">
              <h4>2 Comments</h4>
              <div class="comment-option">
                <div class="co-item">
                  <div class="avatar-pic">
                    <img src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-7.png" alt="" />
                  </div>
                  <div class="avatar-text">
                    <div class="at-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                    <div class="at-reply">Nice !</div>
                  </div>
                </div>
                <div class="co-item">
                  <div class="avatar-pic">
                    <img src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-7.png" alt="" />
                  </div>
                  <div class="avatar-text">
                    <div class="at-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <h5>Roy Banks <span>27 Aug 2019</span></h5>
                    <div class="at-reply">Nice !</div>
                  </div>
                </div>
              </div>
              <div class="personal-rating">
                <h6>Your Ratind</h6>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                </div>
              </div>
              <div class="leave-comment">
                <h4>Leave A Comment</h4>
                <form action="#" class="comment-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div class="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Messages"></textarea>
                      <button type="submit" class="site-btn">
                        Send comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
