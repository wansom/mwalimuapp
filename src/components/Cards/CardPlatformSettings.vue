<template>

	<!-- Platform Settings Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: 0 }">
		<template #title>
			<h6 class="font-semibold m-0"></h6>
		</template>
		<a-collapse accordion>
      <a-collapse-panel key="1" header="PROFESSIONAL EXPERIENCE">
        <div style="background:#ffffff;display: flex;justify-content: space-between;">
			<h5>Current Employer:</h5>
			<span>{{advocate.current_employer}}</span>
			<span>{{advocate.current_starting}}</span>
		</div>
		<p>{{advocate.prev2}}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="EDUCATION" :disabled="false">
		<div style="background:#ffffff;display: flex;justify-content: space-between;">
			<h5>Law School:</h5>
			<span>{{advocate.law_school}}</span>
			<span>{{advocate.law_ending}}</span>
		</div>
		<div style="background:#ffffff;display: flex;justify-content: space-between;">
			<h5>Postgraduate Diploma:</h5>
			<span>{{advocate.postgraduate_diploma}}</span>
			<span>{{advocate.postgraduate_diploma_end}}</span>
		</div>
       
      </a-collapse-panel>
      <a-collapse-panel key="3" header="BIOGRAPHY">
        <p>{{ advocate.biography }}</p>
      </a-collapse-panel>
    </a-collapse>
	<div
        label="Social"
        style="display: flex; align-items: center; justify-content: center;margin-bottom: 20px;margin-top: 20px;"
      >
     
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
	</a-card>
	<!-- / Platform Settings Card -->

</template>

<script>
import { mapState } from "vuex"

	export default ({
		props:['advocate'],
		data() {
			return {
				// Binded model property for "Platform Settings" switch button for "Email ... follows me" .
				emailForFollows: true,

				// Binded model property for "Platform Settings" switch button for "Email ... answers me" .
				emailForAnswers: false,

				// Binded model property for "Platform Settings" switch button for "Email ... mentions me" .
				emailForMentions: true,

				// Binded model property for "Platform Settings" switch button for "New launches and projects" .
				emailForNewProjects: true,

				// Binded model property for "Platform Settings" switch button for "Monthly product updates" .
				emailForProductUpdates: false,

				// Binded model property for "Platform Settings" switch button for "Subscribe to newsletter" .
				emailForNewsletter: true,
			}
		},
	})

</script>