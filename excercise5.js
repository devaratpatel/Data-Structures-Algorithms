/* Reverse List

Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

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
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// null A -> B -> C -> D -> E -> F

// Iterative Solution

const reverseLinkedList = (head) => {
  let current = head;
  let prev = null;

  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//Recursive Solution

const recursiveReverseLinkedList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return recursiveReverseLinkedList(next, head);
};

console.log(reverseLinkedList(a));
console.log('<---------->');
console.log(recursiveReverseLinkedList(a));
