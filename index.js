// 1.建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
const fibonacci = (position) => {
  let result = [0, 1, 1];
  for (let i = 3; i <= position; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[position];
};
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))

// 2.使用 Linked List 實作 Stack ，實作需包含以下方法。
// push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    return this.length++;
  }
  pop() {
    if (!this.head) return null;
    const temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return temp.data;
  }
  size() {
    return this.length;
  }
}

const stack = new Stack();
const stack2 = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop())
console.log(stack.size())

// 3.將下列輸入資料整合成期望的輸出結果。
const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];
const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];
const userData = { U01: "Tom", U02: "Sam", U03: "John" };
const orderData = {
  T01: { name: "A", price: 499 },
  T02: { name: "B", price: 599 },
  T03: { name: "C", price: 699 },
  T04: { name: "D", price: 799 },
};
let result = [];
for (let k = 0; k < userOrders.length; k++) {
  let data = {
    user: { id: userOrders[k].userId, name: userData[userOrders[k].userId] },
    orders: [],
  };
  for (let i = 0; i < userOrders[k].orderIds.length; i++) {
    data.orders.push({
      id: userOrders[k].orderIds[i],
      name: orderData[userOrders[k].orderIds[i]].name,
      price: orderData[userOrders[k].orderIds[i]].price,
    });
  }
  result.push(data);
}
console.log(JSON.stringify(result));
