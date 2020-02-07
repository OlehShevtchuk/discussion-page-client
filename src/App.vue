<template>
  <div id="app">
    <Header />
    <div id="comments-container">
      <Comments />
    </div>
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Comments from './views/comments/Comments';

export default {
  name: 'app',
  components: {
    Header,
    Comments,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#comments-container {
  min-width: 50%;
  margin: 50px 20px;
  text-align: left;
}
</style>
