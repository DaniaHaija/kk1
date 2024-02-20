let count=[0,0,0,0];
let buton=document.querySelectorAll('button');
let para=document.querySelectorAll('p');
for(let i=0;i<buton.length;i++){
 buton[i].onclick=function(){
    count[i]++;
    para[i].textContent=count[i];
 }


}
