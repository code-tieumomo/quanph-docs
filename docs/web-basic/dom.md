---
description: Cơ bản về DOM trong Javascript.
image: https://codelearn.io/Media/Default/Users/Khoaa/Image/dom_js/Capture.PNG
toc_max_heading_level: 6
sidebar_position: 5
---

# DOM

## DOM là gì?

> DOM (Document Object Model) là một chuẩn được định nghĩa bởi W3C (World Wide Web Consortium) để truy xuất và thao tác các phần tử HTML, XML, SVG trong một trang HTML. DOM cung cấp một cách nhìn chung về cấu trúc của HTML document và một API cho phép các ngôn ngữ lập trình như Javascript có thể thay đổi cấu trúc, style của HTML.

## Cấu trúc của DOM

> DOM được biểu diễn dưới dạng một cây gồm các node. Mỗi node là một đối tượng có các thuộc tính và phương thức riêng. Các node có thể là các phần tử HTML, các thuộc tính của phần tử, văn bản, comment, ...

![DOM Tree](https://www.w3schools.com/js/pic_htmltree.gif)

## Các thao tác với DOM

### Truy xuất DOM (lấy ra HTML element trong Javascript)

> Để truy xuất DOM, ta sử dụng các phương thức của đối tượng `document` (đối tượng này được tự động tạo ra khi trình duyệt tải một trang web). Các phương thức này sẽ trả về một đối tượng HTML element và ta có thể gán nó vào một biến để sử dụng sau này.

```javascript
// Lấy ra HTML element có id là "id_of_element"
const element = document.getElementById("id_of_element");
console.log(element); // <element id="id_of_element">...</element>

// Tham khảo thêm:
// Lấy ra tất cả HTML element có class là "class_of_element"
const element = document.getElementsByClassName("class_of_element");
console.log(element); // [<element class="class_of_element">...</element>, ...]

// Lấy ra tất cả HTML element có tag là "tag_of_element"
const element = document.getElementsByTagName("tag_of_element");
console.log(element); // [<element>...</element>, ...]

// Lấy ra HTML element theo CSS selector
const element = document.querySelector("css_selector");
console.log(element); // <element>...</element>

// Lấy ra tất cả HTML element theo CSS selector
const element = document.querySelectorAll("css_selector");
console.log(element); // [<element>...</element>, ...]
```

### Thao tác với HTML element

> Sau khi lấy ra HTML element, ta có thể thao tác với nó thông qua các thuộc tính và phương thức của nó.

```javascript
// Lấy ra HTML element có id là "id_of_element"
const element = document.getElementById("id_of_element");

// Thay đổi nội dung của HTML element
element.innerHTML = "New content";

// Thay đổi style của HTML element
element.style.color = "red";
element.style.backgroundColor = "blue";
// ...

// Thay đổi thuộc tính của HTML element
// element.setAttribute("name_of_attribute", "new_value");
element.setAttribute("class", "new_class");
element.setAttribute("id", "new_id");
// ...

// Thay đổi class của HTML element
element.classList.add("new_class");
element.classList.remove("old_class");
element.classList.toggle("class_to_toggle");

// Thay đổi nội dung text của HTML element
element.textContent = "New content";
```

### Xử lý sự kiện (event)

> Để xử lý sự kiện, ta sử dụng phương thức `addEventListener` của HTML element. Phương thức này nhận vào 2 tham số: tên sự kiện và hàm xử lý sự kiện.

```javascript
// Cú pháp:
// element.addEventListener("event_name", function (event) {
//   // Code xử lý sự kiện
// });
```

> Trong đó, `event` là một biến chứa thông tin về sự kiện. Đối tượng này có các thuộc tính như `event.target` (HTML element gây ra sự kiện), `event.clientX` (tọa độ x của con trỏ chuột), `event.clientY` (tọa độ y của con trỏ chuột), ...

Ví dụ:

```javascript
// Lấy ra HTML element có id là "id_of_element"
const element = document.getElementById("id_of_element");

// Thêm sự kiện click cho HTML element
element.addEventListener("click", function (event) {
  // Code xử lý sự kiện
  console.log("Clicked");
});
```

Trong ví dụ trên, khi click vào HTML element có id là `id_of_element`, trình duyệt sẽ gọi hàm xử lý sự kiện và in ra dòng chữ `Clicked` trên console.

## Thực hành

```html
<div id="container"></div>
```

```javascript
// Lấy ra HTML element có id là "container"
const container = document.getElementById("container");
console.log(container); // <div id="container"></div>

// Thêm HTML element vào trong "container"
container.innerHTML = "<h1>Hello World</h1>";
// HTML: <div id="container"><h1>Hello World</h1></div>

// Thay đổi style
container.style.color = "red";
container.style.backgroundColor = "blue";

// Thay đổi thuộc tính
container.setAttribute("class", "container");
container.setAttribute("custom", "custom_value");
// HTML: <div id="container" class="container" custom="custom_value"><h1>Hello World</h1></div>

// Thay đổi class
container.classList.add("new_class");
container.classList.remove("container");
container.classList.toggle("class_to_toggle");
// HTML: <div id="container" class="new_class class_to_toggle" custom="custom_value"><h1>Hello World</h1></div>

// Thêm sự kiện khi di chuột vào "container" thì sẽ thay đổi màu nền
container.addEventListener("mouseover", function (event) {
  container.style.backgroundColor = "red";
});

// Thêm sự kiện khi di chuột ra khỏi "container" thì sẽ thay đổi màu nền
container.addEventListener("mouseout", function (event) {
  container.style.backgroundColor = "blue";
});

// ...
```
