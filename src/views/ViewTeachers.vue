<template>
	<div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200 px-20 py-10"
          v-if="teachers.length > 0"
        >
          <div v-for="advocate in teachers" :key="advocate.id" class="">
            <card-info :advocate="advocate"></card-info>
          </div>
        </div>

	</div>
</template>

<script>

	// "Authors" table component.
	import { mapState } from 'vuex';
    import CardInfo from "../components/Cards/CardInfo.vue";
	export default ({
		components: {
			CardInfo
		},
		data() {
			return {
				// Associating "Authors" table columns with its corresponding property.
				table1Columns: table1Columns,
			}
		},
        computed: {
    ...mapState(["users",'lessons']),
    teachers(){
      return this.users.filter((i)=>i.account_type=='teacher')
    }}
	})

</script>

<style lang="scss">
</style>