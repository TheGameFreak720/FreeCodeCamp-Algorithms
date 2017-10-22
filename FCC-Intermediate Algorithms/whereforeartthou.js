
function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  
  collection.forEach(function(obj){
     
     var match = true;
    
     sourceKeys.forEach(function(key){
        if(obj[key] !== source[key]){
           match = false;
        }
     });
     
     if(match){
        arr.push(obj);
     }
  });
  
  return arr;
}

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });