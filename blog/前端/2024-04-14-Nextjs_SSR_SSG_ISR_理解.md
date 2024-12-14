---
slug: nextjs-ssr-ssg-isr-理解
title: Nextjs SSR SSG ISR 理解
authors: [sumingcheng]
tags: [frontend]
date: 2024-04-14
---

# Next.js SSR SSG ISR 理解



 **Link:** [https://zhuanlan.zhihu.com/p/692439095]



Next.js 提供了几种预渲染技术，包括服务器端渲染（SSR）、静态站点生成（SSG）和增量静态再生（ISR）。这些技术是现代 web 开发中提高性能、SEO 和用户体验的关键。

### 服务器端渲染（SSR） - Server Side Rendering  
### 定义  

SSR 是一种预渲染技术，其中页面的 HTML 是每次请求时在服务器上生成的。这意味着每当用户请求页面时，服务器都会实时生成 HTML，包括所有预先获取的数据。

### 说明  

服务器端渲染特别适合于内容经常变动的应用。由于内容在服务器上即时生成，因此用户总是看到最新的页面数据。这种方式对搜索引擎优化（SEO）也非常有利，因为搜索引擎抓取器抓取的是已经预渲染好的页面。

### 示例  

在 Next.js 中使用 `getServerSideProps` 函数来获取数据，并在请求时实时渲染页面。

```
// pages/index.js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
​
  return { props: { data } };
}
​
function HomePage({ data }) {
  return <div>Welcome to the page! Data: {data.content}</div>;
}
​
export default HomePage;

```
### 应用场景  

* 实时新闻网站
* 股票市场数据页面
* 社交媒体的动态更新页面

### 静态站点生成（SSG） - Static Site Generation  
### 定义  

SSG 是指在构建时生成所有必需页面的 HTML 的过程。构建完成后，每个页面都是一个静态文件，可以直接从 CDN 服务。

### 说明  

静态站点生成适用于内容变化不频繁的页面，这种方式可以极大地提高网站的加载速度，因为静态文件可以从最接近用户的服务器快速提供。

### 示例  

使用 `getStaticProps` 来预先获取数据，并在构建时生成静态页面。

```
// pages/about.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/info');
  const info = await res.json();
​
  return { props: { info } };
}
​
function AboutPage({ info }) {
  return <div>About us: {info.description}</div>;
}
​
export default AboutPage;

```
### 应用场景  

* 博客
* 文档网站
* 企业营销网站

### 增量静态再生（ISR） - Incremental Static Regeneration  
### 定义  

ISR 是 Next.js 特有的一种混合渲染模式，它允许开发者为每个页面设置一个“再生”时间，用于定期更新静态内容。

### 说明  

这种方法结合了 SSG 的性能优势和 SSR 的灵活性，页面在用户访问时不会立即生成，但可以在背景中定期更新，以确保内容的新鲜度。

### 示例  

在 `getStaticProps` 中使用 `revalidate` 选项，来设定页面的再生时间。

```
// pages/products.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
​
  return {
    props: { products },
    revalidate: 3600, // 页面每小时重新生成一次
  };
}
​
function ProductsPage({ products }) {
  return <div>{products.map(product => <div key={product.id}>{product.name}</div>)}</div>;
}
​
export default ProductsPage;

```
### 应用场景  

* 电子商务网站上的产品列表
* 需要定期更新但不需要秒级更新的新闻文章

### 对比  

| 特性 / 技术 | SSR | SSG | ISR |
| --- | --- | --- | --- |
| 生成时机 | 每次请求时 | 构建时 | 构建时，定期再生 |
| 内容更新 | 实时 | 构建后不更新 | 定期更新 |
| 性能 | 中等，依赖服务器性能 | 极高，直接从 CDN 服务 | 高，静态文件，定期更新 |
| 适用场景 | 动态内容网站 | 静态内容网站 | 静态和动态混合内容网站 |
| SEO 优势 | 高 | 高 | 高 |
| 开发复杂度 | 高 | 低 | 中 |

这三种技术各有优势和特定的适用场景，选择合适的渲染方法可以极大提升应用的性能和用户体验。

**如果您喜欢这篇文章，不妨给它点个赞并收藏，感谢您的支持！**