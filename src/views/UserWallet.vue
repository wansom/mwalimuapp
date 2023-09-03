<template>
  <!-- Projects Table Column -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">All Payments</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-button type="primary" @click="showModal" class="mx-2"
            >Change Prices</a-button
          >
        </a-col>
      </a-row>
    </template>
    <a-table
      :columns="columns"
      :data-source="transactions"
      :pagination="true"
      :rowKey="(record) => record.id"
    >
      <template slot="date" slot-scope="text, record">
        <!-- Assuming 'date' is the field containing the Firestore timestamp -->
        {{ record.date.toDate().toDateString() }}
      </template>
      <template slot="editBtn" slot-scope="row">
        <a-button type="link" :data-id="row.key">
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
    <a-drawer
      title="Adjust delivery prices"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form
        :form="form"
        layout="vertical"
        hide-required-mark
        @submit.prevent="handleSubmit"
      >
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Base Price">
              <a-input

                v-decorator="[
                  'base_price',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter the base price',
                      },
                    ],
                  },
                ]"
                placeholder="price in shillings"
                type="number"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Additional price per kilometer">
              <a-input
                v-decorator="[
                  'extra_km_price',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'please enter price in shillings',
                      },
                    ],
                  },
                ]"
                style="width: 100%"
                placeholder="price in shillings"
                type="number"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="handleSubmit" :loading="loading">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </a-card>
  <!-- / Projects Table Column -->
</template>

<script>
import { mapState } from "vuex";
import { addRider, updatePrices } from "../database/firestore";
const columns = [
  {
    title: "TRANSACTION ID",
    dataIndex: "id",
    key: "id",
    scopedSlots: { customRender: "id" },
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    scopedSlots: { customRender: "date" },
  },

  {
    title: "AMOUNT",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
];

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      projectHeaderBtns: "all",
      form: this.$form.createForm(this),
      visible: false,
      loading: false,
      columns,
    };
  },

  computed: {
    ...mapState(["transactions"]),
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    },
    showModal() {
      this.visible = true;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const payload = {
            cost: values.base_price,
            extra_km_price: values.extra_km_price,
          };
          updatePrices('base_price',payload)
            .then(() => {
              this.loading = false;
              this.visible = false;
            })
            .catch((err) => {
              this.loading = false;
            });
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch("getAllTransactions");
  },
};
</script>