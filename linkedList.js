class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        let endNode = new Node(value);
        if(!this.head){
            this.head = endNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = endNode;
    }
    prepend(value){
        let startNode = new Node(value);
        startNode.next = this.head;
        this.head = startNode;
    }
    size(){
        let size = 0;
        let current = this.head;
        while(current.next){
            current = current.next;
            size ++;
        }
        return size;
    }
    Head(){
        return this.head.value;
    }
    tail(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current.value;
    }
    at(index){
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        return current.value;
    }
    pop(){
        if(!this.head){
            return "Empty List";
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let current = this.head;
        let previousNode;
        while(current.next){
            previousNode = current;
            current = current.next;
        } 
        previousNode.next = null;      
    }
    contains(value){

    }
    find(value){

    }
    toString(){
        
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();
list.prepend(2);
console.log(list.Head());
list.prepend(3);
console.log(list.Head());
list.prepend(5);
console.log(list.Head());
list.prepend(6);
console.log(list.Head());
list.append(3);
console.log(list.tail());
list.append(4);
console.log(list.tail());
list.pop();
console.log(list.tail());