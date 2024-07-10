<!-- src/views/DisclaimerPage.vue -->
<template>
  <div>
    <h1>免责声明</h1>
    <p>请阅读并同意我们的免责声明。</p>
    <button @click="agree">同意并继续</button>
    <button @click="exit">退出</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { agreedToDisclaimerKey } from '@/router/index';

const router = useRouter();

const agree = () => {
  localStorage.setItem(agreedToDisclaimerKey, 'true');
  router.push({ name: 'Home' });
};

const exit = () => {
  alert('您已退出应用');
  window.close();
};
</script>
