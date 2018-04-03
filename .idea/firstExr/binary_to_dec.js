//elena-efimova

function binaryToDec(string){
    let arr = string.split('');
    if (!arr.every(checkNumber)){
        return;
    }
    let c = 0;
    arr.forEach(function (value, i, array) {c+=Math.pow(2,array.length-i-1)*value});
    console.log(c);
    return c;
}


function checkNumber(element) {
    if(element=="1"|| element=="0") return true;
}

binaryToDec("ij");
binaryToDec("10101");
