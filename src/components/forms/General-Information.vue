<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3 class="text-lg mb-5">General Information</h3>
      <a-form :form="form" layout="vertical">
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="First Name">
              <a-input
                v-decorator="[
                  'first_name',

                  {
                    initialValue: user.first_name,

                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="Please enter your first name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Last Name">
              <a-input
                v-decorator="[
                  'last_name',
                  {
                    initialValue: user.last_name,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your last name',
                      },
                    ],
                  },
                ]"
                placeholder="last name"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Email">
              <a-input
                v-decorator="[
                  'email',
                  {
                    initialValue: user.email,
                    rules: [
                      { required: true, message: 'Please select your email' },
                    ],
                  },
                ]"
                placeholder="Please a valid email"
                type="email"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Phone Number">
              <a-input
                v-decorator="[
                  'phone_number',
                  {
                    initialValue: user.phone_number,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your phone number',
                      },
                    ],
                  },
                ]"
                placeholder="Please enter a valid phone number"
                type="email"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Primary Teaching Location(County)">
              <a-select
                v-decorator="[
                  'location',
                  {
                    initialValue: user.location,
                    rules: [
                      { required: true, message: 'Please enter your location' },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="county in counties"
                  :key="county"
                  :value="county"
                >
                  {{ county }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Other Counties of Teaching(Optional)"
              ><a-tooltip
                slot="suffix"
                title="Enter Freelance if currently unemployed"
              >
                <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
              </a-tooltip>
              <a-select
                mode="multiple"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'other_counties',
                  {
                    initialValue: user.other_counties,
                    rules: [{ required: false, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in counties" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Curriculum">
              <a-select
                mode="multiple"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'curriculum',
                  {
                    initialValue: user.curriculum,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in curriculums" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Education Level">
              <a-select
                mode="multiple"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'education_level',
                  {
                    initialValue: user.education_level,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in education_levels" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Which Language do you use">
              <a-select
                style="width: 100%"
                placeholder="Select Language"
                v-decorator="[
                  'language',
                  {
                    initialValue: user.language,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in languages" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item
              label="Which Subjects do you teach (Select upto 3 that apply)"
            >
              <a-select
                mode="tags"
                :maxTagCount="3"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'subjects',
                  {
                    initialValue: user.subjects,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in schoolSubjects" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Short Biography">
              <a-textarea
                v-decorator="[
                  'biography',
                  {
                    initialValue: user.biography,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your biography',
                      },
                    ],
                  },
                ]"
                :rows="4"
                placeholder="Enter a short biography"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Profile Picture">
              <input
              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              accept="image/*"
              @change="loadImage"
            />
              
            </a-form-item>
            <a-progress :percent="uploadProgress" />
          </a-col>
          <a-col :span="24" :md="12">
            <a-avatar
              :src="user.profile_photo"
              :size="160"
              v-if="user.profile_photo"
            />
            <a-avatar icon="user" v-else :size="160" />
          </a-col>
        </a-row>
        <a-checkbox @change="changeTerms" class="mb-3" :checked="terms">
          I understand that the information submitted on this page will be
          visibile to all potential clients
        </a-checkbox>
      </a-form>
      <div>
        <a-modal v-model="showModal" title="Resize Image to Fit" on-ok="handleOk">
          <template slot="footer">
            <a-button key="back" @click="handleCancel"> Close </a-button>
            <a-button
            
              key="submit"
              type="primary"
              :loading="loading"
              @click="uploadToFirestore"
            >
              Upload
            </a-button>
            
          </template>
          <cropper
            class="cropper"
            ref="cropper"
            :src="image.src"
            :stencil-props="{
              handlers: {},
              movable: false,
              resizable: false,
              aspectRatio: 1,
            }"
            :resize-image="{
              adjustStencil: false,
            }"
            image-restriction="stencil"
            :stencil-size="{
              width: 144,
              height: 144,
            }"
          />
        </a-modal>
      </div>
      <div>
        <a-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          :disabled="user.status === 'pending approval' || !terms"
          >Save and Continue
        </a-button>
        <!-- <a-button type="primary" @click="handleSubmit" :loading="loading" v-else
          >Save and Continue
        </a-button> -->
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapState } from "vuex";
import { storage } from "../../database";
import { Cropper, Preview } from "vue-advanced-cropper";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from "moment";
import { updateAdvocate, updateUser } from "../../database/firestore";
function getMimeType(file, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16);
    }
	switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}
export default {
  props: ["user"],
  components: {
    Cropper,
    Preview,
    // other components...
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      image: {
        src: null,
        type: null,
      },
      fileList: [],
      curriculums:[
        '8.4.4',
        'Competency Bsaed Curriculum(CBC)',
        'Cambridge Curriculum',
        'American Curriculum'
      ],
      languages:['English','Swahili','French','German','Afrikaans'],
     primarySubjects:[
  'English', 'Kiswahili', 'Mathematics', 'Science', 'Social Studies', 'Religious Education', 'Creative Arts', 'Physical Education',
],

 secondarySubjects:[
 'Biology', 'Chemistry', 'Physics', 'Geography', 'History and Government', 'Business Studies', 'Agriculture', 'Home Science', 'Computer Studies', 'Music', 'Art and Design',
],


      education_levels:['Primary Level','Secondary level','Tertiary Level','pre-primary','lower primary','upper primary','junior secondary','senior secondary'],
      uploading: false,
      isFormDirty: false,
      uploadProgress: 0,
      terms: false,
      resultImage: null,
      coordinates: {
        width: 200,
        height: 200,
      },
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      result: {
        coordinates: null,
        image: null,
      },
      showModal: false,
    };
  },

  methods: {
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    },
    changeTerms() {
      this.terms = !this.terms;
    },
    crop() {
			const { canvas } = this.$refs.cropper.getResult();
			canvas.toBlob((blob) => {
				// Do something with blob: upload to a server, download and etc.
			}, this.image.type);
		},
    reset() {
      this.image = {
        src: null,
        type: null,
      };
    },
    loadImage(event) {
			const { files } = event.target;
			if (files && files[0]) {
				// 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
				if (this.image.src) {
					URL.revokeObjectURL(this.image.src)
				}
				// 2. Create the blob link to the file to optimize performance:
				const blob = URL.createObjectURL(files[0]);
				// this.image = {
				//    src: blob,
				//    type: files[0].type
				// }
				
				// Create a new FileReader to read this image binary data
				const reader = new FileReader();
        
				// Define a callback function to run, when FileReader finishes its job
				reader.onload = (e) => {
					// Note: arrow function used here, so that "this.image" refers to the image of Vue component
					this.image = {
						// Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
						src: blob,
						// Determine the image type to preserve it during the extracting the image from canvas:
						type: getMimeType(e.target.result, files[0].type),
					};
				};
   
				// Start the reader job - read file as a data url (base64 format)
				reader.readAsArrayBuffer(files[0]);
        this.showModal = true;
			}
		},
    uploadToFirestore() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        canvas.toBlob((blob) => {
          const storageRef = ref(
            storage,
            "profilePictures/" + this.user.first_name
          );
          const uploadTask = uploadBytesResumable(storageRef, blob);

          uploadTask.on(

            "state_changed",
            (snapshot) => {
              this.showModal = false;
              // Track the upload progress
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.uploadProgress = Math.round(progress);
            },
            (error) => {
              // Handle the upload error
              message.error("Failed to upload profile picture");
              console.error(error);
            },
            () => {
              // Get the download URL of the uploaded file
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                updateUser(this.user.id, { profile_photo: downloadURL });
              });
            }
          );
        }, "image/jpeg");
      }
      return false;
    },
    handleCancel() {
      this.showModal = false;
    },
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

    updateFileProgress(progress) {
      this.uploadProgress = progress;
    },
    handleBeforeUpload(file) {
      // Validate the file type, size, etc., if needed
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const payload = {
            first_name: values.first_name ?? "",
            last_name: values.last_name ?? "",
            phone_number: values.phone_number ?? "",
            curriculum: values.curriculum ?? "",
            biography: values.biography ?? "",
            email: values.email ?? "",
            location: values.location ?? "",
            subjects: values.subjects ?? "",
            language: values.language ?? "",
            education_level: values.education_level ?? "",
            other_counties: values.other_counties??[],
            step: "general information",
            current: 2,
          };

          this.$store.dispatch("updateUser", payload);
        }
      });
    },
    handleChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
  computed: {
    ...mapState(["loading", "counties", "practiseAreas"]),
    schoolSubjects(){
      return  [...this.primarySubjects, ...this.secondarySubjects];
    }
  },
  destroyed() {
		if (this.image.src) {
			URL.revokeObjectURL(this.image.src)
		}
	},
  mounted() {},
};
</script>

<style scoped>
.cropper {
  height: 200px;
  width: 200px;
  background: #ddd;
}
</style>
