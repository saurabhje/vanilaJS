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

    Remove(value, node = this.root) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = this.Remove(value, node.left);
        return node;
      } else if (value > node.data) {
        node.right = this.Remove(value, node.right);
        return node;
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = this.Remove(temp.data, node.right);
        return node;
      }
    }

    Find(value, node = this.root){
        if(node === null ) return null;
        if(value != node.data){
          return value > node.data 
            ?this.Find(value, node.right)
            :this.Find(value, node.left);
        }
        return node;
    }

    LevelOrder(){
      if(!this.root) return null;
      const queue = [this.root];
      const result = [];
      while(queue.length){
        const Lvelsize = queue.length;
        const currentlength = [];
        for(let i = 0;i<Lvelsize;i++){
          const node = queue.shift();
          currentlength.push(node.data);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
        result.push(currentlength);
      }
      return result;
    } 
    
    inorder(root){
      let result = [];

      function traverse(node){
      if(!node) return [];
      if(node === null) return;
   
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
      }
      traverse(this.root);
      return result;
    }

    preOrder(root){
      let result = [];
      function traverse(node){
        if(!node) return;
        result.push(node.data);
        traverse(node.left);
        traverse(node.left);
      }
      traverse(this.root);
      return result;
    }

    postOrder(root){
      let result = [];
      function traverse(node){
        if(!node) return;
        traverse(node.left);
        traverse(node.left);
        result.push(node.data);
      }
      traverse(this.root);
      return result;
    }

    height(node= this.root){
      if(!node) return 0;
      const LeftHeight = this.height(node.left);
      const RightHeight = this.height(node.right);
      return Math.max(LeftHeight,RightHeight) + 1;
    }

    Depth(node, root = this.root, level = 0) {
        if (!node || !root) return null;
        if (root.data === node.data) return level;
        let count = this.Depth(node, root.left, level + 1);
        if (count !== null) return count;
        count = this.Depth(node, root.right, level + 1);
        return count;
      }

    isbalanced(node = this.root){
        if(node === null) return null;
        const height = Math.abs(this.height(node.left)-this.height(node.right))
        if(height <=1){
          if(this.isbalanced(node.left)&& this.isbalanced(node.right))
          return true;
        }
        return false;
      }
   
    Rebalance() {
      if (this.root === null) return;
      const sorted = [...new Set(this.inorder().sort((a, b) => a - b))];
      this.root = this.buildTree(sorted);
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
  

  //Testing
  let newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  newTree.insert(2);
  newTree.prettyPrint();
  newTree.Remove(23);
  console.log(newTree.Find(7));
  newTree.prettyPrint();
  console.log(newTree.inorder());
  console.log(newTree.preOrder());
  console.log(newTree.postOrder());
  console.log(newTree.LevelOrder());
  console.log(newTree.height());
  console.log(newTree.Find(2));
  console.log(newTree.isbalanced());
  console.log(newTree.Depth(newTree.Find(2)));
  newTree.Rebalance();
  newTree.prettyPrint();