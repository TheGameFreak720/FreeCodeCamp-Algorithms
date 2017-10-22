
function convertToRoman(num) {
  
 var roman = ["I","II","III","IV","V","VI","VII","VIII","IX","X","L","C","D","M"];
 var numeral = [1,5,10,50,100,500,1000];
 var stringy = num.toString();
 var output = [];
 var romanized;
 
 for (var i = 0; i < stringy.length; i++) {
    output.push(stringy.charAt(i));
 }
  
 if (output.length === 4) {
   romanized = roman[13];
 }
  

  
 return num;
}

convertToRoman(36);