<template>
  <!-- Profile Information Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full card-profile-information"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    :headStyle="{ paddingRight: 0 }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Biography</h6>
    </template>
    <p class="text-dark">
      {{ advocate.biography }}
    </p>
    <hr class="my-25" />
    <a-descriptions :column="1">
      <div
        label="Social"
        style="display: flex; align-items: center; justify-content: center"
      >
        <h3>Contact</h3>
     
		<ShareNetwork
          network="email"
          url="https://acelitigator.com"
          :title="'Hello'+ advocate.first_name +'I found your contact on'"
          description="and would like to engage your legal services"
        >
		<a-button
          icon="mail"
          type="secondary"
          class="mx-5 px-5"
          style="font-size: 18px"
          >Send Mail</a-button
        >
        </ShareNetwork>
        <a-button
          icon="phone"
          type="primary"
          class="mx-5 px-5"
          style="font-size: 18px"
          >Call {{ advocate.phone }}</a-button
        >

		<ShareNetwork
          network="linkedin"
          url="https://acelitigator.com"
          :title="'Hello'+ advocate.first_name +'I found your contact on'"
          description="and would like to engage your legal services"
        >
		<a-button
          icon="linkedin"
          class="mx-5 px-5"
          style="color: #3ea1ec; font-size: 18px"
          >View on linkedin</a-button
        >
        </ShareNetwork>
        <ShareNetwork
          network="whatsapp"
          url="https://acelitigator.com"
          :title="'Hello'+ advocate.first_name +'I found your contact on'"
          description="and would like to engage your legal services"
        >
		<a-button
          icon="wechat"
          class="mx-5 px-5"
          style="color: #00a884; font-size: 20px"
          >Whatsapp</a-button
        >
        </ShareNetwork>
      </div>
    </a-descriptions>
  </a-card>
  <!-- / Profile Information Card -->
</template>

<script>
export default {
  props: ["advocate"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.icon-list {
  font-size: 68px;
  margin-bottom: 10px;
}
</style>
