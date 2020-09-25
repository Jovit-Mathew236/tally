/*var name=prompt("What is your Name?");
alert("Hi"+name);*/
function sum(){
        var No1=document.getElementById("num1").value
        var No2=document.getElementById("num2").value
        var No3=document.getElementById("num3").value
        var No4=document.getElementById("num4").value
        var No5=document.getElementById("num5").value
        var No6=document.getElementById("num6").value
        var No7=document.getElementById("num7").value
        var No8=document.getElementById("num8").value
        var No9=document.getElementById("num9").value
        var No10=document.getElementById("num10").value
        var No11=document.getElementById("num11").value
        var No12=document.getElementById("num12").value
        var balen=document.getElementById("bal").value;


        var som=(No1*1)+(No2*1)+(No3*1)+(No4*1)+(No5*1)+(No6*1)+(No7*1)+(No8*1)+(No9*1)+(No10*1)+(No11*1)+(No12*1)
        var tot=balen-som;

    document.getElementById("Ans").innerHTML=som;
    document.getElementById("sub").innerHTML=tot;
}
