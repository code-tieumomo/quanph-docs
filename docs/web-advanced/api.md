---
description: API.
image: https://scaler.com/topics/images/introduction-to-the-javascript-array.webp
toc_max_heading_level: 6
sidebar_position: 8
---

# API

> **API (Application Programming Interface)** là một tập các hàm, giao diện, tài liệu mà một hệ thống cung cấp cho các hệ thống khác để sử dụng. API giúp các hệ thống khác có thể tương tác với nhau một cách dễ dàng.

Một số ứng dụng của API:

- Web API: Các hệ thống web cung cấp API để cho các hệ thống khác có thể tương tác với nó (lấy dữ liệu, thực hiện thao tác, ...). Ví dụ: Facebook API, Google API, ...
- API của các thư viện: Các thư viện cung cấp API để cho các hệ thống khác có thể sử dụng các hàm, lớp, ... của thư viện đó. Ví dụ: API của thư viện React, API của thư viện Lodash, ...
- API hệ điều hành: Các hệ điều hành cung cấp API để cho các hệ thống khác có thể tương tác với hệ điều hành đó. Ví dụ: API của hệ điều hành Windows, API của hệ điều hành Linux, ...
- ...

## Web API

Web API là các API được cung cấp bởi các hệ thống web để cho các hệ thống khác có thể tương tác với nó. Các hệ thống khác có thể sử dụng Web API để CRUD dữ liệu, thực hiện một chức năng cụ thể nào đó, ... với hệ thống web đó. Dữ liệu được trao đổi thông qua Web API thường là dữ liệu dạng JSON.

> Ở đây chỉ tìm hiểu cơ bản về cách sử dụng Web API, còn về cách xây dựng Web API thì sẽ được tìm hiểu ở phần sau.

## JSON

JSON (Javascript Object Notation) là một định dạng dữ liệu dạng text. JSON được sử dụng để trao đổi dữ liệu giữa các hệ thống. JSON có cấu trúc tương tự như Object trong Javascript.

Ví dụ:

```json
{
  "name": "John",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"]
}
```

> Web API thường sử dụng JSON để trao đổi dữ liệu với các hệ thống khác (trả về dữ liệu dạng JSON, nhận dữ liệu dạng JSON). Khi nhận về dữ liệu dạng JSON, ta có thể chuyển đổi dữ liệu này sang dạng Object trong Javascript bằng cách sử dụng phương thức `json()` của `Response`.

### Cách sử dụng Web API

#### Method

Web API thường được sử dụng thông qua các method HTTP. Các method HTTP thường được sử dụng nhất là `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. Các phương thức này thường được sử dụng các thao tác như sau:

- `GET`: Lấy dữ liệu từ Web API.
- `POST`: Thêm dữ liệu vào Web API.
- `PUT`: Cập nhật dữ liệu vào Web API.
- `PATCH`: Cập nhật một phần dữ liệu vào Web API.
- `DELETE`: Xóa dữ liệu từ Web API.

#### Endpoint (URL)

Mỗi Web API sẽ có một endpoint (URL) để cho các hệ thống khác có thể tương tác với nó. Endpoint này sẽ được sử dụng thông qua các method HTTP. Ví dụ:

- `GET example.com/api/users`: Lấy danh sách người dùng.
- `POST example.com/api/users`: Thêm một người dùng mới.
- `PUT example.com/api/users/1`: Cập nhật thông tin người dùng có id là 1.
- `PATCH example.com/api/users/1`: Cập nhật một phần thông tin người dùng có id là 1.
- `DELETE example.com/api/users/1`: Xóa người dùng có id là 1.

#### Header

Header là các thông tin được gửi kèm theo request. Các thông tin này thường được sử dụng để xác thực người dùng, xác thực request, ... Ví dụ:

- `Authorization`: Thông tin xác thực người dùng.
- `Content-Type`: Kiểu dữ liệu của dữ liệu được gửi lên (JSON, XML, ...).
- `Accept`: Kiểu dữ liệu của dữ liệu được trả về (JSON, XML, ...).

Cách sử dụng sẽ nói ở phần hàm [fetch()](#cú-pháp).

#### Body

Body là dữ liệu được gửi kèm theo request. Ví dụ:

```json
{
  "name": "John",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"]
}
```

Cách sử dụng sẽ nói ở phần hàm [fetch()](#cú-pháp).

#### Query String

Query String là các thông tin được gửi kèm theo request ở trên URL. Các thông tin này thường được sử dụng cùng phương thức GET, hay dùng để lọc dữ liệu, phân trang, ... Ví dụ:

- `example.com/api/users?name=John`: Lấy danh sách người dùng có tên là John.
- `example.com/api/users?page=1&limit=10`: Lấy danh sách người dùng ở trang 1, mỗi trang có 10 người dùng.

Trong đó `?` là ký tự bắt đầu của Query String, `&` là ký tự phân tách giữa các thông tin. Các cặp thông tin sẽ có dạng `key=value` và được gọi là một query parameter. Cụ thể:

- `name=John`: Query parameter có key là `name` và value là `John`.
- `page=1`: Query parameter có key là `page` và value là `1`.
- `limit=10`: Query parameter có key là `limit` và value là `10`.

#### fetch()

:::info
Trong Javascript còn có XMLHttpRequest (XHR) để tương tác với Web API. Tuy nhiên, cách này hơi khó dùng hơn nên ở đây ta sẽ sử dụng `fetch()` để tương tác với Web API.
:::

Về cơ bản, để tương tác với API thì ta sẽ gửi một request đến API và nhận về một response. Trong Javascript, ta có thể sử dụng hàm `fetch()` để gửi một request đến API và nhận về một response.

Hàm `fetch()` sẽ trả về một `Promise` và dữ liệu trả về sẽ được đọc thông qua phương thức `json()` của `Response`.

##### Cú pháp

```js
fetch(url, options);
```

Trong đó:

- `url`: Đường dẫn đến API (Endpoint).
- `options`: Các tùy chọn cho request. Các tùy chọn này bao gồm:
  - `method`: Phương thức HTTP (GET, POST, PUT, PATCH, DELETE, ...).
  - `headers`: Các header của request.
  - `body`: Dữ liệu gửi kèm theo request.

##### Ví dụ

###### Lấy dữ liệu với phương thức `GET`

```js
// Gửi một request đến API và nhận về một response là danh sách todo
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

###### Thêm dữ liệu với phương thức `POST`

```js
// Gửi một request đến API và nhận về một response là todo mới
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "todo 1",
    completed: false,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

###### Cập nhật dữ liệu với phương thức `PUT`

```js
// Gửi một request đến API và nhận về một response là todo đã được cập nhật
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "todo 1",
    completed: true,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

###### Xóa dữ liệu với phương thức `DELETE`

```js
// Gửi một request đến API và nhận về một response là todo đã được xóa
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "DELETE",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

## Lưu ý

### API Key

API Key là một chuỗi ký tự được tạo ra để xác thực người dùng khi sử dụng Web API. API Key thường được gửi kèm theo request đến Web API thông qua header `Authorization` hoặc query parameter `api_key`.

Không phải tất cả các Web API đều yêu cầu API Key. Tuy nhiên, nếu Web API yêu cầu API Key thì ta phải gửi kèm API Key này trong request đến Web API. Nếu không gửi kèm API Key thì Web API sẽ trả về một lỗi thường là lỗi `401 Unauthorized` hoặc `403 Forbidden`.

### CORS

CORS (Cross-Origin Resource Sharing) là một cơ chế cho phép các trang web có thể tương tác với nhau mà không bị chặn bởi trình duyệt. CORS cho phép một trang web có thể gửi request đến một trang web khác mà không bị chặn bởi trình duyệt.

Các hệ thống cung cấp Web API thường sẽ bật CORS để cho phép các trang web khác có thể tương tác với Web API của họ. Nhưng không phải tất cả các hệ thống đều bật CORS. Nếu một hệ thống không bật CORS thì khi request đến Web API của họ sẽ bị chặn bởi trình duyệt và trả về một lỗi `CORS policy`. Trên Console của trình duyệt sẽ hiển thị lỗi như sau:

```txt
Access to fetch at 'https://example.com/api/users' from origin 'https://example.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Để khắc phục lỗi này, ta có thể sử dụng một proxy để gửi request đến Web API. Một proxy là một trang web khác mà trang web của ta có thể gửi request đến. Proxy sẽ nhận request từ trang web của ta và gửi tiếp request này đến Web API. Sau đó, proxy sẽ nhận response từ Web API và gửi tiếp response này đến trang web của ta. Hoặc đơn giản hơn nếu chúng ta là chủ sở hữu của Web API thì ta có thể bật CORS cho Web API của mình.

### Asynchronous

`fetch()` là một hàm bất đồng bộ (asynchronous). Điều này có nghĩa là khi ta gọi hàm `fetch()` thì nó sẽ không chờ đợi cho đến khi nhận được response từ Web API mà nó sẽ tiếp tục thực hiện các câu lệnh tiếp theo. Khi nhận được response từ Web API thì nó sẽ thực hiện các câu lệnh trong hàm `then()`. Các khái niệm về bất đồng bộ và async/await sẽ được giải thích ở các bài học sau.

:::danger
Do đó mọi thao tác với dữ liệu nhận được từ Web API đều phải được thực hiện trong hàm `then()` thứ hai.
:::
