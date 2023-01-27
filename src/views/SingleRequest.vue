<template>
  <div>
    <a-row :gutter="24" type="flex" align="middle">
      <a-col :span="6">
        <a-card
          class="icon-card"
          style="display:flex;align-items:center;justify-content: center;"
          @click="
            () => {
              next(1);
            }
          "
        >
          <a-icon type="exclamation-circle" class="icon-list text-warning" />
          <p class="card-p">General Information</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card
          class="icon-card"
          style="display:flex;align-items:center;justify-content: center;"
          @click="
            () => {
              next(2);
            }
          "
        >
          <a-icon type="bank" class="icon-list text-warning" />
          <p class="card-p">Employment Information</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card
          class="icon-card"
          style="display:flex;align-items:center;justify-content: center;"
          @click="
            () => {
              next(3);
            }
          "
        >
          <a-icon type="folder-open" class="icon-list text-warning" />
          <p class="card-p">Education Information</p>
        </a-card>
      </a-col>
      <a-col
        :span="6"
        @click="
          () => {
            next(4);
          }
        "
      >
        <a-card class="icon-card" style="display:flex;align-items:center;justify-content: center;">
          <a-icon type="file-protect" class="icon-list text-warning" />
          <p class="card-p">Certificates</p>
        </a-card>
      </a-col>

    </a-row>
    <div class="my-10" v-if="current==1" >
    <general-info-widget :user="request"></general-info-widget>
</div>
<div class="my-10" v-if="current==2">
   <employment-info-widget :user="request"></employment-info-widget>
</div>
<div class="my-10" v-if="current==3">
   <education-widget :user="request"></education-widget>
</div>
<div class="my-10" v-if="current==4">
    <certificate-widget :user="request"></certificate-widget>
</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CertificateWidget from '../components/Widgets/CertificateWidget.vue';
import EducationWidget from '../components/Widgets/EducationWidget.vue';
import EmploymentInfoWidget from '../components/Widgets/EmploymentInfoWidget.vue';
import GeneralInfoWidget from '../components/Widgets/GeneralInfoWidget.vue';
export default {
  components: { GeneralInfoWidget, EmploymentInfoWidget, EducationWidget, CertificateWidget },
  data(){
    return{
        current:1
    }
  },
  methods: {
    next(value) {
      this.current = value;
    },
    prev() {
      this.current--;
    },
  },
  computed: {
    ...mapState(["allAdvocates", "user"]),
    request() {
      return this.allAdvocates.find((a) => a.id == this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("fetAllAdvocates");
  },
};
</script>

<style scoped>
.card-p {
  font-size: 24;
  font-weight: bold;
}
.icon-card:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 200px;
  background-color: #db1c22;
}
.icon-card:hover {
 color:#ffffff
}
.icon-list {
  font-size: 68px;
  margin-bottom: 10px;
  align-self: center;
}
.icon-card{
    display: flex;
    align-content: center;
    justify-content: center;
}

</style>
