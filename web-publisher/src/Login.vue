<template>
  <v-app>
    <v-img
      dark
      eager
      max-height="100%"
      max-width="100%"
      aspect-ratio="1.97"
      sizes="0"
      gradient="to top left, rgba(245,245,245,.15), rgba(84,128,241,.7)"
      src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
    >
      <template v-slot:default>
        <v-container fluid fill-height>
          <v-row dense align="center" justify="center">
            <v-col xl="3" lg="4" md="7" sm="12">
              <v-card flat>
                <v-card-title>
                  <v-row dense align="center" justify="center">
                    <img height="150px" width="150px" src="./assets/login_logo.png" />
                  </v-row>
                </v-card-title>
                <v-card-title>
                  <v-form
                    :ref="ENV.LOGIN_FORM"
                    lazy-validation
                    style="width:100%"
                  >
                    <v-text-field
                      v-model="userId"
                      required
                      placeholder="User ID"
                      prepend-inner-icon="perm_identity"
                      :rules="useIdRules"
                    >
                    </v-text-field>
                    <v-text-field
                      v-model="userPass"
                      required
                      :type="passShow ? 'text' : 'password'"
                      placeholder="Password"
                      prepend-inner-icon="verified_user"
                      :append-icon="!passShow ? 'visibility' : 'visibility_off'"
                      :rules="passRules"
                      @click:append="passShow = !passShow"
                    >
                    </v-text-field>
                    <v-checkbox dense hide-details label="Keep me sign in">
                    </v-checkbox>
                  </v-form>
                </v-card-title>
                <v-card-actions>
                  <v-row justify="center" align="center">
                    <v-btn
                      color="primary"
                      depressed
                      width="280px"
                      @click.stop="login"
                    >Login</v-btn>
                  </v-row>
                </v-card-actions>
                <v-card-actions class="mt-5">
                  <v-btn text @click.stop="signUp">Sign up</v-btn>
                  <v-btn text @click.stop="forgotPass">
                    Forgot your password
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-img>
  </v-app>
</template>

<script>
// import bgLogin from "./assets/bg_login.png"
// src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"

export default {
  name: "login",
  data() {
    return {
      ENV: {
        LOGIN_FORM: "login_form_bmsys"
      },

      userId: "",
      userPass: "",
      passShow: false,
      useIdRules: [
        v => !!v || "User ID is required"
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      passRules: [
        v => !!v || "Password is required"
      ]
    };
  },
  created() {
    console.log("Check store user session. if exists, send request to server to verify token");
    console.log(process);
  },
  methods: {
    login() {
      if (this.$refs[this.ENV.LOGIN_FORM].validate()) {
        window.location.href = "http://localhost:8080/";
      }
    },
    signUp() {
      window.location.href = "http://localhost:8080/register";
    },
    forgotPass() {
      console.log("hihi! this feature will open an popup to request reset password.");
    }
  }
};
</script>
