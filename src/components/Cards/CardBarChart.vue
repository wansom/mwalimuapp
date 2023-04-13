<template>
  <!-- Active Users Card -->
  <a-card :bordered="false" class="dashboard-bar-chart">
    <chart-line :height="350" :data="filteredChartData"></chart-line>
    <div class="card-title"></div>
    <a-row class="card-footer" type="flex" justify="start" align="middle">
      <a-col :span="6">
        <a-card :bordered="false" class="widget-1">
          <a-statistic
            title="Total Profile Views"
            :value="visitors.length"
            :precision="0"
            class="text-success"
          >
          </a-statistic>
          <div class="icon" v-html="icon"></div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-select v-model="selectedTimePeriod" style="width: 100%;" @change="updateChartLabels">
      <a-select-option value="thisWeek">Weekly Views</a-select-option>
      <a-select-option value="thisMonth">This Month</a-select-option>
      <a-select-option value="thisYear">This Year</a-select-option>
    </a-select>
      </a-col>
    </a-row>
  </a-card>
  <!-- Active Users Card -->
</template>

<script>
// Bar chart for "Active Users" card.
import ChartBar from "../Charts/ChartBar";
import ChartLine from "../Charts/ChartLine";

export default {
  props: ["visitors"],
  components: {
    ChartBar,
    ChartLine,
  },
  data() {
    return {
      profileViewsData: [],
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      },
      selectedTimePeriod: 'thisWeek',
      icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
							<path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
							<path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
							<path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
						</svg>`,
      lineChartData: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#1890FF",
            borderWidth: 3,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      },
    };
  },
  computed: {
    filteredProfileViewsData() {
      // Filter profile views data based on selected time period
      const now = new Date();
      const cutoffDate =
        this.selectedTimePeriod === 'thisWeek'
          ? new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay())
          : this.selectedTimePeriod === 'thisMonth'
          ? new Date(now.getFullYear(), now.getMonth(), 1)
          : this.selectedTimePeriod === 'thisYear'
          ? new Date(now.getFullYear(), 0, 1)
          : null;

      if (!cutoffDate) {
        return [];
      }

      return this.visitors.filter(timestamp => timestamp.toDate() > cutoffDate);
    },
    chartLabels() {
      // Generate chart labels based on selected time period
      const now = new Date();
      const labels =
        this.selectedTimePeriod === 'thisWeek'
          ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
          : this.selectedTimePeriod === 'thisMonth'
          ? Array.from({ length: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() }, (_, i) =>
              (i + 1).toString()
            )
          : Array.from({ length: 12 }, (_, i) => new Date(now.getFullYear(), i).toLocaleString('en-us', { month: 'long' }));

      return labels;
    },
    filteredChartData() {
      // Prepare data for chart.js
      const data = this.filteredProfileViewsData.reduce((acc, timestamp) => {
        const date = timestamp.toDate();
        const label =
          this.selectedTimePeriod === 'thisWeek'
            ? date.toLocaleDateString('en-us', { weekday: 'short' })
            : this.selectedTimePeriod === 'thisMonth'
            ? date.toLocaleDateString('en-us', { day: 'numeric' })
            : `${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}`;

        acc[label] = acc[label] ? acc[label] + 1 : 1;
        return acc;
      }, {});
      const labels = Object.keys(data);
      const values = Object.values(data);

      return {
        labels: labels,
        datasets: [
          {
            label: 'Profile Views',
            data: values,
            backgroundColor: '#1890ff', // Ant Design primary color
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#1890FF",
            borderWidth: 3,
            maxBarThickness: 6,
          }
        ]
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      };
    }
  },
  methods:{
    loadData(value){
      console.log(this.filteredProfileViewsData,value)
      this.selectedTimePeriod =value
    },
    updateChartLabels() {
      // Update chart data labels when selected time period changes
      this.chartData.labels = this.chartLabels;
    }
  },
  mounted() {
  // Set initial chart data and labels
  this.chartData = {
    labels: this.chartLabels,
    datasets: [
      {
        label: 'Profile Views',
        data: this.chartLabels.map(label => this.filteredProfileViewsData.filter(timestamp => {
          const date = timestamp.toDate();
          if (this.selectedTimePeriod === 'thisWeek') {
            return date.toLocaleDateString('en-us', { weekday: 'short' }) === label;
          } else if (this.selectedTimePeriod === 'thisMonth') {
            return date.toLocaleDateString('en-us', { day: 'numeric' }) === label;
          } else if (this.selectedTimePeriod === 'thisYear') {
            return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}` === label;
          }
        }).length)
      }
    ]
  };
}
};
</script>
