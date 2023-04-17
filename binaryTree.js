class Node{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree{
    constructor(data){
      this.root = this.buildTree(data);
    }
  
    buildTree(data){
      const sortedArray = [...new Set(data)].sort((a, b) => a - b);
      if (sortedArray.length === 0) {
        return null;
      }
      const mid = Math.floor(sortedArray.length / 2);
      const root = new Node(sortedArray[mid]);
      root.left = this.buildTree(sortedArray.slice(0, mid));
      root.right = this.buildTree(sortedArray.slice(mid + 1));
      return root;
    }
  
    insert(value){
      const newNode = new Node(value);
      if(!this.root){
        this.root = newNode;
        return;
      }
      let current = this.root;
      while(true){
        if(value == current.data) return undefined;
        if(value < current.data){
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
  
    prettyPrint = (node = this.root, prefix = '', isLeft = true) => {
      if (!node) {
          return;
      }
      if (node.right) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    }
  }
  
  let newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  newTree.prettyPrint();
  