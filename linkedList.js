class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        let endNode = new Node(value);
        if(!this.head){
            this.head = endNode;
            this.tail = endNode;
            return;
        }
        else{
            this.tail.next = endNode;
            this.tail = endNode;
        }
        this.size++;
    }


    prepend(value){
        let startNode = new Node(value);
        startNode.next = this.head;
        this.head = startNode;
        if(!this.tail){
            this.tail = startNode;
        }
        this.size++;
    }

    Size(){
        return this.size;
    }

    Head(){
        return this.head.value;
    }

    Tail(){
        return this.tail.value;
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
        let current = this.head;
        let previousNode = null;
        while(current.next){
            previousNode = current;
            current = current.next;
        } 
        if(previousNode){
            previousNode.next = null;
            this.tail = previousNode;
        }
        else{
            this.tail = null;
            this.head = null;
        }
        this.size--;    
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
        
        if(index == 0){
            this.prepend(value);
            return;
        }
        if(index == this.size){
            this.append(value);
            return;
        }
        let newNode = new Node(value);
        let previousNode = null ;
        let current = this.head;
        let kount = 0;
        while(kount < index){
            previousNode = current;
            current = current.next; 
            kount++;
        }
        previousNode.next = newNode;
        newNode.next = current;
        this.size++;
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
        this.size--;
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
console.log(list.Tail());
list.append(4);
list.insertAt(9,0);
console.log(list.contains(3));
console.log(list.Tail());
list.pop();
console.log(list.Tail());
console.log(list.find(5));
list.remove(0);
console.log(list.toString());
