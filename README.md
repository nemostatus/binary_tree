# binary_tree

Goals
------
1 Find out what a binary search tree is 
Binary Search Tree is a node-based binary tree data structure
2 Find out the rules of bst
rules
======
top node is root node
nodes branch off from other nodes
binary tree has max limit of 2 branches for every node
left branch is less than or equal to parent node
right branch is more than or equal to pn
A binary tree is a special type of tree in which every node or vertex has either no child node or one child node or two child nodes.

snippet from stack overflow


"Binary trees become truly useful for searching when you balance them. This involves rotating sub-trees through their root node so that the height difference between any two sub-trees is less than or equal to 1. Adding those names above one at a time into a balanced tree would give you the following sequence:"
3 Find the purpose of bst
 One of the most important applications of the Binary tree is in the searching algorithm.
4 Find out how to code a bst
Here's a snippet  of code that is a class representing a node(from geeksforgeeks)

class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

 Data is initialized with data which is passed when object for this node is created and left and right is set to null.
5 types

full binary tree = this type is when all branches have 2 nodes and the bottom row is all filled out
A complete binary tree is a binary tree in which at every level, except possibly the last, has to be filled and all nodes are as far left as possible.

I'm going to follow geekforgeeks tutorial on bst for this repo

