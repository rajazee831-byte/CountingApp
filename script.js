// Variable Declation
let count = document.getElementById("count");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset")
let decrement = document.getElementById("decrement");
let counter= count.innerText;
// increment button
increment.addEventListener("click", function(){
    counter++;
    count.innerText=counter;
});
// decrement button
decrement.addEventListener("click",function(){
    counter--;
    count.innerText = counter;
})
// reset button
reset.addEventListener("click",function(){
    counter=0;
    count.innerText=counter;
})
