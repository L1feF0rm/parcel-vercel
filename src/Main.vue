<template>
  <div>Vue {{ version }} in {{ env }}!</div>
  <router-view></router-view>
</template>

<script>
  export default {
    computed: {
      env() {
        return process.env.NODE_ENV;
      },
      version() {
        return this.$.appContext.app.version;
      }
    },
    created() {
      console.log('this', this);
    }
  };
</script>