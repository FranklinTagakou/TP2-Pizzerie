/**
 * Projet : TP 3
 * Auteur : Franklin Tagakou
 * Date : 17 Mars 2021
 */

/**
 * Ce document représente les différentes Fonctions du TP
 */

//la fonction suivante nous permet de vérifier le numéro de téléphone. 
function verifierNumeroDeTelephone(numero)
 {
  var chaine = numero + ""; //je convertis ici le numéro en string. 
  if (chaine.length == 9){
 
     if(isNaN(numero) == true){
  
        return ("faux");

     }
     else{

        return ('vrai');
     }

  }
  else {

    return ('faux');

  }
}
/*pour vérifier le numéro de téléphone, entrez un numéro
 l'énoncé nous demande une longeur de 9 mais le test est plus grand 
 que 9. donc il ne peut pas retourner vrai comme vous le demandez.
 il va retourner faux si on respecte l'énoncé*/
 console.log(verifierNumeroDeTelephone("222333444"));
 console.log(verifierNumeroDeTelephone("22233344410"));
 console.log(verifierNumeroDeTelephone("222333444ABCS"));



/*Cette fonction permet de vérifier si un nombre es un entier. 
vrai ou faux*/
function verifierEntier(entier)
{
    if(isNaN(entier) == true)
    {
                
        return ("faux");

    }
   else
   {

     if(Number.isInteger(entier))
     {

        return('vrai');

      }
    else {
         
        return("faux");

       }
    }
}
console.log(verifierEntier(10));
console.log(verifierEntier("ABCD"));



//la fonction suivante permet de véifier le code postal

function verifierCodePostal(codePostal) {

    if (codePostal.length==6){
       
        var first = codePostal.charAt(0);

          if (first.match(/[a-z]/i)){


          var alternance = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;

           if(alternance.test(codePostal) == true){           
                   return 'vrai';
           }
           else {
                  
                  return 'faux';

          }


         }
         else{
           
           return 'faux';

         }

    }
    else{
           
           return 'pas conform';

         }


 
}
console.log(verifierCodePostal('J2S3T5'));
console.log(verifierCodePostal(000715));











  function afficherOuCacher(){
    //alert("lien cliqué");
    //console.log("lien cliqué");
    var element = document.getElementById("sousMenu") //Language DOM
    if(element.className == "cache"){
        element.classList.remove("cache");
    }
    else{
        element.classList.add("cache");
    }
}

/**
 * Fonction qui permet de charger le select à partir d'une liste d'éléments
 * @param {string} selectId : id du select à charger
 * @param {object} liste : liste avec les éléments dont les noms seront chargés dans le select
 */
function chargerListeSelect(selectId, liste)
{
    var s = "<option></option>";
    for( var i=0; i<liste.length; i++)
    {
    /* console.log(liste[i]); */
    s +='<option value="'+ i +'">' + liste[i].lireNom() + '</option>';

    }
    element = document.getElementById(selectId);
    element.innerHTML = s;

}
function recupèreElément1(selectId){
    var select = document.getElementById(selectId);
    var valeur = select.options[select.selectedIndex].value;
    var listeFromagesChoisis = [];
    listeFromagesChoisis.push(valeur)
    document.getElementById("affichageFromage").innerHTML=""+valeur;
     
}
function recupèreElément2(selectId){
    var select = document.getElementById(selectId);
    var valeur = select.options[select.selectedIndex].value;
    var listeFromagesChoisis = [];
    listeFromagesChoisis.push(valeur)
    document.getElementById("affichageGarniture").innerHTML=""+valeur;
     
}
function recupèreElément3(selectId){
    var select = document.getElementById(selectId);
    var valeur = select.options[select.selectedIndex].value;
    var listeFromagesChoisis = [];
    listeFromagesChoisis.push(valeur)
    document.getElementById("affichagePizza").innerHTML=""+valeur;

    }
    
function suppression(selectId){
        var container = '<td><label id="#"></label></td>';
        element = document.getElementById(selectId);
        element.innerHTML = container;  
      }

function vérifierEntréePizza(){
    var numéro = document.getElementById("numéroPizza").value;
    var temps = document.getElementById("tempsCuisson").value;
    var msg;
    if(isNaN(numéro) == true || Number.isInteger(numéro) == false){
        msg = "Erreur: Numéro de la Pizza invalide"
    }
   else
   {
       msg = "Numéro de la Pizza: " + numéro;

    }

    if(isNaN(temps) == true || Number.isInteger(temps) == false){
        msg = "Erreur: Temps de cuisson invalide"
    }
   else
   {
       msg = "Temps de cuisson: " + temps;

    }


    document.getElementById("retourPizza").innerHTML = msg;
}

