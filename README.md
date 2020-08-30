# vue-set-props

一个用于全局初始化 `Vue.js` 组件库中组件 `props` 默认值的插件。当你在使用一个组件库时需要为每一个相同组件的特定 `prop` 设置相同的值时，你或许需要该插件。

## Installation

``` bash
npm install vue-set-props -S
# or
yarn add vue-set-props -S
```

## Usage

``` js
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueSetProps from 'vue-set-props'

Vue.use(ElementUI)
// 必须在组件库注册后使用
Vue.use(VueSetProps, {
  library: ElementUI,
  setProps: {
    Input: {
      clearable: true
    },
    Button: {
      round: true
    }
  }
})

// ...
```

这里以 `Element` 组件库为例，通过上面的初始化设置，在使用 `Input` 组件时，默认是可以清空内容的，在使用 `Button` 组件时，按钮是以圆角显示的。当然，如果你在某处不需要初始化的属性，可以在使用该组时重新设置对应的 `prop`。

### Options

* 类型：`Object`
* 用法：

  `vue-set-props` 接受一个对象，里面必须包含两个属性：
  * `library`：组件库的引用。
  * `setProps`：一个对象，键是组件的引用，值是一个对象，包含需要设置的 `props` 名字和值。

### Heads up

* `vue-set-props` 内部没有做打包处理，保留了原始的 `process.env.NODE_ENV` 检测，你应当使用适当的打包工具配置来替换这些环境变量。
* 必须在组件库注册后使用，因为它依赖与 `Vue.js` 内部对于选项的合并处理。
* 请确保组件的引用正确，**不是组件名**。

## Local development

```
yarn i
yarn dev
```
