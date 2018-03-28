//elena-efimova

//Хранение элемента и указание на следующий
function Node(value) {
    this.value = value;
    this.next = null;

    this.add = function (digit){
        if(this.next == null){
            this.next = new Node(digit);
        }
        else {this.next.add(digit); }
    }
}

function LinkedList(number) {
    this.root = null;

    if(!parseInt(number,10)){
        console.log("В JavaScript нет представления для введенного числа. Создан пустой список.");
        return;
    }else {
        let arr = number.toString().split('').map(function (value) {
            return new Node(value);
        });
        for (var i = 0; i < arr.length; i++) {
            if (i < arr.length - 1) {
                arr[i].next = arr[i + 1];
            }
        }
        this.root = arr[0];
    }
    //функция как аттрибут функции LinkedList
    this.add = function (digit){
        if(this.root == null){
            this.root = new Node(digit);
        }
        else {this.root.add(digit); }
    };

    this.print = function () {
        let cursor = this.root;
        console.log("List:");
        while(cursor != null){
            console.log("\t"+cursor.value);
            cursor = cursor.next;
        }

    }
}


let list = new LinkedList(12131);
list.add(5);
list.print();