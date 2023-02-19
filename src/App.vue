<template>
  <MyNavbar />
  <button @click="pay()" id="pay">Pay</button>
  <OnlineOrder v-if="showO" />
  <PayOut v-if="showPO" v-bind:payable=payableValue />
</template>

<script>
import MyNavbar from './components/MyNavbar/MyNavbar.vue';
import OnlineOrder from './components/OnlineOrder/OnlineOrder.vue';
import PayOut from './components/PayOut/PayOut.vue';
export default {
  data() {
    return {
      showO: true,
      showPO:false,
      payableValue: "0"
    }
  },
  components: {
    MyNavbar,
    OnlineOrder,
    PayOut
  },
  methods:{
    pay()
    {
      this.payableValue=document.getElementById('payable').innerHTML
      this.showO=!this.showO
      this.showPO=!this.showPO
    }
  }
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}

#pay 
{
  background-color: yellow;
  color: red;
  border: 1px solid red;
  position: absolute;
  width: 10%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  font-size: 150%;
  margin-left: 89%;
  margin-top: 0.5%;
}
#pay:hover
{
  background-color: red;
  color: yellow;
  border: 1px solid yellow;
}
</style>