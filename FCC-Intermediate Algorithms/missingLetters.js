function fearNotLetter(str) {
    var abc = "abcdefghijklmnopqrstuwxyz";
    var abecedery = abc.split('');
    var check = str.split('');
    var choppedAbc;
    var k = 0;

    for (var i = 0; i < abecedery.length; i++) {

        if (abecedery[i] === check[0]) {
            choppedAbc = abecedery.slice(i, check.length + 1);
        }

    }

    for (var j = 0; j < check.length; j++) {

        if (check[j] !== choppedAbc[k]) {
            j--;
            return choppedAbc[k];
        }

        k++;
    }

}

fearNotLetter("abce");