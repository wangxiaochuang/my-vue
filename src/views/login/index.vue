<template>
  <div class="login-container">
    <form novalidate class="md-layout form" @submit.prevent="validateUser">
      <md-card class="my-card md-layout-item md-small-size-100 md-size-40">
        <md-card-header>
          <div class="md-title">用户登录</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field :class="getValidationClass('username')">
                <label for="username">用户名</label>
                <md-input name="username" id="username" autocomplete="username" v-model="form.username"
                          :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.username.required">需要填写用户名</span>
                <span class="md-error" v-else-if="!$v.form.username.minlength">用户名格式</span>
              </md-field>
              <md-field :class="getValidationClass('password')">
                <label for="password">密码</label>
                <md-input name="password" id="password" autocomplete="password" v-model="form.password" type="password"
                          :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.password.required">需要填写密码</span>
                <span class="md-error" v-else-if="!$v.form.password.minLength">密码无效</span>
              </md-field>
              <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">登录</md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import {validationMixin} from 'vuelidate'
  import {
    required,
    minLength
  } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    data: () => ({
      form: {
        username: null,
        password: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        },
      }
    },
    computed: mapState({
      userinfo: state => state.session.userinfo
    }),
    methods: {
      ...mapActions([
        "login",
        "logout"
      ]),
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.username = null
        this.form.password = null
      },
      async loginUser() {
        this.sending = true
        try {
          await this.login({data: this.form})
        } catch (e) {
          console.log('login fail fail fail')
        }
        console.log(this.userinfo.username)
      },
      validateUser() {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.loginUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    .form {
      height: 80%;
    }
    .my-card {
      margin: auto auto;
    }
    .md-error {
      color: red;
    }
  }
</style>
