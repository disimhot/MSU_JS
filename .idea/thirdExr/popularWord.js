//elena-efimova
//Вывести самое популярное слово
function Word(word) {
    this.word = word;
    this.count = 1;
}

function getPopularWord(text){
    let arr = text.split(' ');
    let stack = [];
    let repeatedWords = [];
    var k = 1;
    let res;
    arr.forEach(function(item){
        if(item != ''){
            let element = new Word(item);
            stack.push(element);
        }});
     stack.forEach(function(value){for(var i = 0; i < stack.length - 1; i++) {
        if(value.word == stack[i].word){repeatedWords.push(value.word);}
     }})

    for(var i = 0; i<repeatedWords.length; i++){
         var n = 0;
        for(var j = 0; j<repeatedWords.length; j++){
            if(repeatedWords[i]==repeatedWords[j]) n++;
        }
        if(n > k){k = n; res = i;}
    }
    console.log(repeatedWords[res]);


}




getPopularWord('Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera                                                               ');
