//elena-efimova
//var binaryNumber = new String();


function binaryToDec(binaryNumber){
    var a = [];
    var c = 0;
    for(var i = 0; i<binaryNumber.length; i++){
        if (binaryNumber[i]==0) {
            a.push(0);
            c += Math.pow(2,i);
        }else if(binaryNumber[i]==1){
            a.push(1);
            c += Math.pow(2,i);
        } else {
            console.log('Your number is undefined');
            a.length = 0;
            break;
            }
        }
    console.log(c);

}

binaryToDec("fwedg");

