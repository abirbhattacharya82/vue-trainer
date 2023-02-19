<template>
    <div class="PayOut">
        hello Sir, Your Payable amount is {{ payable }}. Scan the QR to pay.
    </div>
    <div class="Image">
        
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
}
</style>