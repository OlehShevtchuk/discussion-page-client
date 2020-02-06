<template>
  <div class="header-container">
    <img alt="Discussion logo" src="../../assets/discussion-logo.png" />
    <br />
    <span class="statistic">More than {{ commentsQnt }} comments</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    commentsQnt() {
      return this.$store.state.commentsQnt;
    },
  },
};
</script>

<style scoped>
.header-container {
  width: 100%;
}
img {
  max-height: 200px;
  max-width: 600px;
  width: 40%;
  height: 80%;
}
.statistic {
  color: #6f7a8c;
  margin-left: 30%;
}
</style>
