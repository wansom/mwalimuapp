<template>
 <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h6 class="font-semibold m-0">Withdrwal Methods</h6>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-button type="primary">
						ADD NEW CARD
					</a-button>
				</a-col>
			</a-row>
		</template>
		<a-row :gutter="[24, 24]">
			<a-col :span="24" :md="12">
				<a-card class="payment-method-card">
					<img src="images/logos/mastercard-logo.png" alt="">
					<h6 class="card-number">**** **** **** 7362</h6>
					<a-button type="link">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="fill-gray-7" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"/>
							<path class="fill-gray-7" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"/>
						</svg>
					</a-button>
				</a-card>
			</a-col>
			<a-col :span="24" :md="12">
				<a-card class="payment-method-card">
					<img src="images/logos/visa-logo.png" alt="">
					<h6 class="card-number">**** **** **** 3288</h6>
					<a-button type="link">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="fill-gray-7" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"/>
							<path class="fill-gray-7" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"/>
						</svg>
					</a-button>
				</a-card>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
import {
  getMpesaReference,
  getTransactionReference,
  getTransactions,
} from "@/database/firestore";
import { arrayUnion } from "firebase/firestore";
export default {
  props: ["user"],
  data() {
    return {
      visible: false,
      loading: false,
      sdkSent: false,
      coupon: "",
    };
  },
  methods: {
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
    showModal() {
      if (!this.user.biography) {
        this.$message.error("please complete the general information section");
      } else if (!this.user.current_employer) {
        this.$message.error("please complete the employment section");
      } else {
        this.visible = true;
        this.loading = false;
      }
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
          phone_number: this.formatNumber(this.user.phone),
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
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
