let string = "";
let display = document.getElementById("display");
let expr = document.getElementById("expr");
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (e) => {

    let value= e.target.textContent.trim();
    switch (value){

//FOR AC
    case "AC":
    string="";
    updateDisplay("0");
    expr.textContent = "";
    break;
//FOR DEL
    case "DEL":
    string=string.slice(0,-1);
    if(string === ""){
       updateDisplay("0");
    }
    else{
       updateDisplay(string);
    }
    break;
//FOR CALCULATION
    case "=":
    //string= eval(string);
    if(string === ""){
        updateDisplay("0");
        break;
    }
    let exp=string;
    exp= exp.replaceAll("×","*");
    exp= exp.replaceAll("÷", "/");

    try{
        let result = eval(exp);

         if(!isFinite(result)){
         updateDisplay("Error");
         break;
         }
        expr.textContent = string;
        string = (result.toFixed(2)).toString();
        updateDisplay(string);
    }
    catch{
        updateDisplay("Error");
    }
    break;
//FOR PERCENTAGE    
    case "%":
        string= (Number(string)/100).toFixed(2);
        updateDisplay(string);
        break;
//FOR E
    case "e":
        if(string === "" || string === "0"){
            string = Math.E.toFixed(2);
            updateDisplay(string);
        }
        else{
            string = Number((Math.E * string).toFixed(2));
            updateDisplay(string);
        }
        break;
//FOR PI
    case "π":
        if(string === "" || string === "0"){
            string = Math.PI.toFixed(2);
            updateDisplay(string);
        }
        else{        
        string = Number((Math.PI * string).toFixed(2));
        updateDisplay(string);
        }
        break;
//FOR SQRT
    case "√":
    if(string < "0"){
        string = "ERROR!";
        updateDisplay(string);
    }
        if(string !== ""){
        string = (Math.sqrt(Number(string))).toFixed(2);
        updateDisplay(string);
        }
        break;
//FOR SQUARE
    case "x²":
    if(string !== ""){
        string = (Number(string) ** 2).toFixed(0);
        updateDisplay(string);
    }
    break;
//FOR FACTORIAL
    case "x!":
    if(string < "0"){
        string = "ERROR!";
        updateDisplay(string);
    }
    if(string !== ""){
        string = factorial(Number(string)).toFixed(2);
        updateDisplay(string);
    }
    break;
//FOR SINE
    case "sin":
    if(string !== ""){
        let result = Math.sin(Number(string) * Math.PI / 180);
        string = Number(result.toFixed(2)).toString();
        updateDisplay(string);
    }
    break;
//FOR COSINE
    case "cos":
    if(string !== ""){
        let result = Math.cos(Number(string) * Math.PI / 180);
        string = Number(result.toFixed(2)).toString();
        updateDisplay(string);
    }
    break;
//FOR TAN
    case "tan":
    if(string !== ""){
        let result = Math.tan(Number(string) * Math.PI / 180);
        string = Number(result.toFixed(2)).toString();
        updateDisplay(string);
    }
    break;
//FOR LOG
    case "log":
    if(string < "0"){
        string = "ERROR!";
        updateDisplay(string);
    }           
    if(string !== ""){
        let result = Math.log10(Number(string));
        string = Number(result.toFixed(2)).toString();
        updateDisplay(string);
    }
    break;
//FOR Ln
    case "ln":
    if(string < "0"){
        string = "ERROR!";
        updateDisplay(string);
    }        
    if(string !== ""){
        let result = Math.log(Number(string));
        string = Number(result.toFixed(2)).toString();
        updateDisplay(string);
    }
    break;
//FOR +/-
    case "+/-":
    if(string > 0){
        string = string*-1
        // string = Math.abs(string);
        updateDisplay(string);
    }
    else if(string < 0){
        string = string*-1;
        updateDisplay(string);
    }    
    else{
        string = "Be Wiser";
        updateDisplay(string);
    }
    break;

    default:
    string += value
    updateDisplay(string);         
}
    });
});

function factorial(n){
    if(n < 0){
        return "Error";
    }
    let result = 1;

    for(let i = 2; i <= n; i++){
        result *= i;
    }

    return result;
}

function updateDisplay(value){
        display.textContent = value;
        //expr.textContent = string;

}

document.addEventListener("keydown", (e)=>{
    if("0123456789.+-*/".includes(e.key)){
        string += e.key;
        updateDisplay(string);
    }

    if(e.key === "Enter"){
    
    if(expr.textContent !== ""){
        string = "";
        expr.textContent = "";
        updateDisplay("0");
        return;
    }    

    let exp=string;
    exp= exp.replaceAll("×","*");
    exp= exp.replaceAll("÷", "/");

    try{
        let result = eval(exp);
        if(!isFinite(result)){
        updateDisplay("Error");
        }
        expr.textContent = string;
        string = (result.toFixed(2)).toString();
        updateDisplay(string);
    }
    catch{
        updateDisplay("Error");
    }
    }

    if(e.key === "Backspace"){
        string=string.slice(0,-1);
    if(string === ""){
       updateDisplay("0");
    }
    else{
       updateDisplay(string);
    }
    }
})


    



        // //FOR AC
        // if(value === "AC"){
        //     string="";
        //     updateDisplay("0");
        // }

        // //FOR DEL
        // else if(value === "DEL"){
        //     string=string.slice(0,-1);
        //     if(string === ""){
        //        updateDisplay("0");
        //     }
        //     else{
        //         updateDisplay(string);
        //     }

        // //FOR EQUAL
        // }
        // else if (value === "=") {
        //     updateDisplay("Calculate here");
        // }

        // //FOR VALUES
        // else{
        //     string += value
        //     updateDisplay(string);       
        //  }  

