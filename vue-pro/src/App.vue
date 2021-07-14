<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <app-slider></app-slider>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
import appSlider from './components/slider.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appSlider,
  }
}
</script>

<style>

</style>
