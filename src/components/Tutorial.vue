<template>
    <div class="columns">
        <div class="tabs column is-5 is-offset-1 ">
  <ul>

    <li class="is-active"><router-link to="/tutorial/music">documents</router-link></li>
    <li><router-link to="/tutorial/videos">Videos</router-link></li>
    <li><router-link to="/tutorial/documents">documents</router-link></li>

  </ul>
 </div>


   <router-view></router-view>

</div>



</template>

<script>
export default {
  name: 'tutorial',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
