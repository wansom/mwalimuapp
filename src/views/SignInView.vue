<template>
  <div class="login">
    <div class="login-contain">
      <div class="form-side">
        <form class="login-form" @submit.prevent="validateForm">
          <div class="fm-ctrl">
            <span class="login-form-title">Log In</span>
            <a class="need-help" href="#">Need Help?</a>
          </div>
          <div class="fm-ctrl">
            <p class="welcome-text">
              Welcome back, 👋🏻 please enter your email and password to access
              the platform
            </p>
          </div>
          <div class="fm-ctrl input">
            <input type="email" v-model="email" placeholder="Email" />
            <i class="fa-solid fa-xmark" v-if="emailError"></i>
            <div
              id="email-message"
              class="error-message error"
              v-if="emailError"
            >
              <p>Enter a Valid Email!</p>
            </div>
          </div>
          <div class="fm-ctrl input">
            <input type="password" v-model="password" placeholder="Password" />
            <i class="fa-solid fa-xmark" v-if="passwordError"></i>
            <div
              id="password-message"
              class="error-message error"
              v-if="passwordError"
            >
              <p>Password should be at least 8 characters</p>
            </div>
          </div>
          <a href="forgot-password">Forgot Password?</a>

          <div class="fm-ctrl btn">
            <button type="submit" class="sign-in">Sign In</button>
          </div>
          <div class="fm-ctrl" v-if="loginError">
            <p class="error-message">{{ loginError }}</p>
          </div>

          <router-link to="/register"
            >Dont Have an Account?<span class="text-[#FF0000]">
              Register Now</span
            ></router-link
          >

          <!-- <div class="fm-ctrl checkbox">
              <div class="keep-me">
                <label class="ctn-check">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <span class="remind-txt flex-nowrap">Remember Me for 10 Days</span>
              </div>
            </div> -->
        </form>
      </div>
      <div class="image-side">
        <div class="contact-txt">
          <div class="contact-info">
            <p>
              Finally. Learning <br />
              Management done right. <br />
              for <strong>you.</strong>
            </p>
            <p>
              Reach out to us if you are experiencing any trouble logging in
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
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const emailError = ref(false);
    const passwordError = ref(false);
    const loginError = ref(null);
    const store = useStore();
    const router = useRouter();

    const validateEmail = (email) => {
      var re = /^\S+@\S+\.\S+$/;
      return re.test(email);
    };

    const validateForm = () => {
      emailError.value = !validateEmail(email.value);
      passwordError.value = password.value.length < 8;

      if (!emailError.value && !passwordError.value) {
        logInUser();
      }
    };

    const logInUser = async () => {
      try {
        await store.dispatch('login', { email: email.value, password: password.value });
        router.push("/dashboard");
      } catch (error) {
        loginError.value = "Login failed. Please check your credentials and try again.";
        console.error(error);
      }
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      loginError,
      validateForm,
      validateEmail,
      logInUser,
    };
  }
};
</script>
