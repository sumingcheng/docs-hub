---
authors: sumingcheng
---
# Go 使用 ORM 插入一个 NULL 值



 **Link:** [https://zhuanlan.zhihu.com/p/720033268]

## 使用sql.NullXXX这一家族类  

定义了一个`User`结构体，其中手机号和邮箱字段被定义为`sql.NullString`。这允许它们接收来自数据库的NULL值，`Valid`字段用于检查值是否为NULL，如果不为NULL，可以安全地访问`String`字段。

```
package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

type User struct {
    ID          int
    PhoneNumber sql.NullString  // 使用 sql.NullString 来处理可能为 NULL 的手机号
    Email       sql.NullString  // 使用 sql.NullString 来处理可能为 NULL 的邮箱
}

func main() {
    // 假设这是数据库连接字符串
    db, err := sql.Open("mysql", "user:password@/dbname")
    if err != nil {
        panic(err)
    }
    defer db.Close()

    // 查询数据库
    rows, err := db.Query("SELECT id, phone_number, email FROM users")
    if err != nil {
        panic(err)
    }
    defer rows.Close()

    for rows.Next() {
        var user User
        // 使用 Scan 时，确保对应的字段可以接收 sql.NullString
        if err := rows.Scan(&user.ID, &user.PhoneNumber, &user.Email); err != nil {
            panic(err)
        }
        
        // 打印结果，如果字段为NULL，则显示为 "NULL"
        fmt.Printf("ID: %d, Phone: %s, Email: %s\n",
            user.ID,
            if user.PhoneNumber.Valid { user.PhoneNumber.String } else { "NULL" },
            if user.Email.Valid { user.Email.String } else { "NULL" },
        )
    }
}

```
## 使用指针  

你在Go中使用指针来处理可能为NULL的数据库字段时，每次访问这些字段的值时确实需要解引用。

```
package main

import (
    "fmt"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

type User struct {
    ID          uint
    PhoneNumber *string  // 使用指针允许手机号为 NULL
    Email       *string  // 使用指针允许邮箱为 NULL
}

func main() {
    // 假设这是连接数据库的DSN（数据源名）
    dsn := "user:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

    // 查询所有用户
    var users []User
    result := db.Find(&users)
    if result.Error != nil {
        panic(result.Error)
    }

    // 打印用户信息
    for _, user := range users {
        fmt.Printf("ID: %d, Phone: %v, Email: %v\n", user.ID, user.PhoneNumber, user.Email)
    }
}

```
