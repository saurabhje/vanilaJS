class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    Insert(value){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value ==- current.value) return undefined;
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    Remove(){
        
    }
}
