<template>
    <div class="PayOut">
        Hello Person, Your Payable amount is {{ payable }}. Scan the QR to pay.
    </div>
    <div class="Image">
        <img src="./Scan.png" alt="">
    </div>
</template>
<script>
export default
{
    props:{
        payable:{
            type: String,
            required: true
        }
    }
}
</script>
<style>
.PayOut {
    width: 100%;
    position: fixed;
    margin-top: 5%;
    text-align: center;
    font-size: 300%;
    font-weight: bold;
    color: red;
}
.Image
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.Image img
{
    width: 20%;
}
</style>