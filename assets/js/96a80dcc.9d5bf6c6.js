"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["7025"],{96063:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return x},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return o}});var d=t(83811),r=t(85893),i=t(50065);let s={slug:"axios-\u4E0B\u8F7D",title:"Axios \u4E0B\u8F7D",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-09-18T00:00:00.000Z")},c="Axios \u4E0B\u8F7D",l={authorsImageUrls:[void 0]},o=[];function h(e){let n={code:"code",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4EE5",(0,r.jsx)(n.code,{children:"get"}),"\u8BF7\u6C42\uFF0C\u4E0B\u8F7D\u4E3A\u4F8B\u3002\u4E00\u822C\u9879\u76EE\u4E2D\u7684",(0,r.jsx)(n.code,{children:"axios"}),"\u90FD\u662F\u7ECF\u8FC7\u5C01\u88C5\u7684\uFF0C\u6240\u4EE5\u4F60\u9700\u8981\u5173\u6CE8\u6709\u6CA1\u6709\u6DFB\u52A0",(0,r.jsx)(n.code,{children:"responseType"}),"\u8FD9\u662F\u5173\u952E\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export const exportQuotation = (id: string | number) => {\n  return request({\n    responseType: 'blob', // \u4E8C\u8FDB\u5236\u6D41\n    url: '/dcomsp-sales/excelExport/v1/export',\n    method: 'get',\n    params: {\n      id,\n    },\n  })\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u901A\u7528\u4E0B\u8F7D\u51FD\u6570"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/**\n * \u4E0B\u8F7D\u6587\u4EF6\n * @param fileData\n * @param fileType\n * @param fileName\n */\nexport function downloadFile(\n  fileData: any,\n  fileType: string,\n  fileName: string\n): boolean {\n  let blob: Blob\n  let success = true // \u5047\u8BBE\u521D\u59CB\u72B6\u6001\u4E3A\u6210\u529F\n\n  // \u521B\u5EFA Blob \u5BF9\u8C61\n  try {\n    if (fileData instanceof Blob) {\n      blob = fileData\n    } else {\n      blob = new Blob([fileData], { type: fileType })\n    }\n  } catch (error) {\n    console.error('Error creating the Blob:', error)\n    return false\n  }\n\n  const a = document.createElement('a')\n  const url = window.URL.createObjectURL(blob)\n\n  // \u4E0B\u8F7D\u540E\u91CA\u653EURL\u8D44\u6E90\u548C\u6E05\u7406\u903B\u8F91\n  const cleanup = () => {\n    window.URL.revokeObjectURL(url)\n    document.body.removeChild(a)\n  }\n\n  try {\n    // \u521B\u5EFA\u4E00\u4E2A\u9690\u85CF\u7684\u53EF\u70B9\u51FB\u7684a\u6807\u7B7E\uFF0C\u7136\u540E\u6A21\u62DF\u70B9\u51FB\u8FDB\u884C\u4E0B\u8F7D\n    a.href = url\n    a.download = fileName\n    a.style.display = 'none'\n    document.body.appendChild(a)\n    a.click()\n  } catch (error) {\n    console.error('Error triggering the download:', error)\n    success = false // \u4E0B\u8F7D\u5931\u8D25\u65F6\uFF0C\u8BBE\u7F6E success \u4E3A false\n  } finally {\n    // \u4F7F\u7528setTimeout\u786E\u4FDD\u6E05\u7406\u903B\u8F91\u5728\u4E0B\u8F7D\u89E6\u53D1\u540E\u7ACB\u5373\u6267\u884C\n    setTimeout(cleanup, 0)\n  }\n\n  return success // \u8FD4\u56DE\u4E0B\u8F7D\u7684\u72B6\u6001\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u4F7F\u7528\uFF0C\u901A\u8FC7",(0,r.jsx)(n.code,{children:"id"}),"\u8FDB\u884C\u4E0B\u8F7D"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const download = async (id: string | number) => {\n  // exportQuotation \u662F\u6211\u7684\u63A5\u53E3\uFF0C\u62FF\u5230\u6D41\u6570\u636E\u4F20\u9012\u7ED9\u4E0B\u8F7D\u51FD\u6570\n  const exportData = await exportQuotation(id)\n  // \u521B\u5EFA\u4E0B\u8F7D\n  const res = downloadFile(\n    exportData.data,\n    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n    `${id}-${Date.now()}.xlsx`\n  )\n  if (res) {\n    ElMessage.success('\u4E0B\u8F7D\u6210\u529F')\n  } else {\n    ElMessage.error('\u4E0B\u8F7D\u5931\u8D25')\n  }\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5E38\u7528\u4E0B\u8F7D\u683C\u5F0F"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540E\u7F00"}),(0,r.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(n.th,{children:"\u683C\u5F0F"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aac"}),(0,r.jsx)(n.td,{children:"AAC audio"}),(0,r.jsx)(n.td,{children:"audio/aac"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".abw"}),(0,r.jsx)(n.td,{children:"AbiWord document"}),(0,r.jsx)(n.td,{children:"application/x-abiword"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".arc"}),(0,r.jsx)(n.td,{children:"Archive document (multiple files embedded)"}),(0,r.jsx)(n.td,{children:"application/x-freearc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".avi"}),(0,r.jsx)(n.td,{children:"AVI: Audio Video Interleave"}),(0,r.jsx)(n.td,{children:"video/x-msvideo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".azw"}),(0,r.jsx)(n.td,{children:"Amazon Kindle eBook format"}),(0,r.jsx)(n.td,{children:"application/vnd.amazon.ebook"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".bin"}),(0,r.jsx)(n.td,{children:"Any kind of binary data"}),(0,r.jsx)(n.td,{children:"application/octet-stream"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".bmp"}),(0,r.jsx)(n.td,{children:"Windows OS/2 Bitmap Graphics"}),(0,r.jsx)(n.td,{children:"image/bmp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".bz"}),(0,r.jsx)(n.td,{children:"BZip archive"}),(0,r.jsx)(n.td,{children:"application/x-bzip"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".bz2"}),(0,r.jsx)(n.td,{children:"BZip2 archive"}),(0,r.jsx)(n.td,{children:"application/x-bzip2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".csh"}),(0,r.jsx)(n.td,{children:"C-Shell script"}),(0,r.jsx)(n.td,{children:"application/x-csh"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".css"}),(0,r.jsx)(n.td,{children:"Cascading Style Sheets (CSS)"}),(0,r.jsx)(n.td,{children:"text/css"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".csv"}),(0,r.jsx)(n.td,{children:"Comma-separated values (CSV)"}),(0,r.jsx)(n.td,{children:"text/csv"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".doc"}),(0,r.jsx)(n.td,{children:"Microsoft Word"}),(0,r.jsx)(n.td,{children:"application/msword"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".docx"}),(0,r.jsx)(n.td,{children:"Microsoft Word (OpenXML)"}),(0,r.jsx)(n.td,{children:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".eot"}),(0,r.jsx)(n.td,{children:"MS Embedded OpenType fonts"}),(0,r.jsx)(n.td,{children:"application/vnd.ms-fontobject"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".epub"}),(0,r.jsx)(n.td,{children:"Electronic publication (EPUB)"}),(0,r.jsx)(n.td,{children:"application/epub+zip"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".gif"}),(0,r.jsx)(n.td,{children:"Graphics Interchange Format (GIF)"}),(0,r.jsx)(n.td,{children:"image/gif"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".htm .html"}),(0,r.jsx)(n.td,{children:"HyperText Markup Language (HTML)"}),(0,r.jsx)(n.td,{children:"text/html"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ico"}),(0,r.jsx)(n.td,{children:"Icon format"}),(0,r.jsx)(n.td,{children:"image/vnd.microsoft.icon"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ics"}),(0,r.jsx)(n.td,{children:"iCalendar format"}),(0,r.jsx)(n.td,{children:"text/calendar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".jar"}),(0,r.jsx)(n.td,{children:"Java Archive (JAR)"}),(0,r.jsx)(n.td,{children:"application/java-archive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".jpeg.jpg"}),(0,r.jsx)(n.td,{children:"JPEG images"}),(0,r.jsx)(n.td,{children:"image/jpeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".js"}),(0,r.jsx)(n.td,{children:"JavaScript"}),(0,r.jsx)(n.td,{children:"text/javascript"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".json"}),(0,r.jsx)(n.td,{children:"JSON format"}),(0,r.jsx)(n.td,{children:"application/json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".jsonld"}),(0,r.jsx)(n.td,{children:"JSON-LD format"}),(0,r.jsx)(n.td,{children:"application/ld+json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".mid.midi"}),(0,r.jsx)(n.td,{children:"Musical Instrument Digital Interface (MIDI)"}),(0,r.jsx)(n.td,{children:"audio/midi audio/x-midi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".mjs"}),(0,r.jsx)(n.td,{children:"JavaScript module"}),(0,r.jsx)(n.td,{children:"text/javascript"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".mp3"}),(0,r.jsx)(n.td,{children:"MP3 audio"}),(0,r.jsx)(n.td,{children:"audio/mpeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".mpeg"}),(0,r.jsx)(n.td,{children:"MPEG Video"}),(0,r.jsx)(n.td,{children:"video/mpeg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".mpkg"}),(0,r.jsx)(n.td,{children:"Apple Installer Package"}),(0,r.jsx)(n.td,{children:"application/vnd.apple.installer+xml"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".odp"}),(0,r.jsx)(n.td,{children:"OpenDocument presentation document"}),(0,r.jsx)(n.td,{children:"application/vnd.oasis.opendocument.presentation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ods"}),(0,r.jsx)(n.td,{children:"OpenDocument spreadsheet document"}),(0,r.jsx)(n.td,{children:"application/vnd.oasis.opendocument.spreadsheet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".odt"}),(0,r.jsx)(n.td,{children:"OpenDocument text document"}),(0,r.jsx)(n.td,{children:"application/vnd.oasis.opendocument.text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".oga"}),(0,r.jsx)(n.td,{children:"OGG audio"}),(0,r.jsx)(n.td,{children:"audio/ogg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ogv"}),(0,r.jsx)(n.td,{children:"OGG video"}),(0,r.jsx)(n.td,{children:"video/ogg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ogx"}),(0,r.jsx)(n.td,{children:"OGG"}),(0,r.jsx)(n.td,{children:"application/ogg"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".otf"}),(0,r.jsx)(n.td,{children:"OpenType font"}),(0,r.jsx)(n.td,{children:"font/otf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".png"}),(0,r.jsx)(n.td,{children:"Portable Network Graphics"}),(0,r.jsx)(n.td,{children:"image/png"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".pdf"}),(0,r.jsx)(n.td,{children:"Adobe Portable Document Format (PDF)"}),(0,r.jsx)(n.td,{children:"application/pdf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ppt"}),(0,r.jsx)(n.td,{children:"Microsoft PowerPoint"}),(0,r.jsx)(n.td,{children:"application/vnd.ms-powerpoint"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".pptx"}),(0,r.jsx)(n.td,{children:"Microsoft PowerPoint (OpenXML)"}),(0,r.jsx)(n.td,{children:"application/vnd.openxmlformats-officedocument.presentationml.presentation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".rar"}),(0,r.jsx)(n.td,{children:"RAR archive"}),(0,r.jsx)(n.td,{children:"application/x-rar-compressed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".rtf"}),(0,r.jsx)(n.td,{children:"Rich Text Format (RTF)"}),(0,r.jsx)(n.td,{children:"application/rtf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".sh"}),(0,r.jsx)(n.td,{children:"Bourne shell script"}),(0,r.jsx)(n.td,{children:"application/x-sh"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".svg"}),(0,r.jsx)(n.td,{children:"Scalable Vector Graphics (SVG)"}),(0,r.jsx)(n.td,{children:"image/svg+xml"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".swf"}),(0,r.jsx)(n.td,{children:"Small web format (SWF) or Adobe Flash document"}),(0,r.jsx)(n.td,{children:"application/x-shockwave-flash"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".tar"}),(0,r.jsx)(n.td,{children:"Tape Archive (TAR)"}),(0,r.jsx)(n.td,{children:"application/x-tar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".tif .tiff"}),(0,r.jsx)(n.td,{children:"Tagged Image File Format (TIFF)"}),(0,r.jsx)(n.td,{children:"image/tiff"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".ttf"}),(0,r.jsx)(n.td,{children:"TrueType Font"}),(0,r.jsx)(n.td,{children:"font/ttf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".txt"}),(0,r.jsx)(n.td,{children:"Text, (generally ASCII or ISO 8859-n)"}),(0,r.jsx)(n.td,{children:"text/plain"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".vsd"}),(0,r.jsx)(n.td,{children:"Microsoft Visio"}),(0,r.jsx)(n.td,{children:"application/vnd.visio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".wav"}),(0,r.jsx)(n.td,{children:"Waveform Audio Format"}),(0,r.jsx)(n.td,{children:"audio/wav"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".weba"}),(0,r.jsx)(n.td,{children:"WEBM audio"}),(0,r.jsx)(n.td,{children:"audio/webm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".webm"}),(0,r.jsx)(n.td,{children:"WEBM video"}),(0,r.jsx)(n.td,{children:"video/webm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".webp"}),(0,r.jsx)(n.td,{children:"WEBP image"}),(0,r.jsx)(n.td,{children:"image/webp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".woff"}),(0,r.jsx)(n.td,{children:"Web Open Font Format (WOFF)"}),(0,r.jsx)(n.td,{children:"font/woff"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".woff2"}),(0,r.jsx)(n.td,{children:"Web Open Font Format (WOFF)"}),(0,r.jsx)(n.td,{children:"font/woff2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".xhtml"}),(0,r.jsx)(n.td,{children:"XHTML"}),(0,r.jsx)(n.td,{children:"application/xhtml+xml"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".xls"}),(0,r.jsx)(n.td,{children:"Microsoft Excel"}),(0,r.jsx)(n.td,{children:"application/vnd.ms-excel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".xlsx"}),(0,r.jsx)(n.td,{children:"Microsoft Excel (OpenXML)"}),(0,r.jsx)(n.td,{children:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".xml"}),(0,r.jsx)(n.td,{children:"XML"}),(0,r.jsx)(n.td,{children:"application/xml \u4EE3\u7801\u5BF9\u666E\u901A\u7528\u6237\u6765\u8BF4\u4E0D\u53EF\u8BFB (RFC 3023, section 3)text/xml \u4EE3\u7801\u5BF9\u666E\u901A\u7528\u6237\u6765\u8BF4\u53EF\u8BFB (RFC 3023, section 3)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".xul"}),(0,r.jsx)(n.td,{children:"XUL"}),(0,r.jsx)(n.td,{children:"application/vnd.mozilla.xul+xml"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".zip"}),(0,r.jsx)(n.td,{children:"ZIP archive"}),(0,r.jsx)(n.td,{children:"application/zip"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".3gp"}),(0,r.jsx)(n.td,{children:"3GPP audio/video container"}),(0,r.jsx)(n.td,{children:"video/3gppaudio/3gpp\uFF08\u82E5\u4E0D\u542B\u89C6\u9891\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".3g2"}),(0,r.jsx)(n.td,{children:"3GPP2 audio/video container"}),(0,r.jsx)(n.td,{children:"video/3gpp2audio/3gpp2\uFF08\u82E5\u4E0D\u542B\u89C6\u9891\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".7z"}),(0,r.jsx)(n.td,{children:"7-zip archive"}),(0,r.jsx)(n.td,{children:"application/x-7z-compressed"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var d=t(67294);let r={},i=d.createContext(r);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}},83811:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/axios-\u4E0B\u8F7D","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-09-18-Axios_\u4E0B\u8F7D.md","source":"@site/blog/\u524D\u7AEF/2023-09-18-Axios_\u4E0B\u8F7D.md","title":"Axios \u4E0B\u8F7D","description":"\u4EE5get\u8BF7\u6C42\uFF0C\u4E0B\u8F7D\u4E3A\u4F8B\u3002\u4E00\u822C\u9879\u76EE\u4E2D\u7684axios\u90FD\u662F\u7ECF\u8FC7\u5C01\u88C5\u7684\uFF0C\u6240\u4EE5\u4F60\u9700\u8981\u5173\u6CE8\u6709\u6CA1\u6709\u6DFB\u52A0responseType\u8FD9\u662F\u5173\u952E\u3002","date":"2023-09-18T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":3.316666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"axios-\u4E0B\u8F7D","title":"Axios \u4E0B\u8F7D","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-09-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u8F6F\u8FDE\u63A5\u4E0E\u786C\u8FDE\u63A5\u7684\u533A\u522B","permalink":"/docs-hub/blog/\u8F6F\u8FDE\u63A5\u4E0E\u786C\u8FDE\u63A5\u7684\u533A\u522B"},"nextItem":{"title":"JavaScript \u4E2D\u7684 super \u5173\u952E\u5B57\u89E3\u6790","permalink":"/docs-hub/blog/javascript-\u4E2D\u7684-super-\u5173\u952E\u5B57\u89E3\u6790"}}')}}]);