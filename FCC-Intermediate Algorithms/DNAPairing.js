function pairElement(str) {
    var element = str.split('');

    var array =[];

    for (var i = 0; i < element.length; i++) {
        if (element[i] === 'G') {
            array.push(['G', 'C']);
        } else if (element[i] === 'C') {
            array.push(['C', 'G']);
        } else if (element[i] === 'A') {
            array.push(['A', 'T']);
        } else if (element[i] === 'T') {
            array.push(['T', 'A']);
        }
    }

    return array;
}

pairElement('CTCTA');