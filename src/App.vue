<template>
  <MyNavbar/>
  <MyHero/>
</template>

<script>
import MyNavbar from './components/MyNavbar/MyNavbar.vue';
import MyHero from './components/MyHero/MyHero.vue';
export default {
  name: 'App',
  components: {
    MyNavbar,
    MyHero
  }
}
</script>

<style>
*
{
  margin: 0%;
  padding: 0%;
}
</style>