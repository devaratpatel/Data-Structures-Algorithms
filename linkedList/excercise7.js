/* Is univalue list
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Test1 - Return True
const a = new Node(7);
const b = new Node(5);
const c = new Node(7);

// Test 2 - Return False
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(7);

a.next = b;
b.next = c;

const isUnivalueList = (head) => {
  let current = head;

  while (current != null) {
    if (head.val != current.val) {
      return false;
    }
    current = current.next;
  }
  return true;
};

console.log(isUnivalueList(a));
