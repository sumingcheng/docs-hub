"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["51075"],{97204:function(e,n,i){i.r(n),i.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return a}});var r=i(66291),s=i(85893),t=i(50065);let o={slug:"go-\u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91",title:"Go \u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91",authors:["sumingcheng"],tags:["performance-architecture"],date:new Date("2024-11-02T00:00:00.000Z")},c="Go \u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91",d={authorsImageUrls:[void 0]},a=[{value:"\u660E\u786E\u7CFB\u7EDF\u76EE\u6807\u548C\u529F\u80FD",id:"\u660E\u786E\u7CFB\u7EDF\u76EE\u6807\u548C\u529F\u80FD",level:3},{value:"\u786E\u5B9A\u4E3B\u8981\u7EC4\u4EF6",id:"\u786E\u5B9A\u4E3B\u8981\u7EC4\u4EF6",level:3},{value:"\u5B9A\u4E49\u6838\u5FC3\u63A5\u53E3",id:"\u5B9A\u4E49\u6838\u5FC3\u63A5\u53E3",level:3},{value:"\u5B9E\u73B0\u5177\u4F53\u529F\u80FD",id:"\u5B9E\u73B0\u5177\u4F53\u529F\u80FD",level:3},{value:"\u5B9E\u73B0\u4E3B\u7A0B\u5E8F\u903B\u8F91",id:"\u5B9E\u73B0\u4E3B\u7A0B\u5E8F\u903B\u8F91",level:3},{value:"\u5B9E\u73B0",id:"\u5B9E\u73B0",level:2},{value:"main.go",id:"maingo",level:3},{value:"config.go",id:"configgo",level:3},{value:"message_sender.go",id:"message_sendergo",level:3},{value:"notification_service.go",id:"notification_servicego",level:3},{value:"senders.go",id:"sendersgo",level:3}];function l(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5DF2\u5B8C\u6210\u4E00\u4E2A\u6D88\u606F\u901A\u77E5\u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u8FD9\u91CC\u81EA\u4E0A\u800C\u4E0B\u7684\u601D\u8003\u6B65\u9AA4\u5982\u4E0B"}),"\n",(0,s.jsx)(n.h3,{id:"\u660E\u786E\u7CFB\u7EDF\u76EE\u6807\u548C\u529F\u80FD",children:"\u660E\u786E\u7CFB\u7EDF\u76EE\u6807\u548C\u529F\u80FD"}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u6807\uFF1A\u521B\u5EFA\u4E00\u4E2A\u7075\u6D3B\u7684\u901A\u77E5\u7CFB\u7EDF\uFF0C\u80FD\u591F\u901A\u8FC7\u4E0D\u540C\u7684\u65B9\u5F0F\uFF08\u5982\u7535\u5B50\u90AE\u4EF6\u548C\u77ED\u4FE1\u7B49\uFF09\u53D1\u9001\u901A\u77E5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u529F\u80FD\uFF1A\u7CFB\u7EDF\u5E94\u652F\u6301\u53D1\u9001\u901A\u77E5\u3001\u7BA1\u7406\u914D\u7F6E\u3001\u9009\u62E9\u6D88\u606F\u53D1\u9001\u65B9\u5F0F\u7B49\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u786E\u5B9A\u4E3B\u8981\u7EC4\u4EF6",children:"\u786E\u5B9A\u4E3B\u8981\u7EC4\u4EF6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"main"}),"\uFF1A\u5165\u53E3\u70B9\uFF0C\u8D1F\u8D23\u914D\u7F6E\u548C\u542F\u52A8\u670D\u52A1\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NotificationService"}),"\uFF1A\u8D1F\u8D23\u53D1\u9001\u901A\u77E5\u7684\u6838\u5FC3\u903B\u8F91\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MessageSender"})," \u63A5\u53E3\u53CA\u5176\u5B9E\u73B0\uFF1A\u5B9A\u4E49\u548C\u5B9E\u73B0\u4E0D\u540C\u7684\u6D88\u606F\u53D1\u9001\u65B9\u5F0F\uFF08\u5982 ",(0,s.jsx)(n.code,{children:"EmailSender"})," \u548C ",(0,s.jsx)(n.code,{children:"SmsSender"}),"\uFF09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Config"})," \u7ED3\u6784\u4F53\uFF1A\u7BA1\u7406\u548C\u5B58\u50A8\u914D\u7F6E\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5B9A\u4E49\u6838\u5FC3\u63A5\u53E3",children:"\u5B9A\u4E49\u6838\u5FC3\u63A5\u53E3"}),"\n",(0,s.jsxs)(n.p,{children:["\u786E\u5B9A ",(0,s.jsx)(n.code,{children:"MessageSender"})," \u63A5\u53E3\uFF0C\u5B83\u5E94\u8BE5\u5305\u542B ",(0,s.jsx)(n.code,{children:"Send(message string) error"})," \u65B9\u6CD5\u3002\u8FD9\u4E2A\u63A5\u53E3\u4E3A\u540E\u7EED\u5177\u4F53\u5B9E\u73B0\u63D0\u4F9B\u4E86\u57FA\u7840\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5B9E\u73B0\u5177\u4F53\u529F\u80FD",children:"\u5B9E\u73B0\u5177\u4F53\u529F\u80FD"}),"\n",(0,s.jsx)(n.p,{children:"\u5F00\u59CB\u5B9E\u73B0\u5177\u4F53\u7684\u529F\u80FD\u6A21\u5757"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u914D\u7F6E\u7BA1\u7406"}),"\uFF1A\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"Config"})," \u7ED3\u6784\u4F53\u548C\u76F8\u5E94\u7684\u65B9\u6CD5\u6765\u8BFB\u53D6\u548C\u7BA1\u7406\u914D\u7F6E\u4FE1\u606F\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6D88\u606F\u53D1\u9001\u5B9E\u73B0"}),"\uFF1A\u5B9E\u73B0 ",(0,s.jsx)(n.code,{children:"EmailSender"})," \u548C ",(0,s.jsx)(n.code,{children:"SmsSender"}),"\uFF0C\u786E\u4FDD\u5B83\u4EEC\u7B26\u5408 ",(0,s.jsx)(n.code,{children:"MessageSender"})," \u63A5\u53E3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u901A\u77E5\u670D\u52A1"}),"\uFF1A\u5B9E\u73B0 ",(0,s.jsx)(n.code,{children:"NotificationService"}),"\uFF0C\u8BE5\u670D\u52A1\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"MessageSender"})," \u63A5\u53E3\u8FDB\u884C\u901A\u77E5\u53D1\u9001\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5B9E\u73B0\u4E3B\u7A0B\u5E8F\u903B\u8F91",children:"\u5B9E\u73B0\u4E3B\u7A0B\u5E8F\u903B\u8F91"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"main"})," \u51FD\u6570\u4E2D\uFF0C\u6839\u636E\u914D\u7F6E\u9009\u62E9\u6D88\u606F\u53D1\u9001\u8005\uFF0C\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"NotificationService"})," \u5B9E\u4F8B\uFF0C\u5E76\u8C03\u7528\u53D1\u9001\u901A\u77E5\u7684\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B9E\u73B0",children:"\u5B9E\u73B0"}),"\n",(0,s.jsx)(n.h3,{id:"maingo",children:"main.go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n	"log"\n)\n\nfunc main() {\n	// \u914D\u7F6E\u7BA1\u7406\n	config := Config{NotificationType: "email"} // \u53EF\u4EE5\u6539\u4E3A "sms"\n\n	// \u6839\u636E\u914D\u7F6E\u521B\u5EFA\u6D88\u606F\u53D1\u9001\u8005\n	sender, err := CreateMessageSender(config)\n	if err != nil {\n		log.Fatalf("Error creating message sender: %v", err)\n	}\n\n	// \u521B\u5EFA\u901A\u77E5\u670D\u52A1\u5B9E\u4F8B\n	notificationService := NewNotificationService(sender)\n\n	// \u53D1\u9001\u901A\u77E5\n	if err := notificationService.Notify("Hello via Notification Service"); err != nil {\n		log.Fatalf("Error sending notification: %v", err)\n	}\n\n	// \u53D1\u9001\u7A7A\u6D88\u606F\uFF0C\u89E6\u53D1\u9519\u8BEF\n	if err := notificationService.Notify(""); err != nil {\n		log.Printf("Expected error: %v", err)\n	}\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"configgo",children:"config.go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"package main\n\n// Config \u7528\u4E8E\u7BA1\u7406\u914D\u7F6E\u4FE1\u606F\ntype Config struct {\n	NotificationType string\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"message_sendergo",children:"message_sender.go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport "errors"\n\n// MessageSender \u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5B9A\u4E49\u4E86\u53D1\u9001\u6D88\u606F\u7684\u65B9\u6CD5\ntype MessageSender interface {\n	Send(message string) error\n}\n\n// CreateMessageSender \u6839\u636E\u914D\u7F6E\u521B\u5EFA\u5BF9\u5E94\u7684 MessageSender \u5B9E\u73B0\nfunc CreateMessageSender(config Config) (MessageSender, error) {\n	switch config.NotificationType {\n	case "email":\n		return &EmailSender{}, nil\n	case "sms":\n		return &SmsSender{}, nil\n	default:\n		return nil, errors.New("unsupported notification type")\n	}\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"notification_servicego",children:"notification_service.go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n	"errors"\n)\n\n// NotificationService \u662F\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5305\u542B\u4E86\u4E00\u4E2A MessageSender \u7C7B\u578B\u7684\u5B57\u6BB5 sender\ntype NotificationService struct {\n	sender MessageSender\n}\n\n// NewNotificationService \u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA NotificationService \u5B9E\u4F8B\nfunc NewNotificationService(sender MessageSender) *NotificationService {\n	return &NotificationService{sender: sender}\n}\n\n// Notify \u662F NotificationService \u7ED3\u6784\u4F53\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u53D1\u9001\u901A\u77E5\nfunc (n *NotificationService) Notify(message string) error {\n	if message == "" {\n		return errors.New("message cannot be empty")\n	}\n	return n.sender.Send(message)\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sendersgo",children:"senders.go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n	"log"\n)\n\n// EmailSender \u53D1\u9001\u7535\u5B50\u90AE\u4EF6\ntype EmailSender struct{}\n\n// Send \u5B9E\u73B0\u4E86 MessageSender \u63A5\u53E3\nfunc (e *EmailSender) Send(message string) error {\n	// \u6A21\u62DF\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u7684\u903B\u8F91\n	log.Printf("Sending email: %s", message)\n	return nil // \u5047\u8BBE\u53D1\u9001\u6210\u529F\n}\n\n// SmsSender \u53D1\u9001\u77ED\u4FE1\ntype SmsSender struct{}\n\n// Send \u5B9E\u73B0\u4E86 MessageSender \u63A5\u53E3\nfunc (s *SmsSender) Send(message string) error {\n	// \u6A21\u62DF\u53D1\u9001\u77ED\u4FE1\u7684\u903B\u8F91\n	log.Printf("Sending SMS: %s", message)\n	return nil // \u5047\u8BBE\u53D1\u9001\u6210\u529F\n}\n\n'})})]})}function g(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var r=i(67294);let s={},t=r.createContext(s);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},66291:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2024-11-02-Go_\u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91.md","source":"@site/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2024-11-02-Go_\u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91.md","title":"Go \u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91","description":"\u5DF2\u5B8C\u6210\u4E00\u4E2A\u6D88\u606F\u901A\u77E5\u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u8FD9\u91CC\u81EA\u4E0A\u800C\u4E0B\u7684\u601D\u8003\u6B65\u9AA4\u5982\u4E0B","date":"2024-11-02T00:00:00.000Z","tags":[{"inline":false,"label":"\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784","permalink":"/docs-hub/blog/tags/performance-architecture","description":"\u6027\u80FD\u4F18\u5316\u548C\u7CFB\u7EDF\u67B6\u6784\u76F8\u5173\u6587\u7AE0"}],"readingTime":2.47,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91","title":"Go \u9762\u5411\u63A5\u53E3\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u7F16\u5199\u903B\u8F91","authors":["sumingcheng"],"tags":["performance-architecture"],"date":"2024-11-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u6302\u8F7D\u78C1\u76D8\u7684\u6B65\u9AA4","permalink":"/docs-hub/blog/linux-\u6302\u8F7D\u78C1\u76D8\u7684\u6B65\u9AA4"},"nextItem":{"title":"\u89E3\u51B3 Vue \u4E2D\u7684\u4E8B\u4EF6\u5192\u6CE1\u95EE\u9898","permalink":"/docs-hub/blog/\u89E3\u51B3-vue-\u4E2D\u7684\u4E8B\u4EF6\u5192\u6CE1\u95EE\u9898"}}')}}]);