var text_encrypt = convert_to_binary( prompt("Entrer le texte chiffré") );
//var key_length = prompt("Entrer le nombre de caractères de la clé");

generate_key();

// Génération de la clé et test du fonctionnement
function generate_key(){
	var alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  var try_key_binary = "";
  var decrypt_text = "";
  for (i1=0; i1 < alphabet.length; i1++) {
  	console.log("La clé en test : "+ alphabet[i1]);
  	try_key_binary = convert_to_binary(alphabet[i1]);
    decrypt_text = calcul(text_encrypt, try_key_binary);
    console.log("ASCII Texte: "+ convert_to_ascii(decrypt_text) );
    if ( check_text(convert_to_ascii(decrypt_text)) ){
    	alert("La bonne clé est la suivante : "+ alphabet[i1]);
    }
  }
}

function check_text (text){
	const regex = /Abc|quick/g;
  if (regex.test(text)){
  	return true
  }
  else{ return false;}
}

// La conversion binaire supporte plusieurs caractères
function convert_to_binary(text) {
	//console.log("Texte en convertir en binaire: "+ text);
	var text_binary = "";
  var text_binary_caract = "";
  for (i=0; i < text.length; i++) { // Parcourir tous les caractères
  	//console.log("Caractère: "+ text[i]);
  	text_binary_caract = text[i].charCodeAt(0).toString(2); // Convertir les caractères en binaire
    //console.log("Caractère Binaire: " + text_binary_caract);
    if (text_binary_caract.length != 8){
      increment = (8-text_binary_caract.length);
      for (a=0; a < increment; a++) {
        text_binary_caract = "0"+ text_binary_caract;
      }
      //console.log("Binaire caractere après transformation: " +text_binary_caract)
      
      if (text_binary.length > 0){
      	text_binary = text_binary + " "+ text_binary_caract; // Ajoute un espace de séparation pour séparer la composition binaire
      }else {
      	text_binary += text_binary_caract; // On ajoute directement la chaine sans sépration
      }
  	}
  }
  console.log("Texte complet en binaire :"+text_binary);
  return text_binary;
}

function convert_to_ascii(str) {
	var binString = '';
	str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}

function calcul(text_binary_c, key_binary) {
	console.log("Calcul- Text en binaire: "+ text_binary_c);
  console.log("Calcul- Clé en binaire: "+ key_binary);
	const binaryValues = ["0", "1"];
  var values= "";
  var tab_text_binary = text_binary_c.split(" "); // Séparation des caractères
	for (i=0; i < tab_text_binary.length; i++){
  	console.log("---- Calcul -----")
  	for (b=0; b < tab_text_binary[i].length; b++){
      
      cal = parseInt(tab_text_binary[i][b])+parseInt(key_binary[b]);
      cal == 1 ? (values += "1") : (values += "0");
      if (b == 7){
      	values+= " ";
       }
      console.log(tab_text_binary[i][b], key_binary[b], values );
    }
  }
  console.log("Calcul - Resultat: "+ values);
  return values
}