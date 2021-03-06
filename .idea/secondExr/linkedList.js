//elena-efimova
//Односвязный список

function Node(value) {
    this.value = value;
    this.next = null;

    this.add = function (digit){
        if(this.next == null){
            this.next = new Node(digit);
        }
        else {this.next.add(digit); }
    }
    this.search = function(digit) {
        if (this.value == digit) {
            return this;
        }else if (this.next != null) {
           return this.next.search(digit);
        }
        return null;
    }
    this.delete = function (digit) {
        if(this.next != null){
            if(this.next.value == digit){
                this.next = this.next.next;
                return true;
            } else{ return this.next.delete(digit);}
        } else{return false;}
    }

}

function LinkedList(number) {
    this.root = null;

    if(parseInt(number,10)){
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

    //Функция как атрибут функции LinkedList
    this.add = function (digit){
        if(this.root == null){
            this.root = new Node(digit);
        }
        else {this.root.add(digit); }
    };
    //Печать значений
    this.print = function () {
        let cursor = this.root;
        console.log("List:");
        while(cursor != null){
            console.log("\t"+cursor.value);
            cursor = cursor.next;
        }
    }
    //Поиск значений
    this.search = function (digit) {
        if(this.root != null){
           return this.root.search(digit);
        }
        return null;
    }

    //Удаление значения
    this.delete = function(digit){
        if(this.root != null){
            if(this.root.value == digit){
                this.root = this.root.next;
                return true;
            } else{ return this.root.delete(digit);}
        } else{return false;}
    }

    this.copy = function () {
        let linkedList = new LinkedList();
        if (this.root != null) {
            let cursor = this.root;
            do {
                this.add(cursor.value);
                cursor = cursor.next;
            } while (cursor != null);
        }
        return linkedList;
    }

    //Реверс LinkedList
    this.reverse = function () {

        let linkedList = new LinkedList();
        if (this.root != null) {

            let cursor = this.root;
            do {
                let current = new Node();
                current.value = cursor.value;
                if (linkedList.root == null) {
                    current.next = null;
                    linkedList.root = current;
                } else {
                    current.next = linkedList.root;
                    linkedList.root = current;
                }
                cursor = cursor.next;
            } while (cursor != null);
        }
        return linkedList;
    }
}
function pair(left, right) {

    if(left != null){this.left = left.value;}
    if(right != null){this.right = right.value;}
    this.sum = function() {return parseInt(this.right) + parseInt(this.left);}
}


function sum(left, right) {

    let result = new LinkedList();
    let fraction = 0;

    let leftCursor = left.root;
    let rightCursor = right.root;

    let stack = [];
    let temp =[];

    do{
        let element = new pair(leftCursor, rightCursor);
        stack.push(element);
        leftCursor = leftCursor.next;
        rightCursor = rightCursor.next;
        if (rightCursor == null){
            while(leftCursor != null){
                temp.push(leftCursor.value);
                leftCursor = leftCursor.next;
            } break;}
        if (leftCursor == null){
            while(rightCursor != null){
                temp.push(rightCursor.value);
                rightCursor = rightCursor.next;

            } break;}
    }while(leftCursor != null || rightCursor != null);

    stack.forEach(function (value){

        let fin;
        let element = value.sum() + fraction;

        if(element >= 10){
            fin = element%10;
            fraction = parseInt(element/10);
        }else{
            fin = element;
            fraction = 0;
        }
        result.add(fin);

    });
    if (fraction != 0 && temp.length == 0){
        result.add(fraction);
    }else {
        temp.forEach(function (t) {
            result.add((parseInt(t) + fraction)%10);
            fraction = parseInt((parseInt(t) + fraction)/10);
        })
    }

    return result.reverse();
}


let list = new LinkedList(12345678);

list.add(5);
list.add(100);
list.print();

let found = list.search('1');
if (found == null){console.log('Число не было найдено в списке. Попробуйте еще раз');
} else{console.log('Число ' + found.value + ' было найдено в списке')};

list.delete(90);
list.print();

let reversedList = list.reverse();
reversedList.print();


let a = new LinkedList(4591).reverse();
a.print();
let b = new LinkedList(5434146).reverse();
b.print();

let c = sum(a, b);
c.print();



