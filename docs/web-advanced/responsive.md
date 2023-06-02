---
description: Responsive design trong thiết kế web
image: https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/02/css-breakpoints.webp
toc_max_heading_level: 6
---

# Responsive

## Responsive là gì?

Responsive là một khái niệm trong thiết kế web, nó có nghĩa là thiết kế web có thể thay đổi kích thước, vị trí, kiểu dáng, ... tùy theo kích thước màn hình của thiết bị mà người dùng đang sử dụng.

> Bài này tập trung vào 3 phần chính trong responsive là: **Media Queries**, **Responsive Layout** và **Responsive Images**. Media Queries là một cách để thiết lập các styles cho các thiết bị khác nhau, Responsive Layout thì đều là các thao tác tạo layout chúng ta vẫn thường xuyên làm và Responsive Images là một cách để hiển thị hình ảnh phù hợp với kích thước màn hình. Thường thì Media Queries sẽ được quan tâm nhiều, là phần chính sẽ được nói kĩ hơn trong khi Responsive Images thì ít được quan tâm hơn nhưng cũng rất quan trọng.

## Media Queries

:::danger
**Media Queries không thể viết được trong inline styles**
:::

Trước khi bắt đầu, đừng quên set meta viewport cho trang HTML (thông thường khi sử dụng Emmet `"!"` trong VSCode thì nó sẽ tự động thêm vào cho mình rồi, nếu không có thì cần tự thêm vào).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    // highlight-start
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    // highlight-end
    <title>Reponsive</title>
    ...
  </head>
  …
</html>
```

:::tip
Tham khảo thêm tại [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
:::

### Cú pháp

```css
@media media-type and (media-feature-rule) {
  /* CSS-Code */
}
```

Ví dụ

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

#### Media Type

Media Type là một cách để xác định loại thiết bị mà chúng ta muốn áp dụng CSS. Có 4 loại media type chính là:

- **all**: Tất cả các thiết bị
- **print**: Màn hình in
- **screen**: Màn hình
- **speech**: Các thiết bị đọc màn hình

#### Media Feature Rule

Media Feature Rule là một cách để xác định các đặc điểm của thiết bị mà chúng ta muốn áp dụng CSS. Có rất nhiều media feature rule, ở đây mình chỉ nói đến một số media feature rule thường được sử dụng nhất.

- **width**: Chiều rộng của thiết bị
- **height**: Chiều cao của thiết bị
- **orientation**: Hướng của thiết bị

### Các giá trị của Media Feature Rule

#### Width

- **min-width**: Chiều rộng tối thiểu của thiết bị
- **max-width**: Chiều rộng tối đa của thiết bị

#### Height

- **min-height**: Chiều cao tối thiểu của thiết bị
- **max-height**: Chiều cao tối đa của thiết bị

#### Orientation

- **orientation: portrait**: Thiết bị ở chế độ dọc
- **orientation: landscape**: Thiết bị ở chế độ ngang

### Một số ví dụ cơ bản

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu chiều rộng của thiết bị lớn hơn 600px thì nó sẽ áp dụng CSS cho body.

```css
@media screen and (min-width: 600px) and (max-width: 900px) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu chiều rộng của thiết bị lớn hơn 600px và nhỏ hơn 900px thì nó sẽ áp dụng CSS cho body.

```css
@media screen and (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu thiết bị ở chế độ dọc thì nó sẽ áp dụng CSS cho body.

```css
@media screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu thiết bị ở chế độ ngang thì nó sẽ áp dụng CSS cho body.

```css
@media screen and (min-width: 600px) and (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu chiều rộng của thiết bị lớn hơn 600px và thiết bị ở chế độ dọc thì nó sẽ áp dụng CSS cho body.

```css
@media (min-width: 600px), screen and (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}
```

Trong ví dụ trên, nếu chiều rộng của thiết bị lớn hơn 600px hoặc thiết bị ở chế độ dọc thì nó sẽ áp dụng CSS cho body.

### Breakpoints

Breakpoints là một cách để xác định các điểm dừng của thiết bị. Ví dụ như ở một số điểm nhất định nào đó, chiều rộng của thiết bị thay đổi, khi đó chúng ta sẽ coi như là đã vượt qua một mốc quy định và cần phải thay đổi CSS cho phù hợp với chiều rộng đó.

Breakpoint hay được sử dụng làm media feature rule trong media query. Mỗi khi trang web thay đổi kích cỡ vượt qua một breakpoint nào đó thì nó sẽ thay đổi CSS tương ứng. Ví dụ:

```css
body {
  background-color: pink;
}

@media screen and (min-width: 640px) {
  body {
    background-color: lightblue;
  }
}

@media screen and (min-width: 768px) {
  body {
    background-color: lightgreen;
  }
}

@media screen and (min-width: 1024px) {
  body {
    background-color: lightyellow;
  }
}

@media screen and (min-width: 1280px) {
  body {
    background-color: lightgray;
  }
}

@media screen and (min-width: 1440px) {
  body {
    background-color: lightcoral;
  }
}

/* Với mỗi lần vượt qua 1 breakpoint, body sẽ thay đổi màu nền */
```

Breakpoints có rất nhiều quy ước, ở đây sẽ nói đến một số quy ước thường được sử dụng nhất. Không nhất thiết 100% các trang web đều phải sử dụng các breakpoints này, mỗi trang web sẽ có một cách sử dụng breakpoints khác nhau tùy vào thiết kế của trang web đó.

#### Theo trình duyệt

Trình duyệt web như Chrome, Edge, ... quy định một số breakpoints như sau (có thể mở DevTools -> Toggle Device Emulation để xem chi tiết):

- **320px**: Mobile S
- **375px**: Mobile M
- **425px**: Mobile L
- **768px**: Tablet
- **1024px**: Laptop
- **1440px**: Laptop L
- **2560px**: 4K

> Ngoài ra trình duyệt còn có sẵn các profile (hoặc cho phép tạo các profile) tương ứng với nhiều loại điện thoại khác nhau như iPhone 5, iPhone 6, iPhone 6 Plus, ... và các loại máy tính bảng như iPad, iPad Pro, ...

#### Theo Bootstrap

Bootstrap quy định một số breakpoints như sau:

- **576px**: Extra small devices (portrait phones, less than 576px)
- **768px**: Small devices (landscape phones, 576px and up)
- **992px**: Medium devices (tablets, 768px and up)
- **1200px**: Large devices (desktops, 992px and up)
- **1400px**: Extra large devices (large desktops, 1200px and up)

#### Theo TailwindCSS

TailwindCSS quy định một số breakpoints như sau:

- **640px**: sm
- **768px**: md
- **1024px**: lg
- **1280px**: xl
- **1536px**: 2xl

### Mobile First

Mobile First là một cách tiếp cận thiết kế trang web bắt đầu từ thiết bị di động. Điều này có nghĩa là chúng ta sẽ thiết kế trang web cho thiết bị di động trước, sau đó mới thiết kế cho các thiết bị lớn hơn.

Nhìn vào ví dụ ở phần [Breakpoint](#breakpoints), ta sẽ style cho màn hình nhỏ trước, khi đến các độ lớn nhất định như `640px`, `768px` thì màu nền của body mới sẽ lại thay đổi

Mobile First đang dần trở thành một xu hướng thiết kế trang web, thay cho Desktop First. Vì hiện nay người dùng truy cập trang web từ thiết bị di động nhiều hơn là trên máy tính, nên việc thiết kế trang web cho thiết bị di động trước sẽ giúp trang web có trải nghiệm tốt hơn trên thiết bị di động và tiết kiệm thời gian hơn cho việc thiết kế.

## Responsive Layout

Bằng cách sử dụng những layout như grid, flex ta có thể responsive cho trang mà không cần đến quá nhiều breakpoints.

### Flex

Trong flexbox, sử dụng linh hoạt `flex-shrink`, `flex-basis` và `flex-grow` để thay đổi kích thước của các phần tử con một cách hợp lý để tạo được layout responsive.

:::tip
Tham khảo thêm tại [Flexbox: Flexible sizing of flex items](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items)
:::

### Grid

Grid là một cách để tạo layout cho trang web bằng cách chia trang thành các cột và hàng. Sử dụng đơn vị `fr` một cách hp lý để chia tỉ lệ cho các cột và hàng.

:::tip
Tham khảo thêm tại [Flexible grids with the fr unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit)
:::

### Multi-column Layout

Multi-column Layout là một cách để tạo layout cho trang web bằng cách chia trang thành nhiều cột. Multi-column Layout có thể được sử dụng để tạo layout cho trang web mà không cần đến grid hay flex.

:::tip
Tham khảo thêm tại [Using multi-column layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)
:::

## Responsive Images

`srcset` và `sizes` là hai thuộc tính của thẻ `<img>` được sử dụng để hiển thị hình ảnh phù hợp với kích thước màn hình.

- Thuộc tính `srcset` được sử dụng để chỉ định các hình ảnh khác nhau cho các kích thước màn hình khác nhau. Các hình ảnh được liệt kê trong thuộc tính `srcset` được phân tách bằng dấu phẩy. Mỗi hình ảnh được liệt kê trong `srcset` bao gồm một URL và một kích thước.
- Thuộc tính `sizes` được sử dụng để chỉ định kích thước của hình ảnh trên màn hình. Thuộc tính `sizes` có thể được sử dụng để chỉ định kích thước của hình ảnh trên màn hình, hoặc nó có thể được sử dụng để chỉ định kích thước của hình ảnh trên màn hình và kích thước của hình ảnh trên trang in.

```html
<img
  src="images/small.jpg"
  srcset="images/small.jpg 300w, images/medium.jpg 600w, images/large.jpg 900w"
  sizes="(max-width: 600px) 300px, 600px"
  alt="A rad wolf"
/>
```

Trong ví dụ trên, nếu chiều rộng của thiết bị nhỏ hơn 600px thì nó sẽ hiển thị hình ảnh `small.jpg`, nếu chiều rộng của thiết bị lớn hơn 600px thì nó sẽ hiển thị hình ảnh `medium.jpg`. Cụ thể hơn:

- Kiểm tra kích thước màn hình của thiết bị
- Nếu kích thước màn hình nhỏ hơn 600px thì chọn mốc 300px, nếu kích thước màn hình lớn hơn 600px thì chọn mốc 600px
- Hiển thị hình ảnh tương ứng với mốc đã chọn

:::tip
Tham khảo thêm tại [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
:::
