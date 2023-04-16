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
        let current = this.head;
        if(!this.head){
            return false;
        }
        while(current){
            if(current.value == value){
                return true;
            }
            current = current.next;
        }
        return false;
    }


    find(value){
        let current = this.head;
        let index = 0;
        if(!this.head){
            return;
        }
        while(current){
            if(current.value == value){
                return index;
            }
            current = current.next;
            index++;
        }
        return "No such value in the list";
    }


    toString(){
        let current = this.head;
        let result = "";
        while(current){
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += "null";
        return result;
    }


    insertAt(value, index){
        let newNode = new Node(value);
        if(index == 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        if(!this.head){
            this.head = newNode;
            return;
        }
        let previousNode ;
        let current = this.head;
        for(let kount = 0;kount<index;kount++){
            previousNode = current;
            current = current.next; 
        }
        previousNode.next = newNode;
        newNode.next = current;
    }

    
    remove(index){
        let current = this.head;
        if(index ==0){
            this.head = current.next
            return;
        }
        let previousNode;
        for(let i =0;i<index;i++){
            previousNode = current;
            current = current.next;
        }
        previousNode.next = current.next;
        return;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


// testing
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
list.insertAt(9,0);
console.log(list.contains(3));
console.log(list.tail());
list.pop();
console.log(list.tail());
console.log(list.find(5));
list.remove(0);
console.log(list.toString());
