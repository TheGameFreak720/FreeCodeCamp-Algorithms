function convertHTML(str) {
  var split = str.split(" ");
  var normal = ['&', '<', '>', '<>'];
  var html = ['&amp;', '&lt;', '&gt;', '&lt;&gt;'];
  
  for (var i = 0; i < split.length; i++) {
    
    split[i] = split[i].replace('"',"&quot;");
    split[i] = split[i].replace("'","&apos;");
    
    for (var j = 0; j < normal.length; j++) {
      if (split[i] === normal [j]) {
        split[i] = html[j];
      }
    }
  }
  return split.join(' ');
}

convertHTML('Stuff in "quotation marks"');