<template>
  <div>Hello {{ name }} in {{ env }}!</div>
  <router-view><router-view>
</template>

<script>
  export default {
    data() {
      return {
        name: "Vue",
        env: process.env.NODE_ENV
      };
    }
  };
</script>