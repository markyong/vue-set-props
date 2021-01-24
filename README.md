# vue-set-props

A Vue.js plugin that can be used to set global component's props in your project. You might need this plugin when you have to set same props in each of same global components.

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
// should be used after the component library registration
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

Here we used `Element` library (you can also use any global components), through the above initialization settings, the `ElInput` component can clear contents by default and the `ElButton` component is displayed with round when you use them. Of course, you can reset corresponding `prop` when you use the component if you don't need to initialize `props`.

### Options

* Type: `Object`
* Usage:

  `vue-set-props` accepts an object, the key is the name of the global component, and the value is an object containing the name and value of `props` you need to set.

### Heads up

* `vue-set-props` should be used after component library or global components registration because it will look for these components globally registered on `Vue.js` and depends on normalized props.
* Make sure the name of the component to be set is correct.

## Local development

``` bash
yarn install
yarn dev
```
