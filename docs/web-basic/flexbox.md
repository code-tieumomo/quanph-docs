---
description: Flexbox trong CSS
image: https://images.viblo.asia/0c116fbb-972d-4162-8506-bac8605cd704.png
toc_max_heading_level: 6
sidebar_position: 3
---

# Flexbox

> Flexbox là một module của CSS3 giúp xây dựng layout linh hoạt và dễ dàng hơn. Flexbox được thiết kế để giải quyết các vấn đề về layout mà các module trước đó như Float và Position không thể giải quyết được.

## Khái niệm

- **Flex Container**: Là **1 element** (có thể chứa các element con) được thiết lập thuộc tính `display: flex` hoặc `display: inline-flex`.
- **Flex Items**: Là các **element con** của **Flex Container**.

Flexbox cho phép **Flex Container** sắp xếp, điều chỉnh kích cỡ của các **Flex Items** để có thể đáp ứng với mọi kích thước màn hình. Flexbox là một module (tập hợp của rất nhiều các thuộc tính CSS), một số thuộc tính sẽ được dùng cho **Flex Container** và một số khác dùng cho **Flex Items**.

Các element, layout thông thường dựa trên 2 khái niệm là **block** và **inline**, trong khi đó Flexbox dựa trên **flex-direction** với 2 hướng chính là **row (hàng ngang)** và **column (hàng dọc)**. Dựa vào **flex-direction** ta có các khái niệm sau:

![flexbox](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

- **main axis**: Là trục theo hướng mà các flex item được sắp xếp theo (cũng chính là hướng của **flex-direction**), có thể là **row** hoặc **column**.
- **main start**, **main end**: Là điểm bắt đầu và kết thúc của **main axis**. Các element con bên trong flexbox sẽ được sắp xếp bắt đầu từ **main start** và kết thúc ở **main end**.
- **main size**: Là kích thước của flex item theo hướng **main axis**.
- **cross axis**: Là trục vuông góc với **main axis**.
- **cross start**, **cross end**: Là điểm bắt đầu và kết thúc của **cross axis**. Các element con bên trong flexbox sẽ được sắp xếp bắt đầu từ **cross start**.
- **cross size**: Là kích thước của flex item theo hướng **cross axis**.

## Các thuộc tính của Flexbox

![flexbox-properties](https://dev-to-uploads.s3.amazonaws.com/i/gv3jyh4xt4fbwtq1qejn.png)

### Thuộc tính của Flex Container

![flexbox-container](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

Trước hết, để trở thành 1 flexbox, element phải được thiết lập thuộc tính `display: flex` hoặc `display: inline-flex`.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
}
```

#### `flex-direction`

![flex-direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

Thuộc tính `flex-direction` quy định hướng của **main axis**, cũng là hướng mà các flex item được sắp xếp theo. Có 4 giá trị của thuộc tính này:

- `row`: Các flex item được sắp xếp theo hướng từ trái sang phải (hoặc từ phải sang trái nếu có thuộc tính `direction: rtl`). <span className="badge badge--danger">Mặc định</span>
- `row-reverse`: Các flex item được sắp xếp theo hướng từ phải sang trái (hoặc từ trái sang phải nếu có thuộc tính `direction: rtl`).
- `column`: Các flex item được sắp xếp theo hướng từ trên xuống dưới.
- `column-reverse`: Các flex item được sắp xếp theo hướng từ dưới lên trên.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  flex-direction: row;
}
```

:::danger

Flexbox sắp xếp các flex item theo một hướng

:::

#### `flex-wrap`

![flex-wrap](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

Mặc định, các flex item sẽ được cố sắp xếp trên cùng 1 hàng (hoặc 1 cột nếu `flex-direction: column`). Thuộc tính `flex-wrap` quy định các flex item có được phép xuống dòng nếu không còn chỗ hay không. Có 3 giá trị của thuộc tính này:

- `nowrap`: Các flex item sẽ không được phép xuống dòng. <span className="badge badge--danger">Mặc định</span>
- `wrap`: Các flex item được phép xuống dòng.
- `wrap-reverse`: Các flex item được phép xuống dòng, nhưng xuống dòng theo hướng ngược lại.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  flex-wrap: wrap;
}
```

#### `flex-flow`

Thuộc tính `flex-flow` là sự kết hợp của 2 thuộc tính `flex-direction` và `flex-wrap`. Giá trị đầu tiên của `flex-flow` sẽ là giá trị của `flex-direction`, giá trị thứ 2 sẽ là giá trị của `flex-wrap`. Giá trị thứ 2 có thể bỏ qua, và giá trị mặc định của `flex-flow` là `row nowrap`.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  flex-flow: row wrap;
}
```

#### `justify-content`

![justify-content](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

Thuộc tính `justify-content` quy định cách các flex item được căn chỉnh theo **main axis**. Các giá trị của thuộc tính này:

- `flex-start`: Các flex item được căn chỉnh về phía **main start**. <span className="badge badge--danger">Mặc định</span>
- `flex-end`: Các flex item được căn chỉnh về phía **main end**.
- `center`: Các flex item được căn chỉnh về phía giữa.
- `space-between`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau.
- `space-around`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau, và khoảng cách của flex item đầu tiên và cuối cùng với các flex item bên ngoài là 1 nửa khoảng cách của các flex item với nhau.
- `space-evenly`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau, và khoảng cách của flex item đầu tiên và cuối cùng với các flex item bên ngoài là bằng khoảng cách của các flex item với nhau.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  justify-content: center;
}
```

#### `align-items`

![align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

Thuộc tính `align-items` quy định cách các flex item được căn chỉnh theo **cross axis**. Các giá trị của thuộc tính này:

- `stretch`: Các flex item được căn chỉnh lấp đầy container (vẫn giữ `min-width`, `max-width`). <span className="badge badge--danger">Mặc định</span>
- `flex-start`: Các flex item được căn chỉnh về phía **cross start**.
- `flex-end`: Các flex item được căn chỉnh về phía **cross end**.
- `center`: Các flex item được căn chỉnh về phía giữa.
- `baseline`: Các flex item được căn chỉnh sao cho baseline của chúng bằng nhau.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  align-items: center;
}
```

#### `align-content`

![align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

Thuộc tính `align-content` quy định cách các flex item được căn chỉnh theo **cross axis** khi chúng xuống dòng. Các giá trị của thuộc tính này:

- `stretch`: Các flex item tự mở rộng và chiếm lấy toàn bộ khoảng trống. <span className="badge badge--danger">Mặc định</span>
- `flex-start`: Các flex item được căn chỉnh về phía **cross start**.
- `flex-end`: Các flex item được căn chỉnh về phía **cross end**.
- `center`: Các flex item được căn chỉnh về phía giữa.
- `space-between`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau.
- `space-around`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau, và khoảng cách của flex item đầu tiên và cuối cùng với các flex item bên ngoài là 1 nửa khoảng cách của các flex item với nhau.
- `space-evenly`: Các flex item được căn chỉnh sao cho khoảng cách giữa chúng bằng nhau, và khoảng cách của flex item đầu tiên và cuối cùng với các flex item bên ngoài là bằng khoảng cách của các flex item với nhau.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  align-content: center;
}
```

#### `gap`, `row-gap`, `column-gap`

![gap](https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg)

Thuộc tính `gap` là sự kết hợp của 2 thuộc tính `row-gap` và `column-gap`. Giá trị đầu tiên của `gap` sẽ là giá trị của `row-gap`, giá trị thứ 2 sẽ là giá trị của `column-gap`. Giá trị thứ 2 có thể bỏ qua (khi đó sẽ áp dụng giá trị đầu tiên cho cả `row-gap` và `column-gap`), và giá trị mặc định của `gap` là `0`.

```css
/* <div class="container">...</div> */
.container {
  display: flex;
  gap: 10px;
}
```

### Thuộc tính của Flex Items

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

#### `order`

![order](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

Thuộc tính `order` quy định thứ tự hiển thị của flex item. Giá trị của thuộc tính này là một số nguyên, và giá trị mặc định là `0`. Các flex item sẽ được sắp xếp theo thứ tự tăng dần của giá trị `order`. Các flex item có cùng giá trị `order` sẽ được sắp xếp theo thứ tự xuất hiện trong DOM.

```css {6,10,14}
.container {
  display: flex;
}

.item:nth-child(1) {
  order: 3;
}

.item:nth-child(2) {
  order: 1;
}

.item:nth-child(3) {
  order: 2;
}
```

#### `flex-grow`

![flex-grow](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

Thuộc tính `flex-grow` quy định tỉ lệ phần trăm mà flex item sẽ mở rộng để lấp đầy khoảng trống còn lại của container. Giá trị của thuộc tính này là một số nguyên, và giá trị mặc định là `0` (không mở rộng). Các flex item sẽ được mở rộng theo tỉ lệ của giá trị `flex-grow` của chúng.

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex-grow: 1;
}

.item:nth-child(2) {
  flex-grow: 2;
}

.item:nth-child(3) {
  flex-grow: 3;
}
```

#### `flex-shrink`

![flex-shrink](https://css-tricks.com/wp-content/uploads/2018/10/flex-shrink.svg)

Thuộc tính `flex-shrink` quy định tỉ lệ phần trăm mà flex item sẽ co lại để lấp đầy khoảng trống còn lại của container. Giá trị của thuộc tính này là một số nguyên, và giá trị mặc định là `1` (co lại theo tỉ lệ của giá trị `flex-grow`). Các flex item sẽ được co lại theo tỉ lệ của giá trị `flex-shrink` của chúng.

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex-shrink: 1;
}

.item:nth-child(2) {
  flex-shrink: 2;
}

.item:nth-child(3) {
  flex-shrink: 3;
}
```

#### `flex-basis`

![flex-basis](https://css-tricks.com/wp-content/uploads/2018/10/flex-basis.svg)

Thuộc tính `flex-basis` quy định kích thước của flex item. Giá trị của thuộc tính này là một số nguyên, và giá trị mặc định là `auto` (kích thước của flex item sẽ được tính toán dựa trên nội dung của nó). Các flex item sẽ có kích thước bằng nhau nếu chúng có cùng giá trị `flex-basis`.

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex-basis: 100px;
}

.item:nth-child(2) {
  flex-basis: 200px;
}

.item:nth-child(3) {
  flex-basis: 300px;
}
```

#### `flex`

Thuộc tính `flex` là sự kết hợp của 3 thuộc tính `flex-grow`, `flex-shrink` và `flex-basis`. Giá trị đầu tiên của `flex` sẽ là giá trị của `flex-grow`, giá trị thứ 2 sẽ là giá trị của `flex-shrink`, và giá trị thứ 3 sẽ là giá trị của `flex-basis`. Giá trị thứ 2 và thứ 3 có thể bỏ qua (khi đó sẽ áp dụng giá trị mặc định cho chúng), và giá trị mặc định của `flex` là `0 1 auto`.

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex: 1;
}

.item:nth-child(2) {
  flex: 2;
}

.item:nth-child(3) {
  flex: 3;
}
```
