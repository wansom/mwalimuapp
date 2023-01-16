<template>

	<!-- Authors Table Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h5 class="font-semibold m-0">Approval Requests</h5>
				</a-col>
				<!-- <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-radio-group v-model="authorsHeaderBtns" size="small">
						<a-radio-button value="all">ALL</a-radio-button>
						<a-radio-button value="online">ONLINE</a-radio-button>
					</a-radio-group>
				</a-col> -->
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="requests" :pagination="false">

			<template slot="author" slot-scope="author">
				<div class="table-avatar-info">
					<a-avatar shape="square" :src="author.avatar" />
					<div class="avatar-info">
						<h6>{{ author.name }}</h6>
						<p>{{ author.email }}</p>
					</div>
				</div>
			</template>

			<template slot="func" slot-scope="func">
				<div class="author-info">
					<h6 class="m-0">{{ func.job }}</h6>
					<p class="m-0 font-regular text-muted">{{ func.department }}</p>
				</div>
			</template>

			<template slot="status" slot-scope="status">
				<a-tag class="tag-status" :class="status ? 'ant-tag-primary' : 'ant-tag-muted'">
					{{ status ? "ONLINE" : "OFFLINE" }}
				</a-tag>
			</template>

			<template slot="editBtn" slot-scope="row">
				<router-link :to="'/request/'+row.id">
				<a-button type="link" :data-id="row.key" class="btn-edit">
					View 
				</a-button></router-link>
			</template>

		</a-table>
	</a-card>
	<!-- / Authors Table Card -->

</template>

<script>
import { mapState } from "vuex";

	// "Authors" table list of columns and their properties.
	const columns = [
		{
			title: 'First Name',
			dataIndex: 'first_name',
		},
		{
			title: 'Last Name',
			dataIndex: 'last_name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			scopedSlots: { customRender: 'email' },
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];
	export default ({
		props: {
			data: {
				type: Array,
				default: () => [],
			},
		},
		data() {
			return {
				// Active button for the "Authors" table's card header radio button group.
				authorsHeaderBtns: 'all',
				columns
			}
		},
		computed: {
    ...mapState(["requests", "user"]),
  },
  mounted(){
    this.$store.dispatch("fetchRequests")
  }
	})

</script>