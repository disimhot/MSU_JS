//elena-efimova

//Хранение элемента и указание на следующий
function Node(value) {
    this.value = value;
    this.next = null;
}

function convertToLinkedList(number) {

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

add(123);