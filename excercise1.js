/* Linked List Values

 Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// Iterative Solution
const linkedListValues = (head) => {
  let finalArray = [];

  let current = head;

  while (current != null) {
    finalArray.push(current.val);
    current = current.next;
  }
  return finalArray;
};

//Recursive Solution
const recursionListValues = (head) => {
  const array = [];
  helperFunc(head, array);
  return array;
};

const helperFunc = (head, array) => {
  if (head != null) {
    array.push(head.val);
    helperFunc(head.next, array);
  }
};

console.log(linkedListValues(a));
console.log(recursionListValues(a));
