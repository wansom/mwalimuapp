<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Certificate Upload</h3>
      <a-form :form="form" layout="vertical">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Date of Admission">
              <a-date-picker
                v-decorator="[
                  'practise_start',
                  {
                    initialValue: user.practise_start,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter date of admission',
                      },
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
                  'cert_renewal_date',
                  {
                    initialValue: user.cert_renewal_date,
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
                addon-before="P105./"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="LSK Letter of Good Standing" style="width: 100%">
              <a-upload
                label="LSK Letter of Good Standing"
                name="file"
                v-decorator="[
                  'lsk_letter',
                  {
                    rules: [
                      {
                        required: true,
                        message:
                          'Please upload a letter of good standing from LSK',
                      },
                    ],
                  },
                ]"
                
              > <a-button> <a-icon type="upload" block /> Click to Upload </a-button></a-upload>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Certificate of Admission">
              <a-upload
                name="file"
                v-decorator="[
                  'admission_cert',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload Certificate of Admission',
                      },
                    ],
                  },
                ]"
              > <a-button> <a-icon type="upload" block/> Click to Upload </a-button></a-upload>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="National ID">
              <a-upload
                name="file"
                v-decorator="[
                  'national_id_doc',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload National ID or Passport',
                      },
                    ],
                  },
                ]"
              >  <a-button> <a-icon type="upload" block/> Click to Upload </a-button>
            </a-upload>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Practise Certificate">
              <a-upload
              name="file"
                v-decorator="[
                  'practise_cert',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload a valid certificate',
                      },
                    ],
                  },
                ]"
              >  <a-button> <a-icon type="upload" /> Click to Upload </a-button>
            </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
   
      </a-form>
      <div>
        <!-- <a-button class="mx-10" @click="handlePrevious"
          >Previous Section
        </a-button> -->
        <a-button type="primary" @click="handleSubmit" :loading="loading"
          >Submit for Review
        </a-button>
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapState } from 'vuex';
import * as fb from "../../firebase";
export default {
  props:['user'],
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
      image: null,
      fileList: [],
      lskfile: [],
      admissionfile: [],
      idfile: [],
      uploading: false,
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
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement("canvas");
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.$store.dispatch("changeLoading",true)
          this.loading=true

          const ref = fb.storage.ref();

          const url = await ref
            .child(values.practise_cert.file.name)
            .put(values.practise_cert.file, values.practise_cert.file.type)
            .then((snapshot) => snapshot.ref.getDownloadURL());
          //letter from lsk
          const lsk_letter = await ref
            .child(values.lsk_letter.file.name)
            .put(values.lsk_letter.file, values.lsk_letter.file.type)
            .then((snapshot) => snapshot.ref.getDownloadURL());
          // letter of admission
          const admission_cert = await ref
            .child(values.admission_cert.file.name)
            .put(values.admission_cert.file, values.admission_cert.file.type)
            .then((snapshot) => snapshot.ref.getDownloadURL());
          //  national id url
          const national_id_doc = await ref
            .child(values.national_id_doc.file.name)
            .put(values.national_id_doc.file, values.national_id_doc.file.type)
            .then((snapshot) => snapshot.ref.getDownloadURL());
          const payload = {
            practise_start: this.user.practise_start
              ? this.user.practise_start
              : values.practise_start.format(),
            cert_renewal_date: this.user.cert_renewal_date
              ? this.user.cert_renewal_date
              : values.cert_renewal_date.format() ?? "",
            national_id: values.national_id ?? "",
            practise_number: values.practise_number ?? "",
            practise_certificate: url,
            lsk_letter: lsk_letter,
            admission_cert: admission_cert,
            national_id_doc: national_id_doc,
            step: "certifacates",
            status: "pending approval",
            current:5
          };
          if (!this.user.biography) {
            this.$message.error(
              "please complete the general information section"
            );
          } else if (!this.user.law_school) {
            this.$message.error("please complete the education section");
          } else if (!this.user.law_school) {
            this.$message.error("please complete the employment section");
          } else {
            this.$store.dispatch("updateUser", payload);
            this.loading=false
          }
        }
      });
    },

  },
  computed: {
    ...mapState(["loading"]),
  }

};
</script>

<style></style>
