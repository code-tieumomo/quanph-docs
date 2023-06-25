---
description: Array trong Javascript và các phương thức liên quan.
image: https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.png
toc_max_heading_level: 6
sidebar_position: 5
---

# Loop

## Khái niệm

**Loop** (vòng lặp) là một cấu trúc điều khiển trong Javascript, cho phép thực hiện một đoạn mã lặp đi lặp lại nhiều lần. Vòng lặp sẽ thực hiện một đoạn mã cho đến khi một điều kiện nào đó không còn đúng nữa. Khi đó, vòng lặp sẽ dừng lại và chương trình sẽ tiếp tục thực hiện các câu lệnh tiếp theo.

Ví dụ, ta có thể sử dụng vòng lặp để in ra màn hình các số từ 1 đến 10 như sau:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1
}
```

Hoặc có thể sử dụng để duyệt qua các phần tử của một mảng như sau:

```js
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // 1, 2, 3, 4, 5
}
```

## Các loại vòng lặp

Trong Javascript, có 5 loại vòng lặp:

- `for`: Vòng lặp với số lần lặp được xác định trước.
- `while`: Vòng lặp với số lần lặp không xác định trước.
- `do...while`: Vòng lặp với số lần lặp không xác định trước, nhưng sẽ thực hiện ít nhất một lần.
- `for...in`: Vòng lặp để duyệt qua các thuộc tính của một **object**.
- `for...of`: Vòng lặp để duyệt qua các phần tử của một mảng.

Ngoài ra còn một số cách khác để lặp qua các phần tử của một mảng như [`forEach()`](/docs/web-advanced/array#array-foreach), `map()`, `filter()`, `reduce()`,... nhưng chúng ta sẽ không gọi là vòng lặp bởi vì chúng không phải là một cấu trúc điều khiển mà là các phương thức của mảng.

## Vòng lặp `for`

Vòng lặp `for` là một cấu trúc điều khiển cho phép thực hiện một đoạn mã lặp đi lặp lại nhiều lần với số lần lặp được xác định trước. Khi số lần lặp đó hết, vòng lặp sẽ dừng lại và chương trình sẽ tiếp tục thực hiện các câu lệnh tiếp theo.

Cú pháp của vòng lặp `for` như sau:

```js
for (initialization; condition; final - expression) {
  // code to be executed
}
```

Trong đó:

- `initialization`: Khởi tạo giá trị ban đầu cho biến đếm. VD: `let i = 0`.
- `condition`: Điều kiện để vòng lặp tiếp tục thực hiện. VD: `i < 10`.
- `final-expression`: Biểu thức được thực hiện sau mỗi lần lặp. VD: `i++`.

Ví dụ, ta có thể sử dụng vòng lặp `for` để in ra màn hình các số từ 1 đến 10 như sau:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
}
```

## Vòng lặp `while`

Vòng lặp `while` là một cấu trúc điều khiển cho phép thực hiện một đoạn mã lặp đi lặp lại nhiều lần với số lần lặp không xác định trước mà phụ thuộc vào một điều kiện nào đó. Khi điều kiện đó không còn đúng nữa, vòng lặp sẽ dừng lại và chương trình sẽ tiếp tục thực hiện các câu lệnh tiếp theo.

Cú pháp của vòng lặp `while` như sau:

```js
while (condition) {
  // code to be executed
}
```

Trong đó:

- `condition`: Điều kiện để vòng lặp tiếp tục thực hiện. VD: `i < 10`.

Ví dụ, ta có thể sử dụng vòng lặp `while` để in ra màn hình các số từ 1 đến 10 như sau:

```js
let i = 1;

while (i <= 10) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
  i++;
}
```

:::danger
Nếu điều kiện của vòng lặp `while` luôn đúng, vòng lặp sẽ không bao giờ dừng lại và chương trình sẽ bị treo. Do đó trong phần code của vòng lặp while, ta phải đảm bảo điều kiện của vòng lặp sẽ trở thành sai tại một thời điểm nào đó. Trong ví dụ trên, ta đã tăng giá trị của biến `i` sau mỗi lần lặp để đảm bảo điều kiện `i <= 10` sẽ trở thành sai tại một thời điểm mà i bằng 11.
:::

## Vòng lặp `do...while`

Vòng lặp `do...while` là một cấu trúc điều khiển cho phép thực hiện một đoạn mã lặp đi lặp lại nhiều lần với số lần lặp không xác định trước mà phụ thuộc vào một điều kiện nào đó. Khác với vòng lặp `while`, vòng lặp `do...while` sẽ thực hiện ít nhất một lần trước khi kiểm tra điều kiện.

Cú pháp của vòng lặp `do...while` như sau:

```js
do {
  // code to be executed
} while (condition);
```

Trong đó:

- `condition`: Điều kiện để vòng lặp tiếp tục thực hiện. VD: `i < 10`.

Ví dụ, ta có thể sử dụng vòng lặp `do...while` để in ra màn hình các số từ 1 đến 10 như sau:

```js
let i = 1;

do {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
  i++;
} while (i <= 10);
```

## Vòng lặp `for...in`

Vòng lặp `for...in` là một cấu trúc điều khiển cho phép duyệt qua các thuộc tính của một **object**. Vòng lặp này sẽ duyệt qua tất cả các thuộc tính của object đó, bao gồm cả các thuộc tính được kế thừa từ các object cha.

Cú pháp của vòng lặp `for...in` như sau:

```js
for (variable in object) {
  // code to be executed
}
```

Trong đó:

- `variable`: Tên của biến sẽ được sử dụng để lưu tên của thuộc tính đang được duyệt.
- `object`: Object sẽ được duyệt qua các thuộc tính.

Ví dụ, ta có thể sử dụng vòng lặp `for...in` để in ra màn hình các thuộc tính của object như sau:

```js
const person = {
  name: "John",
  age: 20,
  address: "Ha Noi",
};

for (let key in person) {
  console.log(key); // name age address
}
```

:::info

- Trong ví dụ trên, ta có thể thay `key` bằng bất kỳ tên biến nào khác. Tên biến này sẽ được sử dụng để lưu tên của thuộc tính đang được duyệt.
- `for...in` cũng có thể được sử dụng để duyệt qua các phần tử của một **array**.

:::

## Vòng lặp `for...of`

Vòng lặp `for...of` là một cấu trúc điều khiển cho phép duyệt qua các phần tử của một **array**.

Cú pháp của vòng lặp `for...of` như sau:

```js
for (variable of iterable) {
  // code to be executed
}
```

Trong đó:

- `variable`: Tên của biến sẽ được sử dụng để lưu giá trị của phần tử đang được duyệt.
- `iterable`: Array hoặc string sẽ được duyệt qua các phần tử.

Ví dụ, ta có thể sử dụng vòng lặp `for...of` để in ra màn hình các phần tử của một array như sau:

```js
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // 1 2 3 4 5
}
```

:::info
Nếu định nghĩa một cách chính xác thì `for...of` sẽ duyệt qua các phần tử của một **iterable** (Array, String, TypedArray, Map, Set, NodeList, ...) thay vì chỉ là một **array** nhưng trong thực tế, ta thường sử dụng `for...of` để duyệt qua các phần tử của một **array** và **NodeList** nhiều hơn.

Tham khảo thêm về [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable).
Tham khảo thêm về [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).
:::
