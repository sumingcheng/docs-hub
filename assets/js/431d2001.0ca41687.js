"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["40601"],{80153:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return a},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return l}});var r=s(24415),t=s(85893),i=s(50065);let o={slug:"nextjs-\u5FEB\u901F\u4E0A\u624B",title:"Nextjs \u5FEB\u901F\u4E0A\u624B",authors:["sumingcheng"],tags:["frontend"],date:new Date("2024-04-18T00:00:00.000Z")},d="Next.js \u5FEB\u901F\u4E0A\u624B",c={authorsImageUrls:[void 0]},l=[{value:"\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u7531",id:"\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u7531",level:3},{value:"\u9884\u6E32\u67D3\u548C\u6570\u636E\u83B7\u53D6",id:"\u9884\u6E32\u67D3\u548C\u6570\u636E\u83B7\u53D6",level:2},{value:"\u9759\u6001\u751F\u6210\uFF08Static Generation\uFF09",id:"\u9759\u6001\u751F\u6210static-generation",level:3},{value:"\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF08Server-side Rendering\uFF09",id:"\u670D\u52A1\u5668\u7AEF\u6E32\u67D3server-side-rendering",level:3},{value:"API \u8DEF\u7531",id:"api-\u8DEF\u7531",level:3},{value:"CSS \u652F\u6301",id:"css-\u652F\u6301",level:3},{value:"\u56FE\u50CF\u4F18\u5316",id:"\u56FE\u50CF\u4F18\u5316",level:3},{value:"\u73AF\u5883\u53D8\u91CF",id:"\u73AF\u5883\u53D8\u91CF",level:3},{value:"\u914D\u7F6E\u4E0D\u540C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF",id:"\u914D\u7F6E\u4E0D\u540C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF",level:3},{value:"\u52A8\u6001\u5BFC\u5165",id:"\u52A8\u6001\u5BFC\u5165",level:3},{value:"\u6837\u5F0F",id:"\u6837\u5F0F",level:3},{value:"\u7279\u6B8A\u6587\u4EF6",id:"\u7279\u6B8A\u6587\u4EF6",level:3}];function h(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u9605\u8BFB\u672C\u6587\u5E0C\u671B\u4F60\u6709\u4E00\u5B9A\u7684\u524D\u7AEF\u57FA\u7840\uFF0CNext.js \u4E86\u89E3\u4EE5\u4E0B\u51E0\u70B9\u5373\u53EF\u5FEB\u901F\u4E0A\u624B\uFF0C\u6709\u95EE\u9898\u7684\u8BDD\u5C31\u8FB9\u505A\u8FB9\u89E3\u51B3~"}),"\n",(0,t.jsx)(n.h3,{id:"\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u7531",children:"\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u7531"}),"\n",(0,t.jsxs)(n.p,{children:["Next.js \u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"pages"})," \u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7ED3\u6784\u81EA\u52A8\u8BBE\u7F6E\u8DEF\u7531\u3002\u4F60\u521B\u5EFA\u51FA\u6765\u7684\u6BCF\u4E00\u4E2A React \u7EC4\u4EF6\u6587\u4EF6\u90FD\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8DEF\u7531\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u535A\u5BA2\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4E3A\u6BCF\u7BC7\u6587\u7AE0\u521B\u5EFA\u4E00\u4E2A\u9875\u9762\u3002\u5728 ",(0,t.jsx)(n.code,{children:"pages"})," \u76EE\u5F55\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A ",(0,t.jsx)(n.code,{children:"posts"})," \u7684\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728\u5176\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A ",(0,t.jsx)(n.code,{children:"[id].js"})," \u7684\u6587\u4EF6\u3002\u8FD9\u91CC\u7684 ",(0,t.jsx)(n.code,{children:"[id]"})," \u8868\u793A\u52A8\u6001\u7684\u8DEF\u7531\u90E8\u5206\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// pages/posts/[id].js\nimport { useRouter } from 'next/router';\n\u200B\nfunction Post() {\n  const router = useRouter();\n  const { id } = router.query;\n\u200B\n  return <p>Post: {id}</p>;\n}\n\u200B\nexport default Post;\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9884\u6E32\u67D3\u548C\u6570\u636E\u83B7\u53D6",children:"\u9884\u6E32\u67D3\u548C\u6570\u636E\u83B7\u53D6"}),"\n",(0,t.jsx)(n.p,{children:"Next.js \u652F\u6301\u4E24\u79CD\u5F62\u5F0F\u7684\u9884\u6E32\u67D3\uFF1A\u9759\u6001\u751F\u6210\uFF08Static Generation\uFF09\u548C\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF08Server-side Rendering\uFF09"}),"\n",(0,t.jsx)(n.h3,{id:"\u9759\u6001\u751F\u6210static-generation",children:"\u9759\u6001\u751F\u6210\uFF08Static Generation\uFF09"}),"\n",(0,t.jsxs)(n.p,{children:["\u9759\u6001\u751F\u6210\u662F\u5728\u6784\u5EFA\u65F6\u751F\u6210 HTML \u7684\u8FC7\u7A0B\uFF08\u4E5F\u5C31\u662F\u6267\u884C ",(0,t.jsx)(n.code,{children:"next build"})," \u547D\u4EE4\u65F6\uFF09\u3002\u8FD9\u610F\u5473\u7740\u9875\u9762\u5728\u6784\u5EFA\u65F6\u5C31\u88AB\u6E32\u67D3\u597D\uFF0C\u5E76\u4E14\u5728\u6BCF\u4E2A\u8BF7\u6C42\u4E2D\u91CD\u590D\u4F7F\u7528\u3002\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u9002\u5408\u5185\u5BB9\u4E0D\u9891\u7E41\u66F4\u6539\u7684\u9875\u9762\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"}),"\uFF1A\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"getStaticProps"})," \u4E3A\u535A\u5BA2\u9996\u9875\u83B7\u53D6\u6587\u7AE0\u5217\u8868"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// pages/index.js\nexport async function getStaticProps() {\n  // \u6A21\u62DF\u4ECE\u5916\u90E8API\u83B7\u53D6\u6570\u636E\n  const res = await fetch('https://api.example.com/posts');\n  const posts = await res.json();\n\u200B\n  // \u5C06\u83B7\u53D6\u7684\u6587\u7AE0\u6570\u636E\u901A\u8FC7props\u4F20\u9012\u7ED9\u9875\u9762\u7EC4\u4EF6\n  return {\n    props: { posts },\n    revalidate: 10, // \u5728\u751F\u4EA7\u6A21\u5F0F\u4E0B\uFF0C\u6BCF10\u79D2\u91CD\u65B0\u751F\u6210\u9875\u9762\u4E00\u6B21\n  };\n}\n\u200B\nfunction HomePage({ posts }) {\n  return (\n    <div>\n      <h1>Latest Blog Posts</h1>\n      <ul>\n        {posts.map(post => (\n          <li key={post.id}>{post.title}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\u200B\nexport default HomePage;\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,t.jsx)(n.code,{children:"getStaticProps"})," \u5728\u6784\u5EFA\u65F6\u8C03\u7528\uFF0C\u83B7\u53D6\u6240\u6709\u7684\u535A\u6587\uFF0C\u7136\u540E\u4FDD\u5B58\u5728\u9875\u9762\u7684 HTML \u4E2D\u3002\u901A\u8FC7\u8BBE\u7F6E ",(0,t.jsx)(n.code,{children:"revalidate"}),"\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u9875\u9762\u5728\u4E00\u5B9A\u65F6\u95F4\u540E\u91CD\u65B0\u751F\u6210\uFF0C\u4EE5\u4FBF\u66F4\u65B0\u5185\u5BB9\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u670D\u52A1\u5668\u7AEF\u6E32\u67D3server-side-rendering",children:"\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF08Server-side Rendering\uFF09"}),"\n",(0,t.jsx)(n.p,{children:"\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u662F\u6BCF\u6B21\u8BF7\u6C42\u65F6\u90FD\u751F\u6210 HTML \u7684\u8FC7\u7A0B\u3002\u8FD9\u79CD\u65B9\u6CD5\u9002\u5408\u5185\u5BB9\u9891\u7E41\u66F4\u65B0\u7684\u9875\u9762\uFF0C\u6216\u8005\u5185\u5BB9\u5728\u6BCF\u6B21\u8BF7\u6C42\u65F6\u90FD\u53EF\u80FD\u4E0D\u540C\u7684\u60C5\u51B5\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"}),"\uFF1A\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"getServerSideProps"})," \u663E\u793A\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F\u9875\u9762\uFF0C\u8FD9\u4E2A\u4FE1\u606F\u4F9D\u8D56\u4E8E\u6BCF\u6B21\u8BF7\u6C42\u7684\u7528\u6237\u8EAB\u4EFD\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// pages/profile.js\nexport async function getServerSideProps(context) {\n  const { req } = context;\n  const userId = req.cookies.userId; // \u5047\u8BBE\u7528\u6237ID\u5B58\u50A8\u5728cookies\u4E2D\n\u200B\n  const res = await fetch(`https://api.example.com/users/${userId}`);\n  const userData = await res.json();\n\u200B\n  return {\n    props: { user: userData }\n  };\n}\n\u200B\nfunction ProfilePage({ user }) {\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Name: {user.name}</p>\n      <p>Email: {user.email}</p>\n    </div>\n  );\n}\n\u200B\nexport default ProfilePage;\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,t.jsx)(n.code,{children:"getServerSideProps"})," \u5728\u6BCF\u6B21\u9875\u9762\u8BF7\u6C42\u65F6\u6267\u884C\uFF0C\u4ECE API \u83B7\u53D6\u5F53\u524D\u7528\u6237\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A props \u4F20\u9012\u7ED9\u9875\u9762\u3002\u8FD9\u786E\u4FDD\u4E86\u7528\u6237\u770B\u5230\u7684\u603B\u662F\u6700\u65B0\u7684\u4FE1\u606F\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"api-\u8DEF\u7531",children:"API \u8DEF\u7531"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8BBE\u4F60\u6709\u4E00\u4E2A\u5904\u7406\u7279\u5B9A\u7528\u6237\u7684 API \u8DEF\u7531\uFF0C\u6587\u4EF6\u8DEF\u5F84\u4E3A ",(0,t.jsx)(n.code,{children:"pages/api/users/[id].js"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// pages/api/users/[id].js\nexport default function handler(req, res) {\n  const { query: { id }, method } = req;\n\u200B\n  switch (method) {\n    case 'GET':\n      // \u83B7\u53D6\u7279\u5B9A\u7528\u6237\u7684\u4FE1\u606F\n      res.status(200).json({ id, name: \"John Doe\" });\n      break;\n    case 'PUT':\n      // \u66F4\u65B0\u7279\u5B9A\u7528\u6237\u7684\u4FE1\u606F\n      res.status(200).json({ id, name: \"John Doe Updated\" });\n      break;\n    case 'DELETE':\n      // \u5220\u9664\u7279\u5B9A\u7528\u6237\n      res.status(200).json({ message: `User ${id} deleted.` });\n      break;\n    default:\n      // \u4E0D\u652F\u6301\u5176\u4ED6\u65B9\u6CD5\n      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n}\n\u200B\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"css-\u652F\u6301",children:"CSS \u652F\u6301"}),"\n",(0,t.jsx)(n.p,{children:"Next.js \u652F\u6301 CSS Modules\uFF0C\u5141\u8BB8\u4F60\u4F7F\u7528\u5C40\u90E8\u4F5C\u7528\u57DF\u7684 CSS\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// styles/Home.module.css\n.home {\n  color: blue;\n}\n\u200B\n// pages/index.js\nimport styles from '../styles/Home.module.css';\n\u200B\nfunction HomePage() {\n  return <div className={styles.home}>Welcome to the HomePage</div>;\n}\n\u200B\nexport default HomePage;\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u56FE\u50CF\u4F18\u5316",children:"\u56FE\u50CF\u4F18\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["Next.js \u63D0\u4F9B\u4E86\u5185\u7F6E\u7684 ",(0,t.jsx)(n.code,{children:"Image"})," \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u81EA\u52A8\u4F18\u5316\u56FE\u50CF\u52A0\u8F7D\u3002\u63A8\u8350\u4F7F\u7528"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"}),"\uFF1A\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Image"})," \u7EC4\u4EF6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'import Image from \'next/image\';\n\u200B\nfunction MyImageComponent() {\n  return (\n    <Image\n      src="/me.png"\n      alt="Picture of the author"\n      width={500}\n      height={500}\n    />\n  );\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u73AF\u5883\u53D8\u91CF",children:"\u73AF\u5883\u53D8\u91CF"}),"\n",(0,t.jsx)(n.p,{children:"\u7BA1\u7406\u5E94\u7528\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982 API \u5BC6\u94A5\u6216\u6570\u636E\u5E93 URL\uFF0CNext.js \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u5F0F\u6765\u52A0\u8F7D\u548C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// \u5728 .env.local \u6587\u4EF6\u4E2D\u8BBE\u7F6E\nAPI_SECRET_KEY=your_secret_key\n\u200B\n// \u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\nprocess.env.API_SECRET_KEY\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u914D\u7F6E\u4E0D\u540C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF",children:"\u914D\u7F6E\u4E0D\u540C\u73AF\u5883\u7684\u73AF\u5883\u53D8\u91CF"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".env.local"})," - \u5B58\u653E\u672C\u5730\u5F00\u53D1\u73AF\u5883\u7279\u6709\u7684\u53D8\u91CF\uFF0C\u901A\u5E38\u4E0D\u5E94\u8BE5\u63D0\u4EA4\u5230\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".env"})," - \u5B58\u653E\u6240\u6709\u73AF\u5883\u901A\u7528\u7684\u53D8\u91CF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".env.development"}),", ",(0,t.jsx)(n.code,{children:".env.test"}),", ",(0,t.jsx)(n.code,{children:".env.production"})," - \u5206\u522B\u7528\u4E8E\u5F00\u53D1\u3001\u6D4B\u8BD5\u548C\u751F\u4EA7\u73AF\u5883\u7684\u7279\u5B9A\u53D8\u91CF\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60A8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",(0,t.jsx)(n.code,{children:"NODE_ENV"})," \u73AF\u5883\u53D8\u91CF\u6765\u6307\u5B9A\u5F53\u524D\u73AF\u5883\u3002\u8FD9\u901A\u5E38\u5728\u542F\u52A8\u5E94\u7528\u65F6\u5B8C\u6210"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF0C",(0,t.jsx)(n.code,{children:"NODE_ENV"})," \u901A\u5E38\u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:"development"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u65F6\uFF0C\u5E94\u5C06 ",(0,t.jsx)(n.code,{children:"NODE_ENV"})," \u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"production"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5BF9\u4E8E\u6D4B\u8BD5\u73AF\u5883\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"test"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u547D\u4EE4\u884C\u4E2D\u542F\u52A8\u5E94\u7528\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NODE_ENV=production npm run build\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u52A8\u6001\u5BFC\u5165",children:"\u52A8\u6001\u5BFC\u5165"}),"\n",(0,t.jsx)(n.p,{children:"Next.js \u652F\u6301 JavaScript \u548C\u7EC4\u4EF6\u7684\u52A8\u6001\u5BFC\u5165\uFF0C\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C11\u521D\u59CB\u52A0\u8F7D\u65F6\u95F4\u5E76\u6309\u9700\u52A0\u8F7D\u529F\u80FD\u3002\u7C7B\u4F3C\u4E8E vue-router \u7684\u5F02\u6B65\u52A0\u8F7D\u3002\u8FD9\u4E2A\u7279\u6027\u90FD\u662F\u7528\u6765\u5B9E\u73B0\u4EE3\u7801\u62C6\u5206\u548C\u6309\u9700\u52A0\u8F7D\uFF0C\u4ECE\u800C\u4F18\u5316\u5E94\u7528\u7684\u521D\u59CB\u52A0\u8F7D\u65F6\u95F4\u548C\u603B\u4F53\u6027\u80FD\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import dynamic from 'next/dynamic';\n\u200B\nconst DynamicComponent = dynamic(() => import('../components/hello'));\n\u200B\nfunction Home() {\n    return (\n        <div>\n            <DynamicComponent />\n        </div>\n    );\n}\n\u200B\nexport default Home;\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6837\u5F0F",children:"\u6837\u5F0F"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CSS \u548C\u6A21\u5757"}),"\uFF1A\u5168\u5C40 CSS \u6587\u4EF6\u53EA\u80FD\u5728 ",(0,t.jsx)(n.code,{children:"_app.js"})," \u6216 ",(0,t.jsx)(n.code,{children:"_app.tsx"})," \u4E2D\u5BFC\u5165\uFF0C\u4F46 CSS \u6A21\u5757\uFF08",(0,t.jsx)(n.code,{children:".module.css"}),"\uFF09\u53EF\u4EE5\u5728\u7EC4\u4EF6\u7684\u4EFB\u4F55\u5730\u65B9\u5BFC\u5165\uFF0C\u4EE5\u63D0\u4F9B\u4F5C\u7528\u57DF\u6837\u5F0F\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7279\u6B8A\u6587\u4EF6",children:"\u7279\u6B8A\u6587\u4EF6"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pages/_app.js"})}),"\uFF1A\u5141\u8BB8\u4F60\u7528\u5E03\u5C40\u548C\u5168\u5C40\u6837\u5F0F\u521D\u59CB\u5316\u9875\u9762\u3002\u8FD9\u4E2A\u6587\u4EF6\u7528\u4E8E\u5728\u9875\u9762\u95F4\u5BFC\u822A\u65F6\u4FDD\u6301\u72B6\u6001\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pages/_document.js"})}),"\uFF1A\u7528\u4E8E\u81EA\u5B9A\u4E49 HTML \u6587\u6863\u7ED3\u6784\uFF0C\u5E38\u7528\u4E8E\u589E\u5F3A\u5E94\u7528\u7684 ",(0,t.jsx)(n.code,{children:"<html>"})," \u548C ",(0,t.jsx)(n.code,{children:"<body>"})," \u6807\u7B7E\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pages/_error.js"})}),"\uFF1A\u7528\u4E8E\u8986\u76D6 Next.js \u63D0\u4F9B\u7684\u9ED8\u8BA4\u9519\u8BEF\u9875\u9762\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5982\u679C\u60A8\u559C\u6B22\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u4E0D\u59A8\u7ED9\u5B83\u70B9\u4E2A\u8D5E\u5E76\u6536\u85CF\uFF0C\u611F\u8C22\u60A8\u7684\u652F\u6301\uFF01"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(67294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}},24415:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/nextjs-\u5FEB\u901F\u4E0A\u624B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2024-04-18-Nextjs_\u5FEB\u901F\u4E0A\u624B.md","source":"@site/blog/\u524D\u7AEF/2024-04-18-Nextjs_\u5FEB\u901F\u4E0A\u624B.md","title":"Nextjs \u5FEB\u901F\u4E0A\u624B","description":"\u9605\u8BFB\u672C\u6587\u5E0C\u671B\u4F60\u6709\u4E00\u5B9A\u7684\u524D\u7AEF\u57FA\u7840\uFF0CNext.js \u4E86\u89E3\u4EE5\u4E0B\u51E0\u70B9\u5373\u53EF\u5FEB\u901F\u4E0A\u624B\uFF0C\u6709\u95EE\u9898\u7684\u8BDD\u5C31\u8FB9\u505A\u8FB9\u89E3\u51B3~","date":"2024-04-18T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":4.73,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"nextjs-\u5FEB\u901F\u4E0A\u624B","title":"Nextjs \u5FEB\u901F\u4E0A\u624B","authors":["sumingcheng"],"tags":["frontend"],"date":"2024-04-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u91CD\u5199 JS \u6570\u7EC4\u65B9\u6CD5","permalink":"/docs-hub/blog/\u91CD\u5199-js-\u6570\u7EC4\u65B9\u6CD5"},"nextItem":{"title":"Web \u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7F29\u5199\u548C\u5C3A\u5BF8","permalink":"/docs-hub/blog/web-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7F29\u5199\u548C\u5C3A\u5BF8"}}')}}]);