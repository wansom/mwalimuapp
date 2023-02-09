<template>
  <!-- Layout Header ( Navbar ) -->
  <a-layout-header>
    <div class="header-col header-brand">
      <img src="images/logo.png" alt="" style="height: 80px" class="bg-dark" />

      <!-- Trigger Button For Navigation Menu For Small Screens -->
      <a-button
        type="link"
        @click="collapseNav = collapseNav ? 0 : 1"
        class="btn-menu-trigger"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </a-button>
      <!-- Trigger Button For Navigation Menu For Small Screens -->
    </div>
    <div class="header-col header-nav">
      <!-- Navigation Menu For Large Screens -->
      <!-- <a-menu mode="horizontal" class="menu-large">
        <a-menu-item>
          <router-link
            to="/marketplace"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Find Lawyers</span>

          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link
            to="/marketplace"
            class="nav-link"
            @click="(e) => e.preventDefault()"
          >
            <span>Resources</span>
            
          </router-link>
        </a-menu-item>
      </a-menu> -->
      <!-- / Navigation Menu For Large Screens -->

      <!-- Collapsible Navigation Menu For Small Screens -->
      <div class="menu-small">
        <!-- Collapsible Component For Navigation Menu For Small Screens -->
        <a-collapse v-model="collapseNav" accordion>
          <a-collapse-panel key="1">
            <!-- Navigation Menu For Small Screens -->
            <a-menu mode="vertical">
              <a-menu-item>
                <a-button
                  href="/sign-up"
                  type="primary"
                  shape="round"
                  class="text-light"
                  >Advocate SIGN UP</a-button
                >
              </a-menu-item>
            </a-menu>
            <!-- / Navigation Menu For Small Screens -->
          </a-collapse-panel>
        </a-collapse>
        <!-- / Collapsible Component For Navigation Menu For Small Screens -->
      </div>
      <!-- / Collapsible Navigation Menu For Small Screens -->
    </div>
    <div class="header-col header-btn">
      <a-button href="/sign-up" type="primary" shape="round"
        >ADVOCATE SIGN UP</a-button
      >
    </div>
    <a-divider type="vertical" style="height: 100%;"/>
    <div class="header-col header-btn mx-5">
      <a-menu  mode="horizontal" v-if="user.status">
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="user" />My Account</span
        >
        <a-menu-item key="setting:1"><a-icon type="setting" />
           My Profile
           <router-link to="dashboard"></router-link>
          </a-menu-item>
          <a-menu-item key="setting:2"><a-icon type="logout" @click="logout"/>
          <a-button type="link" @click="logout"> Logout</a-button>
          </a-menu-item>
      </a-sub-menu>
    </a-menu>
      <a-button href="/sign-in" type="link" class="text-white" v-else
        >LOGIN</a-button
      >
    </div>
    
  </a-layout-header>
  <!-- / Layout Header ( Navbar ) -->
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      // Collapse navigation value.
      // Binded model property for "Collapsible Navigation Menu" collapsed status .
      collapseNav: 0,
    };

  },
  methods:{
logout(){
  this.$store.dispatch("logout")
}
  },
  computed: {
    ...mapState(["user"]),

  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped>
.nav-link svg {
  margin-right: 5px;
  vertical-align: middle;
}
.nav-link span {
  vertical-align: middle;
}
.ant-menu-submenu-popup {
  width: 100%;
}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
  .header-btn{
    display: none;
  }
}
</style>
