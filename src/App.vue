<template>
  <div id="app">
    <sx-header></sx-header>
    <div class="sx-content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './router';
import SxHeader from './components/sx-header/sx-header.vue';

export default {
  name: 'App',
  components: {
    SxHeader
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
  background: @white;
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 80px;
}

a {
  text-decoration: none;
}

.sx-content-container {
    max-width: 1120px;
    margin: 0 auto;
}
</style>
