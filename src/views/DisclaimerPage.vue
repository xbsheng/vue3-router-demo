<!-- src/views/DisclaimerPage.vue -->
<template>
  <div>
    <h1>免责声明</h1>
    <p>请阅读并同意我们的免责声明。</p>
    <button @click="agree">同意并继续</button>
    <button @click="exit">退出</button>
  </div>
</template>

<script>
import { agreedToDisclaimerKey } from '@/router/index'
export default {
  methods: {
    agree() {
      localStorage.setItem(agreedToDisclaimerKey, 'true');
      this.$router.push({ name: 'Home' });
    },
    exit() {
      // 用户选择退出，可以关闭应用或者返回到某个登录页面等。
      alert('您已退出应用');
      window.close();
    }
  }
}
</script>
