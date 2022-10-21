<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <a-result
    v-if="status=='notsubmitted'"
      status="500"
      title="Profile Not Submitted"
      sub-title="Sorry, You can only make payment once your profile has been approved"
    >
      <template #extra>
        <a-button type="primary"> Submit Profile </a-button>
      </template>
    </a-result>
    <a-result
    v-if="status=='pending approval'"
      status="404"
      title="Account Pending review"
      sub-title="Your Details are currently being reviewed,you will be notified to make payments once your account has been approved"
    >
      <template #extra>
        <a-button type="primary"> Submit Profile </a-button>
      </template>
    </a-result>
    <CardPaymentMethods v-if="status=='approved'"></CardPaymentMethods>
  </a-card>
</template>

<script>
import CardPaymentMethods from '../Cards/CardPaymentMethods.vue';
export default {
    data() {
        return {
            optons: ["notsubmitted", "pending approval", "approved", "active"],
            status: "approved"
        };
    },
    components: { CardPaymentMethods }
};
</script>

<style></style>
