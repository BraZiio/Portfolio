let flag=0;
function skills() {
    console.log("appuie sur bouton");
    if(flag==0) { 
        document.getElementById("cardSkills").style.display="inherit";
        document.getElementById("decrease").style.boxShadow="2px 0px 40px 2px rgba(231,166,26,1)";
        document.getElementById("decrease").value="Fermer les Experiences";
        flag=1;
    }
    else {
        document.getElementById("decrease").style.boxShadow="0px 0px 28px -2px rgba(0,0,0,0.49)";
        document.getElementById("cardSkills").style.display="none";
        document.getElementById("decrease").value="Ouvrir les Experiences";
        flag=0;
    }
}