var randomnunber1,randomnunber2;

randomnunber2=Math.floor(Math.random()*6+1);
randomnunber1=Math.floor(Math.random()*6+1);


document.querySelector("img.img1").setAttribute("src","images/dice"+randomnunber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomnunber2+".png");
if(randomnunber1>randomnunber2)
{
document.querySelector("h1").textContent="Player 1 wins!";
}
else
if(randomnunber2>randomnunber1){
    document.querySelector("h1").textContent="Player 2 wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
