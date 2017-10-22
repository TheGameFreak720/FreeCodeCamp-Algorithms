function concatNumLetters(letter, num) {
    var text = "";
    for(var i=0; i<num; i++){
        text += letter;
    }
    return text;
}


function convertToRoman(arabic) {
  

 var roman = "";
    if (arabic >= 1000) {
        var thousands = ~~(arabic / 1000);
        roman = concatNumLetters("M", thousands);
        arabic -= thousands * 1000;
    }

     if (arabic >= 900) {
         roman += "CM";
         arabic -= 900;
     }

     if (arabic >= 500) {
         roman += "D";
         arabic -= 500;
     }

     if (arabic >= 400) {
         roman += "CD";
         arabic -= 400;
     }

     if (arabic >= 100) { 
        var hundreds = ~~(arabic / 100);
        roman += concatNumLetters("C", hundreds);
        arabic -= hundreds * 100;
     }

     if (arabic >= 90) {
         roman += "XC";
         arabic -= 90;
     }

     if (arabic >= 50) {
         roman += "L";
         arabic -= 50;
     }

     if (arabic >= 40) {
         roman += "XL";
         arabic -= 40;
     }

     if (arabic >= 10) {
        var dozens = ~~(arabic / 10);
        roman += concatNumLetters("X", dozens);
        arabic -= dozens * 10;
     }

     if (arabic >= 9) {
         roman += "IX";
         arabic -= 9;
     }

      if (arabic >= 5) {
         roman += "V";
         arabic -= 5;
     }

     if (arabic >= 4) {
         roman += "IV";
         arabic -= 4;
     }

     if (arabic >= 1) {
        roman += concatNumLetters("I", arabic);
     }

     return roman;


  
 
}

convertToRoman(36);