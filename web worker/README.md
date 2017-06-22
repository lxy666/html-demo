## 什么是 Web Worker？
当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。
web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。
## 浏览器支持
所有主流浏览器均支持 web worker，除了 Internet Explorer。 在这个实例中，我们创建了计数脚本。该脚本存储于 "demo_workers.js" 文件中。
