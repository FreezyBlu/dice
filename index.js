// var randomNumber1= (Math.floor(Math.random()*6))+1;
// if(randomNumber1===1)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1===2)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1===3)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1===4)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1===5)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber1===6)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
// }
// var randomNumber2 = (Math.random())*6;
// randomNumber2= (Math.floor(randomNumber2))+1;
// if(randomNumber2===1)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2===2)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2===3)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2===4)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2===5)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2===6)
// {
   //document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
// }
// if(randomNumber1 > randomNumber2)
//  {
//   document.querySelector("h1").innerHTML="<h1>player 1 wins!</h1>";
// }
// else if(randomNumber1 < randomNumber2)
// {
//   document.querySelector("h1").innerHTML="<h1>player 2 wins!</h1>";
// }
// else
//  {
//  document.querySelector("h1").innerHTML="<h1>Draw!</h1>";
// }
var randomNumber1= Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
// var direction="images/dice" + randomNumber1 +".png";
document.querySelector(".container .img1").setAttribute("src","images/dice" + randomNumber1 +".png");
var randomNumber2= Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
// var direction="images/dice" + randomNumber1 +".png";
document.querySelector(".container .img2").setAttribute("src","images/dice" + randomNumber2 +".png");
//value is not enclosed in double quotes
if(randomNumber1 > randomNumber2)
 {
  document.querySelector(".begin").innerHTML="<h1>player 1 wins!</h1>";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector(".begin").innerHTML="<h1>player 2 wins!</h1>";
}
else
 {
 document.querySelector(".begin").innerHTML="<h1>Draw!</h1>";
}
