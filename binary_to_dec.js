//elena-efimova



function binaryToDec(binaryNumber){
    var c = 0;
    for(var i = 0; i<binaryNumber.length; i++){
        if (binaryNumber[i]==0) {
            c += Math.pow(2,i);
        }else if(binaryNumber[i]==1){
            c += Math.pow(2,i);
        } else {
            console.log('Your number is undefined');
            break;
            }
        }
    console.log(c);

}

binaryToDec("101001");

