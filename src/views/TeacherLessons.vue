

 <template>
	<div>
		<!-- Projects Table -->
		<a-row :gutter="24" type="flex">

			<!-- Projects Table Column -->
			<a-col :span="24" class="mb-24">

				<!-- Projects Table Column -->
				<CardProjectTable2
				:user="user"
					:data="table2Data"
					:columns="table2Columns"
				></CardProjectTable2>
				<!-- / Projects Table Column -->

			</a-col>
			<!-- / Projects Table Column -->

		</a-row>
		<!-- / Projects Table -->

	</div>
</template>

<script>

	// "Projects" table component.
	import { mapState } from 'vuex';
import CardProjectTable2 from '../components/Cards/CardProjectTable2' ;
	
	// "Projects" table list of columns and their properties.
	const table2Columns = [
		{
			title: 'LESSON',
			dataIndex: 'company',
			scopedSlots: { customRender: 'company' },
			width: 300,
		},
		{
			title: 'COST',
			dataIndex: 'budget',
			class: 'font-semibold text-muted',
		},
		{
			title: 'TYPE',
			dataIndex: 'status',
			class: 'font-semibold text-muted text-sm',
		},
		{
			title: 'REGISTRATIONS',
			scopedSlots: { customRender: 'completion' },
			dataIndex: 'completion',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

	// "Projects" table list of rows and their properties.
	const table2Data = [
		{
			key: '1',
			company: {
				name: 'Spotify Version',
				logo: 'images/logos/logo-spotify.svg',
			},
			status: "Online",
			budget: '$14,000',
			completion: 60,
		},
		{
			key: '2',
			company: {
				name: 'Progress Track',
				logo: 'images/logos/logo-atlassian.svg',
			},
			status: "Physical",
			budget: '$3,000',
			completion: 10,
		},
		{
			key: '3',
			company: {
				name: 'Jira Platform Errors',
				logo: 'images/logos/logo-slack.svg',
			},
			status: "Online",
			budget: 'Not Set',
			completion: {
				status: 'success',
				value: 100,
			},
		},
		{
			key: '4',
			company: {
				name: 'Launch new Mobile App',
				logo: 'images/logos/logo-spotify.svg',
			},
			status: "Physical",
			budget: '$20,600',
			completion: {
				status: 'exception',
				value: 50,
			},
		},
	];
	import * as fb from "../firebase";
	export default ({
		components: {
			CardProjectTable2,
		},
		data() {
			return {

				// Associating "Projects" table data with its corresponding property.
				table2Data: table2Data,

				// Associating "Projects" table columns with its corresponding property.
				table2Columns: table2Columns,
			}
		},
		computed: {
    ...mapState(["users",'lessons']),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted
	})

</script>

<style lang="scss">
</style>