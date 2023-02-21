<template>
  <div>
    <Table :columns="columns" :tableData="courtData" :title="title"></Table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/Tables/DataTable.vue";

const columns = [
	
  {
    title: "Court Number",
    dataIndex: "court_number",
  },
  {
    title: "Name of Presiding Judge",
    dataIndex: "name_of_judge",
  },
  {
    title: "Location",
    dataIndex: "location",
    scopedSlots: { customRender: "location" },
  },
  {
    title: "Name of Court Registrar",
    dataIndex: "name_of_registrar",
  },
  {
    title: "Contact of Court Registrar",
    dataIndex: "contact_of_registrar",
  },
  {
    title: "",
    scopedSlots: { customRender: "editBtn" },
    width: 50,
  },
];
export default {
  components: { Table },
  data() {
    return {
      columns,
      title: "Courts",
    };
  },
  computed: {
    ...mapState(["courtData"]),
  },
  mounted() {
    this.$store.dispatch("fetchCourts");
  },
};
</script>

<style></style>
