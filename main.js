// var tempsPasse = document.getElementById("Time");
let tempsPasse = this.innerHTML = Date();
let tempsSecs = tempsPasse[22] + (tempsPasse[23]);
let fenetre = false;
console.log("le temps qui passe 1ere fois " + tempsSecs);
tempsSecs++;
let tempsVoulu10=tempsSecs + 9;
while (fenetre === false){
  console.log("le temps voulu avant boucle" + tempsVoulu10);
if(tempsSecs >= tempsVoulu10){
        fenetre = true;
       {lafenetre();}
} else {
  tempsPasse = this.innerHTML = Date();
  tempsSecs = tempsPasse[22] + (tempsPasse[23]);
  console.log("le temps qui passe" + tempsSecs);
}
}
var monBouton = document.querySelector('button');
function coucou1(bg) {
    document.body.style.background = "#ff33ff";
}

monBouton.onclick = function() {
  coucou1();
}


function lafenetre()
{

  if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please.."))
   {
     document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }

}
