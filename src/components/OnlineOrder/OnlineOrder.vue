<template>
    <div class="OnlineOrder">
        <div class="Left">
            <div class="Grid">
                <div class="Row">
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/Coke.png" alt="">
                        </div>
                        <div class="Title">
                            Coke
                        </div>
                        <div class="Price">
                            44 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceCoke()">-</button><div class="count" id="cokeCount">0</div><button @click="increaseCoke()">+</button>
                        </div>
                    </div>
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/DoubleCheeseBurger.png" alt="">
                        </div>
                        <div class="Title">
                            Double Cheese Burger
                        </div>
                        <div class="Price">
                            292 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceDCB()">-</button><div class="count" id="dcbCount">0</div><button @click="increaseDCB()">+</button>
                        </div>
                    </div>
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/Fries.png" alt="">
                        </div>
                        <div class="Title">
                            Fries
                        </div>
                        <div class="Price">
                            62 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceFries()">-</button><div class="count" id="friesCount">0</div><button @click="increaseFries()">+</button>
                        </div>
                    </div>
                </div>
                <div class="Row">
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/IceTea.png" alt="">
                        </div>
                        <div class="Title">
                            Ice Tea
                        </div>
                        <div class="Price">
                            175 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceIt()">-</button><div class="count" id="itCount">0</div><button @click="increaseIt()">+</button>
                        </div>
                    </div>
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/McChicken.png" alt="">
                        </div>
                        <div class="Title">
                            Mc Chicken
                        </div>
                        <div class="Price">
                            329 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceMc()">-</button><div class="count" id="mcCount">0</div><button @click="increaseMc()">+</button>
                        </div>
                    </div>
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/McNuggets.png" alt="">
                        </div>
                        <div class="Title">
                            Mc Nuggets
                        </div>
                        <div class="Price">
                            161 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceMn()">-</button><div class="count" id="mnCount">0</div><button @click="increaseMn()">+</button>
                        </div>
                    </div>
                </div>
                <div class="Row">
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/Salad.png" alt="">
                        </div>
                        <div class="Title">
                            Salad
                        </div>
                        <div class="Price">
                            242 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceSalad()">-</button><div class="count" id="saladCount">0</div><button @click="increaseSalad()">+</button>
                        </div>
                    </div>
                    <div class="Card">
                        <div class="Image">
                            <img src="./assets/Water.png" alt="">
                        </div>
                        <div class="Title">
                            Water
                        </div>
                        <div class="Price">
                            85 Rs
                        </div>
                        <div class="Button">
                            <button @click="reduceWater()">-</button><div class="count" id="waterCount">0</div><button @click="increaseWater()">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Right">
            <div class="Bill">
                <div class="Title">
                    Bill
                </div>
                <div class="CalculatePart">
                    <div class="BillRow">
                        <div class="Item">
                            Total
                        </div>
                        <div class="Amount" id="total">
                            0
                        </div>
                    </div>
                    <div class="BillRow">
                        <div class="Item">
                            Discount @ 5%
                        </div>
                        <div class="Amount" id="discount">
                            0
                        </div>
                    </div>
                    <div class="BillRow">
                        <div class="Item">
                            Payable Amount
                        </div>
                        <div class="Amount" id="payable">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./OnlineOrder.js"></script>
<style src="./OnlineOrder.css"></style>