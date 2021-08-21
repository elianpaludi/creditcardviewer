let creditNumber = document.getElementById("numbers")

creditNumber.addEventListener("keyup", function(event) {
    var inputText = event.path[0].value; 
    document.getElementById("numeros").innerHTML = inputText
    console.log(inputText.length)

    if(inputText.length == 4 || inputText.length == 8 || inputText.length == 12) {
        inputText.value = " ";
     }
})

let creditName = document.getElementById("name")

creditName.addEventListener("keyup", function(event) {
    var inputText = event.path[0].value; 
    document.getElementById("nombre").innerHTML = inputText
})



 
