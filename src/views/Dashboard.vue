<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="orders"
      :rowKey="(record) => record.id"
    >
      <a slot="time" slot-scope="text">{{
        text.timestamp.toDate()
      }}</a>
      			<template slot="status" slot-scope="status">
				<a-tag class="tag-status" v-if="status=='Pending'" color="orange">
					{{ status }}
				</a-tag>
        <a-tag class="tag-status" v-if="status=='complete'" color="green">
					{{ status }}
				</a-tag>
        <a-tag class="tag-status" v-if="status=='assigned'" color="pink">
					{{ status }}
				</a-tag>
			</template>
      <template slot="editBtn" slot-scope="text, row">
        <a-modal
          v-model="visible"
          :data-id="row.id"
          :title="'Order No:' + currentRecord.id"
          on-ok="handleOk"
          v-if="currentRecord"
        >
          <template slot="footer">
            <a-button key="back" @click="handleCancel"> Close </a-button>
            <a-button
              key="submit"
              type="primary"
              :loading="loading"
              @click="
                () => {
                  handleSubmit(currentRecord.id, currentRecord.userId);
                }
              "
            >
              Submit
            </a-button>
          </template>
          <a-form
            :form="form"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-form-item label="Select Rider">
              <a-select
                v-decorator="[
                  'rider',
                  {
                    rules: [
                      { required: false, message: 'Please select rider!' },
                    ],
                  },
                ]"
                placeholder="Select a option and change input text above"
              >
                <a-select-option
                  v-for="(rider, index) of riders"
                  :key="index"
                  :value="rider.id"
                >
                  {{ rider.name }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
        </a-modal>
        <a-button
          type="link"
          :data-id="row.key"
          @click="
            () => {
              showModal(row);
            }
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-gray-7"
              d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
            />
            <path
              class="fill-gray-7"
              d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
            />
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
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'id',
    scopedSlots: { customRender: 'id' },
  },
  {
    title: 'Time',
    scopedSlots: { customRender: 'time' },

  },

  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    key: 'amount',
    key:'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
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
    scopedSlots: { customRender: 'status' },
  },
  {
    title: 'Rider',
    dataIndex: 'rider_name',
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
      currentRecord:null
    };
  },

  computed: {
    ...mapState(["users",'orders','riders']),
    user(){
      return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted(){
	this.$store.dispatch('getRiders')
  },
  methods:{
     formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
},
    handleSubmit(id,userid) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values,id,userid);
          this.loading=true
          const assignedRider=this.riders.find((r)=>r.id===values.rider)
          updateOrder(id,userid,{
            rider_name:assignedRider.name,
            assigned_rider:assignedRider,
            status:'assigned'
          }).then(()=>{
            this.loading=false
            this.visible=false
            location.reload()
          
          }).catch((err)=>{
            this.loading=false
            console.log(err)
          })
        }
      });
    },
    showModal(record) {
      this.currentRecord = record;
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
