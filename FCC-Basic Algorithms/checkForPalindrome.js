function palindrome(str) {
  // Good luck!
  var remove = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var reverse = remove.split("").reverse().join("").toLowerCase();
  
  if(remove === reverse) {
    return true;
  } else {
    return false;
  }
}



palindrome("A man, a plan, a canal. Panama");
