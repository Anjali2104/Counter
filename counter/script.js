const decre=document.getElementById("Decrement");
const value=document.getElementById("value");
decre.addEventListener("click" , decreaseValue) ;
function decreaseValue(){
    
    const num=Number(value.innerText);
    if(num>0){
            value.innerText=num-1;
    }
};

const incre =document.getElementById("Increment");
incre.addEventListener("click",increaseValue);
function increaseValue(){
  const num=Number(value.innerText);
    if(num<10){
            value.innerText=num+1;
    }
}
const reset=document.getElementById("Reset");
reset.addEventListener("click", resetValue);
function resetValue(){
  const num=value.innerText;
  value.innerText=0;
}
// incre.addEventListener("click",() =>{
    
//     const num=Number(value.innerText);
//     if(num<10){
//             value.innerText=num+1;
//     }
// });


  
// const decrementBtn = document.getElementById("decrementBtn");
// const incrementBtn = document.getElementById("incrementBtn");
// const resetBtn = document.getElementById("resetBtn");
// const displayValue = document.getElementById("displayValue");

// // for decrement button click
// decrementBtn.addEventListener("click", () => {
//   const value = Number(displayValue.innerText);
//   if (value > 0) {
//     displayValue.innerText = value - 1;
//   } else {
//     alert("Negative value not allowed");
//   }
// });

// // for increment button click
// incrementBtn.addEventListener("click", () => {
//   const value = Number(displayValue.innerText);
//   if (value >= 10) {
//     alert("10+ values are not allowed");
//   } else {
//     displayValue.innerText = value + 1;
//   }
// });

// // for reset button click
// resetBtn.addEventListener("click", () => {
//   displayValue.innerText = 0;
// });