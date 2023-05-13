---
description: Làm quen với Git, Github và cách sử dụng cơ bản.
---

# Git và Github

## Git là gì

Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System - DVCS) được phát triển bởi Linus Torvalds vào năm 2005. Git là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay.

## Tại sao nên sử dụng Git

Git là một hệ thống quản lý phiên bản phân tán, nó có nhiều ưu điểm hơn so với hệ thống quản lý phiên bản tập trung (Centralized Version Control System - CVCS) như Subversion (SVN).

-   **Mỗi máy tính đều có một bản sao của toàn bộ kho mã nguồn**. Điều này có nghĩa là khi máy chủ chính bị hỏng, bạn có thể sử dụng bất kỳ bản sao nào để sao lưu lại dự án của mình.
-   **Các thao tác trên Git đều được thực hiện offline**. Điều này có nghĩa là bạn có thể làm việc mà không cần kết nối Internet. Sau khi bạn đã có một kho mã nguồn, bạn có thể làm việc trên đó mà không cần kết nối Internet.
-   **Các thao tác trên Git đều nhanh chóng**. Bạn có thể thực hiện các thao tác như commit, branch, merge, checkout, ... một cách nhanh chóng.
-   **Git có khả năng phân nhánh tốt**. Bạn có thể tạo nhiều nhánh để phát triển dự án mà không ảnh hưởng đến nhánh chính.
-   **Git có khả năng hợp nhất tốt**. Bạn có thể hợp nhất các nhánh lại với nhau một cách dễ dàng.
-   **Git có khả năng theo dõi lịch sử tốt**. Bạn có thể xem được lịch sử thay đổi của dự án.

## Cài đặt Git

Bạn có thể tải Git tại [https://git-scm.com/downloads](https://git-scm.com/downloads).

## Cấu hình Git

Sau khi cài đặt Git, bạn cần cấu hình Git để có thể sử dụng được Git.

```bash
# Cấu hình tên người dùng
git config --global user.name "user-name"

# Cấu hình email
git config --global user.email "your_email@example.com"
```

## Các khái niệm cơ bản

-   **Repository (Kho mã nguồn)**: Kho mã nguồn là nơi lưu trữ toàn bộ lịch sử thay đổi của dự án. Kho mã nguồn có thể được lưu trữ trên máy chủ hoặc trên máy tính cá nhân.
-   **Commit (Phiên bản)**: Mỗi lần thay đổi mã nguồn, bạn cần commit để lưu lại phiên bản hiện tại của mã nguồn. Mỗi commit sẽ có một mã hash duy nhất để phân biệt với các commit khác.
-   **Branch (Nhánh)**: Branch là một phiên bản của kho mã nguồn. Khi bạn muốn phát triển một tính năng mới, bạn có thể tạo một nhánh mới để phát triển tính năng đó mà không ảnh hưởng đến nhánh chính.
-   **Merge (Hợp nhất)**: Merge là thao tác hợp nhất các nhánh lại với nhau. Khi bạn đã hoàn thành tính năng mới, bạn có thể hợp nhất nhánh đó vào nhánh chính.
-   **Pull request (Yêu cầu hợp nhất)**: Pull request là một yêu cầu hợp nhất các nhánh lại với nhau. Khi bạn đã hoàn thành tính năng mới, bạn có thể tạo một pull request để yêu cầu hợp nhất nhánh đó vào nhánh chính.
-   **Fork (Nhân bản)**: Fork là một bản sao của kho mã nguồn. Khi bạn muốn đóng góp vào một dự án, bạn có thể fork dự án đó về tài khoản của mình và đóng góp vào dự án đó.
-   **Clone (Sao chép)**: Clone là một bản sao của kho mã nguồn. Khi bạn muốn làm việc với một dự án, bạn có thể clone dự án đó về máy tính của mình và làm việc với dự án đó.

> Local: là môi trường trên máy tính cá nhân. Remote: là môi trường trên máy chủ git (Github).

## Các thao tác cơ bản

### Init

```bash
git init
```

Thực hiện lệnh `git init` để khởi tạo một repo mới.

### Clone

```bash
git clone <url>
```

Thực hiện lệnh `git clone <url>` để clone một repo về máy tính.

### Add

```bash
git add <file>: Thêm file vào staging area
git add .: Thêm tất cả các file vào staging area
```

Thực hiện lệnh `git add <file>` để thêm file vào staging area.

### Commit

```bash
git commit -m "<message>"
```

Thực hiện lệnh `git commit -m "<message>"` để commit các file trong staging area.

### Push

```bash
git push origin <branch>
```

Thực hiện lệnh `git push origin <branch>` để đẩy các commit lên remote.

### Pull

```bash
git pull origin <branch>
```

Thực hiện lệnh `git pull origin <branch>` để kéo các commit về máy tính.

### Branch

```bash
git branch <branch>: Tạo một nhánh mới
git branch: Liệt kê các nhánh hiện tại
git branch -d <branch>: Xóa một nhánh
```

Thực hiện lệnh `git branch <branch>` để tạo một nhánh mới.

### Checkout

```bash
git checkout <branch>: Chuyển sang một nhánh khác
git checkout -b <branch>: Tạo một nhánh mới và chuyển sang nhánh mới
```

Thực hiện lệnh `git checkout <branch>` để chuyển sang một nhánh khác.

### Merge

```bash
git merge <branch>: Hợp nhất một nhánh vào nhánh hiện tại
```

Thực hiện lệnh `git merge <branch>` để hợp nhất một nhánh vào nhánh hiện tại.

### Pull request

```bash
git pull-request: Tạo một pull request
```

Thực hiện lệnh `git pull-request` để tạo một pull request.

### Fetch

```bash
git fetch: Lấy các commit mới nhất về máy tính
```

Thực hiện lệnh `git fetch` để lấy các commit mới nhất về máy tính.

### Rebase

```bash
git rebase <branch>: Hợp nhất các commit của nhánh hiện tại vào nhánh khác
```

Thực hiện lệnh `git rebase <branch>` để hợp nhất các commit của nhánh hiện tại vào nhánh khác.

### Reset

```bash
git reset <commit>: Quay lại một commit trước đó
```

Thực hiện lệnh `git reset <commit>` để quay lại một commit trước đó.

### Revert

```bash
git revert <commit>: Tạo một commit mới để quay lại một commit trước đó
```

Thực hiện lệnh `git revert <commit>` để tạo một commit mới để quay lại một commit trước đó.

## Github

Github là một dịch vụ lưu trữ mã nguồn trực tuyến. Github cung cấp các tính năng như quản lý phiên bản, theo dõi lịch sử thay đổi, hợp nhất các nhánh, ... Github cũng cung cấp các tính năng như quản lý issue, pull request, project, ... Github cũng cung cấp các tính năng như quản lý issue, pull request, project, ...

### Tạo một repo mới

Bạn có thể tạo một repo mới bằng cách thực hiện các bước sau:

1.  Đăng nhập vào Github.
2.  Nhấn vào nút `New` để tạo một repo mới.
3.  Đặt tên cho repo.
4.  Chọn `Public` hoặc `Private`.
5.  Có thể chọn `Initialize this repository with a README` để tạo sẵn file README.
6.  Nhấn vào nút `Create repository`.

### Clone một repo

Bạn có thể clone một repo bằng cách thực hiện các bước sau:

1.  Đăng nhập vào Github.
2.  Nhấn vào repo cần clone.
3.  Nhấn vào nút `Code`.
4.  Chọn `HTTPS` hoặc `SSH`.
5.  Copy đường dẫn.
6.  Mở terminal và thực hiện lệnh `git clone <url>`.
7.  Nhập username và password (thường chỉ có lần đầu tiên là phải nhập).

### Quy trình làm việc cơ bản

Bạn có thể thực hiện các bước sau để làm việc với một repo:

1.  Clone repo về máy tính (chỉ làm 1 lần duy nhất).

    ```bash
    git clone <url>
    ```

2.  Pull code từ nhánh đang làm việc về.

    ```bash
    git pull origin <branch>
    ```

3.  Thực hiện các thao tác thêm, sửa, xóa file.
4.  Thực hiện lệnh `git add <file>` để thêm file vào staging area.

    ```bash
    git add <file>
    git add . # (thêm nhanh tất cả các file)
    ```

5.  Thực hiện lệnh `git commit -m "<message>"` để commit các file trong staging area.

    ```bash
    git commit -m "<message>"
    ```

6.  Thực hiện lệnh `git push origin <branch>` để đẩy các commit lên remote.

    ```bash
    git push origin <branch>
    ```

:::tip
Trên đây là quy trình làm việc cơ bản trên 1 branch, nếu có nhiều branch thì sẽ cần có thêm các thao tác merge, rebase, pull request, ...
:::

## Github Desktop

Github Desktop là một ứng dụng giúp bạn làm việc với Github trên máy tính một cách dễ dàng. Bạn có thể tải Github Desktop tại [https://desktop.github.com/](https://desktop.github.com/).

### Cài đặt Github Desktop

Sau khi tải Github Desktop về, bạn có thể cài đặt Github Desktop bằng cách thực hiện các bước sau:

1.  Mở file cài đặt.
2.  Nhấn vào nút `Install`.
3.  Nhấn vào nút `Sign in with your browser`.
4.  Đăng nhập vào Github.
5.  Nhấn vào nút `Authorize Github Desktop`.
6.  Nhấn vào nút `Continue`.
7.  Nhấn vào nút `Install`.
8.  Nhấn vào nút `Finish`.

### Cấu hình Github Desktop

Sau khi cài đặt Github Desktop, bạn cần cấu hình Github Desktop để có thể sử dụng được Github Desktop.

1.  Mở Github Desktop.
2.  Nhấn vào nút `Sign in with your browser`.
3.  Đăng nhập vào Github.
4.  Nhấn vào nút `Authorize Github Desktop`.
5.  Nhấn vào nút `Continue`.
6.  Nhấn vào nút `Install`.
7.  Nhấn vào nút `Finish`.

### Tạo một repo mới

Bạn có thể tạo một repo mới bằng cách thực hiện các bước sau:

1.  Mở Github Desktop.
2.  Nhấn vào nút `Create a New Repository on your hard drive`.
3.  Đặt tên cho repo.
4.  Chọn đường dẫn lưu trữ repo.
5.  Nhấn vào nút `Create Repository`.

### Clone một repo

Bạn có thể clone một repo bằng cách thực hiện các bước sau:

1.  Mở Github Desktop.
2.  Nhấn vào nút `Add`.
3.  Chọn `Clone`.
4.  Chọn repo cần clone.
5.  Chọn đường dẫn lưu trữ repo.
6.  Nhấn vào nút `Clone`.

### Quy trình làm việc cơ bản

Các thao tác trong Github Desktop đều thực hiện trên GUI rất rõ ràng, quy trình làm việc không khác gì so với sử dụng CLI.
