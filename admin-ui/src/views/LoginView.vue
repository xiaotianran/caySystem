<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <h2 class="login-title">交通管理系统</h2>
      <div class="form-group">
        <input type="text" id="username" v-model.trim="username" required />
        <label for="username">账号:</label>
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model.trim="password" required />
        <label for="password">密码:</label>
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center; /* 文本居中 */
}

.login-title {
  font-size: 32px; /* 增大标题字体 */
  margin-bottom: 24px;
}

.form-group {
  position: relative;
  margin-bottom: 16px;
}

.form-group input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
}

.form-group label {
  position: absolute;
  left: 0;
  top: 8px;
  pointer-events: none;
  transition: 0.2s ease all;
}

.form-group input:focus ~ label,
.form-group input:not(:placeholder-shown) ~ label {
  font-size: 12px;
  transform: translateY(-24px);
  color: #2196f3;
}
.btn-login {
  background-color: #2196f3;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
}
</style>

<script>
// import axios from 'axios';
// import config from '@/config';
import { useToast } from "vue-toastification";

export default {
  name: "LoginView",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 构造一个假的用户信息数组
      const users = [
        { username: "admin", password: "admin" },
        { username: "user", password: "user" },
      ];
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );
      if (user) {
        this.toast.success("登录成功");
        this.$router.push("/dashboard");
      } else {
        this.toast.error("账号或密码错误");
      }
      // // 在假API地址上模拟一个POST请求
      // const apiUrl = config.getApiUrl('login');
      // axios.post(apiUrl, {
      //   username: this.username,
      //   password: this.password,
      // }).then(response => {

      //   console.log(response);
      //   // 在本地存储中存储假的token
      //   const user = users.find(u => u.username === this.username && u.password === this.password);
      //   if (user) {
      //     localStorage.setItem('token', 'fakeToken');
      //     this.$router.push('/dashboard');
      //   } else {
      //     console.error("Invalid username or password");
      //   }
      // }).catch(error => {
      //   console.error(error);
      // });
    },
  },
};
</script>
