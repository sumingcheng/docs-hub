"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[78980],{29011:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Backend/MQ/Go-Kafka\u5b89\u88c5\u4f7f\u7528\u6307\u5357.md","title":"Go \u8bed\u8a00\u4e2d\u4f7f\u7528 Kafka \u7684\u5b89\u88c5\u548c\u4f7f\u7528\u6307\u5357","description":"\u73af\u5883\u51c6\u5907","source":"@site/docs/Backend/MQ/10.Go-Kafka\u5b89\u88c5\u4f7f\u7528\u6307\u5357.md.md","sourceDirName":"Backend/MQ","slug":"/Backend/MQ/Go-Kafka\u5b89\u88c5\u4f7f\u7528\u6307\u5357.md","permalink":"/docs-hub/docs/Backend/MQ/Go-Kafka\u5b89\u88c5\u4f7f\u7528\u6307\u5357.md","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MQ/10.Go-Kafka\u5b89\u88c5\u4f7f\u7528\u6307\u5357.md.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":10,"frontMatter":{},"sidebar":"mqSidebar"}');var s=a(74848),i=a(28453);const o={},c="Go \u8bed\u8a00\u4e2d\u4f7f\u7528 Kafka \u7684\u5b89\u88c5\u548c\u4f7f\u7528\u6307\u5357",d={},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:3},{value:"\u5b89\u88c5\u524d\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u5b89\u88c5\u524d\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5b89\u88c5 Kafka",id:"\u5b89\u88c5-kafka",level:2},{value:"\u4e0b\u8f7d Kafka",id:"\u4e0b\u8f7d-kafka",level:3},{value:"\u89e3\u538b Kafka",id:"\u89e3\u538b-kafka",level:3},{value:"\u542f\u52a8 Kafka \u670d\u52a1",id:"\u542f\u52a8-kafka-\u670d\u52a1",level:3},{value:"\u4f7f\u7528 Go \u8bed\u8a00\u8fde\u63a5 Kafka",id:"\u4f7f\u7528-go-\u8bed\u8a00\u8fde\u63a5-kafka",level:2},{value:"\u5b89\u88c5 Kafka \u7684 Go \u5ba2\u6237\u7aef",id:"\u5b89\u88c5-kafka-\u7684-go-\u5ba2\u6237\u7aef",level:3},{value:"\u7f16\u5199\u751f\u4ea7\u8005\u4ee3\u7801",id:"\u7f16\u5199\u751f\u4ea7\u8005\u4ee3\u7801",level:3},{value:"\u7f16\u5199\u6d88\u8d39\u8005\u4ee3\u7801",id:"\u7f16\u5199\u6d88\u8d39\u8005\u4ee3\u7801",level:3},{value:"\u8fd0\u884c\u4ee3\u7801",id:"\u8fd0\u884c\u4ee3\u7801",level:3},{value:"\u6d4b\u8bd5 Kafka",id:"\u6d4b\u8bd5-kafka",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"go-\u8bed\u8a00\u4e2d\u4f7f\u7528-kafka-\u7684\u5b89\u88c5\u548c\u4f7f\u7528\u6307\u5357",children:"Go \u8bed\u8a00\u4e2d\u4f7f\u7528 Kafka \u7684\u5b89\u88c5\u548c\u4f7f\u7528\u6307\u5357"})}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsx)(n.h3,{id:"\u7cfb\u7edf\u8981\u6c42",children:"\u7cfb\u7edf\u8981\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Go \u8bed\u8a00\u4e2d\u4f7f\u7528 Kafka \u9700\u8981\u4ee5\u4e0b\u73af\u5883\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u53f0\u8fd0\u884c Linux\u3001macOS \u6216 Windows \u64cd\u4f5c\u7cfb\u7edf\u7684\u8ba1\u7b97\u673a\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5b89\u88c5 Go \u8bed\u8a00\u73af\u5883\uff0c\u7248\u672c\u4e3a 1.16 \u6216\u66f4\u9ad8\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"go version"})," \u547d\u4ee4\u9a8c\u8bc1\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5b89\u88c5 Kafka\uff0c\u7248\u672c\u4e3a 2.8 \u6216\u66f4\u9ad8\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5b89\u88c5 Java \u8fd0\u884c\u73af\u5883\uff0c\u7248\u672c\u4e3a Java 8 \u6216\u66f4\u9ad8\u3002Kafka \u4f9d\u8d56\u4e8e Java\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"java -version"})," \u547d\u4ee4\u9a8c\u8bc1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u672a\u5b89\u88c5 Java\uff0c\u8bf7\u5148\u5b89\u88c5 Java 8 \u6216\u66f4\u9ad8\u7248\u672c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u524d\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u5b89\u88c5\u524d\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u786e\u4fdd\u5df2\u6b63\u786e\u5b89\u88c5 Go \u8bed\u8a00\u548c Java \u8fd0\u884c\u73af\u5883\uff0c\u4ee5\u907f\u514d\u540e\u7eed\u5b89\u88c5\u548c\u914d\u7f6e\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5-kafka",children:"\u5b89\u88c5 Kafka"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0b\u8f7d-kafka",children:"\u4e0b\u8f7d Kafka"}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee Kafka \u7684 ",(0,s.jsx)(n.a,{href:"https://kafka.apache.org/downloads",children:"\u5b98\u65b9\u7f51\u7ad9"}),"\uff0c\u4e0b\u8f7d\u9002\u7528\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684 Kafka \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u89e3\u538b-kafka",children:"\u89e3\u538b Kafka"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u89e3\u538b\u7f29\u6587\u4ef6\u3002\u6587\u4ef6\u540d\u53ef\u80fd\u56e0\u7248\u672c\u4e0d\u540c\u800c\u6709\u6240\u53d8\u5316\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tar -zxvf kafka_2.13-2.8.0.tgz\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u542f\u52a8-kafka-\u670d\u52a1",children:"\u542f\u52a8 Kafka \u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165 Kafka \u76ee\u5f55\u540e\uff0c\u9996\u5148\u542f\u52a8 ZooKeeper \u670d\u52a1\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd kafka_2.13-2.8.0\nbin/zookeeper-server-start.sh config/zookeeper.properties\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u786e\u4fdd ZooKeeper \u670d\u52a1\u5df2\u6210\u529f\u542f\u52a8\u540e\uff0c\u5f00\u542f Kafka \u670d\u52a1\u3002\u5efa\u8bae\u5728\u4e0d\u540c\u7684\u7ec8\u7aef\u7a97\u53e3\u4e2d\u5206\u522b\u8fd0\u884c ZooKeeper \u548c Kafka \u670d\u52a1\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bin/kafka-server-start.sh config/server.properties\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-go-\u8bed\u8a00\u8fde\u63a5-kafka",children:"\u4f7f\u7528 Go \u8bed\u8a00\u8fde\u63a5 Kafka"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5-kafka-\u7684-go-\u5ba2\u6237\u7aef",children:"\u5b89\u88c5 Kafka \u7684 Go \u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u62e9 Sarama \u4f5c\u4e3a Kafka \u7684 Go \u5ba2\u6237\u7aef\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/Shopify/sarama\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u5199\u751f\u4ea7\u8005\u4ee3\u7801",children:"\u7f16\u5199\u751f\u4ea7\u8005\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa ",(0,s.jsx)(n.code,{children:"producer.go"})," \u6587\u4ef6\uff0c\u7f16\u5199\u4ee5\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/Shopify/sarama"\n)\n\nfunc main() {\n    config := sarama.NewConfig()\n    config.Producer.Return.Successes = true\n\n    producer, err := sarama.NewSyncProducer([]string{"localhost:9092"}, config)\n    if err != nil {\n        fmt.Printf("\u521b\u5efa\u751f\u4ea7\u8005\u5931\u8d25: %v\\n", err)\n        return\n    }\n    defer producer.Close()\n\n    message := &sarama.ProducerMessage{\n        Topic: "sumingcheng",\n        Value: sarama.StringEncoder("Hello Kafka from Go!"),\n    }\n\n    partition, offset, err := producer.SendMessage(message)\n    if err != nil {\n        fmt.Printf("\u53d1\u9001\u6d88\u606f\u5931\u8d25: %v\\n", err)\n        return\n    }\n\n    fmt.Printf("\u6d88\u606f\u5df2\u5b58\u50a8\u5230\u5206\u533a %d\uff0c\u504f\u79fb\u91cf %d\\n", partition, offset)\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u5e94\u66ff\u6362 ",(0,s.jsx)(n.code,{children:"fmt.Printf"})," \u4e3a\u9002\u5f53\u7684\u65e5\u5fd7\u8bb0\u5f55\u673a\u5236\uff0c\u4ee5\u589e\u5f3a\u7a0b\u5e8f\u7684\u5065\u58ee\u6027\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u5199\u6d88\u8d39\u8005\u4ee3\u7801",children:"\u7f16\u5199\u6d88\u8d39\u8005\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa ",(0,s.jsx)(n.code,{children:"consumer.go"})," \u6587\u4ef6\uff0c\u7f16\u5199\u4ee5\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/Shopify/sarama"\n)\n\nfunc main() {\n    consumer, err := sarama.NewConsumer([]string{"localhost:9092"}, nil)\n    if err != nil {\n        fmt.Printf("\u521b\u5efa\u6d88\u8d39\u8005\u5931\u8d25: %v\\n", err)\n        return\n    }\n    defer consumer.Close()\n\n    partitionConsumer, err := consumer.ConsumePartition("sumingcheng", 0, sarama.OffsetNewest)\n    if err != nil {\n        fmt.Printf("\u8ba2\u9605\u5206\u533a\u5931\u8d25: %v\\n", err)\n        return\n    }\n    defer partitionConsumer.Close()\n\n    for message := range partitionConsumer.Messages() {\n        fmt.Printf("\u6536\u5230\u6d88\u606f\uff1a%s\\n", string(message.Value))\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u793a\u4f8b\u8ba2\u9605\u4e86\u4e3b\u9898\u7684\u5206\u533a 0\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8ba2\u9605\u4e0d\u540c\u5206\u533a\u6216\u4f7f\u7528\u6d88\u8d39\u8005\u7ec4\u4ee5\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd0\u884c\u4ee3\u7801",children:"\u8fd0\u884c\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u751f\u4ea7\u8005\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run producer.go\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u4e2d\u8fd0\u884c\u6d88\u8d39\u8005\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run consumer.go\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5-kafka",children:"\u6d4b\u8bd5 Kafka"}),"\n",(0,s.jsx)(n.p,{children:"\u53d1\u9001\u6d88\u606f\u540e\uff0c\u6d88\u8d39\u8005\u7ec8\u7aef\u5e94\u663e\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u6536\u5230\u6d88\u606f\uff1aHello Kafka from Go!\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var r=a(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);