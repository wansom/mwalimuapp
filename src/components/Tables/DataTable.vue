<template>
  <!-- Authors Table Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">{{ title }}</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
          v-if="advocate.status=='admin'"
        >
          <a-radio-group v-model="authorsHeaderBtns" size="small">
            <a-radio-button value="all" @click="openDrawer"
              >ADD NEW</a-radio-button
            >
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <a-drawer
      title="Add a new court information"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Court number">
              <a-input
                v-decorator="[
                  'court_number',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Name of the Presiding Judge">
              <a-input
                v-decorator="[
                  'name_of_judge',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Type of Court">
              <a-select
                v-decorator="[
                  'type_of_court',
                  {
                    rules: [{ required: true, message: 'Please select' }],
                  },
                ]"
                placeholder=""
              >
                <a-select-option
                  v-for="court of courts"
                  :key="court"
                  :value="court"
                >
                  {{ court }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Location">
              <a-input
                v-decorator="[
                  'location',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name of Court Registrar(s)">
              <a-input
                v-decorator="[
                  'name_of_registrar',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Contact of Court Registrar(s)">
              <a-input
                v-decorator="[
                  'contact_of_registrar',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Photo of presiding judge">
              <a-upload-dragger
                name="file"
                v-decorator="[
                  'photo',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </a-upload-dragger></a-form-item
            >
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
          Close
        </a-button>
        <a-button type="primary" @click="handleSubmit" :loading="loading">
          Submit
        </a-button>
      </div>
    </a-drawer>
    <a-table :columns="columns" :data-source="tableData" :pagination="false">
      <template slot="author" slot-scope="author">
        <div class="table-avatar-info">
          <a-avatar shape="square" :src="author.avatar" />
          <div class="avatar-info">
            <h6>{{ author.name }}</h6>
            <p>{{ author.email }}</p>
          </div>
        </div>
      </template>
      <template slot="image_url" slot-scope="image_url">
				<h6 class="m-0">
					<img :src="image_url" width="25" class="mr-10">
				</h6>
			</template>
      <template slot="func" slot-scope="func">
        <div class="author-info">
          <h6 class="m-0">{{ func.job }}</h6>
          <p class="m-0 font-regular text-muted">{{ func.department }}</p>
        </div>
      </template>

      <template slot="status" slot-scope="status">
        <a-tag
          class="tag-status"
          :class="status ? 'ant-tag-primary' : 'ant-tag-muted'"
        >
          {{ status ? "ONLINE" : "OFFLINE" }}
        </a-tag>
      </template>

      <!-- <template slot="editBtn" slot-scope="row">
				<router-link :to="'/request/'+row.id">
				<a-button type="link" :data-id="row.key" class="btn-edit" >
					Submit
				</a-button></router-link>
			</template> -->
    </a-table>
  </a-card>
  <!-- / Authors Table Card -->
</template>

<script>
import { mapState } from "vuex";
import {auth} from "../../database/index"
import { listenDocumentUploadProgress} from "@/database/storage";
const columns = [

  {
    title: "Court Number",
    dataIndex: "court_number",
  },
  {
    title: "Presiding Judge",
    dataIndex: "image_url",
    scopedSlots: { customRender: "image_url" },
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
  props: [ "tableData", "title"],
  data() {
    return {
      // Active button for the "Authors" table's card header radio button group.
      authorsHeaderBtns: "all",
      visible: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
      uploadProgress:0,
      user:auth.currentUser,
      columns
    };
  },
  methods: {
    openDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    updateFileProgress( progress) {
			this.uploadProgress=progress
		},
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {

        if (!err) {
          this.$store.dispatch("changeLoading", true);
          return new Promise((resolve) => {
            listenDocumentUploadProgress(
              auth.currentUser.uid,
              values.photo.file,
              values.photo.file.type,
              (progress) => {
                this.updateFileProgress(progress);
              },
              (_error) => {
                resolve(false);
              },
              async (url) => {
                const payload = {
                  court_number: values.court_number,
                  name_of_judge: values.name_of_judge,
                  type_of_court: values.type_of_court,
                  location: values.location,
                  name_of_registrar: values.name_of_registrar,
                  contact_of_registrar: values.contact_of_registrar,
                  image_url: url,
                };
                this.$store.dispatch("addCourt", payload);

                resolve(true);
              }
            );
          });
        }
      });
    },
  },
  computed: {
    ...mapState(["courts", "loading",'allAdvocates']),
    advocate(){
      if(auth.currentUser){
        return this.allAdvocates.find((a)=>a.id=== auth.currentUser.uid)
      }else{
        return {}
      }
     
    }
  },
};
</script>
