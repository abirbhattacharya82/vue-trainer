export default
{
    methods:
    {
        reduceCoke()
        {
            var x=parseInt(document.getElementById('cokeCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('cokeCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-44;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseCoke()
        {
            var x=parseInt(document.getElementById('cokeCount').innerHTML);
            x=x+1;
            document.getElementById('cokeCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+44;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceDCB()
        {
            var x=parseInt(document.getElementById('dcbCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('dcbCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-292;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseDCB()
        {
            var x=parseInt(document.getElementById('dcbCount').innerHTML);
            x=x+1;
            document.getElementById('dcbCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+292;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceFries()
        {
            var x=parseInt(document.getElementById('friesCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('friesCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-62;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseFries()
        {
            var x=parseInt(document.getElementById('friesCount').innerHTML);
            x=x+1;
            document.getElementById('friesCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+62;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceIt()
        {
            var x=parseInt(document.getElementById('itCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('itCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-175;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseIt()
        {
            var x=parseInt(document.getElementById('itCount').innerHTML);
            x=x+1;
            document.getElementById('itCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+175;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceMc()
        {
            var x=parseInt(document.getElementById('mcCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('mcCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-329;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseMc()
        {
            var x=parseInt(document.getElementById('mcCount').innerHTML);
            x=x+1;
            document.getElementById('mcCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+329;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceMn()
        {
            var x=parseInt(document.getElementById('mnCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('mnCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-161;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseMn()
        {
            var x=parseInt(document.getElementById('mnCount').innerHTML);
            x=x+1;
            document.getElementById('mnCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+161;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceSalad()
        {
            var x=parseInt(document.getElementById('saladCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('saladCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-242;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseSalad()
        {
            var x=parseInt(document.getElementById('saladCount').innerHTML);
            x=x+1;
            document.getElementById('saladCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+242;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        },
        reduceWater()
        {
            var x=parseInt(document.getElementById('waterCount').innerHTML);
            if(x!=0)
            {
                x=x-1;
                document.getElementById('waterCount').innerHTML=''+x;
                
                var z=parseInt(document.getElementById('total').innerHTML);
                z=z-85;
                document.getElementById('total').innerHTML=''+z;

                var dis=0.05*z;
                document.getElementById('discount').innerHTML=''+dis;

                var d=(1-0.05)*z;
                document.getElementById('payable').innerHTML=''+d;
            }
        },
        increaseWater()
        {
            var x=parseInt(document.getElementById('waterCount').innerHTML);
            x=x+1;
            document.getElementById('waterCount').innerHTML=''+x;

            var z=parseInt(document.getElementById('total').innerHTML);
            z=z+85;
            document.getElementById('total').innerHTML=''+z;

            var dis=0.05*z;
            document.getElementById('discount').innerHTML=''+dis;

            var d=(1-0.05)*z;
            document.getElementById('payable').innerHTML=''+d;
        }
    }
}