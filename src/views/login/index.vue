<template>
  <div class="login-container">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="10">
          <el-form-item label="" prop="pass">
            <h1 align="center">登录</h1>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="10">
          <el-form-item prop="pass">
            <el-input prefix-icon="el-icon-cmdb-like" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="10">
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="10">
          <el-form-item prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :sm="10">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        "login",
        "logout"
      ]),
      async loginUser() {
        this.sending = true
        try {
          await
            this.login({data: this.form})
        } catch (e) {
          console.log('login fail fail fail')
        }
        console.log(this.userinfo.username)
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
