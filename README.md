# html5-demo
## 拖放
>在此之前，实现拖拽操作都是开发人员自定义逻辑实现的，但是HTML5提供了拖拽API ，使得拖拽操作的实现变得简单。

![fish.gif](http://upload-images.jianshu.io/upload_images/3229842-be565537afb2dae0.gif?imageMogr2/auto-orient/strip)
### 设置元素为可拖放模式
首先，为了使元素可拖动，把`` draggable`` 属性设置为 ``true ``：
```html
<img draggable="true" />
```
### 被拖放物体 - ondragstart
在上面的例子中，``ondragstart ``属性调用了一个函数，``drag(event)``，它规定了被拖动的数据。
``dataTransfer.setData()`` 方法设置被拖数据的数据类型和值：
```
function drag(ev)
{
ev.dataTransfer.setData("text",ev.target.id);
}
```
在这个例子中，数据类型是 ``"text"``，值是可拖动元素的 id为`` ("img1")``。

### 放到何处 - ondragover
``ondragover ``事件规定在何处放置被拖动的数据。
默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
这要通过调用 ``ondragover`` 事件的 ``event.preventDefault()`` 方法：
```
event.preventDefault();
```

### 进行放置 - ondrop
当放置被拖数据时，会发生 ``drop`` 事件。
在上面的例子中，``ondrop`` 属性调用了一个函数，``drop(event)：``
```javascript
function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}
```

##### 代码解析：
* 调用 ``preventDefault() ``来避免浏览器对数据的默认处理（``drop`` 事件的默认行为是以链接形式打开）
* 通过 ``dataTransfer.getData("text") ``方法获得被拖的数据。该方法将返回在 ``setData()`` 方法中设置为相同类型的任何数据。
* 被拖数据是被拖元素的`` id ("img1")``
* 把被拖元素追加到目标元素中

## 颜色选择器
![image](https://ws1.sinaimg.cn/large/006tKfTcly1fgko0cp8qbj30hu0pst9d.jpg)

## 时钟
![image](https://ws1.sinaimg.cn/large/006tKfTcly1fgko2gxqppj30l60me3zg.jpg)

## 打字机效果
![image](https://ws4.sinaimg.cn/large/006tKfTcly1fgko6xg3c7g30hs08w775.gif)

