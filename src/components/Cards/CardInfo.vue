<template>
  <a-card :bordered="false" class="card-info">
    <a-row type="flex">
      <a-col class="col-content" :span="24" :xl="12">
        <div class="card-content">
          <h5>Jordan M.</h5>
          <h6>Partner</h6>
          <a-row type="flex" class="my-5">
            <a-col :span="12">
              <div><a-icon type="environment" class="mx-5" />Nairobi</div>
              <div><a-icon type="calendar" class="mx-5" />1yr Experience</div>
            </a-col>
            <a-col :span="12">
              <div><a-icon type="bank" class="mx-5" />CM Advocates</div>
              <div>
                <a-icon type="clock-circle" class="mx-5" />Member since 2021
              </div>
            </a-col>
          </a-row>
          <p>
            am a software developer turned lawyer with 7+ years of experience
            drafting, reviewing, and negotiating SaaS agreements, as well as
            other technology agreements. I am a partner at Freeman Lovell PLLC,
            where I lead commercial contracts practice group. I work with
            startups,
          </p>
          <a-row type="flex">
            <a-col :span="6" class="my-5">
              <a-button>Freelance Contract</a-button></a-col
            >
            <a-col :span="6" class="my-5">
              <a-button>Freelance Contract</a-button></a-col
            >
            <a-col :span="6" class="my-5">
              <a-button>Freelance Contract</a-button></a-col
            >
            <a-col :span="6" class="my-5">
              <a-button>Freelance Contract</a-button></a-col
            >
            <a-col :span="6" class="my-5">
              <a-button>Freelance Contract</a-button></a-col
            >
          </a-row>
        </div>
        <div class="card-footer">
          <a href="#" size="small">
            <span>Read More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                fill="#111827"
              />
            </svg>
          </a>
        </div>
      </a-col>
      <a-col class="col-img" :span="24" :md="12">
        <div class="card-img-bg">
          <img src="images/bg-signin.png" alt="" />
        </div>
        <a-row type="flex" class="my-10 icons-list">
          <a-col :span="6">
            <a-icon type="phone"  />
          </a-col>
          <a-col :span="6">
            <div>
              <a-icon type="skype" />
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-icon type="wechat" />
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <a-icon type="linkedin" />
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default {
	components: {
    IconFont,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  margin-top: 20px;
  font-size: 24px;
  color:#db1c22
}
</style>
