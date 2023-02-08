<template>
  <!-- Main Sidebar -->
  <component :is="navbarFixed ? 'a-affix' : 'div'" :offset-top="top">
    <!-- Layout Header -->
    <a-layout-header>
      <a-row type="flex">
        <!-- Header Breadcrumbs & Title Column -->
        <a-col :span="24" :md="6">
          <!-- Header Breadcrumbs -->
          <a-breadcrumb>
            <a-breadcrumb-item
              ><router-link to="/"> Home</router-link></a-breadcrumb-item
            >
            <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
          </a-breadcrumb>
          <!-- / Header Breadcrumbs -->

          <!-- Header Page Title -->
          <div class="ant-page-header-heading">
            <a-alert message="Account Waiting approval" banner  v-if="user.status=='pending approval'"/>
			<a-alert message="Your account has been approved.Proceed to Payment" banner  type="success" v-if="user.status=='approved'"/>
          </div>
          <!-- / Header Page Title -->
        </a-col>
      </a-row>
    </a-layout-header>
    <!--  /Layout Header -->
  </component>
  <!-- / Main Sidebar -->
</template>

<script>
import { mapState } from "vuex";
import * as fb from "../../firebase";

export default {
  props: {
    // Header fixed status.
    navbarFixed: {
      type: Boolean,
      default: false,
    },

    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // Fixed header/sidebar-footer ( Affix component ) top offset.
      top: 0,

      // Search input loading status.
      searchLoading: false,

      // The wrapper element to attach dropdowns to.
      wrapper: document.body,
      lists:[]
    };
  },
  methods: {
    resizeEventHandler() {
      this.top = this.top ? 0 : -0.01;
      // To refresh the header if the window size changes.
      // Reason for the negative value is that it doesn't activate the affix unless
      // scroller is anywhere but the top of the page.
    },
    onSearch(value) {},
    logout(){
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted: function () {
    // Set the wrapper to the proper element, layout wrapper.
    this.wrapper = document.getElementById("layout-dashboard");
    let user = fb.auth.currentUser;
    this.$store.dispatch("fetchUserProfile", user);
  },
  created() {
    // Registering window resize event listener to fix affix elements size
    // error while resizing.
    window.addEventListener("resize", this.resizeEventHandler);
  },
  destroyed() {
    // Removing window resize event listener.
    window.removeEventListener("resize", this.resizeEventHandler);
  },
};
</script>
