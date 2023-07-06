---
description: Render HTML trong JavaScript.
image: https://res.cloudinary.com/practicaldev/image/fetch/s--IsWV9ckt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/20t19qnkf0nd0y8ygsps.jpg
toc_max_heading_level: 6
sidebar_position: 7
---

# Render HTML trong JavaScript

> Các ứng dụng web hiện đại thường sử dụng JavaScript để tạo ra các thành phần HTML động. Ví dụ, khi bạn click vào một nút, một phần tử HTML mới sẽ được tạo ra và được thêm vào trang web. Hoặc phổ biến nhất là một danh sách các phần tử HTML được tạo ra từ dữ liệu được lấy từ server. Việc render HTML sẽ giúp đơn giản hóa việc tạo ra các thành phần HTML động, không cần phải viết HTML thủ công quá nhiều và dữ liệu được render sẽ được cập nhật tự động khi có thay đổi.

:::info
**Render**: Có thể hiểu đơn giản là tạo ra một HTML element từ dữ liệu bằng Javascript.
:::

## Cách render HTML trong JavaScript

Có nhiều cách để render HTML trong JavaScript. Trong bài viết này, chúng ta sẽ tìm hiểu về 2 cách phổ biến nhất là sử dụng `innerHTML` và `insertAdjacentHTML`.

:::info
Ngoài 2 cách trên, còn có một cách khác là sử dụng `document.createElement` và `appendChild`. Tuy nhiên, cách này sẽ phức tạp hơn và khó áp dụng hơn do chỉ có thể render một phần tử HTML duy nhất mỗi lần, thay vào đó render một chuỗi HTML chứa nhiều phần tử HTML một lúc sẽ đơn giản hơn. Cách này tương tự với các hàm `h()` trong Vue hoặc `JSX` trong React, ... mà chúng ta sẽ tìm hiểu trong các bài viết sau.
:::

### Sử dụng `innerHTML`

Cách đơn giản nhất để render HTML trong JavaScript là sử dụng thuộc tính `innerHTML` của một phần tử HTML. Thuộc tính `innerHTML` sẽ trả về một chuỗi HTML chứa tất cả các phần tử con của phần tử đó. Ví dụ:

```html
<div id="app">
  <h1>Hello World</h1>
</div>

<script>
  const app = document.getElementById("app");
  console.log(app.innerHTML); // <h1>Hello World</h1>
</script>
```

Chúng ta có thể thấy rằng `innerHTML` trả về một chuỗi HTML chứa tất cả các phần tử con của phần tử `app`. Vì vậy, chúng ta có thể sử dụng `innerHTML` để render một chuỗi HTML vào trong một phần tử HTML. Ví dụ:

```html
<div id="app">
  <h1>Hello World</h1>
</div>

<script>
  const app = document.getElementById("app");
  app.innerHTML = "<h1>Hello</h1>";
</script>

<!-- Sau khi render -->
<div id="app">
  <h1>Hello</h1>
</div>
```

Cách này đơn giản và dễ hiểu nhất, tuy nhiên nó có một nhược điểm là nó sẽ xóa toàn bộ các element con của element đó và thay thế bằng chuỗi HTML mới. Do đó, nếu chúng ta muốn render một element HTML mới vào trong một element HTML đã có sẵn, lấy ra chuỗi HTML của element đó, thêm chuỗi HTML mới vào và gán lại vào element. Ví dụ:

```html
<div id="app">
  <h1>Hello World</h1>
</div>

<script>
  const app = document.getElementById("app");
  const oldHTML = app.innerHTML;
  const newHTML = "<h1>Hello</h1>";
  app.innerHTML = oldHTML + newHTML;
</script>

<!-- Sau khi render -->
<div id="app">
  <h1>Hello World</h1>
  <h1>Hello</h1>
</div>
```

### Sử dụng `insertAdjacentHTML`

#### Vị trí chèn

Có 4 vị trí chèn mà chúng ta có thể sử dụng:

- `beforebegin`: Trước phần tử HTML đó (trước thẻ mở).
- `afterbegin`: Bên trong phần tử HTML đó (sau thẻ mở).
- `beforeend`: Bên trong phần tử HTML đó (trước thẻ đóng).
- `afterend`: Sau phần tử HTML đó (sau thẻ đóng).

Ví dụ:

```html
<!-- beforebegin -->
<div id="app">
  <!-- afterbegin -->
  <h1>Hello World</h1>
  <!-- beforeend -->
</div>
<!-- afterend -->
```

#### Cú pháp

```js
element.insertAdjacentHTML(position, text);
```

- `element`: Phần tử HTML mà chúng ta muốn chèn chuỗi HTML vào (được chọn ra bằng `getElementById`, `querySelector`, ...).
- `position`: Vị trí chèn chuỗi HTML.
- `text`: Chuỗi HTML cần chèn.

Ví dụ:

```html
<div id="app">
  <h1>Hello World</h1>
</div>

<script>
  const app = document.getElementById("app");
  app.insertAdjacentHTML("beforeend", "<h1>Hello</h1>");
</script>

<!-- Sau khi render -->
<div id="app">
  <h1>Hello World</h1>
  <h1>Hello</h1>
</div>
```
