# 前端面试过程中的一些知识点总结：

`（以下序号对应文件夹排序）` 

前端面试复习导图![image](https://user-images.githubusercontent.com/21302802/117795963-397dc080-b281-11eb-9fe2-aeab6d64519a.png)


## 1、vue练习

vue中文文档：https://cn.vuejs.org/v2/guide/

## 2、vue源码研究

Vue.js 技术揭秘： https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/


## Vue2 知识经典
<details >
  <summary><b>自定义事件</b></summary>
   <p>利用props可以实现父子通信，通过自定义事件我们可以实现子父通信，在子组件中通过$emit()派发事件并传递参数，在父级组件通过监听事件</p>
  <ul>
   <li>
      <img src="https://user-images.githubusercontent.com/21302802/128300133-47006d3c-3483-4e89-9756-21e550760b38.png" alt="Vue2 VS Vue3" style="max-width:100%;" />      
     </li>
  </ul>
</details>


相关参考文献：
Object.defineProperty：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

相关博客：https://blog.csdn.net/github_37360787/article/details/114362025

### a.自定义指令

demo: https://github.com/fuyz/Vue.js-explore/tree/master/2-vue-soundCode/directive

官网文档： https://cn.vuejs.org/v2/guide/custom-directive.html

### b、定义过滤器
官网文档：https://cn.vuejs.org/v2/guide/filters.html

## 4.js执行机制

### 宏任务和微任务
参考文章：https://blog.csdn.net/github_37360787/article/details/86610431


### web worker： 

Worker 接口是 Web Workers API 的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。

要创建一个 Worker ，只须调用 Worker(URL) 构造函数，函数参数 `URL` 为指定的脚本。

##### Web_Workers_API： https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API
参考文献：https://developer.mozilla.org/zh-CN/docs/Web/API/Worker

## 5、防抖节流重绘重排(回流)
参考文章：https://blog.csdn.net/github_37360787/article/details/115013806

## 6、defer、async异步加载延迟脚本

https://github.com/fuyz/Vue.js-explore/tree/master/6-defer_async

DOMContentLoaded事件:https://developer.mozilla.org/zh-CN/docs/Web/API/Window/DOMContentLoaded_event

> 总结
   
  ``` 
  asnyc特点：
    1、延迟加载；
    2、不确定顺序执行
    3、在DOMContentLoaded触发之前，主线程同步脚本执行完之后执行 

  defer特点：
    1、延迟加载；
    2、有序执行
    3、在DOMContentLoaded触发之前，主线程同步脚本执行完之后执行 

  扩展：
  * DOMContentLoaded的触发：实际是document.readyState为complete之前，
    也就是说document.readyState为loading状态下才绑定才能监听得到该方法
  
      if (document.readyState === 'loading') {  // 此时加载尚未完成，DOMContentLoaded事件监听才有效
          document.addEventListener('DOMContentLoaded', doSomething);
      } else {  // 此时`DOMContentLoaded` 已经被触发
          ....
      }
   
   * 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载;

   * Note:同步 JavaScript 会暂停 DOM 的解析。同步js文件会延迟其加载

   * window.onload: 网页上所有资源（图片，音频，视频等）被加载后才会触发load事件
    
```
## 7、js链式操作

https://github.com/fuyz/Vue.js-explore/tree/master/7-js%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C

## 8、正则表达式replace

参考文献： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace

## 9、自定义js插件兼容AMD和CMD语法规范

参考文献：https://blog.csdn.net/github_37360787/article/details/115339364?spm=1001.2014.3001.5501

## 10、跨域请求总结

jsonp、代理、XHR2

参考博客： https://blog.csdn.net/github_37360787/article/details/54834789

## 11、HTML、css知识点归纳总结

- BFC(块格式化上下文)

## 12、公共方法/lodash包

#### lodash包地址：https://www.npmjs.com/package/lodash

```
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

```
eg:
- debounce/throttle (防抖节流)
- isArray、isObject、isNull
```

------------------------------------------------------------------------------------
## 拓展

### 浏览器缓存机制
参考文献：
   - https://juejin.cn/post/6844903497473720333
   - https://segmentfault.com/a/1190000008377508?utm_source=sf-related  
      
### typescript
   - typescript教程：https://www.runoob.com/typescript/ts-install.html   
   - 参考文献：
      - https://www.tslang.cn/docs/home.html
      - https://www.typescriptlang.org/

### ip地址查询：（github.com）
   - https://github.com.ipaddress.com/

