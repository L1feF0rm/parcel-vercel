<template>
  <div v-text="info"></div>
  <router-view></router-view>
</template>

<script>
  export default {
    computed: {
      info() {
        return `Vue ${this.$.appContext.app.version} in ${process.env.NODE_ENV}`;
      }
    },
    created() {
      console.log('this', this);
      console.log('this.$', this.$);
    }
  };
</script>