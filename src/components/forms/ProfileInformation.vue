<template>
    <div>
      <!-- <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">
          Next
        </a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >
          Done
        </a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
          Previous
        </a-button>
      </div> -->
      <a-row :gutter="24" type="flex" align="middle">
        <a-col :span="4">
            <a-card class="icon-card" @click="next">
                <a-icon type="exclamation-circle" class="icon-list text-warning" />
                <p class="card-p">General Information</p>
                

            </a-card>
        </a-col>
        <a-col :span="4">
            <a-card class="icon-card">
                <a-icon type="bank" class="icon-list text-warning" />
                <p class="card-p">Employment Information</p>
                

            </a-card>
        </a-col>
        <a-col :span="4">
            <a-card class="icon-card">
              
                <a-icon type="file-protect" class="icon-list text-warning"/>
                <p class="card-p">State Licences</p>
                

            </a-card>
        </a-col>
        <a-col :span="4">
            <a-card class="icon-card">
                <a-icon type="audit" class="icon-list text-warning" />
                <p class="card-p">Project Preferences</p>
                

            </a-card>
        </a-col>
        <a-col :span="4">
            <a-card class="icon-card">
                <a-icon type="folder-open" class="icon-list text-warning" />
                <p class="card-p">Education Information</p>
                

            </a-card>
        </a-col>

      </a-row>
<div class="my-10">
    <GeneralInformation/>
</div>
    </div>
  </template>
  <script>
import GeneralInformation from './General-Information.vue';
  export default {
    data() {
        return {
            current: 0,
            steps: [
                {
                    title: "General Information",
                    content: "First-content",
                },
                {
                    title: "Employment Information",
                    content: "Second-content",
                },
                {
                    title: "State Licences",
                    content: "Last-content",
                },
                {
                    title: "Project Preferences",
                    content: "Last-content",
                },
                {
                    title: "Education Information",
                    content: "Last-content",
                },
            ],
        };
    },
    methods: {
        next() {
            this.current++;
        },
        prev() {
            this.current--;
        },
    },
    components: { GeneralInformation }
};
  </script>
  <style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }
  
  .steps-action {
    margin-top: 24px;
  }
  .icon-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 200px;
  }
  .card-p{
    font-size: 24;
    font-weight: bold;
  }
  .icon-list{
    font-size: 68px;
    margin-bottom: 10px;

  }
  </style>