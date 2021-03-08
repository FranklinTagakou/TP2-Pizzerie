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



//Pizza Epicé 
class Epices extends Aliment {
    super(nom,poids)
}
Piment = new Epices ('Piment', 1 ); 





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
       return this.prixComplet = prixCroute + prixFromage + prixGarniture;  
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
  }

  var pizzaFamille = new Pizza (01, 5, "moyenne", [Camember], [Champignon], CalculerPrixComplet, 15);
  var mozarella = new Fromage("mozarella", 10, 7);


  
  //Classe Commande
  class Commande {
    constructor(numeroCmd, dateCmd, heureCmd, pizzas, montantTotal) {
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
      }
      this.montantTotal = pizzas
      return this.montantTotal
  }

  AjouterPizza(pizzas){
    this.pizza(this.pizzas.length) = pizzas;
  }
}

var Commande1 = new Commande("001","01-01-2021", "11:30", [pizzaFamille], montantTotal);





//Class client
class Client {
    constructor(nom, prénom, numéroTel, adresse, commmande) {
    this.nom = nom;
    this.prénom = prénom;
    this.numéroTel = numéroTel;
    this.adresse = adresse;
    this.commmande = commmande;
  }

  ChangeClientnom(NouveauNom){
      this.nom = NouveauNom;
  }

  ChangeClientprénom(NouveauPrénom){
      this.prénom = NouveauPrénom;
  }

  ChangeClientnumérotel(NouveauNuméroTel){
      this.numérotel = NouveauNuméroTel;
  }

  ChangeClientadresse(NouvelleAdresse){
      this.adresse = NouvelleAdresse;
  }
  AjouterCommande(){
    this.commmande(this.commmande.length) = commmande; 
  }
  AfficherInformation(){
    return "Nom:" + this.nom + "\nPrénom:" + this.prénom + "\nTéléphone:" + this.numéroTel + "\nCommande:" + this.commmande;
    
  }
}


var Client1 = new Client("Smith", "Robert", "450-009-1234", "3000 Ave Boulée", Commande1);


