// source=["/picture/ochijin 5.jpg", "/picture/uguuj_shim.jpg", "/picture/monos.jpg" ]
// setInterval(function(){
//     i=Math.floor(Math.random()*source.length)
//     slide.setAttribute("src",  source[i])
// },1000)
// const images=[img1,img2,img3];
const images=document.querySelectorAll("img");
let x=1;
images[1].style.display="none"
images[2].style.display="none"
setInterval(function(){
for(i=0; i<=2; i++){
    images[i].style.display="none";
}
images[x].style.display="block";
x++;
if(x==3){
x=0;
}

},1500)