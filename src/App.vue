<template>
  <div>Hello {{ name }} in {{ env }}!</div>
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