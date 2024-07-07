

let screen= document.querySelector(".screen");

//Function for evaluating 
// Determine the operation based on the presence of operators
/*if the operator is + in the whole string  then with the use of .split 
parts consist of all the digits separated by +, it calculates the sum annd prints it on the screen */
function evaluateExpression(expression) {
    if (expression.includes("+")) {
        let parts = expression.split("+");
        let sum = 0;
        for (let i = 0; i < parts.length; i++) {
            sum += parseFloat(parts[i]);
        }
        return sum;
    } else if (expression.includes("-")) {
        let parts = expression.split("-");
        let subtract = parseFloat(parts[0]);
        for (let i = 1; i < parts.length; i++) {
            subtract -= parseFloat(parts[i]);
        }
        return subtract;
    } else if (expression.includes("/")) {
        let parts = expression.split("/");
        let divide = parseFloat(parts[0]);
        for (let i = 1; i < parts.length; i++) {
            divide /= parseFloat(parts[i]);
        }
        return divide;
    } else if (expression.includes("X")) {
        let parts = expression.split("X");
        let product = parseFloat(parts[0]);
        for (let i = 1; i < parts.length; i++) {
            product *= parseFloat(parts[i]);
        }
        return product;
    }
    return null;
}


const items=document.querySelectorAll(".item");
items.forEach(function(button){
    button.addEventListener("click",()=>{
        console.log("clicked");
        if(button.innerText==="7"){
           screen.innerText=screen.innerText+"7";
        }
        if(button.innerText==="8"){
           screen.innerText=screen.innerText+"8";
        }
        if(button.innerText==="9"){
           screen.innerText=screen.innerText+"9";
        }
        if(button.innerText==="6"){
           screen.innerText=screen.innerText+"6";
        }
        if(button.innerText==="5"){
           screen.innerText=screen.innerText+"5";
        }
        if(button.innerText==="4"){
           screen.innerText=screen.innerText+"4";
        }
        if(button.innerText==="3"){
           screen.innerText=screen.innerText+"3";
        }
        if(button.innerText==="2"){
           screen.innerText=screen.innerText+"2";
        }
        if(button.innerText==="1"){
           screen.innerText=screen.innerText+"1";
        }
        if(button.innerText==="0"){
           screen.innerText=screen.innerText+"0";
        }
        if(button.innerText==="."){
           screen.innerText=screen.innerText+".";
        }
        if(button.innerText==="DEL"){
            if (screen.textContent !== '0') {
                screen.textContent = screen.textContent.toString().slice(0, -1);
                if (screen.textContent === '') screen.textContent = '0';
            }
            

        }
        if(button.innerText==="Reset"){
           screen.innerText=null;
        }
       
        if(button.innerText==="+"){
            let alltext = screen.innerText;
            //if no operator is present initially then the pushed button operator is added on the screen
            if(!alltext.includes("+") &&!alltext.includes("-")&&!alltext.includes("X")&&!alltext.includes("/")&&!alltext.includes("+") ){
            screen.innerText=screen.innerText+"+";}
            
            /*if already an operator is present then its function is performed, the output is
             printed on the screen and the current operator is added to the screen */
            else{
            let result=evaluateExpression(screen.innerText);
            screen.innerText=result+ "+";
            }
         }
         if(button.innerText==="-"){
            let alltext = screen.innerText;
            if(!alltext.includes("+") &&!alltext.includes("-")&&!alltext.includes("X")&&!alltext.includes("/")&&!alltext.includes("+") ){
                screen.innerText=screen.innerText+"-";}
                else{
    
                    let result=evaluateExpression(screen.innerText);
                    screen.innerText=result+"-"
                }
           
         }
         if(button.innerText==="X"){
            let alltext = screen.innerText;
            if(!alltext.includes("+") &&!alltext.includes("-")&&!alltext.includes("X")&&!alltext.includes("/")&&!alltext.includes("+") ){
                screen.innerText=screen.innerText+"X";}
                else{
    
                    let result=evaluateExpression(screen.innerText);
                    screen.innerText=result+ "X";
                }
         }
           if(button.innerText==="/"){
            let alltext = screen.innerText;
            if(!alltext.includes("+") &&!alltext.includes("-")&&!alltext.includes("X")&&!alltext.includes("/")&&!alltext.includes("+") ){
                screen.innerText=screen.innerText+"/";}
                else{
                 let result=evaluateExpression(screen.innerText);
                screen.innerText=result+ "/";
                }
         }
         
        });
});

//equal  is pressed only for the digits having the same operator
let eequal = document.body.querySelector("#equals");
eequal.addEventListener("click", () => {
    console.log("clicked");
    let alltext = screen.innerText;

    // Determine the operation based on the presence of operators
   let result=evaluateExpression(alltext);
   screen.innerText=result;
});

