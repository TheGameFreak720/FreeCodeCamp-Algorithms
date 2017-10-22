
function myReplace(str, before, after) {
  
  var afterAfter = "";
  
  if (before.charAt(0) === before[0].toUpperCase()) {
    afterAfter = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    afterAfter = after;
  }
  
  var newStr = str.replace(before, afterAfter);
  return newStr;
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");