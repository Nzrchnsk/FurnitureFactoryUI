<template>
  <header-component/>
  <div>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import headerComponent from './views/components/header';

  export default {
    name: 'App',

    components: {
      headerComponent,
    },
    mounted() {
      if (!localStorage.getItem('userAuth')) {
        this.$router.push({name: 'signIn'});
      }
    }
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
