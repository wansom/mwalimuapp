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
        <a-select v-model="selectedTimePeriod" style="margin-left: 16px;width: 100%;" @change="loadData">
      <a-select-option value="day">Today</a-select-option>
      <a-select-option value="week">Last Week</a-select-option>
      <a-select-option value="month">Last Month</a-select-option>
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
      selectedTimePeriod: 'day',
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
    loadedVisits(){
      let visitos=[]
      for(let i=0;i<=this.visitors.lenght;i++){
        visitos.push(this.visitors[i].toDate())
      }
      return visitos
    },
    formattedDate(){
      return "hello world"
    },
    filteredProfileViewsData() {
      // Filter profile views data based on selected time period
      const now = new Date();
      const cutoffDate =
        this.selectedTimePeriod === 'day'
          ? new Date(now.getTime() - 24 * 60 * 60 * 1000)
          : this.selectedTimePeriod === 'week'
          ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          : new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      return this.visitors.filter(view =>view.toDate() > cutoffDate);
    },
    filteredChartData() {
      // Prepare data for chart.js
      const data = this.filteredProfileViewsData.reduce((acc, view) => {
        const date = view.toDate().toDateString();
        acc[date] = acc[date] ? acc[date] + 1 : 1;
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
    loadData(){
      console.log(this.filteredProfileViewsData, this.visitors[0].toDate(),this.loadedVisits)
    }
  }
};
</script>
