const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 
'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

let loses = 0;
let wins = 0;


window.onload = start;
function start(){
const arr = []
let attempts = 10;

var items = letters[Math.floor(Math.random()*letters.length)];
console.log('random letter',items);
window.onkeydown = inputLetter;
function inputLetter (){
    var x = event.keyCode;
    var lt = String.fromCharCode(x);
    lt = lt.toLocaleLowerCase();
    console.log(x);   
    console.log(lt)
    arr.push(` ${lt}`);
    document.getElementById("letters").innerHTML = arr;
    if(lt === items){
       wins += 1;
        console.log(wins);
        document.getElementById("wins").innerHTML = wins;
        start()
    }
    else {
        attempts -= 1;
        console.log(attempts)
        document.getElementById("attempts").innerHTML = attempts;
        if(attempts === 0){
            attempts = 10;
            loses += 1;
            start()
            document.getElementById("loses").innerHTML = loses;
        }
    }
}
}
