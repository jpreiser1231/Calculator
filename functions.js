let displayString = "";
let evalString = "";
let history = [];
function click1()
{
    displayString+="1";
    evalString+="1";
    document.getElementById("display").innerHTML = displayString;
}
function click2()
{
    displayString+="2";
    evalString+="2";
    document.getElementById("display").innerHTML = displayString;
}
function click3()
{
    displayString+="3";
    evalString+="3";
    document.getElementById("display").innerHTML = displayString;
}
function click4()
{
    displayString+="4";
    evalString+="4";
    document.getElementById("display").innerHTML = displayString;
}
function click5()
{
    displayString+="5";
    evalString+="5";
    document.getElementById("display").innerHTML = displayString;
}
function click6()
{
    displayString+="6";
    evalString+="6";
    document.getElementById("display").innerHTML = displayString;
}
function click8()
{
    displayString+="8";
    evalString+="8";
    document.getElementById("display").innerHTML = displayString;
}
function click7()
{
    displayString+="7";
    evalString+="7";
    document.getElementById("display").innerHTML = displayString;
}
function click9()
{
    displayString+="9";
    evalString+="9";
    document.getElementById("display").innerHTML = displayString;
}
function clickPlus()
{
    displayString+=" + ";
    evalString+="+";
    document.getElementById("display").innerHTML = displayString;
}
function clickMinus()
{
    displayString+=" - ";
    evalString+="-";
    document.getElementById("display").innerHTML = displayString;
}
function click0()
{
    displayString+="0";
    evalString+="0";
    document.getElementById("display").innerHTML = displayString;
}
function clickSlash()
{
    displayString+=" / ";
    evalString+="/";
    document.getElementById("display").innerHTML = displayString;
}
function clickMult()
{
    displayString+=" × ";
    evalString+="*";
    document.getElementById("display").innerHTML = displayString;
}
function clickClear()
{
    displayString="";
    evalString = "";
    document.getElementById("display").innerHTML = displayString;
}
function clickBackspace()
{
    displayString = displayString.substring(0, displayString.length-1);
    evalString = displayString.substring(0, displayString.length-1);
    document.getElementById("display").innerHTML = displayString;
}
function clickEnter()
{
    if(displayString.charAt(displayString.length-1)=== "+" || displayString.charAt(displayString.length-1)=== "-" || displayString.charAt(displayString.length-1)=== "/" || displayString.charAt(displayString.length-1)=== "×" || displayString.charAt(displayString.length-1)=== "(" || displayString.charAt(displayString.length-1)=== ")")
    {
        displayString = "";
        evalString = "";
        document.getElementById("display").innerHTML = "Error"
    }
    history.push(displayString + (" = " + eval(evalString)));
    localStorage.setItem("history", JSON.stringify(history));
    displayString = eval(evalString);
    document.getElementById("display").innerHTML = displayString;
}
function clickHistory()
{
    for()
    {
        //make for loop that adds an element to the dropdown for each thing in history
    }
}


