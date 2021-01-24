import { isPlainObject, toRawType, warn } from './util'

let hasProp = false

function findPropInMixins(mixins, prop, propValue) {
  if (mixins) {
    for (let i = 0, len = mixins.length; i < len; i++) {
      if (hasProp) break
      setProp(mixins[i], prop, propValue)
    }
  }
}

function setProp(component, prop, propValue) {
  const { props, mixins } = component
  if (props && props[prop]) {
    // find in props
    props[prop].default = propValue
    hasProp = true
  } else {
    // find in mixins
    findPropInMixins(mixins, prop, propValue)
  }
}

function vueSetProps(Vue, opts) {
  if (process.env.NODE_ENV !== 'production' && !isPlainObject(opts)) {
    warn(`The options expected an Object, but got ${toRawType(opts)}.`)
    return
  }

  const { components } = Vue.options
  Object.keys(opts).forEach(name => {
    const component = components[name]
    if (component) {
      const setProps = opts[name]
      if (process.env.NODE_ENV !== 'production' && !isPlainObject(setProps)) {
        warn(
          `The ${name} component set props options expected an Object, ` +
          `but got ${toRawType(setProps)}.`
        )
        return
      }

      Object.keys(setProps).forEach(prop => {
        setProp(component.options, prop, setProps[prop])
        if (process.env.NODE_ENV !== 'production' && !hasProp) {
          warn(`Can not find prop "${prop}" in the ${name} component.`)
        }
        hasProp = false
      })
    } else if (process.env.NODE_ENV !== 'production') {
      warn(`Can not find ${name} component in global components.`)
    }
  })
}

export default vueSetProps
