"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["91274"],{37216:function(n,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return a}});var s=r(80471),t=r(85893),i=r(50065);let l={slug:"go-\u4F7F\u7528-orm-\u63D2\u5165\u4E00\u4E2A-null-\u503C",title:"Go \u4F7F\u7528 ORM \u63D2\u5165\u4E00\u4E2A NULL \u503C",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-09-13T00:00:00.000Z")},o="Go \u4F7F\u7528 ORM \u63D2\u5165\u4E00\u4E2A NULL \u503C",u={authorsImageUrls:[void 0]},a=[{value:"\u4F7F\u7528 sql.NullXXX \u8FD9\u4E00\u5BB6\u65CF\u7C7B",id:"\u4F7F\u7528-sqlnullxxx-\u8FD9\u4E00\u5BB6\u65CF\u7C7B",level:2},{value:"\u4F7F\u7528\u6307\u9488",id:"\u4F7F\u7528\u6307\u9488",level:2}];function c(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u4F7F\u7528-sqlnullxxx-\u8FD9\u4E00\u5BB6\u65CF\u7C7B",children:"\u4F7F\u7528 sql.NullXXX \u8FD9\u4E00\u5BB6\u65CF\u7C7B"}),"\n",(0,t.jsxs)(e.p,{children:["\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,t.jsx)(e.code,{children:"User"}),"\u7ED3\u6784\u4F53\uFF0C\u5176\u4E2D\u624B\u673A\u53F7\u548C\u90AE\u7BB1\u5B57\u6BB5\u88AB\u5B9A\u4E49\u4E3A",(0,t.jsx)(e.code,{children:"sql.NullString"}),"\u3002\u8FD9\u5141\u8BB8\u5B83\u4EEC\u63A5\u6536\u6765\u81EA\u6570\u636E\u5E93\u7684 NULL \u503C\uFF0C",(0,t.jsx)(e.code,{children:"Valid"}),"\u5B57\u6BB5\u7528\u4E8E\u68C0\u67E5\u503C\u662F\u5426\u4E3A NULL\uFF0C\u5982\u679C\u4E0D\u4E3A NULL\uFF0C\u53EF\u4EE5\u5B89\u5168\u5730\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"String"}),"\u5B57\u6BB5\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'package main\n\nimport (\n    "database/sql"\n    "fmt"\n    _ "github.com/go-sql-driver/mysql"\n)\n\ntype User struct {\n    ID          int\n    PhoneNumber sql.NullString  // \u4F7F\u7528 sql.NullString \u6765\u5904\u7406\u53EF\u80FD\u4E3A NULL \u7684\u624B\u673A\u53F7\n    Email       sql.NullString  // \u4F7F\u7528 sql.NullString \u6765\u5904\u7406\u53EF\u80FD\u4E3A NULL \u7684\u90AE\u7BB1\n}\n\nfunc main() {\n    // \u5047\u8BBE\u8FD9\u662F\u6570\u636E\u5E93\u8FDE\u63A5\u5B57\u7B26\u4E32\n    db, err := sql.Open("mysql", "user:password@/dbname")\n    if err != nil {\n        panic(err)\n    }\n    defer db.Close()\n\n    // \u67E5\u8BE2\u6570\u636E\u5E93\n    rows, err := db.Query("SELECT id, phone_number, email FROM users")\n    if err != nil {\n        panic(err)\n    }\n    defer rows.Close()\n\n    for rows.Next() {\n        var user User\n        // \u4F7F\u7528 Scan \u65F6\uFF0C\u786E\u4FDD\u5BF9\u5E94\u7684\u5B57\u6BB5\u53EF\u4EE5\u63A5\u6536 sql.NullString\n        if err := rows.Scan(&user.ID, &user.PhoneNumber, &user.Email); err != nil {\n            panic(err)\n        }\n\n        // \u6253\u5370\u7ED3\u679C\uFF0C\u5982\u679C\u5B57\u6BB5\u4E3ANULL\uFF0C\u5219\u663E\u793A\u4E3A "NULL"\n        fmt.Printf("ID: %d, Phone: %s, Email: %s\\n",\n            user.ID,\n            if user.PhoneNumber.Valid { user.PhoneNumber.String } else { "NULL" },\n            if user.Email.Valid { user.Email.String } else { "NULL" },\n        )\n    }\n}\n\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u6307\u9488",children:"\u4F7F\u7528\u6307\u9488"}),"\n",(0,t.jsx)(e.p,{children:"\u4F60\u5728 Go \u4E2D\u4F7F\u7528\u6307\u9488\u6765\u5904\u7406\u53EF\u80FD\u4E3A NULL \u7684\u6570\u636E\u5E93\u5B57\u6BB5\u65F6\uFF0C\u6BCF\u6B21\u8BBF\u95EE\u8FD9\u4E9B\u5B57\u6BB5\u7684\u503C\u65F6\u786E\u5B9E\u9700\u8981\u89E3\u5F15\u7528\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "gorm.io/driver/mysql"\n    "gorm.io/gorm"\n)\n\ntype User struct {\n    ID          uint\n    PhoneNumber *string  // \u4F7F\u7528\u6307\u9488\u5141\u8BB8\u624B\u673A\u53F7\u4E3A NULL\n    Email       *string  // \u4F7F\u7528\u6307\u9488\u5141\u8BB8\u90AE\u7BB1\u4E3A NULL\n}\n\nfunc main() {\n    // \u5047\u8BBE\u8FD9\u662F\u8FDE\u63A5\u6570\u636E\u5E93\u7684DSN\uFF08\u6570\u636E\u6E90\u540D\uFF09\n    dsn := "user:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"\n    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})\n    if err != nil {\n        panic("failed to connect database")\n    }\n\n    // \u67E5\u8BE2\u6240\u6709\u7528\u6237\n    var users []User\n    result := db.Find(&users)\n    if result.Error != nil {\n        panic(result.Error)\n    }\n\n    // \u6253\u5370\u7528\u6237\u4FE1\u606F\n    for _, user := range users {\n        fmt.Printf("ID: %d, Phone: %v, Email: %v\\n", user.ID, user.PhoneNumber, user.Email)\n    }\n}\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},50065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return l}});var s=r(67294);let t={},i=s.createContext(t);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}},80471:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u4F7F\u7528-orm-\u63D2\u5165\u4E00\u4E2A-null-\u503C","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-09-13-Go_\u4F7F\u7528_ORM_\u63D2\u5165\u4E00\u4E2A_NULL_\u503C.md","source":"@site/blog/\u540E\u7AEF/2024-09-13-Go_\u4F7F\u7528_ORM_\u63D2\u5165\u4E00\u4E2A_NULL_\u503C.md","title":"Go \u4F7F\u7528 ORM \u63D2\u5165\u4E00\u4E2A NULL \u503C","description":"\u4F7F\u7528 sql.NullXXX \u8FD9\u4E00\u5BB6\u65CF\u7C7B","date":"2024-09-13T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.4233333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u4F7F\u7528-orm-\u63D2\u5165\u4E00\u4E2A-null-\u503C","title":"Go \u4F7F\u7528 ORM \u63D2\u5165\u4E00\u4E2A NULL \u503C","authors":["sumingcheng"],"tags":["backend"],"date":"2024-09-13T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u7CFB\u7EDF\u4E2D \u6240\u6709\u6743Ownership\u548C\u64CD\u4F5C\u6743Permissions","permalink":"/docs-hub/blog/linux-\u7CFB\u7EDF\u4E2D-\u6240\u6709\u6743ownership\u548C\u64CD\u4F5C\u6743permissions"},"nextItem":{"title":"Docker DanglingUnused  Images","permalink":"/docs-hub/blog/docker-danglingunused--images"}}')}}]);