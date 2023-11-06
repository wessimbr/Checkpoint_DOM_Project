var N1 =1; like_1=false;
var N2 =1; like_2=false;
var N3 =1; like_3=false;
var Total =N1*5+N2*10+N3*20;
Mis_a_jour();

// Article_1
document.getElementById("B1-").addEventListener("click",function(){
 if (N1>0) {   N1 -= 1; Total-=5;}
 Mis_a_jour();
});

document.getElementById("B1p").addEventListener("click",function(){
    N1 += 1; Total+=5;
    Mis_a_jour();
});

// Article_2
document.getElementById("B2-").addEventListener("click",function(){
 if (N2>0) {   N2 -= 1; Total-=10;}
 Mis_a_jour();
});

document.getElementById("B2p").addEventListener("click",function(){
    N2 += 1; Total+=10;
    Mis_a_jour();
});

// Article_3
document.getElementById("B3-").addEventListener("click",function(){
 if (N3>0) {   N3 -= 1; Total-=20;}
 Mis_a_jour();
});

document.getElementById("B3p").addEventListener("click",function(){
    N3 += 1; Total+=20;
    Mis_a_jour();
});

// Mis_a_jour

function Mis_a_jour(){
    var n1 = document.getElementById("N1");
  if (n1) {  n1.innerHTML=" "+N1+" ";}
    var n2 = document.getElementById("N2");
  if (n2) { n2.innerHTML=" "+N2+" ";}
    var n3 = document.getElementById("N3");
  if (n3) { n3.innerHTML=" "+N3+" ";}

    var tout = document.getElementById("Totale");
    tout.innerHTML="Totale: "+Total +" TND";
    
    
}

// heart Like
var icone_1=document.getElementById("icon1");
icone_1.addEventListener("click",function(){
if (like_1 == false) { icone_1.src="coeur_1.png"; like_1=true; }
else {icone_1.src="coeur_0.png"; like_1=false;}
})

var icone_2=document.getElementById("icon2");
icone_2.addEventListener("click",function(){
if (like_2 == false) { icone_2.src="coeur_1.png"; like_2=true; }
else {icone_2.src="coeur_0.png"; like_2=false;}
})

var icone_3=document.getElementById("icon3");
icone_3.addEventListener("click",function(){
if (like_3 == false) { icone_3.src="coeur_1.png"; like_3=true; }
else {icone_3.src="coeur_0.png"; like_3=false;}
})

// Delete Articles
var D1=document.getElementById("Delete_1");
D1.addEventListener("click",function(){
var Ar1=document.querySelector(".Article_1");
Ar1.remove(Ar1);
Total=Total-N1*5;
Mis_a_jour();
})

var D2=document.getElementById("Delete_2");
D2.addEventListener("click",function(){
var Ar2=document.querySelector(".Article_2");
Ar2.remove(Ar2);
Total=Total-N2*10;
Mis_a_jour();
})

var D3=document.getElementById("Delete_3");
D3.addEventListener("click",function(){
var Ar3=document.querySelector(".Article_3");
Ar3.remove(Ar3);
Total=Total-N3*20;
Mis_a_jour();
})
