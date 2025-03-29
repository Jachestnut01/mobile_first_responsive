// referencing html elements
let word = document.getElementById("word")
let button = document.getElementById("button")
let codeOutput = document.getElementById("code-output")

//this is the function definition 
function vowelremover(value){
    let solution = ""
    console.log(",value", value)
    let len = value.length
    console.log("length of the number is",len)
    for(let i = 0; i < len ;i++){
        console.log(value[i])
        if(value[i] == 'a' || value[i] == 'e' || value[i] == 'i' || value[i] == 'o' || value[i] == 'u' ){

        }
        else{
            solution += value[i]
        }
    }
    codeOutput.innerHTML = solution
}

//addeventlistener to the button
button.addEventListener("click", function(){
    let wordvalue = word.value 
    vowelremover(wordvalue)
})





