<template>
  <div class="login clearfix">
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="50px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="admin">
          <el-input
            type="text"
            v-model="ruleForm.admin"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from '../../api/user'
import { setCookie } from '@/utils/auth'

export default {
  data () {
    // 账号
    var validateAdmin = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    // 密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        admin: '',
        pass: ''
      },
      rules: {
        admin: [{ validator: validateAdmin, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 提交登录
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.ruleForm).then(res => {
            if (res.status === 200) {
              setCookie('Admin-Token', res.token)
              this.$store.dispatch('login', this.ruleForm)
              this.$router.push('/home')
            } else {
              console.log('登录失败')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
}
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
// 卡片
.box-card {
  width: 400px;
  margin: 150px auto;
}
// 表单
.el-form-item {
  &:last-child {
    /deep/.el-form-item__content{
      margin: 0 !important;
    }
    text-align: center;
    .el-button {
      width: 100%;
    }
  }
}
</style>
