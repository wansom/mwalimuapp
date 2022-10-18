<template>

	<!-- Active Users Card -->
	<a-card :bordered="false" class="dashboard-bar-chart">
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">
			<a-col :span="12">
				<chart-bar :height="400" :data="barChartData"></chart-bar>
			</a-col>
			<a-col :span="12" >
				<div class="card-title">
			<h6>Profile Visits</h6>
			<p>than last week <span class="text-success">+23%</span></p>
		</div>
		<div class="card-content">
			<p>We have created multiple options for you to put together and customise into pixel perfect pages.</p>
		</div>
		<a-row class="card-footer" type="flex" justify="center" align="top">
			<a-col :span="6">
				<h4>3,6K</h4>
				<span>Visitors</span>
			</a-col>
			<a-col :span="6">
				<h4>2m</h4>
				<span>Clicks</span>
			</a-col>
			<a-col :span="6">
				<h4>$772</h4>
				<span>Sessions</span>
			</a-col>
		
		</a-row></a-col>
		</a-row>
		

	</a-card>
	<!-- Active Users Card -->

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartBar from '../Charts/ChartBar' ;

	export default ({
		components: {
			ChartBar,
		},
		data() {
			return {
				// Data for bar chart.
				barChartData: {
					labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
					datasets: [{
						label: "Sales",
						backgroundColor: '#fff',
						borderWidth: 0,
						borderSkipped: false,
						borderRadius: 6,
						data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
						maxBarThickness: 20,
					}, ],
				},
			}
		},
	})

</script>