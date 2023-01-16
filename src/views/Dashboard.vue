<template>
  <div>
    <!-- Table & Timeline -->
    <a-row
      :gutter="24"
      type="flex"
      align="stretch"
      v-if="user.status == 'active'"
    >
      <!-- Table -->
      <a-col :span="24" :lg="8" class="mb-24">
        <!-- Projects Table Card -->
        
        <CardInfo2></CardInfo2>
        <!-- / Projects Table Card -->
      </a-col>
      <a-col :span="24" :lg="16" class="mb-24">
        <CardInvoices
					:data="user.invoices"
				></CardInvoices> </a-col>

    </a-row>
    <admin-dashboard v-if="user.status=='admin'"></admin-dashboard>
    <!-- / Table & Timeline -->
    <!-- / Charts -->
    <profile-information v-if="user.status!='admin'"></profile-information>
  </div>
</template>

<script>
// Bar chart for "Active Users" card.
import CardBarChart from "../components/Cards/CardBarChart";

// Line chart for "Sales Overview" card.
import CardLineChart from "../components/Cards/CardLineChart";

// Counter Widgets
import WidgetCounter from "../components/Widgets/WidgetCounter";

// "Projects" table component.
import CardProjectTable from "../components/Cards/CardProjectTable";

// Order History card component.
import CardOrderHistory from "../components/Cards/CardOrderHistory";
import ProfileInformation from "../components/forms/ProfileInformation.vue";

// Information card 1.
import CardInfo from "../components/Cards/CardInfo";

// Information card 2.
import CardInfo2 from "../components/Cards/CardInfo2";
import CardInvoices from "../components/Cards/CardInvoices"

// "Invoices" list data.
const invoiceData = [
  {
    title: "June, 25, 2019",
    code: "#QW-103578",
    amount: "400",
  },
  {
    title: "March, 03, 2019",
    code: "#AR-803481",
    amount: "700",
  },
];

// "Your Transactions" list data.
const transactionsData = [
  {
    period: "NEWEST",
  },
  {
    title: "Netflix",
    datetime: "27 March 2021, at 12:30 PM",
    amount: "2,500",
    type: -1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Apple",
    datetime: "27 March 2021, at 04:30 AM",
    amount: "2,000",
    type: 1,
    status: "success",
  },
  {
    period: "YESTERDAY",
  },
  {
    title: "Stripe",
    datetime: "26 March 2021, at 12:30 AM",
    amount: "750",
    type: 1,
    status: "success",
  },
  {
    title: "HubSpot",
    datetime: "26 March 2021, at 11:30 AM",
    amount: "1,050",
    type: 1,
    status: "success",
  },
  {
    title: "Creative Tim",
    datetime: "26 March 2021, at 07:30 AM",
    amount: "2,400",
    type: 1,
    status: "success",
  },
  {
    title: "Webflow",
    datetime: "26 March 2021, at 04:00 AM",
    amount: "Pending",
    type: 0,
    status: "warning",
  },
];
import { mapState } from "vuex";
import * as fb from "../firebase";
import AdminDashboard from './AdminDashboard.vue';
export default {
  components: {
    CardBarChart,
    CardLineChart,
    WidgetCounter,
    CardProjectTable,
    CardOrderHistory,
    CardInfo,
    CardInfo2,
    ProfileInformation,
    CardInvoices,
    AdminDashboard
  },
  data() {
    return {

      // Associating "Invoices" list data with its corresponding property.
      invoiceData,

      // Associating "Your Transactions" list data with its corresponding property.
      transactionsData,
    };
  },

  computed: {
    ...mapState(["clients", "user"]),
  },
  mounted() {
    let user = fb.auth.currentUser;
    this.$store.dispatch("fetchUserProfile", user);
  },
};
</script>

<style lang="scss"></style>
