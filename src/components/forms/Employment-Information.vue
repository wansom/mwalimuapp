<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Employment Information</h3>
      <p>
        Please provide us with the information of your current and past
        employemnt
      </p>
      <a-form :form="form" layout="vertical" hide-required-mark>
        <h5 class="my-5">Your Current Employer</h5>
        <a-row :gutter="16">
          <a-col :span="18">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'current_employer',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="current employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="Starting Date">
              <a-date-picker
                v-decorator="[
                  'current_starting',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your last name',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <h5 class="my-10">Your Previous Employer</h5>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev1',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="Starting Date">
              <a-date-picker
              v-decorator="[
                  'prev1starting',
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
                  'prev1ending',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="End"
              
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev2',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="Starting Date">
              <a-date-picker
              v-decorator="[
                  'prev2starting',
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
                  'prev2ending',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="End"
               
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev3',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="Starting Date">
              <a-date-picker
              v-decorator="[
                  'prev3starting',
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
                  'prev3ending',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="End"
                
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev4',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="Starting Date">
              <a-date-picker
              v-decorator="[
                  'prev4starting',
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
                  'prev4ending',
                  {
                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="End"
              
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
      prev1startValue:null,
      prev1endValue: null,
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
    prev1disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    prev1disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    prev1handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    prev1handleEndOpenChange(open) {
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
