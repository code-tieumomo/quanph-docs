---
description: Code snippet cho web advanced.
image: https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1689410438~exp=1689411038~hmac=68752240d9babdda528bbc8cba1868f27427ba836e841d19b0dbb008b3d92782
toc_max_heading_level: 6
sidebar_position: 9
---

# Code Snippet

:::caution
Các ví dụ trong bài có thể chỉ có **HTML**, đôi khi là cả **TailwindCSS**, không có sẵn style và tùy từng snippet mà sẽ có thêm các thư viện hỗ trợ (sẽ được lưu ý).
:::

## Đăng nhập/Đăng ký

> Đăng nhập/Đăng ký cơ bản sử dụng `Local Storage`

### Đăng ký

Tại trang HTML cần có 1 element form với tối thiểu 3 input: `username`, `password`, `confirm password` và 1 button `Đăng ký`.

```html
<form id="register-form">
  <input type="text" id="username" />
  <input type="password" id="password" />
  <input type="password" id="confirm-password" />
  <button type="submit">Đăng ký</button>
</form>
```

Xử lý đăng ký trong Javascript:

```js
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm?.addEventListener("submit", function (event) {
    // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
    event.preventDefault();

    // Lấy giá trị của các input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra password và confirm password có giống nhau hay không
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  });
});
```

### Đăng nhập

Tại trang HTML cần có 1 element form với tối thiểu 2 input: `username`, `password` và 1 button `Đăng nhập`.

```html
<form id="login-form">
  <input type="text" id="username" />
  <input type="password" id="password" />
  <button type="submit">Đăng nhập</button>
</form>
```

Xử lý đăng nhập trong Javascript:

```js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm?.addEventListener("submit", function (event) {
    // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
    event.preventDefault();

    // Lấy giá trị của các input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lấy thông tin đăng ký từ Local Storage
    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");

    // Kiểm tra username và password có khớp với thông tin đăng ký hay không
    if (username !== registeredUsername || password !== registeredPassword) {
      alert("Thông tin đăng nhập không chính xác");
      return;
    }

    // Thông báo đăng nhập thành công và lưu thông tin đăng nhập vào Local Storage
    localStorage.setItem("isLogin", true);
    alert("Đăng nhập thành công");
  });
});
```

### Đăng xuất

Để đăng xuất, ta chỉ cần xóa `isLogin` trong Local Storage. Phần này sẽ cần 1 button `Đăng xuất`

```html
<button id="logout-button">Đăng xuất</button>
```

Xử lý đăng xuất trong Javascript:

```js
document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");

  logoutButton?.addEventListener("click", function () {
    // Xóa thông tin đăng nhập trong Local Storage
    localStorage.removeItem("isLogin");
    alert("Đăng xuất thành công");
    window.location.reload();
  });
});
```

### Kiểm tra đăng nhập

Để kiểm tra đăng nhập, ta chỉ cần kiểm tra xem `isLogin` có tồn tại trong Local Storage hay không.

Ở đầu mỗi trang cần kiểm tra đăng nhập, ta thêm đoạn code sau:

```js
const isLogin = localStorage.getItem("isLogin");

if (!isLogin) {
  // Nếu trang yêu cầu bắt buộc phải đăng nhập thì thông báo và chuyển hướng
  alert("Bạn chưa đăng nhập");
  window.location.href = "/login.html";
}
```

:::tip
Phần này nên được đặt trong 1 file riêng và thêm vào các trang cần kiểm tra đăng nhập thông qua thẻ `<script src="..."></script>`.
:::

### Lưu ý

Theo logic thông thường:

- Khi chưa đăng nhập, sẽ không hiển thị button `Đăng xuất`.
- Khi đã đăng nhập, sẽ không hiển thị button `Đăng nhập` và `Đăng ký`.

Do đó ở trong file kiểm tra đăng nhập, ta nên bổ sung thêm:

```js
const isLogin = localStorage.getItem("isLogin");

if (!isLogin) {
  // Nếu trang yêu cầu bắt buộc phải đăng nhập thì thông báo và chuyển hướng
  alert("Bạn chưa đăng nhập");
  window.location.href = "/login.html";

  // highlight-start
  // Nếu trang không yêu cầu bắt buộc phải đăng nhập thì ẩn button Đăng xuất
  document.getElementById("logout-button").style.display = "none";
  // highlight-end
} else {
  // highlight-start
  // Nếu đã đăng nhập thì ẩn button Đăng nhập và Đăng ký
  document.getElementById("login-button").style.display = "none";
  document.getElementById("register-button").style.display = "none";
  // highlight-end
}
```

## API + Render HTML

:::danger
Chưa hoàn thiện 🚧
:::
