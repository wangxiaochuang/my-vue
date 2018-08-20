<template>
  <div class="login-container">
    <el-form :model="form" status-icon :rules="rules" ref="form" class="demo-ruleForm">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="8">
          <el-form-item>
            <h1 align="center">登录</h1>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="8">
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-cmdb-user" type="text" v-model="form.username" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="8">
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-cmdb-lock" type="password" v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="8">
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      let validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.form.password !== '') {
            this.$refs.form.validateField('password');
          }
          callback();
        }
      };
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        "login",
        "logout"
      ]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login({params: this.model})
            this.$router.replace("dashboard")
          } else {
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    padding: 0 5vh;
    height: 100vh;
    .login-label {
      height: 20vh;
      font-size: 6vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
