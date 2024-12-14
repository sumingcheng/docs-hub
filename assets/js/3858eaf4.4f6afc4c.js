"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["14728"],{84970:function(n,e,i){i.r(e),i.d(e,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"Backend/Java/Maven/Maven-\u63D2\u4EF6","title":"Maven \u63D2\u4EF6\u8BE6\u89E3","description":"\u4EC0\u4E48\u662F Maven \u63D2\u4EF6","source":"@site/docs/Backend/Java/Maven/30.Maven-\u63D2\u4EF6.md","sourceDirName":"Backend/Java/Maven","slug":"/Backend/Java/Maven/Maven-\u63D2\u4EF6","permalink":"/docs-hub/Backend/Java/Maven/Maven-\u63D2\u4EF6","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/Maven/30.Maven-\u63D2\u4EF6.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":30,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"Maven \u751F\u547D\u5468\u671F","permalink":"/docs-hub/Backend/Java/Maven/Maven-\u751F\u547D\u5468\u671F"},"next":{"title":"\u4F9D\u8D56\u9879\u89E3\u8BFB","permalink":"/docs-hub/Backend/Java/Maven/Maven-\u4F9D\u8D56\u9879\u89E3\u8BFB"}}'),a=i("85893"),r=i("50065");let s={},c="Maven \u63D2\u4EF6\u8BE6\u89E3",d={},o=[{value:"\u4EC0\u4E48\u662F Maven \u63D2\u4EF6",id:"\u4EC0\u4E48\u662F-maven-\u63D2\u4EF6",level:2},{value:"\u5E38\u89C1\u7684 Maven \u63D2\u4EF6",id:"\u5E38\u89C1\u7684-maven-\u63D2\u4EF6",level:2},{value:"maven-compiler-plugin",id:"maven-compiler-plugin",level:3},{value:"maven-surefire-plugin",id:"maven-surefire-plugin",level:3},{value:"maven-jar-plugin",id:"maven-jar-plugin",level:3},{value:"maven-war-plugin",id:"maven-war-plugin",level:3},{value:"maven-install-plugin",id:"maven-install-plugin",level:3},{value:"maven-deploy-plugin",id:"maven-deploy-plugin",level:3},{value:"maven-clean-plugin",id:"maven-clean-plugin",level:3},{value:"maven-site-plugin",id:"maven-site-plugin",level:3},{value:"maven-failsafe-plugin",id:"maven-failsafe-plugin",level:3},{value:"\u63D2\u4EF6\u7684\u5DE5\u4F5C\u65B9\u5F0F",id:"\u63D2\u4EF6\u7684\u5DE5\u4F5C\u65B9\u5F0F",level:2},{value:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E",id:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E",level:2},{value:"\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6",id:"\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6",level:2},{value:"\u53C2\u8003\u94FE\u63A5",id:"\u53C2\u8003\u94FE\u63A5",level:2}];function t(n){let e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"maven-\u63D2\u4EF6\u8BE6\u89E3",children:"Maven \u63D2\u4EF6\u8BE6\u89E3"})}),"\n",(0,a.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F-maven-\u63D2\u4EF6",children:"\u4EC0\u4E48\u662F Maven \u63D2\u4EF6"}),"\n",(0,a.jsx)(e.p,{children:"Maven \u63D2\u4EF6\u662F\u4E00\u7EC4\u9884\u6253\u5305\u7684 Maven \u6269\u5C55\uFF0C\u63D0\u4F9B\u4E86\u7528\u4E8E\u6784\u5EFA\u548C\u7BA1\u7406\u9879\u76EE\u7684\u529F\u80FD\u3002\u6BCF\u4E2A\u63D2\u4EF6\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u76EE\u6807\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u76EE\u6807\u4EE3\u8868\u53EF\u6267\u884C\u7684\u4EFB\u52A1\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u5E38\u89C1\u7684-maven-\u63D2\u4EF6",children:"\u5E38\u89C1\u7684 Maven \u63D2\u4EF6"}),"\n",(0,a.jsx)(e.h3,{id:"maven-compiler-plugin",children:"maven-compiler-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u8BE5\u63D2\u4EF6\u7528\u4E8E\u7F16\u8BD1 Java \u6E90\u4EE3\u7801\u3002\u5B83\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u5305\u62EC ",(0,a.jsx)(e.code,{children:"compile"})," \u7F16\u8BD1\u4E3B\u6E90\u4EE3\u7801\u548C ",(0,a.jsx)(e.code,{children:"testCompile"})," \u7F16\u8BD1\u6D4B\u8BD5\u6E90\u4EE3\u7801\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.8.1</version>\n            <configuration>\n                <source>${java.version}</source>\n                <target>${java.version}</target>\n                <encoding>UTF-8</encoding>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u5728\u4E0A\u8FF0\u914D\u7F6E\u4E2D\uFF0C\u6211\u4F7F\u7528 ",(0,a.jsx)(e.code,{children:"${java.version}"})," \u5C5E\u6027\u6765\u8BBE\u7F6E\u7F16\u8BD1\u7248\u672C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7EDF\u4E00\u7BA1\u7406 Java \u7248\u672C\u3002\u901A\u8FC7\u5728 ",(0,a.jsx)(e.code,{children:"properties"})," \u4E2D\u5B9A\u4E49 ",(0,a.jsx)(e.code,{children:"java.version"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u66F4\u6539\u6574\u4E2A\u9879\u76EE\u7684 Java \u7248\u672C\u3002\u6B64\u5916\uFF0C\u8BBE\u7F6E\u6587\u4EF6\u7F16\u7801\u4E3A UTF-8 \u6709\u52A9\u4E8E\u907F\u514D\u7F16\u7801\u76F8\u5173\u7684\u95EE\u9898\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-surefire-plugin",children:"maven-surefire-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u7528\u4E8E\u6267\u884C\u5355\u5143\u6D4B\u8BD5\u3002\u5B83\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"test"}),"\uFF0C\u7528\u4E8E\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5\u5E76\u751F\u6210\u62A5\u544A\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-plugin</artifactId>\n            <version>2.22.2</version>\n            <configuration>\n                <includes>\n                    <include>**/*Test.java</include>\n                </includes>\n                <testFailureIgnore>false</testFailureIgnore>\n                <skipTests>false</skipTests>\n                <argLine>-Dfile.encoding=UTF-8</argLine>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u6B64\u914D\u7F6E\u6307\u5B9A\u4E86\u5355\u5143\u6D4B\u8BD5\u7684\u547D\u540D\u6A21\u5F0F\u4E3A ",(0,a.jsx)(e.code,{children:"**/*Test.java"}),"\uFF0C\u5E76\u8BBE\u7F6E\u5728\u6D4B\u8BD5\u5931\u8D25\u65F6\u4E0D\u5FFD\u7565\u5931\u8D25\u3002\u786E\u4FDD\u6784\u5EFA\u5728\u6D4B\u8BD5\u5931\u8D25\u65F6\u4E2D\u65AD\u3002\u6B64\u5916\uFF0C\u901A\u8FC7 ",(0,a.jsx)(e.code,{children:"argLine"})," \u8BBE\u7F6E\u6587\u4EF6\u7F16\u7801\u4E3A UTF-8\uFF0C\u907F\u514D\u7F16\u7801\u95EE\u9898\u5F71\u54CD\u6D4B\u8BD5\u6267\u884C\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-jar-plugin",children:"maven-jar-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u7528\u4E8E\u6784\u5EFA JAR \u6587\u4EF6\u3002\u5B83\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"package"}),"\uFF0C\u5C06\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u6253\u5305\u4E3A JAR \u6587\u4EF6\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-jar-plugin</artifactId>\n            <version>3.2.0</version>\n            <configuration>\n                <archive>\n                    <manifest>\n                        <addClasspath>true</addClasspath>\n                        <mainClass>com.example.Main</mainClass>\n                    </manifest>\n                </archive>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u5728\u8FD9\u4E2A\u914D\u7F6E\u4E2D\uFF0C\u6211\u6307\u5B9A\u4E86\u4E3B\u7C7B ",(0,a.jsx)(e.code,{children:"com.example.Main"}),"\uFF0C\u8FD9\u6837\u751F\u6210\u7684 JAR \u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u3002\u540C\u65F6\uFF0C",(0,a.jsx)(e.code,{children:"addClasspath"})," \u8BBE\u7F6E\u4E3A ",(0,a.jsx)(e.code,{children:"true"})," \u4EE5\u5728\u6E05\u5355\u6587\u4EF6\u4E2D\u6DFB\u52A0\u7C7B\u8DEF\u5F84\u4FE1\u606F\uFF0C\u786E\u4FDD\u4F9D\u8D56\u9879\u80FD\u591F\u6B63\u786E\u52A0\u8F7D\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-war-plugin",children:"maven-war-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u7528\u4E8E\u6784\u5EFA WAR \u6587\u4EF6\uFF0C\u901A\u5E38\u5E94\u7528\u4E8E Java Web \u5E94\u7528\u7A0B\u5E8F\u3002\u5B83\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"package"}),"\uFF0C\u5C06\u9879\u76EE\u6253\u5305\u4E3A WAR \u6587\u4EF6\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-war-plugin</artifactId>\n            <version>3.3.1</version>\n            <configuration>\n                <warName>my-webapp</warName>\n                <failOnMissingWebXml>false</failOnMissingWebXml>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u8FD9\u91CC\uFF0C\u6211\u5C06\u751F\u6210\u7684 WAR \u6587\u4EF6\u547D\u540D\u4E3A ",(0,a.jsx)(e.code,{children:"my-webapp.war"}),"\uFF0C\u5E76\u914D\u7F6E ",(0,a.jsx)(e.code,{children:"failOnMissingWebXml"})," \u4E3A ",(0,a.jsx)(e.code,{children:"false"}),"\uFF0C\u9002\u7528\u4E8E\u4F7F\u7528 Servlet 3.0 \u53CA\u4EE5\u4E0A\u7248\u672C\u4E14\u65E0\u9700 ",(0,a.jsx)(e.code,{children:"web.xml"})," \u7684\u9879\u76EE\u3002\u8FD9\u79CD\u914D\u7F6E\u7B80\u5316\u4E86\u90E8\u7F72\u8FC7\u7A0B\uFF0C\u51CF\u5C11\u4E86\u914D\u7F6E\u6587\u4EF6\u7684\u4F9D\u8D56\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-install-plugin",children:"maven-install-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u5C06\u9879\u76EE\u7684\u6784\u5EFA\u8F93\u51FA\u5982 JAR \u6216 WAR \u6587\u4EF6\u5B89\u88C5\u5230\u672C\u5730 Maven \u4ED3\u5E93\uFF0C\u4EE5\u4FBF\u5176\u4ED6\u9879\u76EE\u4F7F\u7528\u3002\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"install"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-install-plugin</artifactId>\n            <version>2.5.2</version>\n            <executions>\n                <execution>\n                    <id>install-artifacts</id>\n                    <phase>install</phase>\n                    <goals>\n                        <goal>install</goal>\n                    </goals>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u6B64\u914D\u7F6E\u786E\u4FDD\u5728 ",(0,a.jsx)(e.code,{children:"install"})," \u9636\u6BB5\u6267\u884C ",(0,a.jsx)(e.code,{children:"install"})," \u76EE\u6807\uFF0C\u5C06\u6784\u5EFA\u4EA7\u7269\u5B89\u88C5\u5230\u672C\u5730\u4ED3\u5E93\u3002\u901A\u5E38\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\uFF0C\u9664\u975E\u9700\u8981\u81EA\u5B9A\u4E49\u5B89\u88C5\u884C\u4E3A\uFF0C\u4F8B\u5982\u6307\u5B9A\u4E0D\u540C\u7684\u4ED3\u5E93\u4F4D\u7F6E\u6216\u6DFB\u52A0\u989D\u5916\u7684\u6784\u4EF6\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-deploy-plugin",children:"maven-deploy-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u5C06\u6784\u5EFA\u8F93\u51FA\u90E8\u7F72\u5230\u8FDC\u7A0B Maven \u4ED3\u5E93\uFF0C\u901A\u5E38\u7528\u4E8E\u4E0E\u5176\u4ED6\u5F00\u53D1\u8005\u5171\u4EAB\u6216\u53D1\u5E03\u6784\u5EFA\u4EA7\u7269\u3002\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"deploy"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-deploy-plugin</artifactId>\n            <version>3.0.0-M1</version>\n            <configuration>\n                <repositoryId>release-repo</repositoryId>\n                <url>https://repo.example.com/releases</url>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u5728\u6B64\u914D\u7F6E\u4E2D\uFF0C\u6211\u6307\u5B9A\u4E86\u8FDC\u7A0B\u4ED3\u5E93\u7684 ",(0,a.jsx)(e.code,{children:"repositoryId"})," \u548C ",(0,a.jsx)(e.code,{children:"url"}),"\uFF0C\u786E\u4FDD\u6784\u5EFA\u4EA7\u7269\u88AB\u6B63\u786E\u90E8\u7F72\u5230\u6307\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u3002\u9700\u8981\u5728 ",(0,a.jsx)(e.code,{children:"settings.xml"})," \u4E2D\u914D\u7F6E\u76F8\u5E94\u7684\u51ED\u636E\u4EE5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u786E\u4FDD\u90E8\u7F72\u8FC7\u7A0B\u7684\u5B89\u5168\u6027\u548C\u53EF\u9760\u6027\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-clean-plugin",children:"maven-clean-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u7528\u4E8E\u6E05\u7406\u6784\u5EFA\u4EA7\u7269\uFF0C\u5982 ",(0,a.jsx)(e.code,{children:"target"})," \u76EE\u5F55\u3002\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F ",(0,a.jsx)(e.code,{children:"clean"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-clean-plugin</artifactId>\n            <version>3.1.0</version>\n            <configuration>\n                <filesets>\n                    <fileset>\n                        <directory>${project.basedir}/custom-directory</directory>\n                        <includes>\n                            <include>**/*</include>\n                        </includes>\n                    </fileset>\n                </filesets>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u6B64\u914D\u7F6E\u4E0D\u4EC5\u6E05\u7406\u9ED8\u8BA4\u7684 ",(0,a.jsx)(e.code,{children:"target"})," \u76EE\u5F55\uFF0C\u8FD8\u5305\u62EC\u81EA\u5B9A\u4E49\u76EE\u5F55 ",(0,a.jsx)(e.code,{children:"custom-directory"})," \u4E2D\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u786E\u4FDD\u6784\u5EFA\u73AF\u5883\u7684\u5168\u9762\u6E05\u7406\u3002\u5168\u9762\u7684\u6E05\u7406\u6709\u52A9\u4E8E\u907F\u514D\u65E7\u6587\u4EF6\u5BF9\u65B0\u6784\u5EFA\u7684\u5F71\u54CD\uFF0C\u63D0\u9AD8\u6784\u5EFA\u7684\u7A33\u5B9A\u6027\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-site-plugin",children:"maven-site-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u751F\u6210\u9879\u76EE\u6587\u6863\u548C\u62A5\u544A\uFF0C\u5982 Javadoc\u3001\u4EE3\u7801\u8986\u76D6\u7387\u7B49\u3002\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u5305\u62EC ",(0,a.jsx)(e.code,{children:"site"})," \u751F\u6210\u7AD9\u70B9\u6587\u6863\u548C ",(0,a.jsx)(e.code,{children:"site:deploy"})," \u90E8\u7F72\u7AD9\u70B9\u6587\u6863\u5230\u670D\u52A1\u5668\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-site-plugin</artifactId>\n            <version>3.9.1</version>\n            <configuration>\n                <outputDirectory>${project.build.directory}/site</outputDirectory>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u5728\u6B64\u914D\u7F6E\u4E2D\uFF0C\u6211\u6307\u5B9A\u4E86\u751F\u6210\u7684\u7AD9\u70B9\u6587\u6863\u8F93\u51FA\u76EE\u5F55\u4E3A ",(0,a.jsx)(e.code,{children:"target/site"}),"\u3002\u901A\u8FC7\u8FD0\u884C ",(0,a.jsx)(e.code,{children:"mvn site"})," \u547D\u4EE4\uFF0C\u53EF\u4EE5\u751F\u6210\u9879\u76EE\u7684\u8BE6\u7EC6\u6587\u6863\u548C\u62A5\u544A\uFF0C\u5E2E\u52A9\u56E2\u961F\u6210\u5458\u548C\u5229\u76CA\u76F8\u5173\u8005\u66F4\u597D\u5730\u7406\u89E3\u9879\u76EE\u7684\u72B6\u6001\u548C\u7ED3\u6784\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"maven-failsafe-plugin",children:"maven-failsafe-plugin"}),"\n",(0,a.jsxs)(e.p,{children:["\u6267\u884C\u96C6\u6210\u6D4B\u8BD5\u3002\u7ED1\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u5305\u62EC ",(0,a.jsx)(e.code,{children:"integration-test"})," \u548C ",(0,a.jsx)(e.code,{children:"verify"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\u914D\u7F6E"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-failsafe-plugin</artifactId>\n            <version>2.22.2</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>integration-test</goal>\n                        <goal>verify</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <includes>\n                    <include>**/*IT.java</include>\n                </includes>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u6B64\u914D\u7F6E\u6307\u5B9A\u4E86\u96C6\u6210\u6D4B\u8BD5\u7684\u547D\u540D\u6A21\u5F0F\u4E3A ",(0,a.jsx)(e.code,{children:"**/*IT.java"}),"\uFF0C\u5E76\u5728 ",(0,a.jsx)(e.code,{children:"integration-test"})," \u548C ",(0,a.jsx)(e.code,{children:"verify"})," \u9636\u6BB5\u6267\u884C\u76F8\u5E94\u76EE\u6807\uFF0C\u786E\u4FDD\u96C6\u6210\u6D4B\u8BD5\u7684\u6B63\u786E\u6267\u884C\u548C\u7ED3\u679C\u9A8C\u8BC1\u3002\u96C6\u6210\u6D4B\u8BD5\u6709\u52A9\u4E8E\u9A8C\u8BC1\u7CFB\u7EDF\u5404\u90E8\u5206\u7684\u534F\u4F5C\uFF0C\u63D0\u5347\u5E94\u7528\u7684\u6574\u4F53\u8D28\u91CF\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u63D2\u4EF6\u7684\u5DE5\u4F5C\u65B9\u5F0F",children:"\u63D2\u4EF6\u7684\u5DE5\u4F5C\u65B9\u5F0F"}),"\n",(0,a.jsxs)(e.p,{children:["\u63D2\u4EF6\u901A\u5E38\u7ED1\u5B9A\u5230\u751F\u547D\u5468\u671F\u7684\u67D0\u4E2A\u9636\u6BB5\u3002\u5F53\u8BE5\u9636\u6BB5\u88AB\u6267\u884C\u65F6\uFF0C\u7ED1\u5B9A\u7684\u63D2\u4EF6\u76EE\u6807\u4E5F\u4F1A\u88AB\u6267\u884C\u3002\u4F8B\u5982\uFF0Cmaven-compiler-plugin \u7684 ",(0,a.jsx)(e.code,{children:"compile"})," \u76EE\u6807\u9ED8\u8BA4\u7ED1\u5B9A\u5230 ",(0,a.jsx)(e.code,{children:"compile"})," \u9636\u6BB5\uFF0C\u8FD9\u610F\u5473\u7740\u5F53 ",(0,a.jsx)(e.code,{children:"compile"})," \u9636\u6BB5\u6267\u884C\u65F6\uFF0C\u5B83\u4E5F\u4F1A\u6267\u884C\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u6848\u4F8B\u8BF4\u660E"})}),"\n",(0,a.jsx)(e.p,{children:"\u5047\u8BBE\u6211\u8FD0\u884C\u4EE5\u4E0B Maven \u547D\u4EE4\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mvn clean install\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6B64\u547D\u4EE4\u5C06\u4F9D\u6B21\u6267\u884C ",(0,a.jsx)(e.code,{children:"clean"})," \u548C ",(0,a.jsx)(e.code,{children:"install"})," \u751F\u547D\u5468\u671F\u3002\u5728 ",(0,a.jsx)(e.code,{children:"clean"})," \u751F\u547D\u5468\u671F\u4E2D\uFF0Cmaven-clean-plugin \u5C06\u5220\u9664 ",(0,a.jsx)(e.code,{children:"target"})," \u76EE\u5F55\u3002\u5728 ",(0,a.jsx)(e.code,{children:"install"})," \u751F\u547D\u5468\u671F\u4E2D\uFF0C\u591A\u4E2A\u63D2\u4EF6\u5C06\u6309\u7ED1\u5B9A\u7684\u9636\u6BB5\u6267\u884C\uFF0C\u5982 maven-compiler-plugin \u5728 ",(0,a.jsx)(e.code,{children:"compile"})," \u9636\u6BB5\u7F16\u8BD1\u4EE3\u7801\uFF0Cmaven-surefire-plugin \u5728 ",(0,a.jsx)(e.code,{children:"test"})," \u9636\u6BB5\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5\uFF0Cmaven-jar-plugin \u5728 ",(0,a.jsx)(e.code,{children:"package"})," \u9636\u6BB5\u6253\u5305 JAR \u6587\u4EF6\uFF0C\u6700\u540E maven-install-plugin \u5C06 JAR \u6587\u4EF6\u5B89\u88C5\u5230\u672C\u5730\u4ED3\u5E93\u3002\u6574\u4E2A\u8FC7\u7A0B\u786E\u4FDD\u4E86\u9879\u76EE\u7684\u6E05\u7406\u3001\u7F16\u8BD1\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u7684\u6709\u5E8F\u8FDB\u884C\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E",children:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728 ",(0,a.jsx)(e.code,{children:"pom.xml"})," \u6587\u4EF6\u4E2D\uFF0C\u6211\u53EF\u4EE5\u4E3A\u63D2\u4EF6\u63D0\u4F9B\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u8FD9\u5141\u8BB8\u6211\u6539\u53D8\u63D2\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002\u4F8B\u5982\uFF0C\u6211\u53EF\u4EE5\u66F4\u6539 Java \u7684\u7F16\u8BD1\u7248\u672C\u6216\u4E3A\u5355\u5143\u6D4B\u8BD5\u6307\u5B9A\u7279\u5B9A\u53C2\u6570\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u793A\u4F8B\uFF1A\u5B9A\u4E49\u7F16\u8BD1\u63D2\u4EF6"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.8.1</version>\n            <configuration>\n                <source>17</source>\n                <target>17</target>\n                <encoding>UTF-8</encoding>\n                <compilerArgs>\n                    <arg>-Xlint:all</arg>\n                </compilerArgs>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u5728\u8FD9\u4E2A\u914D\u7F6E\u4E2D\uFF0C\u6211\u5C06 Java \u7F16\u8BD1\u7248\u672C\u5347\u7EA7\u5230 17\uFF0C\u8BBE\u7F6E\u6587\u4EF6\u7F16\u7801\u4E3A UTF-8\uFF0C\u5E76\u542F\u7528\u4E86\u6240\u6709\u7F16\u8BD1\u8B66\u544A\u3002\u901A\u8FC7\u542F\u7528\u7F16\u8BD1\u8B66\u544A\uFF0C\u53EF\u4EE5\u5728\u7F16\u8BD1\u9636\u6BB5\u6355\u83B7\u6F5C\u5728\u7684\u95EE\u9898\uFF0C\u63D0\u5347\u4EE3\u7801\u8D28\u91CF\u3002\u6B64\u5916\uFF0C\u4F7F\u7528\u7EDF\u4E00\u7684 Java \u7248\u672C\u6709\u52A9\u4E8E\u4FDD\u6301\u9879\u76EE\u7684\u4E00\u81F4\u6027\uFF0C\u51CF\u5C11\u8DE8\u73AF\u5883\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6",children:"\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679C\u73B0\u6709\u63D2\u4EF6\u4E0D\u80FD\u6EE1\u8DB3\u6211\u7684\u9700\u6C42\uFF0C\u6211\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684 Maven \u63D2\u4EF6\u3002\u8FD9\u9700\u8981\u66F4\u6DF1\u5165\u7684 Maven \u548C Java \u77E5\u8BC6\uFF0C\u4F46\u5B83\u4E3A\u6211\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u81EA\u5B9A\u4E49\u548C\u6269\u5C55\u80FD\u529B\u3002"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u6B65\u9AA4\u6982\u8FF0"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BBE\u7F6E Maven \u63D2\u4EF6\u9879\u76EE"}),(0,a.jsx)(e.br,{}),"\n","\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Maven \u9879\u76EE\uFF0C\u5E76\u5728 ",(0,a.jsx)(e.code,{children:"pom.xml"})," \u4E2D\u6307\u5B9A ",(0,a.jsx)(e.code,{children:"maven-plugin"})," \u7684\u5305\u88C5\u7C7B\u578B\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example.plugins</groupId>\n    <artifactId>my-custom-plugin</artifactId>\n    <version>1.0.0</version>\n    <packaging>maven-plugin</packaging>\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.maven</groupId>\n            <artifactId>maven-plugin-api</artifactId>\n            <version>3.6.3</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.maven.plugin-tools</groupId>\n            <artifactId>maven-plugin-annotations</artifactId>\n            <version>3.6.0</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n</project>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u7F16\u5199\u63D2\u4EF6\u4EE3\u7801"}),(0,a.jsx)(e.br,{}),"\n","\u521B\u5EFA\u4E00\u4E2A Java \u7C7B\u5E76\u4F7F\u7528\u6CE8\u89E3\u5B9A\u4E49\u63D2\u4EF6\u7684\u76EE\u6807\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'package com.example.plugins;\n\nimport org.apache.maven.plugin.AbstractMojo;\nimport org.apache.maven.plugin.MojoExecutionException;\nimport org.apache.maven.plugins.annotations.LifecyclePhase;\nimport org.apache.maven.plugins.annotations.Mojo;\nimport org.apache.maven.plugins.annotations.Parameter;\n\n@Mojo(name = "greet", defaultPhase = LifecyclePhase.NONE)\npublic class GreetingMojo extends AbstractMojo {\n\n    @Parameter(property = "greeting", defaultValue = "Hello, World!")\n    private String greeting;\n\n    public void execute() throws MojoExecutionException {\n        getLog().info(greeting);\n    }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6784\u5EFA\u5E76\u5B89\u88C5\u63D2\u4EF6"}),(0,a.jsx)(e.br,{}),"\n","\u8FD0\u884C ",(0,a.jsx)(e.code,{children:"mvn install"})," \u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u672C\u5730 Maven \u4ED3\u5E93\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>com.example.plugins</groupId>\n            <artifactId>my-custom-plugin</artifactId>\n            <version>1.0.0</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>greet</goal>\n                    </goals>\n                    <configuration>\n                        <greeting>Welcome to my custom plugin!</greeting>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8BF4\u660E"}),(0,a.jsx)(e.br,{}),"\n","\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u81EA\u5B9A\u4E49\u63D2\u4EF6 ",(0,a.jsx)(e.code,{children:"my-custom-plugin"}),"\uFF0C\u5B83\u5305\u542B\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"greet"})," \u76EE\u6807\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u8F93\u51FA\u81EA\u5B9A\u4E49\u7684\u95EE\u5019\u8BED\u3002\u8FD9\u79CD\u63D2\u4EF6\u6269\u5C55\u4E86 Maven \u7684\u529F\u80FD\uFF0C\u4F7F\u5176\u80FD\u591F\u6267\u884C\u7279\u5B9A\u4E8E\u9879\u76EE\u7684\u4EFB\u52A1\uFF0C\u63D0\u5347\u6784\u5EFA\u8FC7\u7A0B\u7684\u7075\u6D3B\u6027\u548C\u81EA\u52A8\u5316\u6C34\u5E73\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u8003\u94FE\u63A5",children:"\u53C2\u8003\u94FE\u63A5"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://maven.apache.org/guides/index.html",children:"Maven \u5B98\u65B9\u6587\u6863"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://maven.apache.org/plugins/index.html",children:"Maven \u63D2\u4EF6\u5217\u8868"})}),"\n"]})]})}function p(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(t,{...n})}):t(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return s}});var l=i(67294);let a={},r=l.createContext(a);function s(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);