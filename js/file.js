let keys = document.querySelectorAll(".keys");
let result = document.querySelector("#result");
let userInput = document.querySelector("#userInput");

keys.forEach(items=>{
    items.addEventListener("click" , ()=>{
        if(items.innerText != "=" || items.innerText == ""){
            userInput.innerText += items.innerText;
        }
        
        if(items.innerText == "x"){
            userInput.innerText = "";
            result.innerText = "";
        }
        
        if(items.innerText == "=" && userInput.innerText != ""){
            result.innerText = eval(userInput.innerText);
            userInput.innerText = "";
        }
    })
})