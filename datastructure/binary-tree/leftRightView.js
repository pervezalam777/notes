class Node {
  constructor(data) {
      this.data = data;
      this.left = this.right = null;
  }
}

class Tree {
   maxLevel = 0;

   leftView(root, level, output) {
       if(root === null){
           return;
       }
       if(this.maxLevel < level) {
           output.push(root.data);
           this.maxLevel = level;
       }
       this.leftView(root.left, level + 1, output);
       this.leftView(root.right, level + 1, output);
   }

   rightView(root, level, output) {
       if(root === null) {
           return;
       }
       if(this.maxLevel < level) {
           output.push(root.data);
           this.maxLevel = level;
       }

       this.rightView(root.right, level + 1, output)
       this.rightView(root.left, level + 1, output)
   }
}

function buildTree() {
   const node1 = new Node(1);
   const node2 = new Node(2);
   const node3 = new Node(3);
   const node4= new Node(4);
   const node5 = new Node(5);
   const node6 = new Node(6);
   const node7 = new Node(7);
   const node8 = new Node(8);
   const node9 = new Node(9);

   node1.left = node2;
   node1.right = node3;

   node2.left = node4;
   node2.right = node5;

   node5.right = node6;

   node3.left = node7;
   node3.right = node8;

   node8.left = node9;

   const tree = new Tree();
   let output = []
   tree.leftView(node1.left, 1, output);
   output.reverse();
   tree.maxLevel = 0;
   tree.rightView(node1, 1, output);

   console.log(output);

}

buildTree();