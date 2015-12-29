
/**

  The Initial Developer of the Original Code is
  Matthieu  - http://www.programmation-facile.com/
  Portions created by the Initial Developer are Copyright (C) 2013
  the Initial Developer. All Rights Reserved.

  Contributor(s) :

 */
		

// utilisation de la classe
console.log("---> exemple javascript array");// avec extension firebug

var aFruits = new Array('pomme', 'orange', 'banane', 'peche', 'clementine');


console.log("un fruit :"+aFruits[2]);// affiche un élément du tableau

// parcourir un tableau
for (i = 0; i < aFruits.length; i++)
{
	console.log("un nouveau fruit :"+aFruits[i]);// affiche un élément du tableau
}


console.log("tous les fruits :"+aFruits.toString() );// renvoie tous les éléments du Tableau

/**
 * Des méthodes de manipulation des tableaux identiques à l'ActionScript
 * 
 */

aFruits.splice(2, 2); // supprime un élément du tableau : l'index, le nombre d'éléments à supprimer

console.log("tous les fruits :"+aFruits.toString() );// renvoie tous les éléments du Tableau (sauf banane et peche)


aFruits.unshift('orange');// ajoute des éléments au début de Tableau.
aFruits.push('banane');// ajoute des éléments à la fin de Tableau.

console.log("tous les fruits :"+aFruits.toString() );// renvoie tous les éléments du Tableau (sauf banane et peche)


// Concatène / assemble le contenu du tableau aFruits avec le tableau aFruitsNouveaux et retourne un nouveau tableau aFruitsComplete. 
// Le tableau de départ aFruits n'est pas modifié.
var aFruitsNouveaux = new Array('ananas', 'mangue');
var aFruitsComplete = aFruits.concat(aFruitsNouveaux);
console.log("Avec les nouveaux fruits :"+aFruitsComplete.toString() );// renvoie tous les éléments du Tableau


console.log("Avec les nouveaux fruits.join() :"+aFruitsComplete.join( ' - ' ) );// envoie une chaîne de caractères contenant tous les éléments du tableau

console.log("Avec les nouveaux fruits.indexOf() :"+aFruitsComplete.indexOf( 'ananas' ) );// Renvoie la position de l'élément donné en paramètre. Si l'élément n'est pas trouvé, retourne -1.


/**
 * Les booléens
 */

var bValue = new Boolean(false);

// le booleen bValue est égal à false, le tableau fruits n'est pas affiché 
console.log("bValue false :"+bValue );
if( bValue == true )
{
	console.log("Avec les fruits false :"+aFruitsComplete.toString() );// renvoie tous les éléments du Tableau
}


bValue = true;
console.log("bValue true :"+bValue );
//le booleen bValue est égal à true, le tableau fruits est affiché 
if( bValue == true )
{
	console.log("Avec les fruits true :"+aFruitsComplete.toString() );// renvoie tous les éléments du Tableau
}



}
