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
                    'name',
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
                  v-model="startValue"
                  :disabled-date="disabledStartDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Start"
                  @openChange="handleStartOpenChange"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-model="endValue"
                  :disabled-date="disabledEndDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
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
                    'name',
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
                  v-model="startValue"
                  :disabled-date="disabledStartDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Start"
                  @openChange="handleStartOpenChange"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-model="endValue"
                  :disabled-date="disabledEndDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
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
                    'name',
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
                  v-model="startValue"
                  :disabled-date="disabledStartDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Start"
                  @openChange="handleStartOpenChange"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-model="endValue"
                  :disabled-date="disabledEndDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
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
                    'name',
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
                  v-model="startValue"
                  :disabled-date="disabledStartDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Start"
                  @openChange="handleStartOpenChange"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-model="endValue"
                  :disabled-date="disabledEndDate"
                  show-time
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="End"
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div
        >
          <a-button type="" @click="onClose" class="mx-10"> Previous Section </a-button>
          <a-button type="primary" @click="onClose"> Next Section </a-button>
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
    },
  };
  </script>
  
  <style></style>
  