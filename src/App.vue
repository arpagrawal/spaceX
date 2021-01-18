<template>
  <div id="app">
    <sx-header></sx-header>
    <div class="sx-content-container">
      <router-view></router-view>
    </div>
    <sx-footer></sx-footer>
  </div>
</template>

<script>
import router from './router';
import SxHeader from './components/sx-header/sx-header.vue';
import SxFooter from './components/sx-footer/sx-footer.vue';

export default {
  name: 'App',
  components: {
    SxHeader,
    SxFooter
  },
  router
}
</script>

<style lang="less">
* {
  margin: 0;
}
body,
#app {
  font-family: 'Source Sans Pro', sans-serif;
  background: @lightest-grey;
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
}

a {
  text-decoration: none;
}

.sx-content-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 32px;
}
</style>
