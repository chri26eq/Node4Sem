"use strict";

//totalGlobalVariables = "Never EVER!!! do this";
// var globalVariable = "Also NEVER do this!";

function myFunction() {

}


{
    // block scope
    var myValue = true;
    {
        var myValue = false;
    }
    console.log(myValue);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
    
}