function translatePigLatin(str) {
  
  var vowels = ["a","e","i","o","u"];
  
  var firstCha = str.charAt(0);
  
  var index = vowels.indexOf(firstCha, 0);
  var index2;
  
  var i = 0;
  var go = true;
  var character;
  var chaCollection = "";

  
   
  if (index >= 0) {
    return str + "way";
  } 
  
  while (go) {
       character = str.charAt(i);
       index2 = vowels.indexOf(character, 0);
      if (index2 < 0){
        chaCollection += str.charAt(i);
        i++;
      } else {
        go = false;
        return str.slice(chaCollection.length) + chaCollection + "ay";
      }
    }
  
  

  
}

translatePigLatin("algorithm");