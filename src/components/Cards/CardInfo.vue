<template>
  <a-card :bordered="false" class="card-info">
    <a-row type="flex">
      <a-col class="col-content" :span="24" :xl="12">
        <div class="card-content">
          <h5>{{ advocate.first_name }} {{ advocate.last_name }}</h5>
          <h6>{{ advocate.job_title }}</h6>
          <a-row type="flex" class="my-5">
            <a-col :span="12">
              <div>
                <a-icon type="environment" class="mx-5" />{{
                  advocate.location
                }}
              </div>
              <div>
                <a-icon type="calendar" class="mx-5" />{{
                  new Date().getFullYear() -
                  new Date(advocate.practise_start).getFullYear()
                }}Years Experience
              </div>
            </a-col>
            <a-col :span="12">
              <div>
                <a-icon type="bank" class="mx-5" />{{
                  advocate.current_employer
                }}
              </div>
              <div>
                <a-icon type="clock-circle" class="mx-5" />Member since
                {{ advocate.subscription_date }}
              </div>
            </a-col>
          </a-row>
          <p>
            {{ advocate.biography.slice(0,150) }}
          </p>

          <div style="display: flex; flex-wrap: wrap">
            <div class="my-5 mx-5">
              <a-button><a-icon type="up-circle" style="color:#DB1C22;" />{{ advocate.specialisation}}</a-button>
            </div>
            <div
              class="my-5 mx-5"
              v-for="i of advocate.practise_areas"
              :key="i"
            >
              <a-button>{{ i }}</a-button>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <router-link :to="'/details/'+advocate.id">
           <a-button type="primary" block>
            View Profile
       
            </a-button>
          </router-link>
        </div>
      </a-col>
      <a-col class="col-img" :span="24" :md="12">
        <div>
          <a-avatar :src="advocate.profile_photo" :size="124" style="object-fit:contain"/>
          <!-- <img :src="advocate.profile_photo" alt="" style="width:100%; height: 200px; object-fit: contain;" /> -->
        </div>
        <!-- <a-row type="flex" class="my-10 icons-list">
          <a-col :span="6">
            <a-icon type="phone" />
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
        </a-row> -->
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { Icon } from "ant-design-vue";
import { type } from "os";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default {
  props: ["advocate"],
  components: {
    IconFont,
  },
  data() {
    return {};
  },
  computed: {
    getYearDiff(date) {
      return typeof date;
      // return Math.abs(new Date().getFullYear() - date1.getFullYear());
    },
  },
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  margin-top: 20px;
  font-size: 24px;
  color: #db1c22;
}
</style>
