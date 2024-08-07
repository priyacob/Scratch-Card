let box=document.querySelectorAll("button");
let msg=document.querySelector("#msg");


//audio set
let audio=new Audio();
let ado=()=>{
audio.src="sound/mixkit-sci2.wav";
}
ado();

//sound 


let inp=document.querySelector("#inputt");
let num=Number.parseInt(Math.random()*box.length);
let redbox=box[num];
console.log(num);



let  boxes=Array.from(box);

let i=1;
boxes.forEach(box => {
  
 box.addEventListener('click',(e)=>
 {    
    if(box!=redbox)
      {
        inp.value=i++;
      console.log("this is not red");
      box.style.background="#88D66C";
      box.disabled=true;
       
    }else{
           box.style.background="red";
           console.log("game is over");
        msg.innerHTML="Game is over";
           dis();
          }
   
   
 })
});

//game over
const dis=()=>{
for(let b of box ){
  b.disabled=true;
}
}


/*
let audi=new Audio();
  for(j of box){
    if(j==redbox){
audi.src="sound/mixkit-video.wav";
}
  }*/

