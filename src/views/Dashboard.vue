<template>
  <div>
    <!-- Charts -->
		<a-row :gutter="24" type="flex" align="stretch"  v-if="user.status == 'complete'">
			<a-col :span="24"  class="mb-4">

				<!-- Active Users Card -->
				<CardBarChart :visitors="user.profile_visits"></CardBarChart>
				<!-- Active Users Card -->
			</a-col>
			<a-col :span="24"  class="mb-24">
        <CardInvoices
				:first_name="user.first_name"
				:last_name="user.last_name"
				:data="user.invoices"
          		:date="user.subscription_date"
				></CardInvoices> 
			</a-col>
		</a-row>
    <admin-dashboard v-else-if="user.account_type=='student'"></admin-dashboard>
    <profile-information v-else></profile-information>
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
import TopLawyers from "../components/Cards/TopLawyers";

// Order History card component.
import CardOrderHistory from "../components/Cards/CardOrderHistory";
import ProfileInformation from "../components/forms/ProfileInformation.vue";

// Information card 1.
import CardInfo from "../components/Cards/CardInfo";

// Information card 2.
import CardInfo2 from "../components/Cards/CardInfo2";
import CardInvoices from "../components/Cards/CardInvoices"
import AdminDashboard from "./AdminDashboard.vue";
import { mapState } from "vuex";
import * as fb from "../firebase";
export default {
  components: {
    CardBarChart,
    CardLineChart,
    WidgetCounter,
    TopLawyers,
    CardOrderHistory,
    CardInfo,
    CardInfo2,
    ProfileInformation,
    CardInvoices,
    AdminDashboard
  },
  data() {
    return {
    };
  },

  computed: {
    ...mapState(["users",]),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss"></style>
