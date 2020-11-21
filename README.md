# vue-set-props

一个用于全局初始化 `Vue.js` 项目中全局组件的 `props` 默认值的插件。当你需要为每个相同的全局组件的特定 `prop` 设置相同的值时，你或许需要该插件。

## Installation

``` bash
npm install vue-set-props -S
# or
yarn add vue-set-props
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
  ElInput: {
    clearable: true
  },
  ElButton: {
    round: true
  }
})

// ...
```

这里以 `Element` 组件库为例，通过上面的初始化设置，在使用 `Input` 组件时，默认是可以清空内容的，在使用 `Button` 组件时，按钮是以圆角显示的。当然，如果你在某处不需要初始化的属性，可以在使用该组时重新设置对应的 `prop`。

### Options

* 类型：`Object`
* 用法：

  `vue-set-props` 接受一个对象。键是全局注册组件时的名字，值是一个对象，包含需要设置的 `props` 名字和值。

### Heads up

* 必须在组件库或者组件注册后使用，因为它会寻找 `Vue.js` 上注册的全局组件以及依赖于其内部对于选项的合并处理。
* 请确保要设置的组件名字正确。

## Local development

```
yarn install
yarn dev
```
