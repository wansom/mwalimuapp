<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <div>
        <h3>Education Information</h3>
        <p>
          Please provide us with the information of your current and past
          employemnt
        </p>
        <a-form :form="form" layout="vertical" hide-required-mark>
          
          <h5 class="my-10">Education History</h5>
          <a-row type="flex" :gutter="16">
            <a-col :span="14">
              <a-form-item label="Law School">
                <a-input
                  v-decorator="[
                    'law_school',
                    {
                      rules: [
                        { required: true, message: 'Please enter your law school' },
                      ],
                    },
                  ]"
                  placeholder="Institution"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                v-decorator="[
                    'law_starting',
                    {
                      rules: [
                        { required: true, message: 'Please enter starting date' },
                      ],
                    },
                  ]"
                  :disabled-date="disabledStartDate"
                  placeholder="Start"
                
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                v-decorator="[
                    'law_ending',
                    {
                      rules: [
                        { required: true, message: 'Please enter starting date' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" :gutter="16">
            <a-col :span="14">
              <a-form-item label="Institution">
                <a-input
                  v-decorator="[
                    'school1',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Institution"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                v-decorator="[
                    'school1_starting',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                 
                  placeholder="Start"
                  
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                v-decorator="[
                    'school1_ending',
                    {
                      rules: [
                        { required: true, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" :gutter="16">
            <a-col :span="14">
              <a-form-item label="Institution">
                <a-input
                  v-decorator="[
                    'school2',
                    {
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                  placeholder="Institution"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                v-decorator="[
                    'school2_start',
                    {
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                  placeholder="Start"
                
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                v-decorator="[
                    'school2_end',
                    {
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" :gutter="16">
            <a-col :span="14">
              <a-form-item label="Institution">
                <a-input
                  v-decorator="[
                    'school3',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Institution"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                v-decorator="[
                    'school3_start',
                    {
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Start"
                 
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                v-decorator="[
                    'school3_end',
                    {
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  :open="endOpen"
                 
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div
        >
          <a-button type="" @click="handlePrevious" class="mx-10"> Previous Section </a-button>
          <a-button type="primary" @click="handleSubmit"> Next Section </a-button>
        </div>
      </div>
    </a-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
        form: this.$form.createForm(this, { name: 'coordinated' }),
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
      disabledStartDate(startValue) {
        const endValue = this.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      },
      disabledEndDate(endValue) {
        const startValue = this.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
      },
      handleStartOpenChange(open) {
        if (!open) {
          this.endOpen = true;
        }
      },
      handleEndOpenChange(open) {
        this.endOpen = open;
      },
      handlePrevious(){


},
handleSubmit(e) {
  e.preventDefault();
  this.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
      this.$store.dispatch("addGeneralInfo",values);
    }
  });
},

    },
  };
  </script>
  
  <style></style>
  