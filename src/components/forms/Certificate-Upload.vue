<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <div>
        <h3>General Information</h3>
        <a-form :form="form" layout="vertical" hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Practise Start Date">
                <a-date-picker
                  v-decorator="[
                    'name',
                    {
                      rules: [
                        { required: true, message: 'Please enter practise Start Date' },
                      ],
                    },
                  ]"
                  placeholder="Select date"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Certificate Renewal Date">
                <a-date-picker
                  v-decorator="[
                    'last_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'select date',
                        },
                      ],
                    },
                  ]"
                  placeholder="select date"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
          </a-row>
     
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-item label="Practise Certificate">
                <a-upload-dragger
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  @change="handleChange"
                >
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag file to this area to upload Certificate
                  </p>
                
                </a-upload-dragger>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div>
            <a-button class="mx-10" @click="onClose">Previous Section </a-button>
          <a-button type="primary" @click="onClose"> Next Section </a-button>
        </div>
      </div>
    </a-card>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style></style>
  