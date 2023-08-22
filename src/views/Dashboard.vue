<template>
  <div>
    <a-table :columns="columns" :data-source="orders">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <template slot="editBtn" slot-scope="row">
      <a-modal v-model="visible" :title="'Order No:'+ row.id" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Close
        </a-button>
        <a-button key="submit" type="primary" @click="()=>{handleSubmit(row.key,row.user)}">
          Submit
        </a-button>
      </template>
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
 
    <a-form-item label="Select Rider">
      <a-select
        v-decorator="[
          'rider',
          { rules: [{ required: false, message: 'Please select rider!' }] },
        ]"
        placeholder="Select a option and change input text above"
        
      >
        <a-select-option  v-for="(rider,index) of riders" :key="index" :value="rider.name">
          {{ rider.name }}
        </a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
    </a-modal>
				<a-button type="link" :data-id="row.key" @click="showModal">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path class="fill-gray-7"
							d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z" />
						<path class="fill-gray-7"
							d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" />
					</svg>
				</a-button>
			</template>
  </a-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { updateOrder } from '../database/firestore';
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
  {
			title: 'Edit',
			scopedSlots: { customRender: 'editBtn' },
		},

];
export default {
  components: {
  },
  data() {
    return {
      columns,
      loading: false,
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },

  computed: {
    ...mapState(["users",'orders',,'riders']),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted(){
	this.$store.dispatch('getRiders')
  },
  methods:{
    handleSubmit(id,userid) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values,id,userid);
          this.loading=true
          updateOrder(id,userid,{
            rider_name:values.rider
          }).then(()=>{
            this.loading=false
            this.visible=false
          
          }).catch((err)=>{
            this.loading=false
            console.log(err)
          })
        }
      });
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      console.log(e)
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
  }
};
</script>

<style lang="scss"></style>
