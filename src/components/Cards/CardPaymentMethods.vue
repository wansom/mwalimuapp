<template>

	<!-- Payment Methods Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12" class="my-5">
					<h6 class="font-semibold mb-5">Account Subscription</h6>
					<p>Your account has been approved ,make payment to activate it</p>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-button type="primary">
						VERIFY PAYMENT
					</a-button>
				</a-col>
			</a-row>
		</template>
		<a-row :gutter="[24, 24]">
			<a-col :span="24" :md="8">
				<a-card class="payment-method-card">
					<img src="images/logos/mastercard-logo.png" alt="">
					<h6 class="card-number">CREDIT CARD</h6>
					<a-button type="dashed">
						PAY
					</a-button>
				</a-card>
			</a-col>
			<a-col :span="24" :md="8">
				<a-card class="payment-method-card">
					<img src="images/mpesa.png" alt="">
					<h6 class="card-number">MPESA</h6>
					<a-button type="dahsed">
					Pay
					</a-button>
				</a-card>
			</a-col>
			<a-col :span="24" :md="8">
				<a-card class="payment-method-card">
					
					<h6 class="card-number">DIRECT BANK TRANSFER</h6>
					<a-button type="dashed">
						PAY
					</a-button>
				</a-card>
			</a-col>
		</a-row>
	</a-card>
	<!-- Payment Methods Card -->

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
	})

</script>