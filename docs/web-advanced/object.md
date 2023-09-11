---
description: Object trong Javascript và các phương thức liên quan.
image: https://cdn.programiz.com/sites/tutorial2program/files/javascript-object-properties.png
toc_max_heading_level: 6
sidebar_position: 4
---

# Object

## Khái niệm

**Object** là một kiểu dữ liệu trong Javascript, được sử dụng để lưu trữ các dữ liệu có cấu trúc. Mỗi **object** sẽ có một tập hợp các thuộc tính (properties) - giá trị (value) tương ứng với nhau.

> Ngoài ra còn có phương thức (method) là một loại thuộc tính đặc biệt, chúng ta sẽ tìm hiểu về phương thức trong một bài viết khác.

Ví dụ, ta có thể lưu trữ thông tin của một người trong một **object** như sau:

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};
```

Trong đoạn code trên, ta có một **object** với 3 thuộc tính:

- `name` có giá trị là `"John"`
- `age` có giá trị là `20`
- `address` có giá trị là `"New York"`

:::info
**Object** trong Javascript cũng tương tự như object trong thế giới thực. Ví dụ, một chiếc xe hơi có thể được coi là một object, và các thuộc tính của nó có thể là `brand` (hãng xe), `color` (màu sắc), `price` (giá bán), `weight` (trọng lượng), ...

**Object** sẽ phù hợp để thể hiện dữ liệu về một đối tượng cụ thể nào đó.
:::

## Khai báo

Để khai báo một **object**, ta sử dụng cặp dấu ngoặc nhọn `{}` và đặt các thuộc tính bên trong.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};
```

Trong đoạn code trên, ta đã khai báo một **object** với 3 thuộc tính `name`, `age`, `address` và giá trị tương ứng của chúng.

## Truy xuất thuộc tính

Để truy xuất một thuộc tính của **object**, ta sử dụng cú pháp `objectName.propertyName`.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

console.log(person.name); // "John"
console.log(person.age); // 20
console.log(person.address); // "New York"
```

## Thay đổi/Thêm mới giá trị thuộc tính

Để thay đổi/thêm mới giá trị của một thuộc tính, ta sử dụng cú pháp `objectName.propertyName = newValue`.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

person.name = "Peter";
console.log(person.name); // "Peter"
```

## Xóa thuộc tính

Để xóa một thuộc tính của **object**, ta sử dụng cú pháp `delete objectName.propertyName`.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

delete person.address;
console.log(person.address); // undefined
```

## Duyệt qua các thuộc tính

Để duyệt qua các thuộc tính của **object**, ta sử dụng vòng lặp `for...in`.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

for (let property in person) {
  console.log(property); // "name", "age", "address"
  console.log(person[property]); // "John", 20, "New York"
}
```

## Kiểm tra sự tồn tại của thuộc tính

Để kiểm tra xem một thuộc tính có tồn tại trong **object** hay không, ta sử dụng toán tử `in`.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

console.log("name" in person); // true
```

## Các phương thức liên quan

### Object.keys()

Phương thức `Object.keys()` sẽ trả về một mảng chứa tất cả các thuộc tính của **object**.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

console.log(Object.keys(person)); // ["name", "age", "address"]
```

### Object.values()

Phương thức `Object.values()` sẽ trả về một mảng chứa tất cả các giá trị của **object**.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

console.log(Object.values(person)); // ["John", 20, "New York"]
```

### Object.entries()

Phương thức `Object.entries()` sẽ trả về một mảng chứa tất cả các cặp thuộc tính - giá trị của **object**.

```js
const person = {
  name: "John",
  age: 20,
  address: "New York",
};

console.log(Object.entries(person));
// [
//   ["name", "John"],
//   ["age", 20],
//   ["address", "New York"],
// ]
```
