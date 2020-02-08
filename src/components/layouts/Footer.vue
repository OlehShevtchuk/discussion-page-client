<template>
  <div class="footer">
    <p>Created by Oleh Shevchuk</p>
    <p>{{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.footer {
  flex: 0 0 auto;
  height: 80px;
  font-size: 12px;
  padding-top: 30px;
  -webkit-box-shadow: 0px -1px 6px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 6px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 6px -2px rgba(0, 0, 0, 0.75);
}
p {
  text-align: center;
}
@media (max-width: 400px) {
  .footer {
    height: 50px;
    padding-top: 10px;
  }
}
</style>
