/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0){
      throw new Error(`Cannot dequeue from an empty Queue`)
    }
    else{
      let dequeuedVal = this.first;
      this.size -= 1;
      this.first = this.next;

      return dequeuedVal;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Queue;