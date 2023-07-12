---
description: Cơ bản về function trong Javascript.
image: https://fireship.io/courses/javascript/img/function-declaration.png
toc_max_heading_level: 6
sidebar_position: 4
---

# Function

## Function là gì?

> Function (từ giờ học là **hàm**) là một khối code thực hiện một chức năng nhất định và có thể được gọi bằng tên của nó. Function có thể nhận tham số đầu vào và trả về một giá trị cụ thể.

## Cách khai báo hàm

> Phần khai báo chỉ có tác dụng là định nghĩa một hàm, tức là đặt cho nó một cái tên, xác định các logic bên trong hàm body và sẽ không có phần code nào được thực thi tại thời điểm này. **Để thực thi function ta cần gọi nó**.

### Cách 1: Function declaration

```javascript
function <name>(<param1>, <param2>, ...) {
  // code to be executed
  // ...

  // return <value>
}
```

Trong đó:

- `function` là từ khóa để khai báo hàm.
- `<name>` là tên của hàm.
- `<param1>, <param2>, ...` là các tên cho tham số đầu vào của hàm, có thể có hoặc không. Nếu có nhiều tham số thì cần phân cách bằng dấu phẩy `,` và khi gọi hàm cũng cần truyền đúng số lượng tham số.
- `// code to be executed` là phần code thực thi bên trong hàm.
- `return <value>` là phần giá trị trả về của hàm, có thể có hoặc không. Nếu có thì cần sử dụng từ khóa `return` để trả về giá trị.

Ví dụ:

```javascript
function sum(a, b) {
  return a + b;
}
```

### Cách 2: Function expression

```javascript
const <name> = function (<param1>, <param2>, ...) {
  // code to be executed
  // ...

  // return <value>
}
```

Trong đó:

- `const` là từ khóa để khai báo một biến.
- `<name>` là tên của hàm.
- `<param1>, <param2>, ...` là tên cho các tham số đầu vào của hàm, có thể có hoặc không. Nếu có nhiều tham số thì cần phân cách bằng dấu phẩy `,` và khi gọi hàm cũng cần truyền đúng số lượng tham số.
- `// code to be executed` là phần code thực thi bên trong hàm.
- `return <value>` là phần giá trị trả về của hàm, có thể có hoặc không. Nếu có thì cần sử dụng từ khóa `return` để trả về giá trị.

Ví dụ:

```javascript
const sum = function (a, b) {
  return a + b;
};
```

## Cách gọi hàm

> Để thực thi một function ta cần gọi nó.

```javascript
<name>(<arg1>, <arg2>, ...);
```

Trong đó:

- `<name>` là tên của hàm.
- `<arg1>, <arg2>, ...` là các tham số đầu vào của function, có thể có hoặc không. Nếu có nhiều tham số thì cần phân cách bằng dấu phẩy `,` và lưu ý tại đây ta cần truyền vào giá trị cho tham số (số, chuỗi ký tự, ...), không phải là tên tham số.

Ví dụ:

```javascript
sum(1, 2);
```

Hàm mà trả về giá trị thì ta có thể sử dụng giá trị đó để thực thi các phép toán khác.

Ví dụ:

```javascript
const result = sum(1, 2);
console.log(result); // 3
```

## Ví dụ

```javascript
// Hàm giải phương trình bậc 2
function quadraticEquation(a, b, c) {
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return "Phương trình vô nghiệm";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return "Phương trình có nghiệm kép x = " + x;
  } else {
    // Math.sqrt(): hàm tính căn bậc 2
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return "Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2;
  }
}

// Gọi hàm
const result = quadraticEquation(1, 2, 1);
console.log(result); // Phương trình có nghiệm kép x = -1
```

## Lưu ý

- Hàm có tham số hay không thì cũng vẫn phải có cặp dấu ngoặc đơn `()` sau tên hàm khi gọi hàm và khi khai báo.

```

```
