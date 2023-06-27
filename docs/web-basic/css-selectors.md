---
description: Selectors trong CSS
image: https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/hFR4OOwyH5zWc5XUIcyu.svg
toc_max_heading_level: 6
sidebar_position: 2
---

# CSS Selectors

## Selector là gì?

- Selector là một cách để chọn phần tử HTML mà bạn muốn áp dụng CSS style.
- Selector có thể là tên thẻ HTML, class, id, hoặc bất kỳ thuộc tính nào của phần tử HTML.
- Selector có thể được sử dụng để chọn một phần tử duy nhất hoặc nhiều phần tử cùng lúc.

## Các loại Selector cơ bản

### Selector dựa trên tên thẻ HTML

**Cú pháp:** `tên_thẻ { thuộc_tính: giá_trị; }`

Selector dựa trên tên thẻ HTML được sử dụng để chọn tất cả các phần tử có tên thẻ HTML đó. Ví dụ:

```css
p {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử `<p>` sẽ có màu chữ là màu đỏ.

### Selector dựa trên class

**Cú pháp:** `.tên_class { thuộc_tính: giá_trị; }`

Selector dựa trên class được sử dụng để chọn tất cả các phần tử có class đó. Ví dụ:

```css
.red {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử có class là `red` sẽ có màu chữ là màu đỏ.

### Selector dựa trên id

**Cú pháp:** `#tên_id { thuộc_tính: giá_trị; }`

Selector dựa trên id được sử dụng để chọn phần tử có id đó. Ví dụ:

```css
#red {
  color: red;
}
```

Ở ví dụ trên, phần tử có id là `red` sẽ có màu chữ là màu đỏ.

### Selector dựa trên thuộc tính

Cú pháp: `[tên_thuộc_tính] { thuộc_tính: giá_trị; }` | `[tên_thuộc_tính="giá_trị"] { thuộc_tính: giá_trị; }`

Selector dựa trên thuộc tính được sử dụng để chọn tất cả các phần tử có thuộc tính đó. Ví dụ:

```css
[type] {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử có thuộc tính `type` sẽ có màu chữ là màu đỏ.

```css
[type="text"] {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử có thuộc tính `type` có giá trị là `text` sẽ có màu chữ là màu đỏ.

## Kết hợp các loại Selector

Có thể kết hợp các loại selector lại với nhau để chọn phần tử cần thiết. Ví dụ:

```css
p.red {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử `<p>` có class là `red` sẽ có màu chữ là màu đỏ.

```css
p#red {
  color: red;
}
```

Ở ví dụ trên, phần tử `<p>` có id là `red` sẽ có màu chữ là màu đỏ.

```css
p[type="text"] {
  color: red;
}
```

Ở ví dụ trên, tất cả các phần tử `<p>` có thuộc tính `type` có giá trị là `text` sẽ có màu chữ là màu đỏ.

:::danger
**Lưu ý**: Selector theo tên thẻ phải đứng trước selector theo class, id, thuộc tính.
:::
