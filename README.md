node-lei-cycle
==============

循环返回指定数组中的一个元素

```javascript
var createCycle = require('lei-cycle');

var c = createCycle(['h', 'e', 'l', 'l', 'o']);
// 也可以这样：  createCycle('h', 'e', 'l', 'l', 'o')
for (var i = 0; i < 10; i++) {
  console.log(c());
}
```

输出结果：

```
h
e
l
l
o
h
e
l
l
o
```
