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
  text-align: center;
  -webkit-box-shadow: 0px 1px 6px 0px rgba(218, 220, 245, 1);
  -moz-box-shadow: 0px 1px 6px 0px rgba(218, 220, 245, 1);
  box-shadow: 0px 1px 6px 0px rgba(218, 220, 245, 1);
}
img {
  max-height: 200px;
  max-width: 600px;
  width: 50%;
  height: 80%;
}
.statistic {
  color: #6f7a8c;
  margin-left: 30%;
}
@media (max-width: 500px) {
  .statistic {
    font-size: 14px;
  }
}
</style>
