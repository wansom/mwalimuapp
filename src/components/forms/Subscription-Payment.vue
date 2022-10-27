<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <a-result
      v-if="user.status == 'pending approval'"
      status="404"
      title="Account Pending review"
      sub-title="Your Details are currently being reviewed,you will be notified to make payments once your account has been approved"
    > 
    </a-result>
    <CardPaymentMethods v-else-if="user.status == 'approved'" :user="user"></CardPaymentMethods>
    <a-result
    v-else-if="user.status == 'active'"
    status="success"
    title="Your Account currently is Active!"
    sub-title="You will be required to renew your subsction on"
  >
  </a-result>
    <a-result
      v-else
      status="500"
      title="Profile Not Submitted"
      sub-title="Sorry, You can only make payment once your profile has been approved"
    >
      <template #extra>
        <a-button type="primary"> Submit Profile </a-button>
      </template>
    </a-result>
  </a-card>
</template>

<script>
import CardPaymentMethods from "../Cards/CardPaymentMethods.vue";
import * as fb from "../../firebase";
import { mapState } from "vuex";
export default {
  data() {
    return {
      optons: ["notsubmitted", "pending approval", "approved", "active"],
      status: "approved",
    };
  },
  components: { CardPaymentMethods },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    let user = fb.auth.currentUser;
    this.$store.dispatch("fetchUserProfile", user);
  },
};
</script>

<style></style>
