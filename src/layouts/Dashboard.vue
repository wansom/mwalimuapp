<template>
  <div class="min-h-full">
    <nav class="bg-gray-800 sticky top-0 z-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/"><img class="h-16 w-16" src="/images/logos.png" alt="logo" /></router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/dashboard">
                  <a href="#" class=" text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page">Orders</a>
                </router-link>
                <router-link to="/riders">
                  <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Riders</a>
                </router-link>
                <router-link to="/wallet">
                  <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Payments</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:flex">

            <a-dropdown class="ml-4 flex items-center md:ml-6">
              <button type="button"
                class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
               
                <img class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
              </button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/profile"> Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/forgot-password">Change Password</router-link>
                </a-menu-item>
                <a-menu-item>
                  <span @click="logout">Sign Out</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button type="button"
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu" aria-expanded="false" @click="mobileMenu = !mobileMenu">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu" v-if="mobileMenu">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">

          <router-link to="/dashboard">
            <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page" >Dashboard</a>
          </router-link>
          <router-link to="/profile">
            <a href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">My
              Profile</a>
          </router-link>
          <router-link to="/requests">
            <a href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Requests</a>
          </router-link>
          <router-link to="/chat">
            <a href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Chat</a>
          </router-link>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <a-dropdown class="ml-4 flex items-center md:ml-6">
              <button type="button"
                class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                
                <img class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
              </button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/profile"> Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/forgot-password">Change Password</router-link>
                </a-menu-item>
                <a-menu-item>
                  <span @click="logout">Sign Out</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>

          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import DashboardSidebar from "../components/Sidebars/DashboardSidebar";
import DashboardHeader from "../components/Headers/DashboardHeader";
import DashboardFooter from "../components/Footers/DashboardFooter";
import { mapState } from "vuex";
import { auth } from "../database/index";
import { arrayRemove } from "@firebase/firestore";
import { updateAdvocate } from "../database/firestore";

export default {
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,

      // Main sidebar color.
      sidebarColor: "primary",

      // Main sidebar theme : light, white, dark.
      sidebarTheme: "light",

      // Header fixed status.
      navbarFixed: false,
      showSettingsDrawer: false,
      top: 0,
      searchLoading: false,
      wrapper: document.body,
      lists: [],
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      mobileMenu: false
    };
  },
  methods: {
    toggleSidebar(value) {
      this.sidebarCollapsed = value;
    },
    toggleSettingsDrawer(value) {
      this.showSettingsDrawer = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
    updateSidebarTheme(value) {
      this.sidebarTheme = value;
    },
    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
    resizeEventHandler() {
      this.top = this.top ? 0 : -0.01;
    },
    logout() {
      this.$store.dispatch("logout");
    },
    removeNotification(item) {
      this.loading = true;
      updateAdvocate(auth.currentUser.uid, {
        notifications: arrayRemove(item),
      })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    clearAll() {
      this.loading = true;
      updateAdvocate(auth.currentUser.uid, { notifications: [] })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapState(["users"]),
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },

    user() {
      return this.users.filter((i) => i.id == auth.currentUser.uid)[0];
    },
  },
  mounted: function () {
    // Set the wrapper to the proper element, layout wrapper.
    this.wrapper = document.getElementById("layout-dashboard");
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
