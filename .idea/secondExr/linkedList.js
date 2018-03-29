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
    this.search = function(digit) {
        if (this.value == digit) {
            return this;
        }else if (this.next != null) {
           return this.next.search(digit);
        }
        return null;
    }
    this.delete = function (digit) {
        if (this.value == digit){
            while (this.next != null){
            this.value = this.next.value;
            }

        } else{ this.next.delete(digit);}
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
            return this.root.delete(digit);
        } else{return;}
    }

}


let list = new LinkedList(123189);
list.add(5);
list.add(100);
list.print();

let found = list.search('1');
if (found == null){console.log('Число не было найдено в списке. Попробуйте еще раз');
} else{console.log('Число ' + found.value + ' было найдено в списке')};

list.delete(8);
list.print();