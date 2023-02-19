<template>
  <MyNavbar/>
  <OnlineOrder/>
</template>

<script>
import MyNavbar from './components/MyNavbar/MyNavbar.vue';
import OnlineOrder from './components/OnlineOrder/OnlineOrder.vue';
export default {
  name: 'App',
  components: {
    MyNavbar,
    OnlineOrder
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