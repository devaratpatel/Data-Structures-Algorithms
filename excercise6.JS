/* Zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Test 1
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');

// a.next = b;
// b.next = c;

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');

// x.next = y;
// y.next = z;

// a -> x -> b -> y -> c -> z

// Test 2
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;

const zipperLists = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 != null  current2 != null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return head1;
};

let j = zipperLists(a, x);

// Function to traverse linkedlist for us to check all the nodes
const printLinkedList = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(j);
