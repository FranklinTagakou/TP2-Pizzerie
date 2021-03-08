/**
 * Projet : TP 2
 * Auteur : Franklin Tagakou
 * Date : 1 Mars 2021
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
