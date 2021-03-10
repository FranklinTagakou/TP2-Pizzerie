/**
 * Projet : TP 2
 * Auteur : Franklin Tagakou
 * Date : 1 Mars 2021
 */

/**
 * Ce document représente les différentes classes du TP
 */

 class Aliment {
    constructor(nom, poids) {
      this.nom = nom;
      this.poids = poids;
    }
    ChangeAlimentNom(NouveauNom){
        this.nom = NouveauNom;
    }
  
    ChangeAlimentPoids(NouveauPoids){
        this.poids = NouveauPoids;
    }
  }
//instanciation d'un aliment 
  maPizza = new Aliment ('TouteGarnie', 100);

  //utilisation des méthodes pour changer les données intanciées 
  maPizza.ChangeAlimentNom('Carnivore');
  maPizza.ChangeAlimentPoids(50);


  //tests
  console.log(maPizza.nom);
  console.log(maPizza.poids);



  //Class croute 
  class Croute extends Aliment {
    constructor (nom, poids, prixCroute, tailleCroute, type) {
      super(nom,poids)
      this.prixCroute = prixCroute;
      this.tailleCroute = tailleCroute; 
      this.type = type;
    }

       ChoisirCrouteMince(CrouteMince){
         this.type = CrouteMince;
       }

       ChoisirCrouteEpaisse(CrouteEpaisse){
          this.type = CrouteEpaisse;
       }
       ChangeCroutePrix(NouveauPrixCroute){
        this.prixCroute = NouveauPrixCroute;
       }
  
       ChangeCrouteTaille(NouvelleTaille){ 
        this.taille = NouvelleTaille;
       
       }
  
  }
  var Farcie = new Croute ('Farcie', 100, 15, 'large', 'Moyenne');

  console.log(Farcie.prixCroute);

//modifer le prix de la pizza grace à la méthode

Farcie.ChangeCroutePrix(17);

console.log(Farcie.prix);


  //Class Fromage
class Fromage extends Aliment {
    constructor (nom, poids, prixFromage) {
      super(nom,poids) 
        this.prixFromage = prixFromage;
    }

     AjouterFromage(NouveauNomFromage, NouveauPoidsFromage, NouveauPrixFromage){
       this.nom = NouveauNomFromage;
       this.poids = NouveauPoidsFromage;
       this.prixFromage = NouveauPrixFromage;
     }

     ChangeFromagePrix(NouveauPrixFromage){
        this.prixFromage = NouveauPrixFromage;
       }
  }

   var Camember = new Fromage ('Camember', 100, 3);

   Camember.ChangeFromagePrix(7);

   // test 
   console.log(Camember.prixFromage);


   //Class garniture 
 class Garniture extends Aliment {
    constructor (nom, poids, prixGarniture) {
      super(nom,poids)
      this.prixGarniture = prixGarniture;
    }
      ChangeGarnitureprix(NouveauPrixGarniture){
        this.prixGarniture = NouveauPrixGarniture;
       }
  }

//modification avec les méthodes

var Champignon = new Garniture ('Champignon', 100, 3);
Champignon.ChangeGarnitureprix(12);

//test 

console.log(Champignon.prixGarniture);



//Pizza Epicé 
class Epices extends Aliment{} 

Piment = new Epices ('Piment', 1 );

//test
console.log(Piment.nom);
console.log(Piment.poids); 





//Class Pizza
class Pizza {
    constructor(numéro, taille, croute, fromage, garniture, prixComplet, tempsDeCuisson) {
      this.numéro = numéro;
      this.taille = taille;
      this.croute = croute;
      this.fromage = fromage;
      this.garniture = garniture;
      this.prixcomplet = prixComplet;
      this.tempsdecuisson = tempsDeCuisson;
    }
  
    ChangePizzanuméro(NouveauNuméro){
        this.numéro = NouveauNuméro;
    }
  
    ChangePizzataille(NouvelleTaille){
        this.taille = NouvelleTaille;
    }
  
    CalculerPrixComplet(){
     
        return this.prixComplet = prixCroute + (prixFromage*this.taille.facteur) + prixGarniture;
        }
  
    ChangePizzaTempsDeCuisson(NouveauTempsDeCuisson){
        this.tempsDeCuisson = NouveauTempsDeCuisson;
    }
    AjouterFromage(fromage){
      this.fromage(this.fromage.length) = fromage;
    }

    AjouterGarniture(garniture){
      this.garniture(this.garniture.length) = garniture;
    }
    ModifierTaillePizza(NouvelleTaillePizza){
        this.taille = NouvelleTaillePizza;
    }

}

  var pizzaFamille = new Pizza (01, 5, "moyenne", [Camember], [Champignon], prixComplet, 15);
  var mozarella = new Fromage("mozarella", 10, 7);

  pizzaFamille.AjouterFromage(mozarella);

  //test pour les cas du facteur
  var grandePizza = new Pizza (02, 10, "grande", [Camember], [Champignon], prixComplet, 25)
  grandePizza.ModifierTaillePizza(10)

  grandePizza.CalculerPrixComplet()
  console.log(pizzaFamille.fromage);
  


  
  //Classe Commande
  class Commande {
    tps=5/100;
    tvq=9.975/100;
    t=tps+tvq;
    constructor(numeroCmd, dateCmd, heureCmd, pizzas, montantTotal,) {
    this.numeroCmd = numeroCmd;
    this.dateCmd = dateCmd;
    this.heureCmd = heureCmd;
    this.pizzas = pizzas;
    this.montantTotal = montantTotal;
  }

  ChangeCommandeNumeroCmd(NouveauNuméro){
      this.numeroCmd = NouveauNuméro;
  }

  ChangeCommandeDateCmd(NouvelleDateCmd){ 
      this.dateCmd = NouvelleDateCmd;
  }

  ChangeCommandeHeureCmd(NouvelleHeureCmd){ 
      this.heureCmd = NouvelleHeureCmd;
  }

  MontantTotal(){
      var pizzas = 0;
      var i = 0;

      for (i = 0; i < pizzas; i++){
        pizzas += i;

       this.montantTotal = pizzas
       return this.montantTotal*t
    }
  }

  AjouterPizza(pizzas){
    this.pizza(this.pizzas.length) = pizzas;
  }
}

var Commande1 = new Commande(001,"01-01-2021", "11:30", [pizzaFamille], montantTotal);

console.log(Commande1.pizzas);


//Class client
class Client {
    constructor(nom, prénom, numéroTel, adresse) {
    this.nom = nom;
    this.prénom = prénom;
    this.numéroTel = numéroTel;
    this.adresse = adresse;
  }

  ChangeClientNom(NouveauNom){
      this.nom = NouveauNom;
  }

  ChangeClientPrénom(NouveauPrénom){
      this.prénom = NouveauPrénom;
  }

  ChangeClientNumérotel(NouveauNuméroTel){
      this.numérotel = NouveauNuméroTel;
  }

  ChangeClientAdresse(NouvelleAdresse){
      this.adresse = NouvelleAdresse;
  }
  
  AfficherInformation(){
    return "Nom:" + this.nom + "\nPrénom:" + this.prénom + "\nTéléphone:" + this.numéroTel;
    
  }
}


var Client1 = new Client("Smith", "Robert", "450-009-1234", "3000 Ave Boulée");

console.log(Client1.AfficherInformation);

class taille{
    constructor (nom, diamètre, facteur){
        this.nom = nom;
        this.diamètre = diamètre;
        this.facteur = facteur;
    }
}
