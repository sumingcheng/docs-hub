# 使用 Fetch API 和 ReadableStream API 来处理流式响应数据



 **Link:** [https://zhuanlan.zhihu.com/p/641942109]

## 使用 Fetch API 和 ReadableStream API 来处理流式响应数据  

在开发时，我们常常需要处理大量的数据，这些数据可能是文件，也可能是网络请求的响应。在这种情况下，使用流（stream）可以有效地处理这些数据，避免一次性加载所有数据，从而减少内存的使用并提高应用的性能。

在这篇文章中，我将介绍如何使用 Fetch API 和 ReadableStream API 来处理流式响应数据。我将会提供具体的代码示例来展示这些概念。

## Fetch API 和 ReadableStream  

Fetch API 是浏览器提供的一个现代的、强大的 HTTP 请求工具。与旧的 XMLHttpRequest API 相比，Fetch API 提供了更简洁的 API 和更强大的功能，包括流式响应。

当你使用 Fetch API 发出请求时，返回的 `Response` 对象包含一个 `body` 属性，这个属性是一个 `ReadableStream`。`ReadableStream` 表示一个可读的数据流，你可以使用它的 `getReader()` 方法来获取一个 reader，然后使用这个 reader 的 `read()` 方法来读取数据。

```
// 发出请求
fetch('https://example.com/data')
  .then(response => {
    // 获取 reader
    const reader = response.body.getReader();

    // 读取数据
    return reader.read().then(function process({ done, value }) {
      if (done) {
        console.log('Stream finished');
        return;
      }

      console.log('Received data chunk', value);

      // 读取下一段数据
      return reader.read().then(process);
    });
  })
  .catch(console.error);

```

在这个示例中，`reader.read()` 返回一个 Promise，这个 Promise 的 resolve 值是一个对象，包含两个属性：`value` 和 `done`。`value` 是读取到的数据块，`done` 是一个布尔值，如果为 `true` 则表示数据已经读取完毕。

这样，你就可以逐块地处理数据，而不需要一次性加载所有数据。个人觉得有点像迭代器。

## 处理文本数据  

上述示例展示了如何逐块地读取数据，但这些数据是二进制的，如果你想处理文本数据，需要对其进行解码。

以下是一个示例

```
// 创建一个新的 TextDecoder 实例
const decoder = new TextDecoder('utf-8');

// 发出请求
fetch('https://example.com/text')
  .then(response => {
    const reader = response.body.getReader();

    return reader.read().then(function process({ done, value }) {
      if (done) {
        console.log('Stream finished');
        return;
      }

      // 解码数据
      const text = decoder.decode(value);

      console.log('Received text chunk', text);

      return reader.read().then(process);
    });
  })
  .catch(console.error);


```

在这个示例中，我使用 `TextDecoder` 对象来解码数据。`TextDecoder` 是一个可以将二进制数据解码为字符串的工具，它的 `decode()` 方法可以接受一个 `ArrayBuffer` 或者 `TypedArray` 并返回一个字符串。

## 处理 JSON 数据  

有时，你可能需要处理的是 JSON 格式的数据。在这种情况下，你需要首先将所有数据读取完成，然后将其解码为字符串，最后解析为 JavaScript 对象。

```
fetch('https://example.com/data.json')
  .then(response => {
    const reader = response.body.getReader();
    const chunks = [];

    return reader.read().then(function process({ done, value }) {
      if (done) {
        // 将所有数据块连接起来，解码为字符串，然后解析为 JavaScript 对象
        const text = decoder.decode(new Uint8Array(chunks.flat()));
        const data = JSON.parse(text);

        console.log('Received JSON data', data);

        return;
      }

      // 存储数据块
      chunks.push(value);

      return reader.read().then(process);
    });
  })
  .catch(console.error);

```

在这个示例中，我使用一个数组来存储所有数据块，然后在数据读取完成后，将所有数据块连接起来，解码为字符串，最后解析为 JavaScript 对象。

