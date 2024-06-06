let displayString = "";
let history = [];
function click1()
{
    displayString+="1";
    document.getElementById("display").innerHTML = displayString;
}
function click2()
{
    displayString+="2";
    document.getElementById("display").innerHTML = displayString;
}
function click3()
{
    displayString+="3";
    document.getElementById("display").innerHTML = displayString;
}
function click4()
{
    displayString+="4";
    document.getElementById("display").innerHTML = displayString;
}
function click5()
{
    displayString+="5";
    document.getElementById("display").innerHTML = displayString;
}
function click6()
{
    displayString+="6";
    document.getElementById("display").innerHTML = displayString;
}
function click8()
{
    displayString+="8";
    document.getElementById("display").innerHTML = displayString;
}
function click7()
{
    displayString+="7";
    document.getElementById("display").innerHTML = displayString;
}
function click9()
{
    displayString+="9";
    document.getElementById("display").innerHTML = displayString;
}
function clickPlus()
{
    displayString+="+";
    document.getElementById("display").innerHTML = displayString;
}
function clickMinus()
{
    displayString+="-";
    document.getElementById("display").innerHTML = displayString;
}
function click0()
{
    displayString+="0";
    document.getElementById("display").innerHTML = displayString;
}
function clickSlash()
{
    displayString+="/";
    document.getElementById("display").innerHTML = displayString;
}
function clickMult()
{
    displayString+="×";
    document.getElementById("display").innerHTML = displayString;
}
function clickOpen()
{
    displayString+="(";
    document.getElementById("display").innerHTML = displayString;
}
function clickClose()
{
    displayString+=")";
    document.getElementById("display").innerHTML = displayString;
}
function clickExponent()
{
    displayString+="^";
    document.getElementById("display").innerHTML = displayString;
}
function clickSqrt()
{
    displayString+="√("
    document.getElementById("display").innerHTML = displayString
}
function clickClear()
{
    displayString="";
    document.getElementById("display").innerHTML = displayString;
}
function clickBackspace()
{
    displayString = displayString.substring(0, displayString.length-1);
    document.getElementById("display").innerHTML = displayString;
}
//QUESTION: IS IT FINE IF YOU HAVE TO PUT MULTIPLCATION SYMBOL (ex. 5sqrt(4) OR CAN I HAVE IT SO ITS 5 * sqrt(4)
function clickEnter()
{
    // if(evalString.charAt(displayString.length-2)=== "+" || displayString.charAt(displayString.length-2)=== "-" || displayString.charAt(displayString.length-2)=== "/" || displayString.charAt(displayString.length-2)=== "×" || displayString.charAt(displayString.length-2)=== "(" || displayString.charAt(displayString.length-2)=== ")")
    // {
    //     displayString = "";
    //     evalString = "";
    //     document.getElementById("display").innerHTML = "Error";
    // }
    history.push(displayString + (" = " + eval(changeString())));
    localStorage.setItem("history", JSON.stringify(history));
    displayString = eval(changeString());

    document.getElementById("display").innerHTML = displayString;
}
function getHistory(value)
{
    displayString = value.substring(0, value.indexOf("=")-1);
    document.getElementById("display").innerHTML = displayString;
}

function clickHistory()
{
    let htmlString = "";
    for(let x = 0; x < JSON.parse(localStorage.getItem("history")).length; x++)
    {
        htmlString += "<li onclick='getHistory(\"" + (JSON.parse(localStorage.getItem("history")))[x]+ "\")'> " + JSON.parse(localStorage.getItem("history"))[x] + "</li>"
        //make for loop that adds an element to the dropdown for each thing in history
    }
    document.getElementById("dropdown").innerHTML = htmlString;
}
function changeString()
{
    let stringCopy = displayString;
    stringCopy=stringCopy.replaceAll("×", "*")
    stringCopy=stringCopy.replaceAll("√", "Math.sqrt")
    stringCopy=stringCopy.replaceAll("^", "**")
    return stringCopy;
}



