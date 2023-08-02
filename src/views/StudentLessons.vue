<template>
  <section class="mkt-articles">
    <div class="mkt-articles-contain contain">
      <div class="mkt-articles">
        <div class="mkt-article" v-for="(lesson, index) of lessons" :key="index">
          <img class="mkt-img" src="/images/online-class.png" alt="lesson">
          <div class="mkt-icon-info">
            <span>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
              </svg>
              {{ lesson.subject }}
            </span>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z"
                  fill="#D9D9D9" />
              </svg>
              3 Months
            </span>
          </div>
          <h3>{{ lesson.name }}</h3>
          <p>{{ lesson.description }}</p>
          <div class="mkt-amount">
            <div class="mkt-article-writer">
              <a-button type="primary" @click="showModal">Enroll</a-button>
              <!-- <span>By Lina</span> -->
            </div>
            <div class="price">
              <p class="itallic"><del></del></p>
              <span>KES{{ lesson.amount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-modal v-model="visible" title="Enter Phone Number" @ok="handleOk">
      <a-input placeholder="Phone Number" v-model="phone" />
    </a-modal>

  </section>
</template>
<script>
import { mapState } from "vuex";
import * as fb from "../firebase";
export default ({
  components: {
  },
  data() {
    return {
      visible: false,
      phone:""
    }
  },
  computed: {
    ...mapState(["users", 'lessons']),
    user() {
      return this.users.filter((i) => i.id == fb.auth.currentUser.uid)[0]
    }
  },
  methods:{
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      console.log(this.phone)
      this.intiatePayment()
    },
    onClose() {
      const textarea = document.createElement("textarea");
      textarea.textContent = "dialalawyer9c97a@";
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.$message.success('code copied successfully')
    },
    formatNumber(value) {
      if (value.startsWith("254")) {
        return value;
      } else if (value.startsWith("07")) {
        return "254" + value.substring(1);
      } else if (value.startsWith("+254")) {
        return "254" + value.substring(2);
      } else if (value.startsWith("01")) {
        return "254" + value.substring(1);
      } else {
        return value;
      }
    },
    openNotification() {
      swal(
        "The details you submit to us will only be used for account verification. Please confirm to proceed"
      ).then(() => {
        this.payWithCard();
      });
    },
    sendMail() {
      this.$store.dispatch("sendMail", {
        name: this.user.first_name,
        email: this.user.email,
        subject: "Dial A Lawyer Account",
        content: `Your payment has been received successfully on ${new Date().toDateString()} . Our admin will review your documents and give you feedback within 48 hours`,
      });
      this.$store.dispatch("sendMail", {
        name: "Admin",
        email: "owarren@barizicommunications.com,okothj@barizicommunicatins.com,jndungu@barizicommunications.com,,ochiengwarren3@gmail.com,rmulamba@barizicommunications.com,director@acelitigator.com",
        subject: " A New Account creation",
        content: `A new account has been created on  ${new Date().toDateString()} .Please login to the main site to review application.`,
      });
    },
    payWithCard() {
      if (!this.user.biography) {
        this.$message.error("please fill out the general information section");
      } else if (!this.user.current_employer) {
        this.$message.error(
          "please fill out the employment information section"
        );
      } else if (!this.user.practise_number||!this.user.practise_certificate||!this.user.residence_evidence) {
        this.$message.error(
          "some documents are not uploaded. upload them to complete registration"
        );
      } else {
        if (this.coupon == "dialalawyer9c97a@") {
          this.paymentConfirmed = true;
          localStorage.clear();
          this.$store.dispatch("updateUser", {
            status: "pending approval",
            payment_date: new Date(),
            current: 5,
            notifications: arrayUnion({
              notification: `You have completed your profile succcessfully,Our admin will review your application and give feedback`,
              date: new Date(),
            }),
            invoices: arrayUnion({
              date: new Date(),
              amount: 0,
              number: this.coupon,
            }),
          });
          this.sendMail();
          this.visible = false;
        } else {
          swal({
            title: "OOPS!",
            text: `Coupon code is unavailable or has expired`,
            icon: "error",
          });
        }
      }
    },
    intiatePayment() {
      this.loading = true;
      this.$store
        .dispatch("intiatePayments", {
          amount: 5,
          phone_number: this.formatNumber(this.phone),
        })
        .then((response) => {
          // handle success
          if (response.status == 200) {
            let id = response.data.CheckoutRequestID;
            localStorage.setItem("transactionID", JSON.stringify(id));
            this.sdkSent = true;
            this.loading = false;
            // this.visible=false
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          swal({
            title: "OOPS!",
            text: `something went wrong`,
            icon: "error",
          });
        });
    },
    confirmPayment() {
      let id = JSON.parse(localStorage.getItem("transactionID"));
      getMpesaReference(id).then((data) => {
        if (data) {
          if (data.resultCode == 1032) {
            swal({
              title: "SORRY!",
              text: `You have cancelled the transaction,please try again`,
              icon: "error",
            });
            this.sdkSent = false;
            this.visible = false;
          } else if (data.resultCode == 1037) {
            swal({
              title: "SORRY!",
              text: `DS timeout user cannot be reached`,
              icon: "error",
            });
            this.sdkSent = false;
            this.visible = false;
          } else {
            this.verifyAmount();
          }
        } else {
          swal({
            title: "SORRY!",
            text: `No transaction record found`,
            icon: "error",
          });
        }
      });
    },
    handleChecks() {
      if (!this.user.biography) {
        this.$message.error("please fill out the general information section");
      } else if (!this.user.current_employer) {
        this.$message.error(
          "please fill out the employment information section"
        );
      } else if (!this.user.law_school) {
        this.$message.error(
          "please fill out the education information section"
        );
      } else if (!this.user.practise_number) {
        this.$message.error(
          "some documents are not uploaded. upload them to complete registration"
        );
      } else {
        this.intiatePayment();
      }
    },
    verifyAmount() {
      let id = JSON.parse(localStorage.getItem("transactionID"));
      getTransactionReference(id).then((data) => {
        if (data && data.amount == 5) {
          this.paymentConfirmed = true;
          localStorage.clear();
          this.$store.dispatch("updateUser", {
            status: "pending approval",
            payment_date: new Date(),
            notifications: arrayUnion({
              notification: `payment has been made succcessfully,Our admin will review your application and give feedback`,
              date: new Date(),
            }),
            invoices: arrayUnion({
              date: new Date(),
              amount: data.amount,
              number: id,
            }),
          });
          this.sendMail();
          this.visible = false;
          location.reload();
        } else {
          swal({
            title: "SORRY!",
            text: `Wrong amount`,
            icon: "error",
          });
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch('getMyLessons')
  }
})

</script>
<style scoped>
section.mkt-articles {
  background-color: #ffffff;
}

.mkt-articles-contain h3.title {
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;
  color: #000000;
  margin: 0px 0px 10px;
}

.mkt-articles {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.mkt-article {
  padding: 14px;
  height: fit-content;
  width: 280px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px #00000033;
  margin: 10px 7px;
}

.mkt-article img.mkt-img {
  width: 100%;
  border-radius: 20px;
}

.mkt-icon-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
}

.mkt-icon-info span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  font-weight: 500;
  color: #696984;
}

.mkt-icon-info span svg {
  margin: 0px 8px 0px 0px;
}

.mkt-article h3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #252641;
  margin: 5px 0px 10px;
}

.mkt-article p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #696984;
  margin: 10px 0px 10px;
}

.mkt-article .mkt-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 10px;
}

.mkt-article-writer,
.mkt-amount .price {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.mkt-article-writer img {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0px 5px 0px 0px;
}

.mkt-article-writer span {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
}

.mkt-amount .price p:nth-child(1) {
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  text-decoration: line-through;

}

.mkt-amount .price span:nth-child(2) {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #F48C06;
  margin: 0px 0px 0px 10px;
}</style>