<template>
  <div id="app">
    <div class="content">
      <Header />
      <div id="comments-container">
        <Comments />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Comments from './views/comments/Comments';

export default {
  name: 'app',
  components: {
    Header,
    Comments,
    Footer,
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
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.content {
  flex: 1 0 auto;
}
#comments-container {
  min-width: 50%;
  margin: 50px 20px;
  text-align: left;
}
@media (max-width: 500px) {
  #comments-container {
    margin: 50px 5px;
  }
}
</style>
