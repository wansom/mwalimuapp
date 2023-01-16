<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <div>
        <h3>Certificates</h3>
        <a-form :form="form" layout="vertical" hide-required-mark class="mb-5">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Practise Start Date">
                <a-date-picker
                  v-decorator="[
                    'practise_start',
                    { initialValue: user.practise_start,
                      rules: [
                        {
                          required: true,
                          message: 'Please enter practise Start Date',
                        },
                      ],
                    },
                  ]"
                  placeholder="Select date"
                  disabled
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Certificate Renewal Date">
                <a-date-picker
                  v-decorator="[
                    'cert_renewal_date',
                    { initialValue: user.cert_renewal_date,
                      rules: [
                        {
                          required: true,
                          message: 'select date',
                        },
                      ],
                    },
                  ]"
                  placeholder="select date"
                  disabled
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="National ID/Passport">
              <a-input
                v-decorator="[
                  'national_id',
                  {
                    initialValue: user.national_id,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter national id',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
                style="width: 100%"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Practising Number">
              <a-input
                v-decorator="[
                  'practise_number',
                  {
                    initialValue: user.practise_number,
                    rules: [
                      {
                        required: true,
                        message: 'enter number',
                      },
                    ],
                  },
                ]"
                placeholder=""
                style="width: 100%"
                disabled
              />
            </a-form-item>
          </a-col>
        </a-row>
          <a-row :gutter="16" class="mb-5">
            <a-col :span="24">
              <a :href="user.practise_certificate" target="blank">
             <a-button  icon="download">Download Certifcate</a-button></a>
            </a-col>

          </a-row>
        </a-form>
        <div class="my-5">
          <a-button class="mx-10" @click="()=>{handleSubmit('declined')}" :loading="loading"
            >Decline Request
          </a-button>
          <a-button type="primary" @click="()=>{handleSubmit('approved')}"  :loading="loading"
            >Approve Request
          </a-button>
        </div>
      </div>
    </a-card>
  </template>
  
  <script>
  import * as fb from "../../firebase";
  import { mapState } from "vuex";
  import router from "../../router/index";
  export default {
    props:['user'],
    data() {
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
        form: this.$form.createForm(this, { name: "coordinated" }),
        loading:false
      };
    },
    watch: {
      startValue(val) {
        console.log("startValue", val);
      },
      endValue(val) {
        console.log("endValue", val);
      },
    },
    methods: {
      handleChange(){},
      handlePrevious() {},
      handleSubmit(status) {
        this.loading=true
        fb.usersCollection.doc(this.user.uid).update({
          status:status,
          notifications:fb.types.FieldValue.arrayUnion({
              notification:`your account has been approved pending payment`,
              date:new Date()
            })

        }).then(()=>{
          router.push("/dashboard")
          this.loading=false
        })
      },
    },
    computed: {
      ...mapState([]),
    },
    mounted() {
      let user = fb.auth.currentUser;
      this.$store.dispatch("fetchUserProfile", user);
    },
  };
  </script>
  
  <style></style>
  