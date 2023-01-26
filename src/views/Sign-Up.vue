<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div
      class="sign-up-header"
      style="background-image: url('images/lsk.jpg')"
    ></div>
    <!-- / Sign Up Image And Headings -->
    <!-- Sign Up Form -->
    <a-card
      :bordered="false"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">CREATE ACCOUNT</h5>
      </template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item class="mb-10" label="First Name">
          <a-input
            v-decorator="[
              'first_name',
              {
                rules: [{ required: true, message: 'Please input your  first name!' }],
              },
            ]"
            placeholder="First Name"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10" label="Last Name">
          <a-input
            v-decorator="[
              'last_name',
              {
                rules: [{ required: true, message: 'Please input your last name!' }],
              },
            ]"
            placeholder="Last Name"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10" label="Email">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              },
            ]"
            placeholder="Email"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5" label="Password" has-feedback>
          <a-input-password
		  v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                  min:8,
                  message:'Password must be 8 characters or more'
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
            placeholder="Password"
          >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input-password>
        </a-form-item>
        <a-form-item class="mb-5" label="Confirm Password" has-feedback>
          <a-input
		  v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
            placeholder="Re-Type Password"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            I agree the
            <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
            :loading="loading"
          >
            SIGN UP
          </a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Already have an account?
        <router-link to="/sign-in" class="font-bold text-dark"
          >Sign In</router-link
        >
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script>
function validetPasswordLength(value) {
  if (value.length>8) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'Password must be greater than 8 characters',
  };
}
export default {
  data() {
    return {
      loading:this.$store.state.loading
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
		  this.$store.dispatch("signUp",values)
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>

<style lang="scss"></style>
