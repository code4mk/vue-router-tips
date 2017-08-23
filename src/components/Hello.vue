<template>
    <div class="columns">
        <div class="card column is-6 is-offset-3">
        <header class="card-header">
          <p class="card-header-title">
            Router Vue
          </p>
          <a class="card-header-icon">
            <span class="icon">
              <i class="fa fa-angle-down"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <p>vue-router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

Nested route/view mapping
Modular, component-based router configuration
Route params, query, wildcards
View transition effects powered by Vue.js' transition system
Fine-grained navigation control
Links with automatic active CSS classes
HTML5 history mode or hash mode, with auto-fallback in IE9
Customizable Scroll Behavior</p>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="/tutorial">Tutorial</a>
          <!-- <a class="card-footer-item">Edit</a> -->
          <router-link to="/edit" class="card-footer-item">Edit</router-link>
          <a class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
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
