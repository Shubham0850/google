class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //   Append method
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //   PREPEND
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //   PRINT LIST
  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  //     INSERT O(n)
  insert(index, value) {
    //   validating index
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    const newNode = new Node(value);
    let currentNode = this.head;

    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let tempNodeRef = currentNode.next;
    currentNode.next = newNode;
    newNode.next = tempNodeRef;
    this.length++;
    return this;
  }

  //   REMOVE O(n)
  remove(index) {
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let unwantedNodeRef = currentNode.next;
    currentNode.next = unwantedNodeRef.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(16);

myLinkedList.prepend(1);
myLinkedList.prepend(2);

myLinkedList.insert(6, 99);
myLinkedList.insert(2, 100);

myLinkedList.remove(3);
myLinkedList.remove(2);
console.log(myLinkedList);
myLinkedList.printList();
