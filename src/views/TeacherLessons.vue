

 <template>
	<div>
		<!-- Projects Table -->
		<a-row :gutter="24" type="flex">

			<!-- Projects Table Column -->
			<a-col :span="24" class="mb-24">

				<!-- Projects Table Column -->
				<CardProjectTable2
				:user="user"
					:data="riders"
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
			title: ' Full Name',
			dataIndex: 'name',
			scopedSlots: { customRender: 'name' },
			width: 300,
		},
		{
			title: 'Phone Number',
			dataIndex: 'phone',
			class: 'font-semibold text-muted',
		},
		{
			title: 'Motor Bike',
			dataIndex: 'bike',
			class: 'font-semibold text-muted text-sm',
		},
	
	];
	import * as fb from "../firebase";
	export default ({
		components: {
			CardProjectTable2,
		},
		data() {
			return {

				// Associating "Projects" table columns with its corresponding property.
				table2Columns: table2Columns,
			}
		},
		computed: {
    ...mapState(["users",'riders']),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted(){
	this.$store.dispatch('getRiders')
  }
	})

</script>

<style lang="scss">
</style>