let outputscreen=document.getElementById("input");

var selection = "rad"
function display(num){
    outputscreen.value+=num;
    
}
function Clear(){
outputscreen.value="";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch{
        outputscreen.value="err";
    }
}
    
function cal_sin(){
 outputscreen.value=Math.sin(outputscreen.value);   
}
function cal_cos(){
    outputscreen.value=Math.cos(outputscreen.value);   
   }
   function cal_tan(){
    outputscreen.value=Math.tan(outputscreen.value);   
   }

   function cal_log(){
    outputscreen.value=Math.log(outputscreen.value);   
   }
   function cal_power(){
    outputscreen.value=Math.pow(outputscreen.value,2);   
   }
   function pi(){
    outputscreen.value=Math.PI;   
   }
   function sqr(){
    outputscreen.value=Math.sqrt(outputscreen.value,2);   
   }
   function e(){
    outputscreen.value=Math.E;   
   }
   function nfact(){

   let i,number, a;
   a=1;

   number=outputscreen.value;
   for(i=1; i<=number; i++)
   {
    a=a*i;
    
   }

   outputscreen.value=a;

   }
   


