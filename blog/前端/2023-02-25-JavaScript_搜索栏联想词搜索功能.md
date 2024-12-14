---
slug: javascript-搜索栏联想词搜索功能
title: JavaScript 搜索栏联想词搜索功能
authors: [sumingcheng]
tags: [frontend]
date: 2023-02-25
---

# JavaScript 搜索栏联想词搜索功能



 **Link:** [https://zhuanlan.zhihu.com/p/609415624]



前端实现的联想词，如果是输入词请求后端可以直接传关键字给后端

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div>
    <input type="text" id="search" placeholder="请输入搜索关键词">
    <ul id="suggestion-list"></ul>
  </div>
  <script>
    const searchInput = document.getElementById('search');
    const suggestionList = document.getElementById('suggestion-list');
    let suggestionData = []; // 保存联想词搜索结果的数组

    // 监听搜索框的输入事件
    searchInput.addEventListener('input', debounce(handleInput, 100));

    // 处理搜索框输入事件
    function handleInput() {
      const keyword = searchInput.value.trim(); // 获取搜索关键词
      if (keyword === '') {
        // 如果搜索关键词为空，则清空联想词搜索结果
        suggestionData = [];
        renderSuggestionList();
        return;
      }

      // 发送 Ajax 请求获取联想词搜索结果
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
          suggestionData = data.map((e) => e.title).filter((n) => n.includes(keyword));
            // 将请求结果保存到 suggestionData 数组中
          renderSuggestionList(); // 渲染联想词搜索结果列表
        })
        .catch(error => {
          console.error(error);
        });
    }

    // 渲染联想词搜索结果列表
    function renderSuggestionList() {
      suggestionList.innerHTML = ''; // 先清空列表
      suggestionData.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        suggestionList.appendChild(li);
      });
    }

    // debounce 函数，用于防抖
    function debounce(fn, delay) {
      let timer = null;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
      };
    }

  </script>
</body>

</html>
```