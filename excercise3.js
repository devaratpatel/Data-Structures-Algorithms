/* Linked list find

 Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

//Iterative Solution

const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    else current = current.next;
  }
  return false;
};

//Recursive Solution
const recursiveListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return recursiveListFind(head.next, target);
};
console.log(linkedListFind(a, 'g'));
console.log(recursiveListFind(a, 'g'));
