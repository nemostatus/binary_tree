class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
} //breaking down this class
//a node has a data property which will be compared to the other nodes in the class below or bst
//depending on how the node compares to other depends if it will be the left or right branch of
// another node unless a root doesnt exist, then its the root node

class BinarySearchTree{
    constructor(){
        this.root =null
    } //a bst starts with no root node unless added
    insert(data){ // this method takes in data and passes that data into the constructor of node clasee making a new node with data but no branches yet
        let newNode = new Node(data)//the new node
        if(this.root ===null){ //if the binary tree doesn't have a root node yet then make this new node the root node
            this.root === newNode
        }
        else{
            this.insertNode(this.root,newNode) //if the bst has a root node then use the insertnode method to identify where to put this new node
        }} 
        insertNode(node,newNode){
            //conditional to determine where the new node belongs on the bst
            if(newNode.data < node.data){ //the new nodes data is compared to the root node nad if it's val is less than root check if it has a left branch
                if(node.left === null)
                    node.left = newNode //if no left branch then make new node the left branch of root
                
                else
                    this.insertNode(node.left,newNode) //compare the left branch to the new node using recursion
            }
              else{
                  if(node.right ===null)
                  node.right = newNode //if the new node is more than the left branch and theres no right node then make new node right branch
                  else
                  this.insertNode(node.right,newNode) //compare right branch to new node
              }
        }
        remove(data){
            this.root = removeNode(this.root, data)
        }
        // it recur over the tree to find the 
// data and removes it 
removeNode(node,key){ //so the params are node ===this.root and key===data so removeNode(5,10)
    if(node===null) 
        return null //if the root is null then return null 
         // if data to be delete is less than  
    // roots data then move to left subtree 
    else if(key<node.data){ 
        node.left =this.removeNode(node.left,key)
        return node
    }
        // if data to be delete is greater than  
    // roots data then move to right subtree 
      else if(key>node.data){
        node.right =this.removeNode(node.right,key)
        return node
    }
     // if data is similar to the root's data  
    // then delete this node 
    else{
        if(node.left === null && node.right ===null){
            node = null
            return node
        }
        if(node.left === null){
            node =node.right
            return node
        }
        else if(node.right ===null){
            node= node.left 
            return node
        }
        let aux = this.findMinNode(node.right)
        node.data =aux.data
        node.right = this.removeNode(node.right,aux.data)
        return node
    }
}
findMinNode(node){
if(node.left ===null)
return node
else return this.findMinNode(node.left)
}
}