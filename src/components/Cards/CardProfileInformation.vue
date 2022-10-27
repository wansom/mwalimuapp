<template>

	<!-- Profile Information Card -->
	<a-card :bordered="false" class="header-solid h-full card-profile-information" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }" :headStyle="{paddingRight: 0,}">
		<template #title>
			<h6 class="font-semibold m-0">Profile Information</h6>
		</template>
		<p class="text-dark">
			{{advocate.biography}}
		</p>
		<hr class="my-25">
		<a-descriptions :column="1">
			<a-descriptions-item label="Full Name">
				{{advocate.first_name}}<span class="mx-5"></span>{{advocate.last_name}}
			</a-descriptions-item>
			<a-descriptions-item label="Mobile">
				{{advocate.phone}}
			</a-descriptions-item>
			<a-descriptions-item label="Email">
				{{advocate.email}}
			</a-descriptions-item>
			<a-descriptions-item label="Location">
				{{advocate.location}}
			</a-descriptions-item>
			<div label="Social" style="display:flex; align-items:center;justify-content:center;">
				<h1>Contact</h1>
				<a href="#" class="mx-5 px-5">
					<a-icon type="twitter" style="color: #3EA1EC;font-size: 40px;" />
				</a>
				<a href="#" class="mx-5 px-5">
					<a-icon type="wechat" style="color: #00A884;font-size: 40px;" />
				</a>
				<a href="#" class="mx-5 px-5">
					<a-icon type="linkedin" style="color: #3EA1EC;font-size: 40px;" />
				</a>
				<a href="#" class="mx-5 px-5">
					<a-icon type="phone" style="color: #E1306C;font-size: 40px;" />
				</a>
			</div>
		</a-descriptions>
	</a-card>
	<!-- / Profile Information Card -->

</template>

<script>

	export default ({
		props:['advocate'],
		data() {
			return {
			}
		},
	})

</script>
<style scoped>

  .icon-list{
    font-size: 68px;
    margin-bottom: 10px;

  }
</style>