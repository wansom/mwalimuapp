<template>
  <div class="login">
    <div class="login-contain">
      <div class="form-side">
        <form class="login-form" @submit.prevent="submitForm">
          <div class="fm-ctrl">
            <span class="login-form-title">Create Account</span>
          </div>
          <div class="fm-ctrl input">
            <input
              type="text"
              placeholder="Full Name"
              v-model="organisationName"
              @blur="fieldsTouched.organisationName = true"
            />
            <i
              class="fa-solid fa-xmark"
              v-if="
                !organisationName &&
                (formSubmitted || fieldsTouched.organisationName)
              "
            ></i>
            <div
              id="name-message"
              class="error-message error"
              v-if="
                !organisationName &&
                (formSubmitted || fieldsTouched.organisationName)
              "
            >
              <p>Name is required!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <input
              type="email"
              placeholder="Email Address"
              v-model="email"
              @blur="fieldsTouched.email = true"
            />
            <i
              class="fa-solid fa-xmark"
              v-if="!validEmail && (formSubmitted || fieldsTouched.email)"
            ></i>
            <div
              id="email-message"
              class="error-message error"
              v-if="!validEmail && (formSubmitted || fieldsTouched.email)"
            >
              <p>Invalid Email!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <select
              id="country"
              name="country"
              v-model="country"
              @change="getPhoneCode"
              required
              @blur="fieldsTouched.country = true"
            >
              <option value="KE">🇰🇪</option>
              <option value="ug">🇺🇬</option>
              <!-- add more countries here -->
            </select>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              v-model="phoneNumber"
              @blur="fieldsTouched.phoneNumber = true"
            />
            <i
              class="fa-solid fa-xmark"
              v-if="
                !phoneNumber && (formSubmitted || fieldsTouched.phoneNumber)
              "
            ></i>
            <div
              id="phone-message"
              class="error-message error"
              v-if="
                !phoneNumber && (formSubmitted || fieldsTouched.phoneNumber)
              "
            >
              <p>Phone number is required!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <select
              v-model="industry"
              @blur="fieldsTouched.industry = true"
              placeholder="Choose Type of Account"
            >
              <option
                v-for="industryOption in industries"
                :key="industryOption"
                :value="industryOption"
              >
                {{ industryOption }}
              </option>
            </select>
            <i
              class="fa-solid fa-xmark"
              v-if="!industry && (formSubmitted || fieldsTouched.industry)"
            ></i>
            <div
              id="industry-message"
              class="error-message error"
              v-if="!industry && (formSubmitted || fieldsTouched.industry)"
            >
              <p>Account type is required!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <input
              type="text"
              placeholder="Enter Location"
              v-model="location"
              @blur="fieldsTouched.location = true"
            />
            <i
              class="fa-solid fa-xmark"
              v-if="!location && (formSubmitted || fieldsTouched.location)"
            ></i>
            <div
              id="location-message"
              class="error-message error"
              v-if="!location && (formSubmitted || fieldsTouched.location)"
            >
              <p>Location is required!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <input
              type="password"
              placeholder="Enter Password"
              v-model="password"
              @blur="fieldsTouched.password = true"
            />
            <i
              class="fa-solid fa-xmark"
              v-if="!validPassword && (formSubmitted || fieldsTouched.password)"
            ></i>
            <div
              id="password-message"
              class="error-message error"
              v-if="!validPassword && (formSubmitted || fieldsTouched.password)"
            >
              <p>Password is required and must be more than 8 characters!</p>
            </div>
          </div>

          <div class="fm-ctrl btn">
            <button class="sign-in">Register</button>
          </div>
          <router-link to="/signin"
            >Already Have an Account?<span class="text-[#FF0000]">
              Login</span
            ></router-link
          >
        </form>
      </div>
      <div class="image-side">
        <div class="contact-txt">
          <div class="contact-info">
            <p>
              Finally. Education <br />
              Management done right. <br />
              for <strong>you.</strong>
            </p>
            <p>
              Reach out to us if you are experiencing any trouble registering
            </p>
            <p>
              <span>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2543 1L17.1243 8.13003"
                    stroke="#C7C7C7"
                    stroke-width="1.64063"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.1243 1L24.2543 8.13003"
                    stroke="#C7C7C7"
                    stroke-width="1.64063"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.05594 17.1016C-0.142149 8.90349 1.02342 5.14945 1.88877 3.93846C1.99851 3.7442 4.73457 -0.351689 7.66868 2.05135C14.9484 8.04697 5.73111 7.19928 11.8453 13.3135C17.9582 19.4264 17.1106 10.2103 23.1062 17.4888C25.5092 20.4229 21.4133 23.1577 21.2191 23.2688C20.0081 24.1341 16.254 25.2997 8.05594 17.1016Z"
                    stroke="#C7C7C7"
                    stroke-width="1.64063"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              +254 708 609 057
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      placeholder: "+254",
      formSubmitted: false,
      password: '',
      fieldsTouched: {
        organisationName: false,
        email: false,
        phoneNumber: false,
        industry: false,
        country: false,
        location: false,
        contactPerson: false,
        termsAndConditions: false,
        password: false,
      },
      organisationName: "",
      email: "",
      phoneNumber: "",
      industry: "Type of Account",
      country: "KE",
      location: "",
      contactPerson: "",
      termsAndConditions: false,
      industries: [
        "Type of Account",
        "Teacher",
        "Student",
        // Add other industry options here...
      ],
    };
  },
  computed: {
    validEmail() {
      // Simple email validation
      const re = /\S+@\S+\.\S+/;
      return re.test(this.email);
    },

    // Your existing computed properties...
    validPassword() {
      return this.password && this.password.length >= 8;
    },
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;

      if (
        this.organisationName &&
        this.validEmail &&
        this.phoneNumber &&
        this.industry &&
        this.country &&
        this.location &&
        this.validPassword
      ) {
        const payload = {
          organisationName: this.organisationName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          industry: this.industry,
          country: this.country,
          location: this.location,
          password: this.password,
          termsAndConditions: this.termsAndConditions,
        };

        this.$store.dispatch("register", payload)
          .then((user) => {
            console.log(user)
            this.$router.push("/signIn");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },

    getPhoneCode() {
      // Your existing getPhoneCode function...
    },
  },
};
</script>

<style>
/* Your styles */
</style>
