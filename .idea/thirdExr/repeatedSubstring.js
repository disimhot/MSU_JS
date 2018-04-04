//elena-efimova
//Строка — повторение подстроки

function getMaxCountRepeats(string) {
    if(typeof(string) == 'string'){

        let repeat = '';
        let k;
        for(i= 0; i < string.length; i++){

            repeat += string[i];
            let array = string.split(repeat);
            k = array.length-1;

            if (array.every(function(value){return value == '';})){
                console.log(k);
                return;
            }
        }

   }else{console.log('Введен некорректный текст');}
}

getMaxCountRepeats('abcabcabcabc');
getMaxCountRepeats('babababababa');
getMaxCountRepeats(12);
