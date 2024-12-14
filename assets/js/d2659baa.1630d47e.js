"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["38676"],{62134:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"Frontend/React/\u53D7\u63A7-\u975E\u53D7\u63A7\u7EC4\u4EF6","title":"React \u4E2D\u7684\u53D7\u63A7\u7EC4\u4EF6\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6","description":"\u5728 React \u4E2D,\u8868\u5355\u5143\u7D20\u7684\u5904\u7406\u53EF\u4EE5\u5206\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E24\u79CD\u65B9\u5F0F\u3002\u53D7\u63A7\u7EC4\u4EF6\u5C06\u8868\u5355\u6570\u636E\u4EA4\u7531 React \u7EC4\u4EF6\u5185\u90E8\u7684 state \u8FDB\u884C\u7BA1\u7406,\u800C\u975E\u53D7\u63A7\u7EC4\u4EF6\u5219\u5C06\u8868\u5355\u6570\u636E\u50A8\u5B58\u5728 DOM \u5143\u7D20\u4E2D\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u8BE6\u7EC6\u63A2\u8BA8\u8FD9\u4E24\u79CD\u7EC4\u4EF6\u7684\u7279\u70B9\u548C\u4F7F\u7528\u573A\u666F\u3002","source":"@site/docs/Frontend/React/70.\u53D7\u63A7-\u975E\u53D7\u63A7\u7EC4\u4EF6.md","sourceDirName":"Frontend/React","slug":"/Frontend/React/\u53D7\u63A7-\u975E\u53D7\u63A7\u7EC4\u4EF6","permalink":"/docs-hub/Frontend/React/\u53D7\u63A7-\u975E\u53D7\u63A7\u7EC4\u4EF6","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/React/70.\u53D7\u63A7-\u975E\u53D7\u63A7\u7EC4\u4EF6.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":70,"frontMatter":{},"sidebar":"reactSidebar","previous":{"title":"\u7236\u5B50\u7EC4\u4EF6\u6570\u636E\u5173\u7CFB\u4E0E\u72B6\u6001\u63D0\u5347","permalink":"/docs-hub/Frontend/React/\u7236\u5B50\u7EC4\u4EF6\u6570\u636E\u5173\u7CFB\u4E0E\u72B6\u6001\u63D0\u5347"},"next":{"title":"React \u7EC4\u4EF6\u751F\u547D\u5468\u671F","permalink":"/docs-hub/Frontend/React/React\u751F\u547D\u5468\u671F"}}'),r=t("85893"),a=t("50065");let i={},o="React \u4E2D\u7684\u53D7\u63A7\u7EC4\u4EF6\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6",l={},c=[{value:"\u53D7\u63A7\u7EC4\u4EF6",id:"\u53D7\u63A7\u7EC4\u4EF6",level:2},{value:"\u975E\u53D7\u63A7\u7EC4\u4EF6",id:"\u975E\u53D7\u63A7\u7EC4\u4EF6",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"react-\u4E2D\u7684\u53D7\u63A7\u7EC4\u4EF6\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6",children:"React \u4E2D\u7684\u53D7\u63A7\u7EC4\u4EF6\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 React \u4E2D,\u8868\u5355\u5143\u7D20\u7684\u5904\u7406\u53EF\u4EE5\u5206\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E24\u79CD\u65B9\u5F0F\u3002\u53D7\u63A7\u7EC4\u4EF6\u5C06\u8868\u5355\u6570\u636E\u4EA4\u7531 React \u7EC4\u4EF6\u5185\u90E8\u7684 state \u8FDB\u884C\u7BA1\u7406,\u800C\u975E\u53D7\u63A7\u7EC4\u4EF6\u5219\u5C06\u8868\u5355\u6570\u636E\u50A8\u5B58\u5728 DOM \u5143\u7D20\u4E2D\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u8BE6\u7EC6\u63A2\u8BA8\u8FD9\u4E24\u79CD\u7EC4\u4EF6\u7684\u7279\u70B9\u548C\u4F7F\u7528\u573A\u666F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53D7\u63A7\u7EC4\u4EF6",children:"\u53D7\u63A7\u7EC4\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u53D7\u63A7\u7EC4\u4EF6\u7684\u6838\u5FC3\u601D\u60F3\u662F\u5C06\u8868\u5355\u6570\u636E\u4EA4\u7531 React \u7EC4\u4EF6\u5185\u90E8\u7684 state \u8FDB\u884C\u7BA1\u7406\u3002\u5177\u4F53\u6765\u8BF4:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7EC4\u4EF6\u7684 state \u662F\u8868\u5355\u7684\u552F\u4E00\u6570\u636E\u6E90\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u901A\u8FC7\u4E3A\u8868\u5355\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570,\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u66F4\u65B0 state,\u4ECE\u800C\u63A7\u5236\u8868\u5355\u5143\u7D20\u7684\u503C\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u53D7\u63A7\u7EC4\u4EF6\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'class ControlledForm extends React.Component {\n  state = {\n    username: \'\',\n    password: \'\',\n  };\n\n  handleChange = (event) => {\n    const { name, value } = event.target;\n    this.setState({ [name]: value });\n  };\n\n  handleSubmit = (event) => {\n    event.preventDefault();\n    console.log(this.state);\n  };\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />\n        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />\n        <button type="submit">Submit</button>\n      </form>\n    );\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D,\u8868\u5355\u5143\u7D20\u7684\u503C\u90FD\u7531\u7EC4\u4EF6\u7684 state \u63A7\u5236\u3002\u5F53\u7528\u6237\u8F93\u5165\u65F6,\u89E6\u53D1",(0,r.jsx)(n.code,{children:"onChange"}),"\u4E8B\u4EF6,\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u66F4\u65B0 state,\u8FDB\u800C\u66F4\u65B0\u8868\u5355\u5143\u7D20\u7684\u503C\u3002\u5F53\u8868\u5355\u63D0\u4EA4\u65F6,\u53EF\u4EE5\u76F4\u63A5\u4ECE state \u4E2D\u83B7\u53D6\u8868\u5355\u6570\u636E\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u53D7\u63A7\u7EC4\u4EF6\u7684\u4F18\u70B9\u662F:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u6570\u636E\u6D41\u6E05\u6670,\u8868\u5355\u6570\u636E\u548C UI \u59CB\u7EC8\u4FDD\u6301\u4E00\u81F4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u65B9\u4FBF\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F46\u662F,\u5BF9\u4E8E\u5927\u578B\u8868\u5355,\u53D7\u63A7\u7EC4\u4EF6\u53EF\u80FD\u4F1A\u53D8\u5F97\u6BD4\u8F83\u7E41\u7410,\u56E0\u4E3A\u6BCF\u4E2A\u8868\u5355\u5143\u7D20\u90FD\u9700\u8981\u7F16\u5199\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u975E\u53D7\u63A7\u7EC4\u4EF6",children:"\u975E\u53D7\u63A7\u7EC4\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u5C06\u8868\u5355\u6570\u636E\u50A8\u5B58\u5728 DOM \u5143\u7D20\u4E2D,\u800C\u4E0D\u662F\u7EC4\u4EF6\u7684 state \u4E2D\u3002\u5728\u63D0\u4EA4\u8868\u5355\u65F6,\u901A\u8FC7 DOM API \u83B7\u53D6\u8868\u5355\u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u975E\u53D7\u63A7\u7EC4\u4EF6\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'class UncontrolledForm extends React.Component {\n  handleSubmit = (event) => {\n    event.preventDefault();\n    const username = this.usernameInput.value;\n    const password = this.passwordInput.value;\n    console.log({ username, password });\n  };\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <input type="text" ref={(input) => (this.usernameInput = input)} />\n        <input type="password" ref={(input) => (this.passwordInput = input)} />\n        <button type="submit">Submit</button>\n      </form>\n    );\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D,\u6211\u4EEC\u4F7F\u7528",(0,r.jsx)(n.code,{children:"ref"}),"\u5C5E\u6027\u83B7\u53D6 DOM \u5143\u7D20\u7684\u5F15\u7528,\u5728\u8868\u5355\u63D0\u4EA4\u65F6\u901A\u8FC7\u8FD9\u4E9B\u5F15\u7528\u83B7\u53D6\u8868\u5355\u6570\u636E\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u4F18\u70B9\u662F:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4EE3\u7801\u76F8\u5BF9\u7B80\u6D01,\u4E0D\u9700\u8981\u4E3A\u6BCF\u4E2A\u8868\u5355\u5143\u7D20\u7F16\u5199\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9002\u7528\u4E8E\u9700\u8981\u96C6\u6210\u7B2C\u4E09\u65B9 UI \u5E93\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F46\u662F,\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E5F\u6709\u4E00\u4E9B\u7F3A\u70B9"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u8868\u5355\u6570\u636E\u548C UI \u53EF\u80FD\u4E0D\u540C\u6B65,\u9700\u8981\u624B\u52A8\u540C\u6B65\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5BF9\u8868\u5355\u6570\u636E\u7684\u6821\u9A8C\u548C\u5904\u7406\u76F8\u5BF9\u9EBB\u70E6\u3002"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(67294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);