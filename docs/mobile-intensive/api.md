---
sidebar_position: 1
description: API là gì?
---

# API

## API là gì?

> **API** là viết tắt của Giao diện lập trình ứng dụng _**(Application Programming Interface)**_

**API** là một trung gian phần mềm cho phép hai ứng dụng giao tiếp với nhau. API có thể sử dụng cho web-based system, operating system, database system, computer hardware, hoặc software library.

### Ví dụ

API: https://pokeapi.co/api/v2/pokemon/ditto

#### Note

:::danger

Không phải API nào cũng cần key, nhưng nếu cần thì hãy đăng ký key để sử dụng API đó.

:::

### Cấu tạo API

> http://api.airvisual.com/v2/countries?key={{YOUR_API_KEY}}

- **http** là giao thức truyền tải dữ liệu
- **api.airvisual.com** là tên miền của api (có thể là IP) <=> địa chỉ IP tương ứng
- **/v2/countries** là đường dẫn
- **?key={{YOUR_API_KEY}}** là tham số truyền vào API (Query params)

#### Ở trong Thunkable

- API Url: http://api.airvisual.com/v2/countries (phần đăng trước dấu ?)
- Query Parameters: key={{YOUR_API_KEY}}&country=Vietnam

### Các phương thức gọi API

- **GET**: Lấy dữ liệu từ API
- **POST**: Tạo dữ liệu mới
- **PUT**: Cập nhật dữ liệu
- **DELETE**: Xóa dữ liệu

## JSON là gì?

> **JSON** là viết tắt của _**JavaScript Object Notation**_,

**JSON** là một kiểu định dạng dữ liệu tuân theo một quy tắc nhất định mà hầu hết mọi ngôn ngữ lập trình hiện nay đều có thể đọc được. **JSON** sử dụng các cặp key-value để lưu dữ liệu, khá tương đồng với **Object** trong Thunkable.

```json
// Object
{
    "name": "ditto",
    "weight": 40,
}

// List
[
    {
        "name": "ditto",
        "weight": 40,
    },
    {
        "name": "pikachu",
        "weight": 60,
    },
]

// Pokemon
{
    //  Giả sử gốc của JSON là `$`
    "name": "ditto", // $.name <=> getProperty("name")
    "weight": 40, // $.weight <=> getProperty("weight")
    "abilities": [
        {
            "ability": {
                "name": "limber", // $.abilities[1].ability.name <=> getProperty("abilities")[1].getProperty("ability").getProperty("name")
                "url": "https://pokeapi.co/api/v2/ability/7/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {...},
            "is_hidden": true,
            "slot": 3
        }
    ],
}
```
