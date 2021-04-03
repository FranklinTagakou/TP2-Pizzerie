/**
 * Projet : TP 3
 * Auteur : Franklin Tagakou
 * Date : 25 Mars 2021
 */

/**
 * Ce document représente les différentes classes du TP
 */

class Aliment {
  constructor(nom, poids) {
    this.nom = nom;
    this.poids = poids;
  }
  ChangeAlimentNom(NouveauNom) {
    this.nom = NouveauNom;
  }

  ChangeAlimentPoids(NouveauPoids) {
    this.poids = NouveauPoids;
  }
  LireNom() {
    return this.nom;
  }
  lireAliments() {
    return "nom: " + this.nom + ", poids: " + this.poids;
  }
}
//instanciation d'un aliment 
maPizza = new Aliment('TouteGarnie', 100);

//utilisation des méthodes pour changer les données intanciées 
maPizza.ChangeAlimentNom('Carnivore');
maPizza.ChangeAlimentPoids(50);


//tests
console.log(maPizza.nom);
console.log(maPizza.poids);



//Class croute 
class Croute extends Aliment {
  constructor(nom, poids, prixCroute, tailleCroute, type) {
    super(nom, poids)
    this.prixCroute = prixCroute;
    this.tailleCroute = tailleCroute;
    this.type = type;
  }

  ChoisirCrouteMince(CrouteMince) {
    this.type = CrouteMince;
  }

  ChoisirCrouteEpaisse(CrouteEpaisse) {
    this.type = CrouteEpaisse;
  }
  ChangeCroutePrix(NouveauPrixCroute) {
    this.prixCroute = NouveauPrixCroute;
  }

  ChangeCrouteTaille(NouvelleTaille) {
    this.taille = NouvelleTaille;

  }
  lireNom() {
    return this.nom;
  }
  lireCroute() {
    return this.lireAliments() +
      ", type: " + this.type +
      ", taille: " + this.tailleCroute +
      ", prix: " + this.prixCroute;
  }
  lirePrixCroute() {
    return this.prixCroute;
  }


}
var Farcie = new Croute('Farcie', 100, 15, 'Moyenne', 'Mince');

console.log(Farcie.prixCroute);

//modifer le prix de la pizza grace à la méthode

Farcie.ChangeCroutePrix(17);

console.log(Farcie.prixCroute);


//Class Fromage
class Fromage extends Aliment {
  constructor(nom, poids, prixFromage) {
    super(nom, poids)
    this.prixFromage = prixFromage;
  }

  AjouterFromage(NouveauNomFromage, NouveauPoidsFromage, NouveauPrixFromage) {
    this.nom = NouveauNomFromage;
    this.poids = NouveauPoidsFromage;
    this.prixFromage = NouveauPrixFromage;
  }

  ChangeFromagePrix(NouveauPrixFromage) {
    this.prixFromage = NouveauPrixFromage;
  }
  lireNom() {
    return this.nom;
  }
  lireFromage() {
    return this.lireAliments() + ", prix: " + this.prixFromage;
  }
  lirePrix() {
    return this.prixFromage;
  }

}

var Camember = new Fromage('Camember', 100, 3);

Camember.ChangeFromagePrix(7);

// test 
console.log(Camember.prixFromage);


//Class garniture 
class Garniture extends Aliment {
  constructor(nom, poids, prixGarniture) {
    super(nom, poids)
    this.prixGarniture = prixGarniture;
  }
  ChangeGarnitureprix(NouveauPrixGarniture) {
    this.prixGarniture = NouveauPrixGarniture;
  }
  lireGarniture() {
    return this.lireAliments() + ", prix: " + this.prixGarniture;
  }
  lirePrix() {
    return this.prixGarniture;
  }
  lireNom(){
    return this.nom;
  }
}



//modification avec les méthodes

var Champignon = new Garniture('Champignon', 100, 3);
Champignon.ChangeGarnitureprix(12);

//test 

console.log(Champignon.prixGarniture);



//Pizza Epicé 
class Epices extends Aliment { }

Piment = new Epices('Piment', 1);

//test
console.log(Piment.nom);
console.log(Piment.poids);





//Class Pizza
class Pizza {
  constructor(numéro, taille, croute, fromages, garnitures, prixComplet, tempsDeCuisson) {
    this.numéro = numéro;
    this.taille = taille;
    this.croute = croute;
    this.fromages = fromages;
    this.garnitures = garnitures;
    this.prixcomplet = prixComplet;
    this.tempsdecuisson = tempsDeCuisson;
    this.calculerPrixComplet();
  }

  changePizzanuméro(NouveauNuméro) {
    this.numéro = NouveauNuméro;
  }

  changePizzataille(NouvelleTaille) {
    this.taille = NouvelleTaille;
  }

  calculerPrixComplet() {
    var prixFromages = 0;
    for (var i = 0; i < this.fromages.length; i++) {
      prixFromages += this.fromages[i].lirePrix;
    }
    var prixGarnitures = 0;
    for (var i = 0; i < this.garnitures.length; i++) {
      prixGarnitures += this.garnitures[i].lirePrix;
    }

    return this.prixComplet = this.croute.lirePrixCroute + (prixFromages * this.taille.facteur) + (prixGarnitures * this.taille.facteur);
  }


  changePizzaTempsDeCuisson(NouveauTempsDeCuisson) {
    this.tempsDeCuisson = NouveauTempsDeCuisson;
  }
  ajouterFromage(fromage) {
    this.fromage(this.fromage.length) = fromage;
  }

  ajouterGarniture(garniture) {
    this.garniture(this.garniture.length) = garniture;
  }
  modifierTaillePizza(NouvelleTaillePizza) {
    this.taille = NouvelleTaillePizza;
  }
  lireNom() { // on le nomme "lireNom" pour simplifier la codification
    return "Pizza #" + this.numero;
  }
  lirePizza() {
    return "numéro: " + this.numero +
      ", taille: {" + this.taille.lireTaille() + "} " +
      ", croûte: {" + this.croute.lireCroute() + "} " +
      ", fromages: [" + this.lireFromages() + "] " +
      ", garnitures: [" + this.lireGarnitures() + "] " +
      ", prix complet: " + this.prixComplet +
      ", temps de cuisson: " + this.tempsDeCuisson;
  }
  lireFromages() {
    var s = "";
    for (const i in this.fromages) {
      s += "{" + this.fromages[i].lireFromage() + "}, ";
    }
    s = s.substr(0, s.length - 2);
    return s;
  }
  lireGarnitures() {
    var s = "";
    for (const i in this.garnitures) {
      s += "{" + this.garnitures[i].lireGarniture() + "}, ";
    }
    s = s.substr(0, s.length - 2);
    return s;
  }


}

/*  var pizzaFamille = new Pizza (01, 5, "moyenne", [Camember], [Champignon], prixComplet, 15);
 var mozarella = new Fromage("mozarella", 10, 7);

 pizzaFamille.AjouterFromage(mozarella);

 //test pour les cas du facteur
 var grandePizza = new Pizza (02, 10, "grande", [Camember], [Champignon], prixComplet, 25)
 grandePizza.ModifierTaillePizza(10)

 grandePizza.CalculerPrixComplet()
 console.log(pizzaFamille.fromage); */




//Classe Commande
class Commande {
  constructor(numeroCmd, dateCmd, heureCmd, pizzas, client, montantTotal,) {
    this.numeroCmd = numeroCmd;
    this.dateCmd = dateCmd;
    this.heureCmd = heureCmd;
    this.pizzas = pizzas;
    this.client = client;
    this.montantTotal = montantTotal;
    this.tps = 0.05;
    this.tvq = 0.0975;
  }

  ChangeCommandeNumeroCmd(NouveauNuméro) {
    this.numeroCmd = NouveauNuméro;
  }

  ChangeCommandeDateCmd(NouvelleDateCmd) {
    this.dateCmd = NouvelleDateCmd;
  }

  ChangeCommandeHeureCmd(NouvelleHeureCmd) {
    this.heureCmd = NouvelleHeureCmd;
  }

  MontantTotal() {
    var pizzas = 0;
    var i = 0;

    for (i = 0; i < pizzas; i++) {
      pizzas += i;

      this.montantTotal = pizzas
      return this.montantTotal * t
    }

  }
  lireCommande() {
    return "numéro: " + this.numeroCmd +
      ", client: {" + this.client.lireClient() + "}" +
      ", date: " + this.dateCmd + ", heure: " + this.heureCmd +
      ", pizzas: [" + this.lirePizzas() + "]" +
      ", montant total: " + this.montantTotal;
  }
  lirePizzas() {
    var s = "";
    for (const i in this.pizzas) {
      s += "{" + this.pizzas[i].lirePizza() + "}, ";
    }
    s = s.substr(0, s.length - 2);
    return s;
  }

  AjouterPizza(pizzas) {
    this.pizza(this.pizzas.length) = pizzas;
  }
}

/* var Commande1 = new Commande(001,"01-01-2021", "11:30", [pizzaFamille], "Mario Lanza", montantTotal);

console.log(Commande1.pizzas); */


//Class client
class Client {
  constructor(nom, prénom, numéroTel, adresse) {
    this.nom = nom;
    this.prénom = prénom;
    this.numéroTel = numéroTel;
    this.adresse = adresse;
    /* this.commande = commande; */
  }

  ChangeClientNom(NouveauNom) {
    this.nom = NouveauNom;
  }

  ChangeClientPrénom(NouveauPrénom) {
    this.prénom = NouveauPrénom;
  }

  ChangeClientNumérotel(NouveauNuméroTel) {
    this.numérotel = NouveauNuméroTel;
  }

  ChangeClientAdresse(NouvelleAdresse) {
    this.adresse = NouvelleAdresse;
  }

  AfficherInformation() {
    return "Nom:" + this.nom + "\nPrénom:" + this.prénom + "\nTéléphone:" + this.numéroTel;

  }
  lireNom() {
    return this.nom;
  }
  lireClient() {
    return "nom: " + this.nom + ", prénom: " + this.prenom +
      ", téléphone: " + this.numéroTel + ", courriel: " + this.adresse;
  }
}


/* var Client1 = new Client("Smith", "Robert", "450-009-1234", "3000 Ave Boulée");

console.log(Client1.AfficherInformation); */

class taille {
  constructor(nom, diamètre, facteur) {
    this.nom = nom;
    this.diamètre = diamètre;
    this.facteur = facteur;
  }

  lireTaille() {
    return "nom:" + this.nom + ", diamètre:" + this.diamètre + ", facteur:" + this.facteur;

  }
  lireNom() {
    return this.nom;
  }
  lireFacteur() {
    return this.facteur;
  }


}

/**
 * Instanciations avec des faux données pour les tests
 */
var tailleP = new taille("Petite", 12, 1);
var tailleM = new taille("Moyenne", 20, 2);
var tailleG = new taille("Grande", 30, 3);
var listeTailles = [tailleP, tailleM, tailleG];


var fausseCroute1 = new Croute("fausse-croute1", 18, 5, "Petite", "Mince");
var fausseCroute2 = new Croute("fausse-croute2", 23, 7, "Moyenne", "épasse");
var fausseCroute3 = new Croute("fausse-croute3", 23, 6, "Grande", "grains");
var listeCroutes = [fausseCroute1, fausseCroute2, fausseCroute3];

var fausseFromage1 = new Fromage("faux-fromage1", 11, 2.5);
var fausseFromage2 = new Fromage("faux-fromage2", 13, 3);
var fausseFromage3 = new Fromage("faux-fromage3", 12, 2);
var listeFromages = [fausseFromage1, fausseFromage2, fausseFromage3];

var fausseGarniture1 = new Garniture("fausse-garniture1", 10, 5.3);
var fausseGarniture2 = new Garniture("fausse-garniture2", 12, 4.7);
var fausseGarniture3 = new Garniture("fausse-garniture3", 15, 3.5);
var listeGarnitures = [fausseGarniture1, fausseGarniture2, fausseGarniture3];

var faussePizza1 = new Pizza(
  10001, tailleM, fausseCroute1,
  [fausseFromage1],
  [fausseGarniture1],
  15
)
var faussePizza2 = new Pizza(
  10002, tailleP, fausseCroute2,
  [fausseFromage2],
  [fausseGarniture2],
  13
)
var faussePizza3 = new Pizza(
  10003, tailleG, fausseCroute1,
  [fausseFromage1, fausseFromage2],
  [fausseGarniture1, fausseGarniture2],
  18
)
var listePizzas = [faussePizza1, faussePizza2, faussePizza3];

var fausseClient1 = new Client("Eliot", "Billy", 4501231234, "be@mail.ca");
var fausseClient2 = new Client("Uzumaki", "Naruto", 4507896789, "nu@mail.ca");
var fausseClient3 = new Client("Uchiha", "Sasuke", 4501582765, "su@mail.ca");
var listeClients = [fausseClient1, fausseClient2, fausseClient3];


