let age = document.getElementById("age")
let button = document.getElementById("button")
let codeOutput = document.getElementById("code-output")
function ageChecker(){
    let solution = ""
    let x = age.value 
    let xNum = Number(x)

    if(xNum < 13){
        console.log("You are to young")
        solution = "You are to young"
    }

    else if(xNum > 18){
        console.log("You are to old")
        solution = "You are to old"
    }
    else{
        console.log("You are just right")
        solution = "You are just right"
    }
    codeOutput.innerHTML = solution
}

/*
This is a function definition 
function name (perams){
    The action the function does    
}
    This is how we do a function call
    we use the function name followed by ()
    name ()
*/





