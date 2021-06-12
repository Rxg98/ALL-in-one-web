<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading=isLoginLoading @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/services/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度6-18个字符', trigger: 'blur' }
        ]
      },
      isLoginLoading: false
    }
  },
  methods: {
    // onSubmit () {
    //   console.log('点击提交')
    // }
    async onSubmit () {
      try {
        await this.$refs.form.validate()
        this.isLoginLoading = true
        // const { data } = await request({
        //   method: 'POST',
        //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //   url: '/front/user/login',
        //   data: qs.stringify(this.form)
        // })
        const { data } = await login(this.form)
        this.isLoginLoading = false
        if (data.state === 1) {
          this.$router.push({
            name: 'home'
          })
          this.$message.success('登录成功')
          this.$store.commit('setUser', data.content)
          console.log(this.$store.state.user)
        } else {
          this.$message.error('登录失败')
        }
      } catch (err) {
        console.log('没有通过校验', err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-form {
    background-color: #fff;
    width: 350px;
    padding: 20px;
    border-radius: 20px;

    .el-button {
      width: 100%;
    }
  }
}
</style>
