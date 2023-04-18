function cookieRemove(id) {
    element = document.querySelector(id)
    element.remove();
}

// function degreeType(tempType){
//     var allTemps = document.querySelectorAll('.max-temp, .min-temp');
//     for (var i=0; i<allTemps.length;i++){
//         if (tempType=='fahrenheit'){
//             allTemps[i].innerText = (9/5*allTemps[i].innerText +32).toPrecision(2);
//         }
//         else{
//             allTemps[i].innerText = (5/9*(allTemps[i].innerText -32)).toPrecision(2);
//         }
//     }
// }


function degreeType(tempType) {
    var convert = tempConversions[tempType];
    var allTemps = document.querySelectorAll('.max-temp, .min-temp');
    for (var temp of allTemps) {
        temp.innerText = convert(temp.innerText)
    }
}

function convertToF(temp) {
    return (9 / 5 * temp + 32).toPrecision(2);
}

function convertToC(temp) {
    return (5 / 9 * (temp - 32)).toPrecision(2);
}

var tempConversions = {
    fahrenheit: convertToF,
    celsius: convertToC
}