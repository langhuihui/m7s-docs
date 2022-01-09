<template>
  <Layout />
</template>
<script>
import DefaultTheme from "vitepress/theme";
export default {
  components: {
    Layout: DefaultTheme.Layout
  },
  mounted() {
    import("aegis-web-sdk").then((Aegis) => {
      const aegis = new Aegis({
        id: 'vq6OYI47ZanP8PLyQ3', // 上报 id
        uin: '', // 用户唯一 ID（可选）
        reportApiSpeed: false, // 接口测速
        reportAssetSpeed: true, // 静态资源测速
        spa: true // spa 应用页面跳转的时候开启 pv 计算
      });
    });
  }
};
</script>