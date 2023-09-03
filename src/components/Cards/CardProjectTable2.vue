<template>
	<!-- Projects Table Column -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ padding: 0, }">
		<template #title>
			<a-row type="flex">
				<a-col :span="24" :md="12">
					<h5 class="font-semibold m-0">All Riders</h5>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-button type="primary" @click="showDrawer" class="mx-2">Add New Rider</a-button>
				</a-col>
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" :pagination="false">

			<template slot="name" slot-scope="text">
				<a>{{ text }}</a>
			</template>

			<a-space slot="members" slot-scope="members" :size="-12" class="avatar-chips">
				<template v-for="member in members">
					<a-avatar :key="member" size="small" :src="member" />
				</template>
			</a-space>

			<template slot="company" slot-scope="company">
				<h6 class="m-0">
					<img :src="company.logo" width="25" style="margin-right: 10px;">
					{{ company.name }}
				</h6>
			</template>

			<template slot="completion" slot-scope="completion">
				<div class="progress-right">
					<div class="text-right text-sm font-semibold text-muted pr-15">{{ completion.value || completion.value
						== 0 ? completion.value : completion }}%</div>
					<a-progress class="m-0"
						:percent="completion.value || completion.value == 0 ? completion.value : completion"
						:show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />
				</div>
			</template>

			<template slot="editBtn" slot-scope="row">
				<a-button type="link" :data-id="row.key">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path class="fill-gray-7"
							d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z" />
						<path class="fill-gray-7"
							d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" />
					</svg>
				</a-button>
			</template>

		</a-table>
		<a-drawer title="Add a New Rider" :width="720" :visible="visible" :body-style="{ paddingBottom: '80px' }"
			@close="onClose">
			<a-form :form="form" layout="vertical" hide-required-mark @submit.prevent="handleSubmit">
				<a-row :gutter="16">
					<a-col :span="12">
						<a-form-item label="Name">
							<a-input v-decorator="[
								'name',
								{
									rules: [{ required: true, message: 'Please enter name' }],
								},
							]" placeholder="Full Name" />
						</a-form-item>
					</a-col>
					<a-col :span="12">
						<a-form-item label="Phone Number">
							<a-input v-decorator="[
								'phone',
								{
									rules: [{ required: true, message: 'please enter phone number' }],
								},
							]" style="width: 100%"  placeholder="please enter phone number" />
						</a-form-item>
					</a-col>
				</a-row>
				<a-row :gutter="16">
					<a-col :span="12">
						<a-form-item label="Motor Bike">
							<a-input v-decorator="[
								'bike',
								{
									rules: [{ required: true, message: 'please enter motorbike' }],
								},
							]" style="width: 100%"  placeholder="please enter motorbike" />
						</a-form-item>
					</a-col>
				</a-row>
			</a-form>
			<div :style="{
				position: 'absolute',
				right: 0,
				bottom: 0,
				width: '100%',
				borderTop: '1px solid #e9e9e9',
				padding: '10px 16px',
				background: '#fff',
				textAlign: 'right',
				zIndex: 1,
			}">
				<a-button :style="{ marginRight: '8px' }" @click="onClose">
					Cancel
				</a-button>
				<a-button type="primary" @click="handleSubmit" :loading="loading">
					Submit
				</a-button>
			</div>
		</a-drawer>
	</a-card>
	<!-- / Projects Table Column -->
</template>

<script>
import { mapState } from 'vuex';
import { addRider } from '../../database/firestore';


export default ({
	props: {
		data: {
			type: Array,
			default: () => [],
		},
		columns: {
			type: Array,
			default: () => [],
		},
		user: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {

			projectHeaderBtns: 'all',
			showModal: false,
			form: this.$form.createForm(this),
			visible: false,
			loading:false

		}
	},

	computed: {
		...mapState(["riders"]),
	},
	methods: {
		showDrawer() {
			this.visible = true;
			
		},
		onClose() {
			this.visible = false;
		},
		getCurrentStyle(current, today) {
			const style = {};
			if (current.date() === 1) {
				style.border = '1px solid #1890ff';
				style.borderRadius = '50%';
			}
			return style;
		},
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					
					const payload={
						name:values.name,
						phone:values.phone,
						bike:values.bike,
						
					}
					addRider(payload).then(()=>{
						this.loading=false
						this.visible=false
						location.reload()
					
					}).catch((err)=>{
						this.loading=false	
					})
				}
			});
		},
	},
	

})

</script>