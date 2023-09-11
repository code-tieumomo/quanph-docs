---
description: Array trong Javascript và các phương thức liên quan.
image: https://scaler.com/topics/images/introduction-to-the-javascript-array.webp
toc_max_heading_level: 6
sidebar_position: 3
---

import Playground from "javascript-playgrounds"

import { SimpleBSPlayground } from '@site/src/components/SimpleBSPlayground';

# Array

## Khái niệm

Array là một kiểu dữ liệu trong Javascript, được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất. Array thường được sử dụng khi muốn lưu một danh sách các giá trị ví dụ như danh sách các số nguyên, danh sách các chuỗi, danh sách các đối tượng, ...

Array có một số đặc điểm như sau:

- Array có thể chứa bất kỳ kiểu dữ liệu nào (number, string, boolean, array, ...) và có khả năng thay đổi kích thước.
- Array trong JS sử dụng index là số nguyên không âm để truy cập vào các phần tử trong mảng.
- Index của phần tử đầu tiên trong mảng là 0, phần tử thứ 2 là 1, phần tử thứ 3 là 2, ... và phần tử cuối cùng là `length - 1`.

## Khai báo

Có 2 cách khai báo một mảng trong Javascript:

```javascript
// Cách 1:
let arr = [1, 2, 3, 4, 5];

// Cách 2:
let arr = new Array(1, 2, 3, 4, 5);
```

Sau khi khai báo, ta có biến `arr` chứa một mảng các số nguyên từ 1 đến 5. Trong đó phần tử đầu tiên có index là 0 - giá trị là 1, phần tử thứ 2 có index là 1 - giá trị là 2, phần tử thứ 3 có index là 2 - giá trị là 3, ... và phần tử cuối cùng có index là 4 - giá trị là 5.

## Truy cập vào phần tử trong mảng

Để truy cập vào phần tử trong mảng, ta sử dụng cú pháp `array[index]`. Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5
```

---

<SimpleBSPlayground fileName="access-array-items"/>

## Số phần tử của mảng

Để lấy số phần tử của mảng, ta sử dụng thuộc tính `length` của mảng. Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
```

---

<SimpleBSPlayground fileName="count-array-items" height={50}/>

## Các phương thức thường sử dụng của Array

### `push()`

Phương thức `push()` được sử dụng để thêm một phần tử vào cuối mảng. Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr); // [1, 2, 3, 4, 5, 6]
```

---

<SimpleBSPlayground fileName="push-item-to-array" height={50}/>

### `pop()`

Phương thức `pop()` được sử dụng để xóa phần tử cuối cùng của mảng. Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

arr.pop();

console.log(arr); // [1, 2, 3, 4]
```

---

<SimpleBSPlayground fileName="pop-item-from-array" height={50}/>

### `shift()`

Phương thức `shift()` được sử dụng để xóa phần tử đầu tiên của mảng. Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

arr.shift();

console.log(arr); // [2, 3, 4, 5]
```

---

<SimpleBSPlayground fileName="shift-item-from-array" height={50}/>

:::tip
Ngoài ra còn rất nhiều phương thức khác của Array, có thể tham khảo thêm tại [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).
:::

## CRUD với Array

> **CRUD** là viết tắt của **Create, Read, Update, Delete** - tương ứng với **tạo, đọc, cập nhật, xóa**.

### Create

Tạo thêm phần tử mới trong mảng.

```javascript
let arr = [1, 2, 3, 4, 5];

// Thêm phần tử 6 vào cuối mảng
// highlight-next-line
arr.push(6); // var_name.push(value)

// Thêm phần tử 0 vào đầu mảng
// highlight-next-line
arr.unshift(0); // var_name.unshift(value)

console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// Thêm phần tử vào vị trí bất kỳ
// highlight-next-line
arr.splice(4, 0, 3.5); // var_name.splice(index_need_to_insert, 0, value)

console.log(arr); // [0, 1, 2, 3, 3.5, 4, 5, 6]
```

### Read

Đọc phần tử trong mảng.

```javascript
let arr = [1, 2, 3, 4, 5];

// Đọc phần tử bất kì
// highlight-next-line
arr[1]; // var_name[index]

// Đọc phần tử cuối cùng
// highlight-next-line
arr[arr.length - 1]; // var_name[var_name.length - 1]
```

### Update

Cập nhật phần tử trong mảng.

```javascript
let arr = [1, 2, 3, 4, 5];

// Cập nhật phần tử bất kì
// highlight-next-line
arr[1] = 10; // var_name[index] = value

console.log(arr); // [1, 10, 3, 4, 5]
```

### Delete

Xóa phần tử trong mảng.

```javascript
let arr = [1, 2, 3, 4, 5];

// Xóa phần tử bất kì
// highlight-next-line
arr.splice(1, 1); // var_name.splice(index_need_to_delete, 1)

console.log(arr); // [1, 3, 4, 5]

// Xóa phần tử đầu tiên
// highlight-next-line
arr.shift(); // var_name.shift()

console.log(arr); // [3, 4, 5]

// Xóa phần tử cuối cùng
// highlight-next-line
arr.pop(); // var_name.pop()

console.log(arr); // [3, 4]
```

:::info
`delete` cũng có thể xóa giá trị của phần tử trong mảng.

```javascript
let arr = [1, 2, 3, 4, 5];

delete arr[1];

console.log(arr); // [1, empty, 3, 4, 5]
```

nhưng `delete` không hoàn toàn xóa phần tử khỏi mảng mà chỉ đặt giá trị của phần tử đó thành `undefined`.
:::

## Array `foreach`

Array `foreach` là một phương thức của Array, được sử dụng để **duyệt qua từng phần tử trong mảng** và **thực hiện cùng một logic giống nhau** với mỗi phần tử và index tương ứng.

### Cú pháp:

```javascript
array_var_name.forEach((item, index) => {
  // item đại diện cho phần tử hiện tại đang duyệt
  // index đại diện cho index của phần tử hiện tại đang duyệt
  // code ..., được phép sử dụng 2 biên item và index ở trong đây
});
// Ra khỏi phạm vi của forEach thì sẽ không thể sử dụng 2 biến item và index nữa

array_var_name.forEach((item) => {
  // code ..
});

array_var_name.forEach(function (item, index) {
  // code ...
});
```

### Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
  console.log(item, index);
});

// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
```
