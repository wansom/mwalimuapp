<template>
  <div>
    <a-table :columns="columns" :data-source="orders">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as fb from "../firebase";
const columns = [
  {
    title: 'ORDER ID',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: { customRender: 'id' },
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'DESTINATION',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: 'PICKUP LOCATION',
    dataIndex: 'sourceAddress',
    key: 'sourceAddress',
    ellipsis: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: 'Rider',
    dataIndex: 'rider',
    key: 'rider',
    ellipsis: true,
  },

];
export default {
  components: {
  },
  data() {
    return {
      columns
    };
  },

  computed: {
    ...mapState(["users",'orders']),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss"></style>
