//elena-efimova

//Хранение элемента и указание на следующий
function Node(value) {
    this.value = value;
    this.next = null;
}

function convertToLinkedList(number) {
    if(!parseInt(number,10)){
        console.log("В JavaScript нет представления для введенного числа, либо число с экспонентой. Создан пустой список.");
        return;
    }else{
        let arr = number.toString().split('');
        console.log(arr);
    }
}

function add(number) {
    let element = new Node(number);
    let length = 0;

    let lastElement;
    let firstElement;

    //Пустой список
    if(!Node){
        this.value = number
        length++;
        return element;
    }
    //Непустой список
    while (element.next){
        lastElement = element.next;
    }

    element.next = lastElement;
    length++;
    console.log(element);
    return element;
    
}

convertToLinkedList(212312.3123);