function factorialize(num) {
  var factor = 1;
  
  for (var i = 1; i <= num; i++) {
    factor *= i;
  }
  
  return factor;
}

factorialize(5);