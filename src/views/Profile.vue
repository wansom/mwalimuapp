<template>
  <div>
    <!-- Header Background Image -->
    <div
      class="profile-nav-bg"
      style="background-image: url('../../images/bg-profile.jpg')"
    ></div>
    <!-- / Header Background Image -->

    <!-- User Profile Card -->
    <a-card
      :bordered="false"
      class="card-profile-head"
      :bodyStyle="{ padding: 0 }"
    >
      <template #title>
        <a-row type="flex" align="middle">
          <a-col :span="24" :md="12" class="col-info">
            <a-avatar
              :size="240"
              shape="square"
              :src="advocate.profile_photo"
              style="object-fit: contain"
            />
            <div class="avatar-info">
              <h4 class="font-semibold m-0">
                {{ advocate.first_name }}<span class="mx-5"></span
                >{{ advocate.last_name }}
              </h4>
              <p>{{ advocate.job_title }}</p>
              <a-icon
                type="pushpin"
                style="
                  color: #3ea1ec;
                  font-size: 20px;
                  margin-top: 10px;
                  margin-right: 10px;
                "
              />{{ advocate.location }} <br />
              <a-icon
                type="mail"
                style="
                  color: #3ea1ec;
                  font-size: 20px;
                  margin-top: 10px;
                  margin-right: 10px;
                "
              />{{ advocate.email }} <br />
              <a-icon
                type="phone"
                style="
                  color: #3ea1ec;
                  font-size: 20px;
                  margin-top: 10px;
                  margin-right: 10px;
                "
              />{{ advocate.phone }}
            </div>
          </a-col>
          <a-col
            :span="24"
            :md="12"
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <a-radio-group v-model="profileHeaderBtns" size="small">
              <a-radio-button value="overview" @click="moveToHome">
                View More Profiles
              </a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>
      </template>
    </a-card>
    <!-- User Profile Card -->

    <a-row type="flex" :gutter="24">
      <a-col :span="24" :md="4" class="mb-24"> </a-col>
      <!-- Platform Settings Column -->
      <a-col :span="24" :md="16" class="mb-24">
        <!-- Platform Settings Card -->
        <CardPlatformSettings :advocate="advocate"></CardPlatformSettings>
        <!-- / Platform Settings Card -->
      </a-col>
      <!-- / Platform Settings Column -->

      <!-- Profile Information Column -->
      <a-col :span="24" :md="44" class="mb-24"> </a-col>
      <!-- / Profile Information Column -->

      <!-- Conversations Column -->
      <!-- / Conversations Column -->
    </a-row>
  </div>
</template>

<script>
import CardPlatformSettings from "../components/Cards/CardPlatformSettings";
import CardProfileInformation from "../components/Cards/CardProfileInformation";
import CardConversations from "../components/Cards/CardConversations";
import CardProject from "../components/Cards/CardProject";


import * as fb from "../firebase";
import router from "../router/index";
export default {
  components: {
    CardPlatformSettings,
    CardProfileInformation,
    CardConversations,
    CardProject,
  },
  data() {
    return {
      // Active button for the "User Profile" card's radio button group.
      profileHeaderBtns: "overview",
      advocate: {},
    };
  },
  methods: {
    moveToHome(){
      router.push('/')

    },
    fetchDetails() {
      fb.usersCollection
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          this.advocate = doc.data();
        });
    },
    updateProfileVisits() {
      fb.usersCollection.doc(this.$route.params.id).update({
        profile_visits: fb.types.FieldValue.increment(),
      });
    },
  },
  mounted() {
    this.fetchDetails();
  },
};
</script>

<style lang="scss"></style>
