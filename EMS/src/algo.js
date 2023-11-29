const revStr = (str)=>{
  arr= str.split("");
  arr.reverse();
  str=arr.join("")
  console.log(str)
}
  


  const rev = (str)=>{
  let z=str.length-1;
  let temp=""
  for(let i=0; i>=z; i++){
    hold= str.split("");
    temp=hold[i]
    hold[i]=hold[z];
    hold[z]=temp
    str=hold
   console.log(str)
  }
}
let nam= "yordanos"

rev(nam)

